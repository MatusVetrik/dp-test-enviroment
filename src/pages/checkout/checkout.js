const checkoutTotal = document.querySelector(".checkout-total");
const checkoutForm = document.querySelector(".checkout-form");
const checkoutEmail = document.querySelector(".checkout-email");

const formatPrice = (value) => {
    let price = parseFloat(value) / 100;

    return `${price.toFixed(2)}€`;
};

const total = JSON.parse(localStorage.getItem("total"));
checkoutTotal.value = formatPrice(total);

const user = JSON.parse(localStorage.getItem("user"));
checkoutEmail.textContent = user?.email;


checkoutForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const checkoutCardValue = e.target.card.value;
    const checkoutTotalValue =  e.target.price.value;


    const response = await fetch(`http://localhost:3000/checkout`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            price: checkoutTotalValue,
            card: checkoutCardValue,
        })
    })

    if(response.ok){
       successCheckout(checkoutTotalValue, checkoutCardValue);
    }else{
        console.log('Payment failed')
    }
});

const successCheckout = (total, card) => {
    const checkoutWrapper = document.querySelector(".checkout-wrapper");

    localStorage.setItem("cart", []);
    localStorage.setItem("total", 0);

    checkoutWrapper.innerHTML = `
          <div class="checkout-title">
            <h3>Transaction completed successfully</h3>
            <p>Paid ${total} by credit card with number: ${card}</p>
            <i class="fas fa-check-circle success-icon"></i>
          </div>
          `;
}