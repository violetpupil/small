from django.contrib.auth.decorators import login_required
from django.http import Http404
from django.shortcuts import render, redirect

from learning_logs.forms import TopicForm, EntryForm
from learning_logs.models import Topic, Entry


def index(request):
    return render(request, "learning_logs/index.html")


@login_required
def topics(request):
    context = {'topics': Topic.objects.filter(owner=request.user).order_by('date_added')}
    return render(request, 'learning_logs/topics.html', context)


@login_required
def topic(request, topic_id):
    t = Topic.objects.get(id=topic_id)
    if t.owner != request.user:
        raise Http404
    entries = t.entry_set.order_by('-date_added')
    context = {'topic': t, 'entries': entries}
    return render(request, 'learning_logs/topic.html', context)


@login_required
def new_topic(request):
    if request.method != "POST":
        form = TopicForm()
    else:
        form = TopicForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('learning_logs:topics')

    context = {'form': form}
    return render(request, 'learning_logs/new_topic.html', context)


@login_required
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
            return redirect('learning_logs:topic', topic_id)

    context = {'topic': t, 'form': form}
    return render(request, 'learning_logs/new_entry.html', context)


@login_required
def edit_entry(request, entry_id):
    entry = Entry.objects.get(id=entry_id)
    t = entry.topic
    if t.owner != request.user:
        raise Http404

    if request.method != 'POST':
        form = EntryForm(instance=entry)
    else:
        form = EntryForm(instance=entry, data=request.POST)
        if form.is_valid():
            form.save()
            return redirect('learning_logs:topic', t.id)

    context = {'entry': entry, 'topic': t, 'form': form}
    return render(request, 'learning_logs/edit_entry.html', context)
