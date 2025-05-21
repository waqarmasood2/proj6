from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('app6.urls')),
    path('admin6/',include('admin6.urls')),
] + static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
