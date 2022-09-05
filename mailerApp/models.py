from django.db import models
from django.utils import timezone
# Create your models here.


class EmailRecords(models.Model):

    name = models.CharField(max_length=40)
    email = models.EmailField()
    subject = models.CharField(max_length=100)
    message = models.TextField()
    send_at = models.DateField()

    @property
    def set_timestamp(self):
        self.send_at = timezone.now().date()



class RenderPermission(models.Model):
    site_domain = models.CharField(unique=True,max_length=50)
    render_template = models.BooleanField(default=True)
    # if render_template False
    title = models.CharField(max_length=100,null=True,blank=True)
    description = models.TextField(null=True,blank=True)