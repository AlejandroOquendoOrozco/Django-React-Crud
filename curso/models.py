from django.db import models

# Create your models here.


class Curso(models.Model):
    _codigo=models.CharField(max_length=20)
    _nombre_materia=models.CharField(max_length=50)
    _creditos=models.CharField(max_length=10)
    _horario=models.TextField(max_length=100)

   
    def __str__(cls) -> str:
       return cls._nombre_materia