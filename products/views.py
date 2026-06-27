from rest_framework import generics
from rest_framework.filters import SearchFilter, OrderingFilter
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.pagination import PageNumberPagination
from rest_framework import status
from django_filters.rest_framework import DjangoFilterBackend
from django.shortcuts import get_object_or_404
from django.http import FileResponse, Http404
from .models import Product, Banner, Catalog
from .serializers import ProductSerializer, BannerSerializer, CatalogSerializer
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


class CatalogView(generics.GenericAPIView):
    queryset = Catalog.objects.all()
    serializer_class = CatalogSerializer

    filter_backends = [DjangoFilterBackend, SearchFilter, OrderingFilter]
    filterset_fields = ['category', 'year']
    search_fields = ['title']
    ordering_fields = ['year', 'title', 'upload_date', 'download_count']

    def get(self, request, id=None):
        if id:
            catalog = get_object_or_404(self.get_queryset(), id=id)
            serializer = self.get_serializer(catalog)
            return Response(serializer.data)

        queryset = self.filter_queryset(self.get_queryset())
        serializer = self.get_serializer(queryset, many=True)
        return Response(serializer.data)


class CatalogDownloadView(APIView):
    def post(self, request, id):
        catalog = get_object_or_404(Catalog, id=id)
        
        # Check password if required
        if catalog.password:
            provided_password = request.data.get('password')
            if not provided_password or provided_password != catalog.password:
                return Response(
                    {'error': 'Invalid or missing password'}, 
                    status=status.HTTP_403_FORBIDDEN
                )
        
        # Check if file exists
        if not catalog.catalog_file:
            return Response(
                {'error': 'No file available for download'}, 
                status=status.HTTP_404_NOT_FOUND
            )
        
        # Increment download count
        catalog.increase_download()
        
        # Return file response
        try:
            return FileResponse(
                catalog.catalog_file.open('rb'),
                as_attachment=True,
                filename=catalog.catalog_file.name.split('/')[-1]
            )
        except Exception as e:
            return Response(
                {'error': 'Error downloading file'}, 
                status=status.HTTP_500_INTERNAL_SERVER_ERROR
            )
