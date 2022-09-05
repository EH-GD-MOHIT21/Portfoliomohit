from django.http.response import HttpResponse
from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from django.conf import settings
import os
import smtplib
from email.message import EmailMessage
from .verifier import *
from .models import RenderPermission


class sendmail(APIView):
    def post(self,request):
        try:
            dataReq = {
                'email':request.data["email"],
                'subject':request.data["subject"],
                'message':request.data["message"],
                'name':request.data["name"]
            }
            if not validate_email(dataReq['email']):
                return Response({'status':404,'result':'Invalid Email.'})
            request.data["g-recaptcha-response"]
        except:
            return Response({'status':404,'message':'Invalid Request.'})
        if is_scammer(dataReq["email"]):
            return Response({'result':'Only 1 message allowed to be send per day.'})
        if not captcha_manager(request.data["g-recaptcha-response"]):
            return Response({'status':404,'result':'Please Fillout Captcha'})
        message = EmailMessage()
        message['To'] = "experimentallyf@gmail.com"
        message['From'] = settings.EMAIL_SENDER
        message['Subject'] = request.data["subject"]
        message.set_content(request.data["message"] + f"\n \n \n Contact {request.data['name']} on \n" + request.data["email"])
        try:
            server = smtplib.SMTP('smtp.gmail.com', 587)
            server.starttls()
            server.login(settings.EMAIL_SENDER, settings.PASS_MAIL)
            server.send_message(message)
            if SaveRecord(dataReq) != None:
                return Response({'result':'Success'})
            else:
                return Response({'result':"Server Error Please Retry."})
        except Exception as e:
            print(e)
            return Response({'result': 'Email Not Send.'})



def RenderPermissionView(request):
    obj = RenderPermission.objects.get(site_domain='mohitsatija')
    if obj.render_template:
        return render(request,'index.html')
    else:
        return render(request,'maintain.html',{'obj':obj})