---
title: Cheat-> Django
date: "2015-06-13"
description: "Basics"
---

## Table of Contents

- [Basics](#basics)
  - [Virtual Environment](#virtual-environment)
  - [Project and App Setup](#project-and-app-setup)
  - [Models and Databases](#models-and-databases)
  - [Views and URLs](#views-and-urls)
  - [Templates](#templates)
  - [Static Files](#static-files)
  - [Forms](#forms)
  - [Authentication](#authentication)
  - [Admin Panel](#admin-panel)
  - [Middleware](#middleware)

## Basics

### Virtual Environment

```bash
# Install virtualenv
pip install virtualenv

# Create a New Virtual Environment
virtualenv venv # On Windows
python3 -m venv venv # On macOS or Linux

# Activate the Virtual Environment
venv\Scripts\activate  # On Windows
source venv/bin/activate # On macOS or Linux

# Installing Packages
pip install django

# Deactivate the Virtual Environment
deactivate

```

### Project and App Setup

```python
# Create a New Django Project
django-admin startproject project_name

# Create a New Django App
python manage.py startapp app_name

# Run Development Server
python manage.py runserver

```

### Models and Databases

```python
## Define a Model
from django.db import models

class MyModel(models.Model):
    field1 = models.CharField(max_length=100)
    field2 = models.IntegerField()
    # Add more fields as needed

## Create Database Tables
python manage.py makemigrations
python manage.py migrate

## Perform Database Queries
# Get all objects
MyModel.objects.all()

# Filter objects
MyModel.objects.filter(field1='value')

# Get a single object
MyModel.objects.get(pk=1)

# Create a new object
obj = MyModel(field1='value', field2=123)
obj.save()

# Update an object
obj.field1 = 'new_value'
obj.save()

# Delete an object
obj.delete()

```

### Views and URLs

```python
# Create a View Function
from django.shortcuts import render
from django.http import HttpResponse

def my_view(request):
    # Perform operations
    return HttpResponse("Hello, World!")

# Configure URL Patterns
from django.urls import path
from . import views

urlpatterns = [
    path('my-url/', views.my_view, name='my-url-name'),
]

```

### Templates

```html
<!-- my_template.html -->
<!DOCTYPE html>
<html>
  <head>
    <title>{{ title }}</title>
  </head>
  <body>
    <h1>Hello, {{ name }}</h1>
  </body>
</html>
```

```python
# Render a Template in a View
from django.shortcuts import render

def my_view(request):
    context = {
        'name': 'John',
        'title': 'My Page',
    }
    return render(request, 'my_template.html', context)

```

### Static Files

    Create a folder named static in the app directory.
    Add CSS, JS, or other static files in the static folder.

```html
<!-- Load CSS -->
{% load static %}
<link
  rel="stylesheet"
  type="text/css"
  href="{% static 'app_name/style.css' %}"
/>

<!-- Load JS -->
{% load static %}
<script src="{% static 'app_name/script.js' %}"></script>
```

### Forms

```python
# Create a Form
from django import forms

class MyForm(forms.Form):
    field1 = forms.CharField(max_length=100)
    field2 = forms.IntegerField()
    # Add more fields as needed

```

```html
<!-- Render a Form in a Template -->
<form method="post">
  {% csrf_token %} {{ form.as_p }}
  <button type="submit">Submit</button>
</form>
```

```python
# Handle Form Submission in a View
from django.shortcuts import render, redirect
from .forms import MyForm

def my_view(request):
    if request.method == 'POST':
        form = MyForm(request.POST)
        if form.is_valid():
            # Process form data
            return redirect('success-url')
    else:
        form = MyForm()

    return render(request, 'my_template.html', {'form': form})

```

### Authentication

    Ensure 'django.contrib.auth' is included in the INSTALLED_APPS.
    Use UserCreationForm and AuthenticationForm from 'django.contrib.auth.forms' for registration and login.

```python
# Restrict Access to Views
from django.contrib.auth.decorators import login_required

@login_required
def my_protected_view(request):
    # View code for authenticated users only

```

### Admin Panel

```python
# Create a Superuser
python manage.py createsuperuser
# Configure Admin Interface
from django.contrib import admin
from .models import MyModel

admin.site.register(MyModel)

```

### Middleware

```python
# Create Custom Middleware
class MyMiddleware:
    def __init__(self, get_response):
        self.get_response = get_response

    def __call__(self, request):
        # Code to be executed for each request before the view (optional)
        response = self.get_response(request)
        # Code to be executed for each request after the view (optional)
        return response

# Add Middleware to Settings
MIDDLEWARE = [
    # Other middleware...
    'myapp.middleware.MyMiddleware',
]

```
