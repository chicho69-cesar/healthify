# 06

# Importar las bibliotecas necesarias
import pandas as pd
import matplotlib.pyplot as plt
from sklearn.model_selection import train_test_split
from sklearn.tree import DecisionTreeClassifier, plot_tree

# Cargar el conjunto de datos de diabetes
path_to_file = "C:/workspace/healthify/healthify-data/etl/load/cardiovascular.csv"
cardiovascular_data = pd.read_csv(path_to_file)

# Dividir el conjunto de datos en variables predictoras (X) y variable objetivo (y)
X = cardiovascular_data.drop("cardio", axis=1)
y = cardiovascular_data["cardio"]

# Dividir el conjunto de datos en conjuntos de entrenamiento y prueba
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# Crear el árbol de decisión
tree_classifier = DecisionTreeClassifier(criterion="entropy", max_depth=3)
tree_model = tree_classifier.fit(X_train, y_train)

# Evaluar el modelo
accuracy = tree_model.score(X_test, y_test)
print("Precisión del modelo:", accuracy)

# Visualizar el árbol de decisión
plt.figure(figsize=(12, 6))
plot_tree(tree_model, feature_names=list(X.columns), class_names=["No Cardiovascular", "Cardiovascular"], filled=True)
plt.show()

# CLASIFICAR A NUEVOS PACIENTES
# Aquí se pueden proporcionar las características de nuevos pacientes para clasificarlos con el modelo entrenado
# Por ejemplo:
# new_patient_features = [[age, ap_hi, ap_lo, ...]]
# prediction = tree_model.predict(new_patient_features)
# print("Predicción para el nuevo paciente:", prediction)
