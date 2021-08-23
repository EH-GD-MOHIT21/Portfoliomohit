from django.contrib import admin

# Register your models here.

from .models import EmailRecords

admin.site.register(EmailRecords)