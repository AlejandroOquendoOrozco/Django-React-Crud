from rest_framework import serializers
from .models import Curso

class CursoSerializer(serializers.ModelSerializer):
    
    class Meta:
       model=Curso
       # fields=('_codigo','_nombre_materia','_creditos','_horario')
       fields='__all__'