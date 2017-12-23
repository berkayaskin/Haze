from django.conf.urls import url, include
from django.db.models import fields
from rest_framework import routers
from .views import UserViewSet, PostViewSet
from hazeApp.views import HomeView

from . import views


# Routers provide an easy way of automatically determining the URL conf.
router = routers.DefaultRouter()
router.register(r'user', UserViewSet)
router.register(r'post', PostViewSet)

urlpatterns = [
    url(r'^restapi/', include(router.urls)),
    url(r'^api-auth/', include('rest_framework.urls', namespace='rest_framework')),

]