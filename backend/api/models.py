from django.db import models
from django.contrib.auth.models import User

# api/models.py
# This file defines the models for our application.
# We will create a Note model that has a title, content, created_at timestamp,
# and a foreign key relationship to the User model.

class Note(models.Model):
    title = models.CharField(max_length=100)
    content = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)

    author = models.ForeignKey(
        User,
        on_delete=models.CASCADE,
        related_name="notes"  # user.notes.all()
    )

    def __str__(self):
        return self.title





