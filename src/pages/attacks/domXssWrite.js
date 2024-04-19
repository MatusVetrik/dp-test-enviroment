const exportCheckoutBtn = document.querySelector('.checkout-export');
const exportName = document.querySelector('.export-name');

const formatPrice = (price) => {
    return new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "EUR",
    }).format((price / 100).toFixed(2));
};

exportCheckoutBtn.addEventListener('click', (e) => {
    const name = exportName.value;

    const cartContent = JSON.parse(localStorage.getItem('cart'));

    if (cartContent) {
        const myWindow = window.open();
        myWindow.document.write(`<h1 style="margin: 1rem 0 0 2rem;">${name ?? 'My order'}</h1>`);
        cartContent.forEach((el) => {
            myWindow.document.write(`
                <ul>
                    <li><b>Name:</b> ${el.name}</li>
                    <li><b>Price:</b> ${formatPrice(el.price)}</li>
                    <li><b>Amount:</b> ${el.amount}</li>
                    <br/>
                </ul>`);
        });
    }
})