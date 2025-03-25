from django.shortcuts import render, redirect
from django.contrib import messages
from .forms import ContactForm

# Create your views here.

def home(request):
    return render(request, 'main/home.html')

def projects(request):
    projects = [
        {
            'title': 'Project 1',
            'description': 'Description of project 1',
            'technologies': ['Python', 'Django', 'HTML/CSS'],
            'github_url': '#',
            'live_url': '#'
        },
        {
            'title': 'Project 2',
            'description': 'Description of project 2',
            'technologies': ['Python', 'Flask', 'JavaScript'],
            'github_url': '#',
            'live_url': '#'
        },
        # Add more projects as needed
    ]
    return render(request, 'main/projects.html', {'projects': projects})

def about(request):
    return render(request, 'main/about.html')

def contact(request):
    if request.method == 'POST':
        form = ContactForm(request.POST)
        if form.is_valid():
            form.save()
            messages.success(request, 'Your message has been sent successfully!')
            return redirect('contact')
    else:
        form = ContactForm()
    return render(request, 'main/contact.html', {'form': form})

def tictactoe(request):
    return render(request, 'main/tictactoe.html')
