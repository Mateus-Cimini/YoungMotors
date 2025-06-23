$(document).ready(function(){
        $('#carousel-images').slick({
            autoplay:true
        });

        $('.menu-hamburguer').click(function() {
            $('#nav-bar').slideToggle();
        });

        $('#tel').mask('(00) 00000-0000', {
            placeholder: '(00) 91234-5678'
        })

        $('form').validate({
            rules: {
                nome: {
                    required: true
                },
                tel: {
                    required: true
                }, 
                email: {
                    required: true,
                    email: true
                }, 
                car: {
                    required: true
                },
                mensagem: {
                    required: false
                }
            },

            messages: {
                nome: 'Por favor insira seu nome'
            },
            submitHandler: function(form) {
                console.log(form);
                
            },
            invalidHandler: function(evento, validador){
                let camposIncorretos = validador.numberOfInvalids();
                if (camposIncorretos) {
                    alert(`Existe ${camposIncorretos} campos incorretos!`)
                };
                
            }
        });
        $('.lista-veiculos button').click(function() {
            const destino = $('#contato');

            const nomeveiculo =  $(this).parent().find('h3').text();
            $('#car').val(nomeveiculo);

            $('html').animate({
                scrollTop: destino.offset().top
            }, 1000)
        })
    });