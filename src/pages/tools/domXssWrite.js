const exportCheckoutBtn = document.querySelector('.checkout-export');
const exportName = document.querySelector('.export-name');

const formatPrice = (price) => {
    return new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "EUR",
    }).format((price / 100).toFixed(2));
};

const getSummary = (cart) => cart.reduce((sum, cur) => sum += cur.price * cur.amount, 0);

exportCheckoutBtn.addEventListener('click', (e) => {
    const name = exportName.value;
    const cartContent = JSON.parse(localStorage.getItem('cart'));

    if (cartContent) {
        const myWindow = window.open();
        myWindow.document.write(`<h1 style="margin: 1rem 0 0 1.5rem;">${name ?? 'My order'}</h1>`);
        cartContent.forEach((el) => {
            myWindow.document.write(`
                <ul>
                    <li><b>Name:</b> ${el.name}</li>
                    <li><b>Price:</b> ${formatPrice(el.price)}</li>
                    <li style="margin-bottom: 0.5rem"><b>Amount:</b> ${el.amount}</li>
                </ul>`);
        });

        const summary = getSummary(cartContent);
        myWindow.document.write(`<h4 style="margin: 0.5rem 0 0 1.5rem;">Summary: ${formatPrice(summary)}</h4>`)
    }
})