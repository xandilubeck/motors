$(document).ready(function(){
    $('#carousel-images').slick({
        autoplay: true
    });
    $('.menu-traco').click(function(){
        $('nav').slideToggle();
    })
    $('#telefone').mask('( 00 ) 00000 - 0000')

    $('form').validate({
            rules: {
                nome:{
                    required: true
            },
                email: {
                    required: true,
                    email: true
            },
                telefone: {
                    required: true
            },
                veiculos: {
                    required: false
            },
                msg: {
                    required: true
            }
        },
        messages: {
            nome:'Por favor, insira o seu nome',
            email:'Por favor, insira o seu email',
            telefone:'Por favor, insira o seu telefone',
            msg:'Faltou a mensagem'
        },
        invalidHandler: function(evento, validador) {
            let camposIncorretos = validador.numberOfInvalids();
            if (camposIncorretos) {
                alert(`Existem ${camposIncorretos} campos incorretos`)
            }
        }
    })
})

$('.lista-veiculos button').click(function() {
    const destino = $('#contato');
    const nomeVeiculo = $(this).parent().find('h3').text();

    $('#veiculo').val(nomeVeiculo);

    $('html').animate({
        scrollTop: destino.offset().top
    }, 1000)
})