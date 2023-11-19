FROM python:3.12.0

WORKDIR /home/python/app

COPY ./bancoEngSoftware.sql .
RUN apt update \
    && apt install mycli
RUN mycli -h database -P 3306 -p password > bancoEngSoftware.sql

# Instala as dependências do python
COPY requirements.txt ./
RUN pip install --no-cache-dir -r requirements.txt

COPY ./backend ./

CMD [ "python", "manage.py", "runserver" ]
