# Generated by Django 4.1.3 on 2023-05-10 10:56

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('SISGDDO', '0010_afectaciones_planesdetrabajo_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='afectaciones',
            name='responsable',
            field=models.ForeignKey(null=True, on_delete=models.SET('Trabajador eliminado de la Base de datos'), related_name='responsable', to='SISGDDO.trabajador', verbose_name='Responsable de Afeccion*'),
        ),
    ]
