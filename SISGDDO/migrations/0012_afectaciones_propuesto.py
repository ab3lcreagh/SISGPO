# Generated by Django 4.1.3 on 2023-05-10 11:01

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('SISGDDO', '0011_afectaciones_responsable'),
    ]

    operations = [
        migrations.AddField(
            model_name='afectaciones',
            name='propuesto',
            field=models.ForeignKey(null=True, on_delete=models.SET('Trabajador eliminado de la Base de datos'), related_name='propuesto', to='SISGDDO.trabajador', verbose_name='Promotor de Afeccion*'),
        ),
    ]
