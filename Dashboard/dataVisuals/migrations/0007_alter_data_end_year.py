# Generated by Django 5.0.6 on 2024-07-01 13:59

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('dataVisuals', '0006_alter_data_end_year'),
    ]

    operations = [
        migrations.AlterField(
            model_name='data',
            name='end_year',
            field=models.CharField(max_length=40),
        ),
    ]