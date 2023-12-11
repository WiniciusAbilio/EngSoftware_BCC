import json
import jwt
import datetime


from django.shortcuts import get_object_or_404
from django.http import JsonResponse
from django.contrib.auth.hashers import check_password, make_password
from .models import Usuario
from .modelsRelatorio import Relatorio
from backend.middlewares.middleware import middlewareAcessoAdm
import random



def update_relatorio(request):
    data = json.loads(request.body)
    idRelatorio = data.get('idRelatorio')
    status = data.get('status')

    relatorio = Relatorio.objects.get(idRelatorio=idRelatorio)
    relatorio.status = status
    relatorio.save()

    return JsonResponse({'mensagem': 'Relatório cadastrado com sucesso'}, status=200)

def listar_relatorio(request):
    relatorios = Relatorio.objects.all()
    relatorios_list = []

    for relatorio in relatorios:
        relatorios_list.append({
            'idRelatorio': relatorio.idRelatorio,
            'nomeUsuario': relatorio.nomeUsuario,
            'dataEmissao': relatorio.dataEmissao,
            'acuracia': relatorio.acuracia,
            'filial': relatorio.filial,
            'silo': relatorio.silo,
            'Usuario_email': relatorio.Usuario_email,
            'urlFoto': relatorio.urlFoto,
            'status': relatorio.status
        })

    return JsonResponse({'relatorios': relatorios_list}, safe=False)

def processar_cadastro_relatorio(request):
    data = json.loads(request.body)
    nomeUsuario = data.get('nomeUsuario')
    dataEmissao = data.get('dataEmissao')
    acuracia = f'{random.randint(1, 100)}%'
    filial = data.get('filial')
    silo = data.get('silo')
    Usuario_email = data.get('Usuario_email')
    status = 'esperando'

    # Supondo que você tenha a lógica de tratamento do upload de arquivos para 'urlFoto'
    urlFoto = f"{Usuario_email}_{dataEmissao}"

    # Crie um novo relatório no banco de dados
    relatorio = Relatorio(
        nomeUsuario=nomeUsuario,
        dataEmissao=dataEmissao,
        acuracia=acuracia,
        filial=filial,
        silo=silo,
        Usuario_email=Usuario_email,
        urlFoto=urlFoto,
        status=status
    )
    relatorio.save()

    # Redirecione para uma página de sucesso ou outra página relevante
    return JsonResponse({'mensagem': 'Relatório cadastrado com sucesso'}, status=200)




@middlewareAcessoAdm
def listar_usuarios(request):
    usuarios = Usuario.objects.all()
    usuarios_list = []
    for usuario in usuarios:
        usuarios_list.append({
            'email': usuario.email,
            'nome': usuario.nome,
            'senha': usuario.password,
            'tipoUsuario': usuario.tipoUsuario,
         })
    return JsonResponse({'usuarios': usuarios_list}, safe=False)

@middlewareAcessoAdm
def atualizar_usuario(request):
    data = json.loads(request.body)
    print(data)
    email = data.get('email')
    senha = data.get('senha')
    
    # Busca o usuário pelo e-mail
    usuario = get_object_or_404(Usuario, email=email)

    # Atualiza os campos do usuário
    usuario.nome = data.get('nome', usuario.nome)
    
    # Verifica se a senha foi fornecida e a atualiza
    if senha:
        usuario.password = make_password(senha)
    
    usuario.tipoUsuario = data.get('tipoUsuario', usuario.tipoUsuario)

    # Salva o usuário no banco de dados
    usuario.save()

    return JsonResponse({'mensagem': f'Usuário {email} atualizado com sucesso'})

@middlewareAcessoAdm
def deletar_usuario(request):
    data = json.loads(request.body)
    # Encontrar o usuário pelo email
    email = data.get('id')

    usuario = get_object_or_404(Usuario, email=email)

    # Agora, você pode excluir o usuário
    usuario.delete()

    return JsonResponse({'mensagem': f'Usuário com email {email} excluído com sucesso.'})

def processar_login(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        # Obtenha os dados do formulário
        email = data.get('email')
        password = data.get('password')

        # Verifique as credenciais manualmente
        try:
            user = Usuario.objects.get(email=email)
            if check_password(password, user.password):
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
        return JsonResponse({'mensagem': 'Usuario cadastrado com sucesso'}, status=200)

