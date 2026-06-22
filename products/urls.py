from django.urls import path
from .views import ProductListCreateView, ProductRetrieveUpdateDestroyView, StatsAPIView

urlpatterns = [
    path('products/', ProductListCreateView.as_view(), name='product-list-create'),
    path('products/<int:pk>/', ProductRetrieveUpdateDestroyView.as_view(), name='product-detail'),
    path('stats/', StatsAPIView.as_view(), name='stats'),
]
