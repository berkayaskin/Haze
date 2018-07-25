from django.views.generic.base import TemplateView
from .serializers import UserSerializer, PostSerializer
from rest_framework import viewsets
from .models import User, Post
from django.shortcuts import render

class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer

class PostViewSet(viewsets.ModelViewSet):
    queryset = Post.objects.all()
    serializer_class = PostSerializer

class HomeView(TemplateView):
    template_name = 'index.html'

