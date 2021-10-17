from django.shortcuts import render

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
