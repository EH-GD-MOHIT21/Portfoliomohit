# Generated by Django 3.2.6 on 2022-09-03 18:52

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('mailerApp', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='RenderPermission',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('site_domain', models.CharField(max_length=50, unique=True)),
                ('render_template', models.BooleanField(default=True)),
                ('description', models.TextField(blank=True, null=True)),
            ],
        ),
    ]