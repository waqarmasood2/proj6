from django.shortcuts import render

def index(request):
    # context ={

    # }
    return render(request, 'index.html')

def about(request):
    return render(request, 'about.html')

def features(request):
    return render(request, 'features.html')

def pricing(request):
    return render(request, 'pricing.html')