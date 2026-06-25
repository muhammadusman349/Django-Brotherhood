from django.urls import path
from .views import CategoryView

urlpatterns = [
    path('categories/', CategoryView.as_view(), name='category-list'),
    path('categories/<int:id>/', CategoryView.as_view(), name='category-detail'),
]
