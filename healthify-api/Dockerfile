FROM python:3.10.14-alpine3.19
LABEL maintainer="chicho69"

RUN apk add --no-cache gcc g++ musl-dev libffi-dev

COPY ./requirements.txt /tmp/requirements.txt
COPY . /app
WORKDIR /app
EXPOSE 5000

RUN python -m venv /py && \
  /py/bin/pip install --upgrade pip && \
  /py/bin/pip install --no-cache-dir -r /tmp/requirements.txt && \
  rm -rf /tmp

RUN adduser --disabled-password --no-create-home flask-user && \
  mkdir -p /vol/web/media && \
  mkdir -p /vol/web/static && \
  chown -R flask-user:flask-user /vol && \
  chmod -R 755 /vol

USER flask-user

CMD ["/py/bin/gunicorn", "-b", "0.0.0.0:5000", "app:app"]
