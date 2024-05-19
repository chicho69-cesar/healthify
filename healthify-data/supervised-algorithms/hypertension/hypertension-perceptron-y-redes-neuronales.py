# 07

# Librerías
# Manejo de datos
import pandas as pd

# Graficación
import matplotlib.pyplot as plt

# Algoritmos para implementar el perceptron y la red neuronal
from sklearn.linear_model import Perceptron
from sklearn.neural_network import MLPClassifier
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import StandardScaler
from sklearn.metrics import accuracy_score


# Ingresar datos y generar data frame
url = "C:/workspace/healthify/healthify-data/etl/load/hypertension.csv"
df = pd.read_csv(url)

# Variables predictoras (características)
X = df[["edad", "concentracion_hemoglobina", "valor_acido_urico", "valor_colesterol_total", "resultado_glucosa", "valor_insulina", "valor_trigliceridos", "peso", "estatura", "medida_cintura", "tension_arterial", "sueno_horas", "masa_corporal", "actividad_total"]]

# Variable objetivo
y = df['riesgo_hipertension']

# Agrupación de datos
x = X.values
y = y.values




# Implementación del Perceptron
pcp = Perceptron()
pcp.fit(x, y)
yp = pcp.predict(x)
df["modeloperc"] = pd.Series(yp)

# Visualización de los datos en 3D
fig = plt.figure()
ax = fig.add_subplot(projection='3d')

for i in range(len(y)):
    if y[i] == 1:
        c = "blue"
    else:
        c = "red"
    
    ax.scatter(x[i, 0], x[i, 1], x[i, 2], color=c)

ax.set_xlabel('edad')
ax.set_ylabel('concentracion_hemoglobina')
ax.set_zlabel('valor_acido_urico')
plt.show()

# Calcular precisión del Perceptrón
accuracy_pcp = accuracy_score(y, yp)
print("Precisión del Perceptrón:", accuracy_pcp)




# Implementación de red neuronal

# Normalización de los datos
std = StandardScaler()
xtrain, xtest, ytrain, ytest = train_test_split(x, y, test_size=0.4, random_state=0)
xtrain = std.fit_transform(xtrain)
xtest = std.fit_transform(xtest)
xu = std.fit_transform(x)

# Entrenamiento del modelo de red neuronal
NNA = MLPClassifier(random_state=1, max_iter=500).fit(xtrain, ytrain)
ypnn = NNA.predict(xu)
df["modelonn"] = pd.Series(ypnn)

# Visualización de los datos en 3D
fig = plt.figure()
ax = fig.add_subplot(projection='3d')

for i in range(len(yp)):
    if ypnn[i] == 1:
        c = "blue"
    else:
        c = "red"
    
    ax.scatter(x[i, 0], x[i, 1], x[i, 2], color=c)

ax.set_xlabel('edad')
ax.set_ylabel('concentracion_hemoglobina')
ax.set_zlabel('valor_acido_urico')
plt.show()

# Calcular precisión de la Red Neuronal
accuracy_nn = accuracy_score(y, ypnn)
print("Precisión de la Red Neuronal:", accuracy_nn)
