$(document).ready(function()
{
    var botao = $('.bt1');//classe que vai ser clicado
    var dropDown = $('.ul-noticias');//classe do submenu que vai abrir
    botao.on('click', function(event)
    {
        dropDown.stop(true,true).slideToggle();
        event.stopPropagation();
    })
});

$(document).ready(function()
{
    var botao = $('.bt2');
    var dropDown = $('.ul-etreti');
    botao.on('click', function(event)
    {
        dropDown.stop(true,true).slideToggle();
        event.stopPropagation();
    })
});

$(document).ready(function()
{
    var botao = $('.bt3');
    var dropDown = $('.ul-fale');
    botao.on('click', function(event)
    {
        dropDown.stop(true,true).slideToggle();
        event.stopPropagation();
    })
});