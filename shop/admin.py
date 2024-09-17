from django.contrib import admin
from .models import Product, Order
# Register your models here.

admin.site.site_header = "EcomCart"
admin.site.site_title = "EcomCart"
admin.site.index_title = "Manage EcomCart"

class ProductAdmin (admin.ModelAdmin):
    def change_category_to_default(self, request, queryset):
        queryset.update(category = "default")

    change_category_to_default.short_description = "Default Category"

    list_display = ('title', 'price', 'discount_price', 'category', 'description')
    search_fields = ('title', 'category' )
    actions = (change_category_to_default, )
    list_editable = ('price', 'discount_price')
    # fields = ('title', 'price',)

admin.site.register(Product, ProductAdmin)
admin.site.register(Order)