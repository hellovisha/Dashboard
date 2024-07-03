from django.db import models

# Create your models here.

class Data(models.Model):
    end_year = models.CharField(max_length=40)
    intensity =  models.IntegerField()
    sector = models.CharField(max_length=40)
    topic = models.CharField(max_length=40)
    insight = models.CharField(max_length=255)
    url = models.CharField(max_length=555)
    region = models.CharField(max_length=40)
    start_year = models.CharField(max_length=40)
    impact = models.CharField(max_length=40)
    added = models.CharField(max_length=40)
    published = models.CharField(max_length=40)
    country = models.CharField(max_length=40)
    relevance = models.IntegerField()
    pestle = models.CharField(max_length=40)
    source = models.CharField(max_length=255)
    title = models.TextField()
    likelihood = models.IntegerField()