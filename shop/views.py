from django.shortcuts import render, redirect
from .models import Product, Order
from django.core.paginator import Paginator
# Create your views here.

def index(request):
    # product_objects = Product.objects.all()
    product_objects = Product.objects.all().order_by('id')
    
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

def checkout(request):
    if request.method== "POST":
        items = request.POST.get('items', "")
        name = request.POST.get('name', "")
        email = request.POST.get('email', "")
        number = request.POST.get('number', "")
        address = request.POST.get('address', "")
        address2 = request.POST.get('address2', "")
        city = request.POST.get('city', "")
        state = request.POST.get('state', "")
        pincode = request.POST.get('pincode', "")
        total = request.POST.get('total', "")
        
        order = Order(items=items, name=name, email=email, number=number, address=address, address2=address2, city=city, state=state, pincode=pincode, total=total) 
        order.save()
        return redirect('/')

    return render(request, "shop/checkout.html")

def about(request):
    return render(request, "shop/about.html")