from django.shortcuts import render
from django.views.generic import TemplateView
from django.core.mail import send_mail
from django.template.loader import render_to_string
from django.utils.html import strip_tags

from django.contrib.auth.models import User
from rest_framework import generics, permissions
from rest_framework.views import APIView
from rest_framework.response import Response

from .models import Note
from .serializers import (
    NoteSerializer,
    UserSerializer,
    UserCreateSerializer
    
)
# Create your views here.

# Notes
class NoteListCreate(generics.ListCreateAPIView):
    serializer_class = NoteSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        return Note.objects.filter(author=self.request.user)

    def perform_create(self, serializer):
        note = serializer.save(author=self.request.user)

        # Trigger email after creating note
        try:
            subject = 'New Note Created'
            html_message = render_to_string(
                'quote.html',  # Template path
                {
                    'name': self.request.user.get_full_name() or self.request.user.username,
                    'email': self.request.user.email,
                    'note_title': note.title,
                    'note_content': note.content,
                }
            )
            plain_message = strip_tags(html_message)
            from_email = 'francis@dataclubcenter.com'
            to_email = [self.request.user.email, 'francis@dataclubcenter.com']

            send_mail(
                subject,
                plain_message,
                from_email,
                to_email,
                html_message=html_message
            )
        except Exception as e:
            print(f"Email sending failed: {e}")


class NoteDelete(generics.DestroyAPIView):
    serializer_class = NoteSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        return Note.objects.filter(author=self.request.user)


# User management
class CreateUserView(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [permissions.AllowAny]


class CurrentUserView(APIView):
    permission_classes = [permissions.IsAuthenticated]

    def get(self, request):
        serializer = UserCreateSerializer(request.user)
        return Response(serializer.data)

