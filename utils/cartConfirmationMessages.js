function addConfirmationFunction() {
    let text = "Do you want to add this product to cart?";
    if (confirm(text) == true) {
      window.alert("Selected product was successfully added to the cart")
    }
}

function deleteConfirmationFunction() {
    let text = "Do you want to remove this product from cart?";
    if (confirm(text) == true) {
      window.alert("Selected product was successfully removed from the cart")
    }
}