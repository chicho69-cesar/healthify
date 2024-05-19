# 01

# Importar las librerías necesarias
import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
import seaborn as sns

# Cargar el conjunto de datos de diabetes
path_to_file = "C:/workspace/healthify/healthify-data/etl/load/cardiovascular.csv"
cardiovascular_data = pd.read_csv(path_to_file)

# Mostrar información básica sobre el conjunto de datos
print(cardiovascular_data.shape)
print(cardiovascular_data.columns)
print(cardiovascular_data.head())
print(cardiovascular_data.info())
print(cardiovascular_data.describe().transpose())
print(cardiovascular_data.dtypes)

# Realizar el análisis de correlación entre todas las variables
correlation_matrix = cardiovascular_data.corr()
print("Matriz de correlación entre todas las variables del dataset:")
print(correlation_matrix)

# Cambiar los 1 de la diagonal principal a 0
np.fill_diagonal(correlation_matrix.values, 0)

# Encontrar la mayor correlación
max_correlation_value = correlation_matrix.values.max()
print("El valor máximo de correlación es:", max_correlation_value)

# Visualizar la correlación entre dos variables específicas
sns.scatterplot(x="gluc", y="cardio", data=cardiovascular_data)
plt.title("Relación entre presión sistólica y resultado")
plt.xlabel("Nivel de presión sistólica")
plt.ylabel("Resultado de cardiovascular")
plt.show()

# Graficar la matriz de correlación
plt.figure(figsize=(10, 8))
sns.heatmap(correlation_matrix, annot=True, cmap="coolwarm", fmt=".2f")
plt.title("Matriz de correlación entre variables")
plt.show()
