from django.http import JsonResponse
from django.shortcuts import redirect
from .models import Filial



def processar_cadastro_filial(request):
    if request.method == 'POST':
        nome = request.POST.get('nomeFilial')
        estado = request.POST.get('estado')
        cidade = request.POST.get('cidade')

        # Crie um novo usuário no banco de dados
        filial = Filial(nomeFilial=nome, cidade=cidade, estado=estado)
        filial.save()
        
        # Redirecione para uma página de sucesso ou outra página relevante
        return redirect('http://localhost:3000/telaAdm')


def listar_filiais(request):
    # Obtém todas as filiais do banco de dados
    filiais = Filial.objects.all()
    
    # Converte os dados das filiais para um formato JSON
    filiais_data = [
        {'idFilial': filial.idFilial, 'nomeFilial': filial.nomeFilial}
        for filial in filiais
    ]
    print(filiais_data)
    # Retorna a lista de filiais como JSON
    return JsonResponse(filiais_data, safe=False)
