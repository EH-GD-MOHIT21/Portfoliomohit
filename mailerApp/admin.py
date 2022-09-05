from django.contrib import admin

# Register your models here.

from .models import EmailRecords,RenderPermission

admin.site.register(EmailRecords)
admin.site.register(RenderPermission)