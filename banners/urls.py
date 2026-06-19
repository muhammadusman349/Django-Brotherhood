from django.urls import path
from .views import BannerListCreateView, BannerRetrieveUpdateDestroyView

urlpatterns = [
    path('banners/', BannerListCreateView.as_view(), name='banner-list-create'),
    path('banners/<int:pk>/', BannerRetrieveUpdateDestroyView.as_view(), name='banner-detail'),
]
