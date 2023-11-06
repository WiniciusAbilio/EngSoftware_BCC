from django.http import JsonResponse
from django.shortcuts import redirect
from filial.models import Filial
from .models import Silo


def listar_filiais(request):
    # Obtém todas as filiais do banco de dados
    filiais = Filial.objects.all()
    
    # Converte os dados das filiais para um formato JSON
    filiais_data = [
        {'idFilial': filial.idFilial, 'nomeFilial': filial.nomeFilial}
        for filial in filiais
    ]
    
    # Retorna a lista de filiais como JSON
    return JsonResponse(filiais_data, safe=False)


def processar_cadastro_silo(request):
    if request.method == 'POST':
        idFilial = request.POST.get('idFilial')
        nome = request.POST.get('nomeSilo')

        # Crie um novo usuário no banco de dados
        silo = Silo(nomeSilo=nome, Filial_idFilial=idFilial)
        silo.save()
        
        # Redirecione para uma página de sucesso ou outra página relevante
        return redirect('http://localhost:3000/telaAdm')

