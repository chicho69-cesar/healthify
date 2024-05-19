# 03

# Importación de bibliotecas necesarias
import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns
import scipy.cluster.hierarchy as shc
from sklearn.cluster import AgglomerativeClustering
from sklearn.preprocessing import StandardScaler
from sklearn.metrics import confusion_matrix, accuracy_score

# Carga de datos
data = pd.read_csv("C:/workspace/healthify/healthify-data/etl/load/hypertension.csv", sep=',')
df = pd.DataFrame(data)

# Preprocesamiento de datos
scaler = StandardScaler()
df_s = scaler.fit_transform(df.drop(columns=['FOLIO_I', 'riesgo_hipertension']))

df_hypertension = df[["edad", "concentracion_hemoglobina", "valor_acido_urico", "valor_colesterol_total", "resultado_glucosa", "valor_insulina", "valor_trigliceridos", "peso", "estatura", "medida_cintura", "tension_arterial", "sueno_horas", "masa_corporal", "actividad_total"]]

# Visualización de la estructura jerárquica con dendrogramas
plt.figure(figsize=(10, 7))
plt.title("Hypertension Dendrogram")
clusters = shc.linkage(df_hypertension, method='ward', metric="euclidean")
dend = shc.dendrogram(clusters)
plt.show()

# Aplicación de Hierarchical Clustering Agglomerative
clustering_model = AgglomerativeClustering(n_clusters=2, affinity='euclidean', linkage='ward')
clustering_model.fit(df_hypertension)
data_labels = clustering_model.labels_

# Asignación de etiquetas al conjunto de datos original
df['Labels'] = data_labels

# Visualización de los datos etiquetados en un gráfico de dispersión
sns.scatterplot(x='edad', y='masa_corporal', data=df, hue='Labels', palette="rainbow").set_title('Labeled Hypertension Data')

# Extraer las etiquetas verdaderas del campo 'riesgo_hipertension'
true_labels = df['riesgo_hipertension']

# Calcular la matriz de confusión
conf_matrix = confusion_matrix(true_labels, data_labels)
print("Matriz de Confusion:")
print(conf_matrix)

# Calcular la precisión del algoritmo
accuracy = accuracy_score(true_labels, data_labels)
print("Precision del algoritmo:")
print(accuracy)
