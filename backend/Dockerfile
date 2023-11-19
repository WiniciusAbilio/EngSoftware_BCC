FROM python:3.12.0

WORKDIR /home/python/app

COPY backend/requirements.txt ./
RUN pip install --no-cache-dir -r requirements.txt

COPY ./backend ./backend
RUN python backend/manage.py migrate

CMD [ "python", "backend/manage.py", "runserver" ]
