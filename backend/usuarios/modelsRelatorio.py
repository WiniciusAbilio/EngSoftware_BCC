from django.db import models

class Relatorio(models.Model):
    idRelatorio = models.AutoField(primary_key=True)
    nomeUsuario = models.CharField(max_length=45)
    dataEmissao = models.CharField(max_length=45)
    acuracia = models.CharField(max_length=45)
    urlFoto = models.CharField(max_length=45)
    filial = models.CharField(max_length=45)
    silo = models.CharField(max_length=45)
    status = models.CharField(max_length=45)
    Usuario_email = models.CharField(max_length=150)

    def __str__(self):
        return self.idRelatorio

    class Meta:
        db_table = 'Relatorio'
