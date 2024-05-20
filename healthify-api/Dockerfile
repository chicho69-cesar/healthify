# Stage 1: Build stage
FROM python:3.10.14-alpine3.19 AS builder
LABEL maintainer="chicho69"

# Instalar las dependencias necesarias para construir paquetes Python
RUN apk add --no-cache gcc g++ musl-dev libffi-dev

# Copiar los archivos de requisitos y el código fuente
COPY ./requirements.txt /tmp/requirements.txt
WORKDIR /app
COPY . /app

# Crear el entorno virtual e instalar las dependencias
RUN python -m venv /py && \
  /py/bin/pip install --upgrade pip && \
  /py/bin/pip install --no-cache-dir -r /tmp/requirements.txt

# Verificar que gunicorn se haya instalado correctamente
RUN /py/bin/gunicorn --version


# Stage 2: Final stage
FROM python:3.10.14-alpine3.19
LABEL maintainer="chicho69"

# Instalar dependencias runtime necesarias para scikit-learn y otras bibliotecas
RUN apk add --no-cache libstdc++ libgomp

# Crear el directorio de trabajo
WORKDIR /app

# Copiar el entorno virtual desde la etapa de construcción
COPY --from=builder /py /py

# Copiar la aplicación desde la etapa de construcción
COPY --from=builder /app /app

# Crear los directorios necesarios y ajustar permisos
RUN adduser --disabled-password --no-create-home flask-user && \
  mkdir -p /vol/web/media && \
  mkdir -p /vol/web/static && \
  chown -R flask-user:flask-user /vol && \
  chmod -R 755 /vol

# Establecer el usuario no privilegiado
USER flask-user

# Exponer el puerto
EXPOSE 5000

# Comando para ejecutar la aplicación
CMD ["/py/bin/gunicorn", "-b", "0.0.0.0:5000", "app:app"]
