"""
Algoritmo para la transformación de los datos mediante el proceso 
ETL (Extract, Transform, Load), mediante el cual realizamos el proceso
de extracción, transformación y por último la carga de los datos 
recolectados en un único dataset.
"""

# Importar librerías
import pandas as pd

# Cargar el dataset como una cadena y reemplazar los delimitadores
with open("C:/workspace/healthify/healthify-data/etl/extract/datasets/cardiovascular.csv", "r") as file:
    data_str = file.read()

# Reemplazar los puntos y comas por comas
data_str_comas = data_str.replace(";", ",")

# Guardar el nuevo archivo con comas como delimitador
with open("C:/workspace/healthify/healthify-data/etl/transform/cardiovascular-pre.csv", "w") as file:
    file.write(data_str_comas)

# Cargar el dataset
dataset_path = "C:/workspace/healthify/healthify-data/etl/transform/cardiovascular-pre.csv"
data = pd.read_csv(dataset_path)

# Mostrar tipos de datos
data.dtypes

# Mostrar los datos más importantes
print("Primeras filas del dataset:")
print(data.head())

# Mostrar tipos de datos de las columnas
print("\nTipos de datos de las columnas:")
print(data.dtypes)

# Guardar el dataset transformado
output_path = "C:/workspace/healthify/healthify-data/etl/load/cardiovascular.csv"
data.to_csv(output_path, index=False, sep=",")
