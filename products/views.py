from rest_framework import generics
from rest_framework.filters import SearchFilter, OrderingFilter
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.pagination import PageNumberPagination
from django_filters.rest_framework import DjangoFilterBackend
from django.shortcuts import get_object_or_404
from .models import Product, Banner
from .serializers import ProductSerializer, BannerSerializer
from .filters import ProductFilter
from categories.models import Category


class ProductPagination(PageNumberPagination):
    page_size = 6
    page_size_query_param = 'page_size'
    max_page_size = 100


class ProductView(generics.GenericAPIView):
    queryset = Product.objects.select_related('category').all()
    serializer_class = ProductSerializer
    filterset_class = ProductFilter
    pagination_class = ProductPagination

    filter_backends = [DjangoFilterBackend, SearchFilter, OrderingFilter]
    search_fields = ['name', 'description']
    ordering_fields = ['name', 'price', 'created_at']

    def get(self, request, id=None):
        if id:
            product = get_object_or_404(self.get_queryset(), id=id)
            serializer = self.get_serializer(product)
            return Response(serializer.data)

        queryset = self.filter_queryset(self.get_queryset())
        page = self.paginate_queryset(queryset)
        if page is not None:
            serializer = self.get_serializer(page, many=True)
            return self.get_paginated_response(serializer.data)

        serializer = self.get_serializer(queryset, many=True)
        return Response(serializer.data)


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
