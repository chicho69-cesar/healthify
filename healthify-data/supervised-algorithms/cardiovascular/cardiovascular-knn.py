# 05

# Importar las bibliotecas necesarias
import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
import seaborn as sns
from sklearn.model_selection import train_test_split, cross_val_score
from sklearn.neighbors import KNeighborsClassifier
from sklearn.metrics import accuracy_score, confusion_matrix, classification_report

# Cargar el conjunto de datos de diabetes
path_to_file = "C:/workspace/healthify/healthify-data/etl/load/cardiovascular.csv"
cardiovascular_data = pd.read_csv(path_to_file)

# Dividir el conjunto de datos en variables predictoras (X) y variable objetivo (y)
X = cardiovascular_data.drop("cardio", axis=1)
y = cardiovascular_data["cardio"]

# Dividir el conjunto de datos en conjuntos de entrenamiento y prueba
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# Identificar el valor óptimo de k
nbrs = []
cv_scores = []

for k in range(1, 40):
    nbrs.append(k)
    knn = KNeighborsClassifier(n_neighbors=k)
    scores = cross_val_score(knn, X_train, y_train, cv=10, scoring="accuracy")
    cv_scores.append(scores.mean())

optimal_k = nbrs[np.argmax(cv_scores)]

print("El valor óptimo de k (vecinos) es:", optimal_k)

# Crear el modelo kNN con el valor óptimo de k
knn = KNeighborsClassifier(n_neighbors=optimal_k)
knn.fit(X_train, y_train)

# Evaluar el modelo
y_pred = knn.predict(X_test)

accuracy = accuracy_score(y_test, y_pred)
print("Precisión del modelo:", accuracy)

conf_matrix = confusion_matrix(y_test, y_pred)
print("Matriz de confusión:")
print(conf_matrix)

# Reporte de clasificación
print("Reporte de clasificación:")
print(classification_report(y_test, y_pred))

# Visualización de la matriz de confusión
plt.figure(figsize=(10, 8))
sns.heatmap(conf_matrix, annot=True, cmap="Blues", fmt="g", cbar=False)
plt.title("Matriz de confusión")
plt.xlabel("Predicción")
plt.ylabel("Valor real")
plt.show()
