from django.urls import path
from . import views

urlpatterns = [
    path('processarCadastroFilial/', views.processar_cadastro_filial, name='processar_cadastro_filial'),
]
