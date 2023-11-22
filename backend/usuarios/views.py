import json
import jwt
import datetime

from django.shortcuts import redirect
from django.http import JsonResponse
from django.contrib.auth.hashers import check_password, make_password
from .models import Usuario
from backend.middlewares.middleware import middlewareAcessoAdm

def processar_login(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        # Obtenha os dados do formulário
        email = data.get('email')
        password = data.get('password')
        print(email, data)

        # Verifique as credenciais manualmente
        try:
            user = Usuario.objects.get(email=email)
            if (password == user.password):
                # Se as credenciais estiverem corretas, gere um token JWT
                payload = {
                    'usuario_email': user.email,
                    'usuario_nome': user.nome,
                    'usuario_tipo': user.tipoUsuario,
                    'exp': datetime.datetime.utcnow() + datetime.timedelta(days=1)  # Expira em 1 dia
                }
                #token = jwt.encode(payload, 'sua_chave_secreta', algorithm='HS256')
                token = jwt.encode(payload, 'chave_secreta', algorithm='HS256')
                return JsonResponse({'success': True, 'access_token': token})
            else:
                return JsonResponse({'success': False, 'error': 'senha_invalida'})
        except Usuario.DoesNotExist:
            return JsonResponse({'success': False, 'error': 'usuario_nao_encontrado'})


@middlewareAcessoAdm
def processar_cadastro_usuario(request):
    if request.method == 'POST':
        email = request.POST.get('email')
        nome = request.POST.get('nome')
        password = request.POST.get('password')
        tipoUsuario = request.POST.get('tipoUsuario')

        password = make_password(password)

        # Crie um novo usuário no banco de dados
        usuario = Usuario(email=email, nome=nome, password=password, tipoUsuario=tipoUsuario)
        usuario.save()
        
        # Redirecione para uma página de sucesso ou outra página relevante
        return redirect('http://localhost:3000/telaAdm')

