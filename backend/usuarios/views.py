from django.http import HttpResponseRedirect
from django.contrib.auth import login
from django.contrib.auth.hashers import check_password, make_password
from .models import Usuario

def processar_login(request):
    if request.method == 'POST':
        # Obtenha os dados do formulário
        email = request.POST.get('email')
        password = request.POST.get('password')


        user = Usuario.objects.get(email=email)

        if user is not None:
            if check_password(password, user.senha) :
                request.session['usuario_logado'] = True
                request.session['usuario_email'] = email
                request.session['usuario_nome'] = user.nomeUsuario
                request.session['usuario_tipo'] = user.tipoUsuario

                if request.session['usuario_tipo'] == 'admin':
                    return HttpResponseRedirect('/pagina_de_sucesso_adm/')  # Redirecione para a página de sucesso
                if request.session['usuario_tipo'] == 'especialista':
                    return HttpResponseRedirect('/pagina_de_sucesso_especialista/')  # Redirecione para a página de sucesso
                else:
                    return HttpResponseRedirect('/pagina_de_sucesso/')  # Redirecione para a página de sucesso
            else:
                return HttpResponseRedirect('/senha_invalida/')  # Redirecione para a página de sucesso
        else:
            # Autenticação falhou, exiba uma mensagem de erro
             return HttpResponseRedirect('/pagina_de_fracasso/')

    return HttpResponseRedirect('/pagina_fudida/')
