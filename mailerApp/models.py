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