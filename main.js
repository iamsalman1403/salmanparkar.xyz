function openMenu() {
    document.getElementById('side-menu').style.width = '250px';
}

function closeMenu() {
    document.getElementById('side-menu').style.width = '0px';
}

$(document).ready(function () {
    $("#smoothScroll").on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 1500, function () {
                window.location.hash = hash;
            });
        }
    });
});
