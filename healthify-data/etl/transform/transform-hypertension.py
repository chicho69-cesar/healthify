"""
Algoritmo para la transformación de los datos mediante el proceso 
ETL (Extract, Transform, Load), mediante el cual realizamos el proceso
de extracción, transformación y por último la carga de los datos 
recolectados en un único dataset.
"""

# Importar librerías
import pandas as pd

# Cargar el dataset
dataset_path = "C:/workspace/healthify/healthify-data/etl/extract/datasets/hypertension.csv"
data = pd.read_csv(dataset_path)

# Mostrar tipos de datos
print(data.dtypes)

# Eliminar columnas especificadas
columns_to_drop = [
    'temperatura_ambiente',
    'valor_albumina',
    'valor_colesterol_hdl', 
    'valor_colesterol_ldl',
    'valor_creatina',
    'resultado_glucosa_promedio',
    'valor_hemoglobina_glucosilada',
    'valor_ferritina',
    'valor_folato',
    'valor_homocisteina',
    'valor_proteinac_reactiva',
    'valor_transferrina',
    'valor_vitamina_bdoce',
    'valor_vitamina_d',
    'segundamedicion_peso',
    'segundamedicion_estatura',
    'distancia_rodilla_talon',
    'circunferencia_de_la_pantorrilla',
    'segundamedicion_cintura'
]

# Eliminamos las columnas
data.drop(columns=columns_to_drop, inplace=True)

# Mostrar los datos más importantes
print("Primeras filas del dataset:")
print(data.head())

# Mostrar tipos de datos de las columnas restantes
print("\nTipos de datos de las columnas:")
print(data.dtypes)

# Guardar el dataset transformado
output_path = "C:/workspace/healthify/healthify-data/etl/load/hypertension.csv"
data.to_csv(output_path, index=False)
