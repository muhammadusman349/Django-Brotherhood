from rest_framework import generics
from rest_framework.filters import SearchFilter, OrderingFilter
from .models import Contact
from .serializers import ContactSerializer


class ContactCreateView(generics.CreateAPIView):
    queryset = Contact.objects.all()
    serializer_class = ContactSerializer
