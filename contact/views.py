from rest_framework import generics
from rest_framework.filters import SearchFilter, OrderingFilter
from .models import Contact, PrivacyPolicy, TermsOfService, Shipment
from .serializers import ContactSerializer, PrivacyPolicySerializer, TermsOfServiceSerializer, ShipmentSerializer


class ContactCreateView(generics.CreateAPIView):
    queryset = Contact.objects.all()
    serializer_class = ContactSerializer


class PrivacyPolicyListView(generics.ListAPIView):
    queryset = PrivacyPolicy.objects.all()
    serializer_class = PrivacyPolicySerializer


class PrivacyPolicyDetailView(generics.RetrieveAPIView):
    queryset = PrivacyPolicy.objects.all()
    serializer_class = PrivacyPolicySerializer


class TermsOfServiceListView(generics.ListAPIView):
    queryset = TermsOfService.objects.all()
    serializer_class = TermsOfServiceSerializer


class TermsOfServiceDetailView(generics.RetrieveAPIView):
    queryset = TermsOfService.objects.all()
    serializer_class = TermsOfServiceSerializer


class ShipmentListView(generics.ListAPIView):
    queryset = Shipment.objects.all()
    serializer_class = ShipmentSerializer


class ShipmentDetailView(generics.RetrieveAPIView):
    queryset = Shipment.objects.all()
    serializer_class = ShipmentSerializer
