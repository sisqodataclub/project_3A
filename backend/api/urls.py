from django.urls import path
from . import views
from .views import CurrentUserView

urlpatterns = [
    path("notes/", views.NoteListCreate.as_view(), name="note-list"),
    path("notes/delete/<int:pk>/", views.NoteDelete.as_view(), name="delete-note"),
    path("user/", views.CurrentUserView.as_view(), name="current-user"),
    # api/urls.py
    
]