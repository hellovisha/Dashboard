# Generated by Django 5.0.6 on 2024-07-01 13:55

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('dataVisuals', '0003_alter_data_end_year'),
    ]

    operations = [
        migrations.AlterField(
            model_name='data',
            name='url',
            field=models.CharField(max_length=255),
        ),
    ]