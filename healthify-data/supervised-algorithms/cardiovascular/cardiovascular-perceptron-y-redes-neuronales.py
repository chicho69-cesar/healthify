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
url = "C:/workspace/healthify/healthify-data/etl/load/cardiovascular.csv"
df = pd.read_csv(url)

# Variables predictoras (características)
X = df[["weight", "ap_hi", "ap_lo", "cholesterol", "gluc", "smoke", "alco", "active", "age", "gender", "height"]]

# Variable objetivo
Y = df['cardio']

# Agrupación de datos
X = X.values
Y = Y.values




# Implementación del Perceptron
pcp = Perceptron()
pcp.fit(X, Y)
yp = pcp.predict(X)
df["modeloperc"] = pd.Series(yp)

# Visualización de los datos en 3D
fig = plt.figure()
ax = fig.add_subplot(projection='3d')

for i in range(len(Y)):
    if Y[i] == 1:
        c = "blue"
    else:
        c = "red"
    
    ax.scatter(X[i, 0], X[i, 1], X[i, 2], color=c)

ax.set_xlabel('weight')
ax.set_ylabel('ap_hi')
ax.set_zlabel('ap_lo')
plt.show()

# Calcular precisión del Perceptrón
accuracy_pcp = accuracy_score(Y, yp)
print("Precisión del Perceptrón:", accuracy_pcp)




# Implementación de red neuronal

# Normalización de los datos
std = StandardScaler()
X_train, x_test, Y_train, y_test = train_test_split(X, Y, test_size=0.4, random_state=0)
X_train = std.fit_transform(X_train)
x_test = std.fit_transform(x_test)
xu = std.fit_transform(X)

# Entrenamiento del modelo de red neuronal
NNA = MLPClassifier(random_state=1, max_iter=500).fit(X_train, Y_train)
predicted = NNA.predict(xu)
df["modelonn"] = pd.Series(predicted)

# Visualización de los datos en 3D
fig = plt.figure()
ax = fig.add_subplot(projection='3d')

for i in range(len(yp)):
    if predicted[i] == 1:
        c = "blue"
    else:
        c = "red"
    
    ax.scatter(X[i, 0], X[i, 1], X[i, 2], color=c)

ax.set_xlabel('weight')
ax.set_ylabel('ap_hi')
ax.set_zlabel('ap_lo')
plt.show()

# Calcular precisión de la Red Neuronal
accuracy_nn = accuracy_score(Y, predicted)
print("Precisión de la Red Neuronal:", accuracy_nn)
