const checkoutTotal = document.querySelector(".checkout-total");
const checkoutBtn = document.querySelector(".checkout-pay");
const checkoutWrapper = document.querySelector(".checkout-wrapper");
const checkoutEmail = document.querySelector(".checkout-email");
const checkoutCardInput = document.querySelector(".card-info-input");
const checkout = document.querySelector(".checkout-email");

const fomatPrice = (value) => {
  let price = parseFloat(value) / 100;

  return `${price.toFixed(2)}€`;
};

const total = JSON.parse(localStorage.getItem("total"));
checkoutTotal.textContent = fomatPrice(total);

const user = JSON.parse(localStorage.getItem("user"));
checkoutEmail.textContent = user?.email;

const proccedTransaction = (card, total) => {
  // payment
};

checkoutBtn.addEventListener("click", () => {
  const checkoutCardValue = checkoutCardInput.value;
  const checkoutTotalValue = checkoutTotal.value;

  proccedTransaction(checkoutCardValue, checkoutCardValue);

  localStorage.setItem("cart", []);
  localStorage.setItem("total", 0);

  checkoutWrapper.innerHTML = `
  <div class="checkout-title">
    <h3>Transaction completed successfully</h3>
    <p>
      Paid 0€ by credit card with number: <p class="checkout-success__credit-card"></p> 
    </p>
    <i class="fas fa-check-circle success-icon"></i>
  </div>
  `;

  const checkoutSuccessCreditCard = document.querySelector(
    ".checkout-success__credit-card"
  );
  const checkoutSuccessTotal = document.querySelector(
    ".checkout-success__total"
  );

  checkoutSuccessTotal.innerHTML = checkoutTotalValue;
  checkoutSuccessCreditCard.innerHTML = checkoutCardValue;
});
