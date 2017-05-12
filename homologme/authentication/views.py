from django.http import HttpResponse

from django.shortcuts import render


def index(request):
    # return HttpResponse("Hello, world. You're at the authentication index.")
    return render(request, 'index.html')
