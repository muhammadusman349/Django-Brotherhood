from django.urls import path
from .views import (
    ContactCreateView,
    ContactListView,
    ContactDetailView,
    ShipmentListView,
    ShipmentDetailView
)

urlpatterns = [
    path('contact/', ContactCreateView.as_view(), name='contact-create'),
    path('contacts/', ContactListView.as_view(), name='contact-list'),
    path('contacts/<int:pk>/', ContactDetailView.as_view(), name='contact-detail'),
    path('shipments/', ShipmentListView.as_view(), name='shipment-list'),
    path('shipments/<int:pk>/', ShipmentDetailView.as_view(), name='shipment-detail'),
]
