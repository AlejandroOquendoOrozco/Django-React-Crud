
from rest_framework import viewsets
from .serializer import CursoSerializer
from.models import Curso
# Create your views here.



class CursoView(viewsets.ModelViewSet):
       
       serializer_class=CursoSerializer
       queryset=Curso.objects.all()

