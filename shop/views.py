from django.shortcuts import render
from .models import Product
from django.core.paginator import Paginator
# Create your views here.

def index(request):
    product_objects = Product.objects.all()

    search_placeholder = "Search products..."
    product_name = request.GET.get('product_name')
    if product_name != "" and product_name is not None:
        product_objects = product_objects.filter(title__icontains=product_name)
    
    
    paginator = Paginator(product_objects, 3)
    page = request.GET.get('page')
    product_objects = paginator.get_page(page)

    context = {
        'product_objects': product_objects,
        'product_name': product_name,
    }

    return render(request, 'shop/index.html', context)

def detail(request, id):
    product_object = Product.objects.get(id=id)
    return render(request, "shop/detail.html", {'product_object': product_object})