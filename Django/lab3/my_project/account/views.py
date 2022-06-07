from django.shortcuts import redirect, render

from django.contrib.auth.forms import UserCreationForm
from django.urls import reverse
from .forms import AccountForm
from django.contrib.auth import authenticate, login


def signup(request):
    form = AccountForm(request.POST or None)
    if request.method == 'GET':
        return render(request, template_name='registration/signup.html', context={'form': form})
    elif request.method == 'POST':
        if form.is_valid():
            new_user = form.save()
            new_user = authenticate(username=form.cleaned_data['username'],
                                    password=form.cleaned_data['password1'],
                                    )
            login(request, new_user)
            return redirect(reverse('actor:list'))
        else:
            return render(request, template_name='registration/signup.html', context={'form': form})
