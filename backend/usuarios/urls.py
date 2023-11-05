from django.urls import path
from . import views

urlpatterns = [
    path('processarLogin/', views.processar_login, name='processar_login'),
    path('processarCadastroUsuario/', views.processar_cadastro_usuario, name='processar_cadastro_usuario'),
]
