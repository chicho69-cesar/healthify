# Importación de bibliotecas necesarias
import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns
from sklearn.cluster import KMeans
from sklearn.preprocessing import StandardScaler
from sklearn.metrics import accuracy_score, confusion_matrix

# Carga del conjunto de datos
data = pd.read_csv("C:/Users/cesar/OneDrive/Documentos/ITA/Octavo Semestre/Big Data Analytics/Unidad II/Actividad 3 - Reporte Técnico del avance del proyecto/etl/load/diabetes.csv", sep=',')
df = pd.DataFrame(data)

# Exploración inicial de datos
df.columns
df.info()
df.head()
df

# Preprocesamiento de datos
scaler = StandardScaler()
df_scaled = scaler.fit_transform(df)

# Omitimos el campo Outcome
df_diabetes = df[["Pregnancies", "Glucose", "BloodPressure", "SkinThickness", "Insulin", "BMI", "DiabetesPedigreeFunction", "Age"]]
df_diabetes.head(10)
df_diabetes.info()
df_diabetes.describe()

# Visualizacion de las relaciones entre las caracteri­sticas
sns.pairplot(df_diabetes)

# Selección de características relevantes
features = ["Glucose", "BMI", "BloodPressure", "SkinThickness", "Insulin", "Age"]

# Determinación del número óptimo de clusters utilizando el método del codo
wcss = []
x = df_diabetes[features].values

for i in range(1, 11):
    kmeans = KMeans(n_clusters=i, init='k-means++', max_iter=300, n_init=10, random_state=0)
    kmeans.fit(x)
    wcss.append(kmeans.inertia_)

# Graficamos los resultados de utilizar el metodo del codo
plt.plot(range(1, 11), wcss)
plt.title("El metodo del codo")
plt.xlabel("Numero de clusters")
plt.ylabel("WCSS")
plt.show()

# Aplicación de KMeans con el número óptimo de clusters
# kmeans = KMeans(n_clusters=2, init='k-means++', n_init=10, max_iter=300, random_state=0) # 35%
kmeans = KMeans(n_clusters=2, random_state=42) # 65%
kmeans.fit(x)
result_kmeans = kmeans.fit_predict(x)
labels = kmeans.labels_
df_diabetes['Cluster'] = labels

# Visualización de resultados
plt.scatter(x[result_kmeans==0, 0], x[result_kmeans==0, 1], s=100, c='red', label="diabetes")
plt.scatter(x[result_kmeans==1, 0], x[result_kmeans==1, 1], s=100, c='pink', label="sin-diabetes")
plt.scatter(kmeans.cluster_centers_[:, 0], kmeans.cluster_centers_[:, 1], s=100, c='black', label='Centroids')
plt.legend()

# Evaluación del clustering
plt.scatter(df_diabetes['Glucose'], df_diabetes['BMI'], c=df_diabetes['Cluster'], cmap='viridis')
plt.xlabel('Glucose')
plt.ylabel('BMI')
plt.title('K-Means Clustering')
plt.show()

# Evaluacion del modelo
# Creación de una serie de prueba para evaluación del clustering
diabetes_test = pd.Series([1 if i == 1 else 0 for i in labels])

# Impresión de matriz de confusión
print("Matriz de confusion:")
print(confusion_matrix(diabetes_test, df['Outcome']))

# Impresión de valor de precisión del clustering
print("Valor de Precision del clustering:")
print(accuracy_score(diabetes_test, df['Outcome']))
