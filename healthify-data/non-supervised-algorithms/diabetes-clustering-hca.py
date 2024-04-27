# Importacion de bibliotecas necesarias
import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns
import scipy.cluster.hierarchy as shc
from sklearn.cluster import AgglomerativeClustering
from sklearn.preprocessing import StandardScaler
from sklearn.metrics import confusion_matrix, accuracy_score

# Carga de datos
data = pd.read_csv("C:/Users/cesar/OneDrive/Documentos/ITA/Octavo Semestre/Big Data Analytics/Unidad II/Actividad 3 - Reporte T�cnico del avance del proyecto/etl/load/diabetes.csv")
df = pd.DataFrame(data)

# Creacion de un DataFrame a partir de los datos estandarizados
scaler = StandardScaler()
df_scaled = scaler.fit_transform(df)

# Visualizaci�n de la estructura jer�rquica con dendrogramas
plt.figure(figsize=(10, 7))
plt.title("Diabetes Dendrogram")
clusters = shc.linkage(df_scaled, method='ward', metric="euclidean")
dend = shc.dendrogram(clusters)
plt.show()

# Aplicacion de Hierarchical Clustering Agglomerative
clustering_model = AgglomerativeClustering(n_clusters=2, affinity='euclidean', linkage='ward')
clustering_model.fit(df_scaled)
data_labels = clustering_model.labels_

# Asignacion de etiquetas al conjunto de datos original
df['Labels'] = data_labels

# Visualizacion de los datos etiquetados en un gráfico de dispersion
sns.scatterplot(x='Glucose', y='BMI', data=df, hue='Labels', palette="rainbow").set_title('Labeled Diabetes Data')

# Extraer las etiquetas verdaderas del campo 'Outcome'
true_labels = df['Outcome']

# Calcular la matriz de confusion
conf_matrix = confusion_matrix(true_labels, data_labels)
print("Matriz de Confusion:")
print(conf_matrix)

# Calcular la precision del algoritmo
accuracy = accuracy_score(true_labels, data_labels)
print("Precision del algoritmo:")
print(accuracy)
