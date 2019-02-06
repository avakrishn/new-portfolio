

window.onload = function () {
    window.onscroll = function () {
        document.querySelector('.scroll').style.visibility = "hidden";
    };

    setTimeout(function () {
        document.querySelector('.bounce').style.visibility = 'visible';
        // document.querySelector('#navbar-index').classList.add("navbar-fade-in");
        // document.querySelector('#navbar-index').style.visibility = "visible";
    }, 1000);

};




