# 02

# Importar las bibliotecas necesarias
import pandas as pd
import matplotlib.pyplot as plt
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LinearRegression

# Cargar el conjunto de datos de diabetes
path_to_file = "C:/workspace/healthify/healthify-data/etl/load/hypertension.csv"
hypertension_data = pd.read_csv(path_to_file)

# Definir las variables independientes (X) y dependientes (Y)
X = hypertension_data[["masa_corporal"]]  # Usar valor_colesterol_total como variable predictora
Y = hypertension_data["riesgo_hipertension"]  # Usar riesgo_hipertension como variable objetivo

# Dividir los datos en conjuntos de entrenamiento y prueba
X_train, X_test, Y_train, Y_test = train_test_split(X, Y, test_size=0.2, random_state=42)

# Crear el modelo de regresión lineal
regression_model = LinearRegression()

# Entrenar el modelo con los datos de entrenamiento
regression_model.fit(X_train, Y_train)

# Evaluar la precisión del modelo con los datos de entrenamiento
train_score = regression_model.score(X_train, Y_train)
print("Precisión del modelo con datos de entrenamiento:", train_score)

# Realizar predicciones sobre los datos de prueba
Y_pred = regression_model.predict(X_test)

# Visualizar los resultados
plt.scatter(X_test, Y_test, color="blue", label="Datos reales")
plt.plot(X_test, Y_pred, color="red", linewidth=3, label="Regresión lineal")
plt.title("Regresión lineal para predecir hipertensión")
plt.xlabel("Nivel de colesterol")
plt.ylabel("Resultado de hipertensión")
plt.legend()
plt.show()

# Obtener los coeficientes de la regresión lineal
a = regression_model.coef_[0]
b = regression_model.intercept_
print("Ecuación de la regresión: Y =", a, "* X +", b)

# Evaluar la precisión del modelo con los datos de prueba
accuracy = regression_model.score(X_test, Y_test)
print("Precisión del modelo con datos:", accuracy)
