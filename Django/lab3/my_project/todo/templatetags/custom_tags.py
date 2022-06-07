from django import template

register = template.Library()

@register.simple_tag
def my_custom_tag():
    return "Hello from custom tag"

@register.filter
def my_filter(data):
    return data[:3]