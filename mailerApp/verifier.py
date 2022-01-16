from django.http import response
from .models import EmailRecords as __ER__
from django.utils import timezone
from django.conf import settings
import requests
import json


def SaveRecord(data):
    try:
        obj = __ER__()
        obj.name = data['name']
        obj.email = data['email']
        obj.subject = data['subject']
        obj.message = data['message']
        obj.set_timestamp
        obj.save()
        return obj
    except:
        return None


def is_scammer(email):
    last_message = __ER__.objects.filter(email=email).order_by("-send_at")
    if not len(last_message):
        return False
    last_message = last_message[0]
    # we can compare dates itself
    if last_message.send_at.day == timezone.now().day and last_message.send_at.month == timezone.now().month and last_message.send_at.year == timezone.now().year:
        return True
    return False


def captcha_manager(client):
    server_key = settings.CAPTCHA_SERVER_CODE
    client_key = client
    
    data = {
        'response':client_key,
        'secret':server_key
    }

    res = requests.post('https://www.google.com/recaptcha/api/siteverify',data=data)
    response = json.loads(res.text)
    verify = response["success"]
    return verify


def validate_email(email):
    # validates email
    if email.count('@')!=1:
        return False
    if '@.' in email:
        return False
    if email.index('@') == 0 or email.index('@') == len(email)-1:
        return False
    if email.count('.') == 0:
        return False
    try:
        email = email.split('@')
        email = email[1]
        if '.' not in email:
            return False
    except:
        pass
    return True