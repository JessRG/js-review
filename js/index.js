const mainHeader = document.getElementById("mainHeader");

const simpleHandler = () => {
    mainHeader.textContent = "This is the Header for the Index page";
};

mainHeader.addEventListener('load', simpleHandler());