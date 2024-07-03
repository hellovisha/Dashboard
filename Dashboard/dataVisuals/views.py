from django.shortcuts import render
from .models import Data
# Create your views here.

def index(request):
    data = Data.objects.all()
    item = {'item' : data }
    return render(request, 'index.html' , item)