from django.shortcuts import render
from .models import Data
from rest_framework import generics
from .serializers import ItemSerializer
# Create your views here.

class ItemListCreate(generics.ListCreateAPIView):
    queryset = Data.objects.all()
    serializer_class = ItemSerializer

class ItemDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Data.objects.all()
    serializer_class = ItemSerializer


# def index(request):
#     data = Data.objects.all()
#     item = {'item' : data }
#     return render(request, 'index.html' , item)