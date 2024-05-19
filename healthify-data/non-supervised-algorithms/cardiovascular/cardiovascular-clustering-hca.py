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
data = pd.read_csv("C:/workspace/healthify/healthify-data/etl/load/cardiovascular.csv", sep=',')
df = pd.DataFrame(data)

# Preprocesamiento de datos
scaler = StandardScaler()
df_s = scaler.fit_transform(df.drop(columns=['id', 'cardio']))

df_cardiovascular = df[["age", "gender", "height", "weight", "ap_hi", "ap_lo", "cholesterol", "gluc", "smoke", "alco", "active"]]

# Visualización de la estructura jerárquica con dendrogramas
plt.figure(figsize=(10, 7))
plt.title("Cardiovascular Dendrogram")
clusters = shc.linkage(df_cardiovascular, method='ward', metric="euclidean")
dend = shc.dendrogram(clusters)
plt.show()

# Aplicación de Hierarchical Clustering Agglomerative
clustering_model = AgglomerativeClustering(n_clusters=2, affinity='euclidean', linkage='ward')
clustering_model.fit(df_cardiovascular)
data_labels = clustering_model.labels_

# Asignación de etiquetas al conjunto de datos original
df['Labels'] = data_labels

# Visualización de los datos etiquetados en un gráfico de dispersión
sns.scatterplot(x='weight', y='ap_hi', data=df, hue='Labels', palette="rainbow").set_title('Labeled Cardiovascular Data')

# Extraer las etiquetas verdaderas del campo 'cardio'
true_labels = df['cardio']

# Calcular la matriz de confusión
conf_matrix = confusion_matrix(true_labels, data_labels)
print("Matriz de Confusion:")
print(conf_matrix)

# Calcular la precisión del algoritmo
accuracy = accuracy_score(true_labels, data_labels)
print("Precision del algoritmo:")
print(accuracy)
