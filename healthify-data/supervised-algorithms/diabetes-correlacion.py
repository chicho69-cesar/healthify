# 01

# Importar las librerías necesarias
import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
import seaborn as sns

# Cargar el conjunto de datos de diabetes
path_to_file = "C:/workspace/healthify/healthify-data/etl/load/diabetes.csv"
diabetes_data = pd.read_csv(path_to_file)

# Mostrar información básica sobre el conjunto de datos
print(diabetes_data.shape)
print(diabetes_data.columns)
print(diabetes_data.head())
print(diabetes_data.info())
print(diabetes_data.describe().transpose())
print(diabetes_data.dtypes)

# Realizar el análisis de correlación entre todas las variables
correlation_matrix = diabetes_data.corr()
print("Matriz de correlación entre todas las variables del dataset:")
print(correlation_matrix)

# Cambiar los 1 de la diagonal principal a 0
np.fill_diagonal(correlation_matrix.values, 0)

# Encontrar la mayor correlación
max_correlation_value = correlation_matrix.values.max()
print("El valor máximo de correlación es:", max_correlation_value)

# Visualizar la correlación entre dos variables específicas
sns.scatterplot(x="Glucose", y="Outcome", data=diabetes_data)
plt.title("Relación entre Glucose y Outcome")
plt.xlabel("Nivel de glucosa en sangre")
plt.ylabel("Resultado de diabetes")
plt.show()

# Graficar la matriz de correlación
plt.figure(figsize=(10, 8))
sns.heatmap(correlation_matrix, annot=True, cmap="coolwarm", fmt=".2f")
plt.title("Matriz de correlación entre variables")
plt.show()
