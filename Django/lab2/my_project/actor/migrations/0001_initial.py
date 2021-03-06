# Generated by Django 4.0.5 on 2022-06-05 13:55

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Actor',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=50, verbose_name='Actor')),
                ('gender', models.CharField(choices=[('m', 'Male'), ('f', 'Female')], default='m', max_length=6)),
                ('profile_picture', models.ImageField(upload_to='actor')),
            ],
        ),
    ]
