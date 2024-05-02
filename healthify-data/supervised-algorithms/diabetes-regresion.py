# 03

# Importar librerías necesarias
import pandas as pd
from sklearn.linear_model import LinearRegression, LogisticRegression
from sklearn.preprocessing import PolynomialFeatures, StandardScaler
import matplotlib.pyplot as plt
import numpy as np
import sklearn.metrics as accuracy_score
from sklearn.model_selection import train_test_split

# Cargar el conjunto de datos de diabetes
path_to_file = "C:/workspace/healthify/healthify-data/etl/load/diabetes.csv"
diabetes_data = pd.read_csv(path_to_file)



# Regresión Lineal
reg_l = LinearRegression()
reg_l.fit(diabetes_data[["Glucose"]], diabetes_data["Outcome"])
diabetes_data["Modelo_Lineal"] = reg_l.predict(diabetes_data[["Glucose"]])

# Gráfica del modelo lineal
plt.scatter(diabetes_data["Glucose"], diabetes_data["Outcome"], color="blue")
plt.plot(diabetes_data["Glucose"], diabetes_data["Modelo_Lineal"], color="red")
plt.title("Regresión Lineal para predecir diabetes")
plt.xlabel("Nivel de glucosa en sangre")
plt.ylabel("Resultado de diabetes")
plt.show()

print("Ecuación de la recta (Regresión Lineal): Outcome =", reg_l.coef_, "* Glucose +", reg_l.intercept_)

# Coeficiente de determinación (R²) para Regresión Lineal
linear_r2 = reg_l.score(diabetes_data[["Glucose"]], diabetes_data["Outcome"])
print("Coeficiente de determinación (R²) para Regresión Lineal:", linear_r2)



# Regresión Polinomial
poly_reg = PolynomialFeatures(degree=2) 
x_poly = poly_reg.fit_transform(diabetes_data[["Glucose"]])
reg_p = LinearRegression()
reg_p.fit(x_poly, diabetes_data["Outcome"])
diabetes_data["Modelo_Polinomial"] = reg_p.predict(x_poly)

# Gráfica del modelo polinomial
plt.scatter(diabetes_data["Glucose"], diabetes_data["Outcome"], color="blue")
plt.plot(diabetes_data["Glucose"], diabetes_data["Modelo_Polinomial"], color="red")
plt.title("Regresión Polinomial para predecir diabetes")
plt.xlabel("Nivel de glucosa en sangre")
plt.ylabel("Resultado de diabetes")
plt.show()

print("Ecuación del polinomio (Regresión Polinomial): Outcome =", reg_p.coef_[2], "* Glucose^2 +", reg_p.coef_[1], "* Glucose +", reg_p.coef_[0] + reg_p.intercept_)

# Coeficiente de determinación (R²) para Regresión Polinomial
poly_r2 = reg_p.score(x_poly, diabetes_data["Outcome"])
print("Coeficiente de determinación (R²) para Regresión Polinomial:", poly_r2)





# Regresión Logística
x_logistic = diabetes_data[["Glucose", "BMI"]].values
y_logistic = diabetes_data["Outcome"].values

# Escalamiento de valores
scaler = StandardScaler()
x_logistic_scaled = scaler.fit_transform(x_logistic)

# Generación del modelo
log_reg = LogisticRegression()
log_reg.fit(x_logistic_scaled, y_logistic)
diabetes_data["Modelo_Logistico"] = log_reg.predict(x_logistic_scaled)

# Predicciones del modelo logístico
y_pred_logistic = log_reg.predict(x_logistic_scaled)

# Gráfica del modelo logístico
plt.scatter(diabetes_data["Glucose"], diabetes_data["BMI"], c=diabetes_data["Outcome"], cmap="coolwarm")
plt.xlabel("Glucose")
plt.ylabel("BMI")
plt.title("Regresión Logística")
x_values = np.linspace(-3, 3, 100)
y_values = np.linspace(-3, 3, 100)
x_mesh, y_mesh = np.meshgrid(x_values, y_values)
z_mesh = log_reg.predict(np.c_[x_mesh.ravel(), y_mesh.ravel()]).reshape(x_mesh.shape)
plt.contourf(x_mesh, y_mesh, z_mesh, alpha=0.5, cmap="coolwarm")
plt.show()

# Parámetros del modelo logístico
print("Intercepto (b) para Regresión Logística:", log_reg.intercept_)
print("Coeficientes (w) para Regresión Logística:", log_reg.coef_)
