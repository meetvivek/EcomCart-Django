if(localStorage.getItem('cart') == null){
    var cart = {};
}
else{
    cart = JSON.parse(localStorage.getItem('cart'));
}

// Initialize popover using Bootstrap 5 API
var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
    
    return new bootstrap.Popover(popoverTriggerEl)
});

// Update cart content and cart count
function updateCart() {
    var cartCount = Object.keys(cart).length;
    document.getElementById("cart-count").textContent = " (" + cartCount + ")";
    DisplayCart(cart);
}

// Function to display cart content inside the popover
function DisplayCart(cart) {
    var cartString = "";
    if (Object.keys(cart).length === 0) {
        cartString = "Your Bag Is Empty. Start Filling It Up!";
    } else {
        cartString += "<ol class='list-unstyled mb-0'>";  // Removed margin and padding from list
        for (var x in cart) {
            var itemTitle = cart[x][1];
            var itemId = x;
            var itemQty = cart[x][0];
            
            cartString += `<li class="list-group-item d-flex justify-content-between align-items-center mb-2">
                <span class="me-4">${itemTitle}</span> <!-- Add margin-end here -->
                <div class="d-flex align-items-center">
                    <span class="me-3">Qty: ${itemQty}</span> <!-- Margin-end for spacing between quantity and remove button -->
                    <button class="btn btn-dark btn-sm remove-item" data-item-id="${itemId}">&#x1F5D1;</button>
                </div>
            </li>`;


        }
        cartString += "</ol>";
        cartString += "<a href='/checkout' class='btn btn-warning btn-sm mt-2' id='checkout'>Checkout</a> ";
    }

    // Adding a checkout button
    

    // Update popover content
    var cartPopoverElement = document.getElementById("cart");
    var popoverInstance = bootstrap.Popover.getInstance(cartPopoverElement);
    
    if (popoverInstance) {
        popoverInstance.dispose(); // Dispose of the existing popover instance
    }

    // Initialize new popover instance with updated content and sanitize disabled
    cartPopoverElement.setAttribute('data-bs-content', cartString);
    new bootstrap.Popover(cartPopoverElement, {
        html: true,
        sanitize: false,  // Disable HTML sanitization
        trigger: 'focus',
        container: 'body'  // Ensure popover appears in the body
    });
}


// Add to cart event listener
$(document).on('click', '.atc', function(){
    var item_id = this.id.toString();
    if(cart[item_id] != undefined){
        quantity = cart[item_id][0] + 1;
        cart[item_id][0] = quantity;
        cart[item_id][2] += parseFloat(document.getElementById("price" + item_id).innerHTML);
    } else {
        quantity = 1;
        price = parseFloat(document.getElementById("price" + item_id).innerHTML);
        name = document.getElementById("title" + item_id).innerHTML; 
        cart[item_id] = [quantity, name, price];
    }
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCart(); // Update cart count and popover content
});

// Add Buy Now button event listener
$(document).on('click', '.buy-now-btn', function(){
    var item_id = $(this).data('product-id');
    if(cart[item_id] != undefined){
        quantity = cart[item_id][0] + 1;
        cart[item_id][0] = quantity;
        cart[item_id][2] += parseFloat(document.getElementById("price" + item_id).innerHTML);
    } else {
        quantity = 1;
        price = parseFloat(document.getElementById("price" + item_id).innerHTML);
        name = document.getElementById("title" + item_id).innerHTML; 
        cart[item_id] = [quantity, name, price];
    }
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCart(); // Update cart count and popover content
    window.location.href = '/checkout'; // Redirect to the checkout page
});

// Add Remove button event listener
$(document).on('click', '.remove-item', function(){
    var item_id = $(this).data('item-id');
    delete cart[item_id];
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCart(); // Update cart count and popover content
});

// Initial cart update
updateCart();