from django.contrib.auth import logout, authenticate, login
from django.contrib.auth.forms import UserCreationForm
from django.shortcuts import render, redirect


def logout_view(request):
    logout(request)
    return redirect('learning_logs:index')


def register(request):
    if request.method != 'POST':
        form = UserCreationForm()
    else:
        form = UserCreationForm(data=request.POST)
        if form.is_valid():
            new_user = form.save()
            login(request, authenticate(username=new_user.username, password=new_user.password))
            return redirect('learning_logs:index')

    return render(request, 'users/register.html', {'form': form})
