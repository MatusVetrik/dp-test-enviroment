const linkEl = document.getElementById("home-link");
const buttonEl = document.getElementById("home-button");

const redirect = () => {
    const urlParams = new URLSearchParams(window.location.search);
    const redirectParam = urlParams.get('redirect')
    location.assign(redirectParam);
}

buttonEl.addEventListener('click', redirect)