from django.urls import path
from . import views

urlpatterns = [
    path('processarLogin/', views.processar_login, name='processar_login'),
    path('processarCadastroUsuario/', views.processar_cadastro_usuario, name='processar_cadastro_usuario'),
    path('listarUsuario/', views.listar_usuarios, name='listar_usuarios'),
    path('atualizarUsuario/', views.atualizar_usuario, name='atualizar_suario'),
    path('deletarUsuario/', views.deletar_usuario, name='deletar_usuario'),
    path('processarRelatorio/', views.processar_cadastro_relatorio, name='processar_cadastro_relatorio'),
    path('listarRelatorio/', views.listar_relatorio, name='listar_relatorio'),
    path('updateRelatorio/', views.update_relatorio, name='update_relatorio')
]
