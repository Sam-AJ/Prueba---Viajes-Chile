$(function(){

    // Tooltip Bootstrap JS

    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl)
    })

    // Navbar
    
    $(".navbar-nav a").click(function(){
        var link = this.hash
        $("html, body").animate({scrollTop: $(link).offset().top -70}, 800)
    });

    $(window).scroll(function(){
        $("nav").toggleClass("scrolled", $(this).scrollTop() >70);
    });

    // Quiénes somos

    $(".row .col-12 .text-center").click(function(){
        $(".row .col-12 p").toggle();
    });

    // Destacados

    $(".card .card-img-top").hover(function(){
        $(".card .card-body p").toggleClass("text-truncate");
    });

    // Contacto

    $("#enviarMensaje").click(function(){
        alert("El mensaje fue enviado correctamente");
    });

})