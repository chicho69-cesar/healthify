"""
Algoritmo para la transformación de los datos mediante el proceso 
ETL (Extract, Transform, Load), mediante el cual realizamos el proceso
de extracción, transformación y por último la carga de los datos 
recolectados en un único dataset.
"""

# Importamos la librería de pandas
import pandas as pd

# Leemos los 4 datasets que vamos a combinar
diabetes_1 = pd.read_csv("C:/workspace/healthify/healthify-data/etl/extract/datasets/diabetes-1.csv")
diabetes_2 = pd.read_csv("C:/workspace/healthify/healthify-data/etl/extract/datasets/diabetes-2.csv")
diabetes_3 = pd.read_csv("C:/workspace/healthify/healthify-data/etl/extract/datasets/diabetes-3.csv")
diabetes_4 = pd.read_csv("C:/workspace/healthify/healthify-data/etl/extract/datasets/diabetes-4.csv")

# Observamos los tipos de datos de los datasets
diabetes_1.dtypes
diabetes_2.dtypes
diabetes_3.dtypes
diabetes_4.dtypes

# Definir diccionario para mapear los tipos de datos correctos
data_types_mapping = {
    'Pregnancies': 'int64',
    'Glucose': 'float64',
    'BloodPressure': 'float64',
    'SkinThickness': 'float64',
    'Insulin': 'float64',
    'BMI': 'float64',
    'DiabetesPedigreeFunction': 'float64',
    'Age': 'int64',
    'Outcome': 'int64',
}

# Convertir tipos de datos en los 4 datasets
diabetes_1 = diabetes_1.astype(data_types_mapping)
diabetes_2 = diabetes_2.astype(data_types_mapping)
diabetes_3 = diabetes_3.astype(data_types_mapping)

# Cambiar el nombre de la columna 'Diagnosis' a 'Outcome' en diabetes_4 para hacerlo consistente con los otros datasets
diabetes_4.rename(columns={'Diagnosis': 'Outcome'}, inplace=True)

# Convertir tipos de datos en diabetes_4
diabetes_4 = diabetes_4.astype(data_types_mapping)

# Revisar tipos de datos
diabetes_1.dtypes
diabetes_2.dtypes
diabetes_3.dtypes
diabetes_4.dtypes

# Concatenar los 4 datasets en un único dataset
diabetes_final = pd.concat([diabetes_1, diabetes_2, diabetes_3, diabetes_4], ignore_index=True)
diabetes_final.to_csv("C:/workspace/healthify/healthify-data/etl/transform/diabetes-pre.csv", index=False)

# Guardar el dataset final
diabetes_final.to_csv("C:/workspace/healthify/healthify-data/etl/load/diabetes.csv", index=False)
