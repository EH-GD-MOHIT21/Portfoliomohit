
from django import urls
from django.contrib import admin
from django.urls import path,include
from django.conf import settings
from django.conf.urls.static import static
from django.views.static import serve
from django.views.generic import TemplateView
from django.urls import re_path
from django.conf.urls import url

urlpatterns = [
    path('admin/', admin.site.urls),
    path('',include('mailerApp.urls'))
] + static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
else:
    urlpatterns += [url(r'^projectimgs/(?P<path>.*)$', serve,{'document_root': settings.MEDIA_ROOT})]

urlpatterns += [url(r'^static/(?P<path>.*)$', serve,{'document_root': settings.SERVE_STATIC})]
urlpatterns += [re_path(r'^.*',TemplateView.as_view(template_name='index.html'))]
