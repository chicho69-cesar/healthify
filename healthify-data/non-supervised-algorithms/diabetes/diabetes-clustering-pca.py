# 02

# Importación de bibliotecas necesarias
import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns
from sklearn.decomposition import PCA
from sklearn.preprocessing import StandardScaler

# Carga del conjunto de datos
data = pd.read_csv("C:/workspace/healthify/healthify-data/etl/load/diabetes.csv", sep=',')
df = pd.DataFrame(data)

# Estandarización de datos
scaler = StandardScaler()
df_scaled = scaler.fit_transform(df)

# Reducción de dimensionalidad mediante PCA
pca = PCA(n_components=2)
principal_components = pca.fit_transform(df_scaled)

# Creación de un DataFrame con los componentes principales
principal_df = pd.DataFrame(data=principal_components, columns=['PC1', 'PC2'])

# Visualización de los datos en el espacio reducido de dos dimensiones
plt.scatter(principal_df['PC1'], principal_df['PC2'], cmap='viridis')
plt.xlabel('PC1')
plt.ylabel('PC2')
plt.title('Principal Component Analysis (PCA)')
plt.show()


# Reducción de dimensionalidad mediante PCA
pca = PCA()
principal_components = pca.fit_transform(df_scaled)

# Varianza explicada acumulativa
cumulative_variance = pca.explained_variance_ratio_.cumsum()

# Trama de la varianza explicada acumulativa
plt.plot(cumulative_variance, marker='o')
plt.xlabel('N�mero de componentes principales')
plt.ylabel('Varianza explicada acumulativa')
plt.title('Varianza explicada acumulativa por n�mero de componentes principales')
plt.grid(True)
plt.show()

# Visualización 3D de los componentes principales
if principal_components.shape[1] >= 3:
    fig = plt.figure()
    ax = fig.add_subplot(111, projection='3d')
    ax.scatter(principal_components[:, 0], principal_components[:, 1], principal_components[:, 2], cmap='viridis')
    ax.set_xlabel('PC1')
    ax.set_ylabel('PC2')
    ax.set_zlabel('PC3')
    ax.set_title('Visualización 3D de los componentes principales')
    plt.show()

# Análisis de carga de componentes
components_df = pd.DataFrame(pca.components_, columns=df.columns)
plt.figure(figsize=(12, 6))
sns.heatmap(components_df, cmap='coolwarm', annot=True)
plt.title('Análisis de carga de componentes')
plt.xlabel('Variables')
plt.ylabel('Componentes Principales')
plt.show()
