from django.urls import path
from . import views

urlpatterns = [
    path('processarLogin/', views.processar_login, name='processar_login'),
]
