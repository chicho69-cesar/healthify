# 01

# Importación de bibliotecas necesarias
import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns
from sklearn.cluster import KMeans
from sklearn.preprocessing import StandardScaler
from sklearn.metrics import accuracy_score, confusion_matrix

# Carga del conjunto de datos
data = pd.read_csv("C:/workspace/healthify/healthify-data/etl/load/cardiovascular.csv", sep=',')
df = pd.DataFrame(data)

# Preprocesamiento de datos
scaler = StandardScaler()
df_s = scaler.fit_transform(df.drop(columns=['id', 'cardio']))

df_cardiovascular = df[["age", "gender", "height", "weight", "ap_hi", "ap_lo", "cholesterol", "gluc", "smoke", "alco", "active"]]

# Visualización de las relaciones entre las características
sns.pairplot(df_cardiovascular)

# Selección de características relevantes
features = ["age", "gender", "height", "weight", "ap_hi", "ap_lo", "cholesterol", "gluc", "smoke", "alco", "active"]

# Determinación del número óptimo de clusters utilizando el método del codo
wcss = []
x = df[features].values

for i in range(1, 11):
    kmeans = KMeans(n_clusters=i, init='k-means++', max_iter=300, n_init=10, random_state=0)
    kmeans.fit(x)
    wcss.append(kmeans.inertia_)

# Graficamos los resultados de utilizar el método del codo
plt.plot(range(1, 11), wcss)
plt.title("El método del codo")
plt.xlabel("Numero de clusters")
plt.ylabel("WCSS")
plt.show()

# Aplicación de KMeans con el número óptimo de clusters
kmeans = KMeans(n_clusters=2, random_state=42)
kmeans.fit(x)
result_kmeans = kmeans.fit_predict(x)
labels = kmeans.labels_
df['Cluster'] = labels

# Visualización de resultados
plt.scatter(x[result_kmeans==0, 0], x[result_kmeans==0, 1], s=100, c='red', label="riesgo-cardiovascular")
plt.scatter(x[result_kmeans==1, 0], x[result_kmeans==1, 1], s=100, c='blue', label="sin-riesgo-cardiovascular")
plt.scatter(kmeans.cluster_centers_[:, 0], kmeans.cluster_centers_[:, 1], s=100, c='black', label='Centroids')
plt.legend()

# Evaluación del clustering
plt.scatter(df['ap_hi'], df['weight'], c=df['Cluster'], cmap='viridis')
plt.xlabel('Presión Arterial')
plt.ylabel('Peso Corporal')
plt.title('K-Means Clustering')
plt.show()

# Evaluación del modelo
diabetes_test = pd.Series([1 if i == 1 else 0 for i in labels])

# Impresión de matriz de confusión
print("Matriz de confusion:")
print(confusion_matrix(diabetes_test, df['cardio']))

# Impresión de valor de precisión del clustering
print("Valor de Precision del clustering:")
print(accuracy_score(diabetes_test, df['cardio']))
