from django.urls import path
from .views import ProductView, StatsAPIView, BannerListView, CatalogView, CatalogDownloadView

urlpatterns = [
    path('products/', ProductView.as_view(), name='product-list'),
    path('products/<int:id>/', ProductView.as_view(), name='product-detail'),
    path('stats/', StatsAPIView.as_view(), name='stats'),
    path('banners/', BannerListView.as_view(), name='banner-list'),
    path('catalogs/', CatalogView.as_view(), name='catalog-list'),
    path('catalogs/<int:id>/download/', CatalogDownloadView.as_view(), name='catalog-download'),
]
