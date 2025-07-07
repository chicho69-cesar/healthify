# Healthify

Healthify es una página web que utiliza modelos de inteligencia artificial creados con Python empleando algoritmos de aprendizaje no supervisado, aprendizaje supervisado y redes neuronales para detectar o predecir enfermedades como la diabetes, hipertensión y enfermedades cardiovasculares.

## Estructura del Proyecto

El proyecto está dividido en los siguientes directorios:

- **healthify-data**: Contiene los datasets utilizados en el proyecto y los algoritmos en Python desarrollados.
- **healthify-models**: Incluye los modelos creados en Jupyter Notebooks.
- **healthify-api**: Contiene una API desarrollada en Flask para interactuar con los modelos compilados en formato `.pkl`.
- **healthify-web**: Aquí se encuentra la página web creada utilizando NextJS.

## Descripción de Directorios

### healthify-data

Este directorio contiene:

- Los datasets necesarios para entrenar y evaluar los modelos.
- Algoritmos en Python que implementan técnicas de aprendizaje no supervisado, aprendizaje supervisado y redes neuronales.

### healthify-models

En este directorio se encuentran los notebooks de Jupyter donde se desarrollaron y entrenaron los modelos de IA para la predicción de enfermedades.

### healthify-api

Aquí se implementa una API utilizando Flask que permite la interacción con los modelos ya entrenados y guardados en formato `.pkl`. Esta API facilita el acceso a las predicciones desde la página web.

**Opción 1.- Utilizar flask con en venv:**

Primero inicializamos el entorno virtual:

```bash
python -m venv venv
```

Luego activamos el entorno virtual:

```bash
# En Windows
venv\Scripts\activate
# En Linux/Mac
source venv/bin/activate
```

Instalamos las dependencias necesarias:

```bash
pip install -r requirements.txt
```

Finalmente, ejecutamos la API:

```bash
python app.py
```

**Opción 2.- Utilizar Docker:**

Para ejecutar la API utilizando Docker, primero construimos la imagen:

```bash
docker build -t healthify:1.0.0 .
```

Luego, ejecutamos el contenedor:

```bash
docker container run -dp 8080:5000 --name healthify healthify:1.0.0
```

### healthify-web

Este directorio contiene la implementación de la página web utilizando NextJS. La web proporciona una interfaz amigable para los usuarios donde pueden interactuar con los modelos de IA.

**Ejecutar la web:**

Para ejecutar la aplicación web, primero asegúrate de tener Node.js y npm instalados. Luego, navega al directorio `healthify-web` y ejecuta los siguientes comandos:

```bash
npm install
npm run dev
```

Esto iniciará el servidor de desarrollo y podrás acceder a la aplicación en `http://localhost:3000`.

## Despliegue

El proyecto está desplegado en la siguiente URL: [Healthify](https://healthify-three.vercel.app/)

## Cómo Contribuir

1. Realiza un fork de este repositorio.
2. Crea una rama para tu feature (`git checkout -b feature/nueva-feature`).
3. Realiza los cambios necesarios y haz commit (`git commit -am 'Agrega nueva feature'`).
4. Haz push a la rama (`git push origin feature/nueva-feature`).
5. Abre un Pull Request.

## Licencia

Este proyecto está bajo la Licencia MIT. Mira el archivo `LICENSE` para más detalles.

## Contacto

Para cualquier consulta, puedes contactarme a través de [GitHub](https://github.com/chicho69-cesar).

¡Gracias por contribuir a Healthify!
