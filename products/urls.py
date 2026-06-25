from django.urls import path
from .views import ProductView, StatsAPIView, BannerListView

urlpatterns = [
    path('products/', ProductView.as_view(), name='product-list'),
    path('products/<int:id>/', ProductView.as_view(), name='product-detail'),
    path('stats/', StatsAPIView.as_view(), name='stats'),
    path('banners/', BannerListView.as_view(), name='banner-list'),
]
