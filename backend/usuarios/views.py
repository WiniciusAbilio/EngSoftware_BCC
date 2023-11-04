import json
import jwt
import datetime

from django.http import JsonResponse
from django.contrib.auth.hashers import check_password
from .models import Usuario

def processar_login(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        # Obtenha os dados do formulário
        email = data.get('email')
        password = data.get('password')

        # Verifique as credenciais manualmente
        try:
            user = Usuario.objects.get(email=email)
            if check_password(password, user.senha):
                # Se as credenciais estiverem corretas, gere um token JWT
                payload = {
                    'usuario_email': user.email,
                    'usuario_nome': user.nomeUsuario,
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