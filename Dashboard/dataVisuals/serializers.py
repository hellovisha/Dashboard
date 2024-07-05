from rest_framework import serializers
from .models import Data

class ItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = Data
        fields = ['id', 'end_year', 'intensity','sector','topic','insight','start_year','region',
                  'impact','added','published','country','relevance','pestle',
                  'source','title','likelihood']
