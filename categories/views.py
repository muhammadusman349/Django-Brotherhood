from rest_framework import generics
from rest_framework.filters import SearchFilter, OrderingFilter
from rest_framework.response import Response
from django.shortcuts import get_object_or_404
from .models import Category
from .serializers import CategorySerializer


class CategoryView(generics.GenericAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer

    filter_backends = [SearchFilter, OrderingFilter]
    search_fields = ['name', 'description']
    ordering_fields = ['name', 'created_at']

    def get(self, request, id=None):
        if id:
            category = get_object_or_404(self.get_queryset(), id=id)
            serializer = self.get_serializer(category)
            return Response(serializer.data)

        queryset = self.filter_queryset(self.get_queryset())
        serializer = self.get_serializer(queryset, many=True)
        return Response(serializer.data)
