from django.http import HttpResponseRedirect
from django.shortcuts import render
from django.urls import reverse

from learning_logs.forms import TopicForm, EntryForm
from learning_logs.models import Topic


def index(request):
    return render(request, "learning_logs/index.html")


def topics(request):
    context = {'topics': Topic.objects.order_by('date_added')}
    return render(request, 'learning_logs/topics.html', context)


def topic(request, topic_id):
    t = Topic.objects.get(id=topic_id)
    entries = t.entry_set.order_by('-date_added')
    context = {'topic': t, 'entries': entries}
    return render(request, 'learning_logs/topic.html', context)


def new_topic(request):
    if request.method != "POST":
        form = TopicForm()
    else:
        form = TopicForm(request.POST)
        if form.is_valid():
            form.save()
            return HttpResponseRedirect(reverse('learning_logs:topics'))

    context = {'form': form}
    return render(request, 'learning_logs/new_topic.html', context)


def new_entry(request, topic_id):
    t = Topic.objects.get(id=topic_id)
    if request.method != "POST":
        form = EntryForm()
    else:
        form = EntryForm(request.POST)
        if form.is_valid():
            entry = form.save(commit=False)
            entry.topic = t
            entry.save()
            return HttpResponseRedirect(reverse('learning_logs:topic', args=[topic_id]))

    context = {'topic': t, 'form': form}
    return render(request, 'learning_logs/new_entry.html', context)
