from rest_framework import generics
from rest_framework.filters import SearchFilter, OrderingFilter
from rest_framework.response import Response
from rest_framework.views import APIView
from django_filters.rest_framework import DjangoFilterBackend
from .models import Product, Banner
from .serializers import ProductSerializer, BannerSerializer
from categories.models import Category


class ProductListCreateView(generics.ListCreateAPIView):
    queryset = Product.objects.select_related('category').all()
    serializer_class = ProductSerializer
    filter_backends = [DjangoFilterBackend, SearchFilter, OrderingFilter]
    filterset_fields = ['category', 'feature']
    search_fields = ['name', 'description']
    ordering_fields = ['name', 'price', 'created_at', 'stock']


class ProductRetrieveUpdateDestroyView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Product.objects.select_related('category').all()
    serializer_class = ProductSerializer


class StatsAPIView(APIView):
    """
    API endpoint to get statistics data including products count and categories count
    """
    def get(self, request):
        products_count = Product.objects.count()
        categories_count = Category.objects.count()

        return Response({
            'products_count': products_count,
            'categories_count': categories_count
        })


class BannerListView(generics.ListAPIView):
    queryset = Banner.objects.filter(is_active=True)
    serializer_class = BannerSerializer
    ordering = ['position', '-created_at']
