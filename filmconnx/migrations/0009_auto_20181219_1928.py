# Generated by Django 2.1.4 on 2018-12-19 19:28

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('filmconnx', '0008_auto_20181217_2144'),
    ]

    operations = [
        migrations.AlterField(
            model_name='jobs',
            name='user',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, related_name='job', to='filmconnx.User'),
        ),
    ]
