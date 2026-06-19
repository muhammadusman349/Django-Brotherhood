from django.urls import path
from .views import ContactListCreateView, ContactRetrieveUpdateDestroyView

urlpatterns = [
    path('contact/', ContactListCreateView.as_view(), name='contact-list-create'),
    path('contact/<int:pk>/', ContactRetrieveUpdateDestroyView.as_view(), name='contact-detail'),
]
