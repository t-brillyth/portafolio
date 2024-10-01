$(window).on('load', function() {
		
	/* -----------------------------------
				1. Preloader
	----------------------------------- */
	$("#preloader").delay(1000).addClass('loaded');
	

	
	/* -----------------------------------
			3. Isotope Portfolio Setup
	----------------------------------- */
    if( $('.portfolio-items').length ) {
        var $elements = $(".portfolio-items"),
            $filters = $('.portfolio-filter ul li');
        $elements.isotope();

        $filters.on('click', function(){
            $filters.removeClass('active');
            $(this).addClass('active');
            var selector = $(this).data('filter');
            $(".portfolio-items").isotope({
                filter: selector,
                hiddenStyle: {
                    transform: 'scale(.2) skew(30deg)',
                    opacity: 0
                },
                visibleStyle: {
                    transform: 'scale(1) skew(0deg)',
                    opacity: 1,
                },
                transitionDuration: '.5s'
            });
        });
    }
});

$(document).ready(function() {
    "use strict";
	
	/* -----------------------------------
			6. Active Current Link
	----------------------------------- */
    $('.header-main ul li a').on('click',function() {
        if($('.header-main.on').length) {
            $('.header-main').removeClass('on');
        }
    });
	
	/* -----------------------------------
		7. Mobile Toggle Click Setup
	----------------------------------- */
    $('.header-toggle').on('click', function() {
        $('.header-main').toggleClass('on');
    });
	

	/* -----------------------------------
	      	9. Chart Setup
	----------------------------------- */
	if ($('.chart').length > 0) {
	    $('.chart').easyPieChart({
          trackColor:'#0e0f10',
	      scaleColor:false,
	      easing: 'easeOutBounce',
	      scaleLength: 4,
	      lineCap: 'square',
	      lineWidth:5,
	      size:130,
	      animate: {
	                duration: 2500,
	                enabled: true
	    	}
	 	});
	 }
	
	/* -----------------------------------
	      	10. Portfolio Tilt Setup
	----------------------------------- */
    $('.pt-portfolio .portfolio-items .item figure').tilt({
        maxTilt: 3,
        glare: true,
        maxGlare: .6,
        reverse: true
    });
	
	/* -----------------------------------
	      11. Portfolio Image Link
	----------------------------------- */
	$(".portfolio-items .image-link").magnificPopup({
		type: "image"
	});
	
	/* -----------------------------------
	      12. Portfolio Video Link
	----------------------------------- */
	$(".portfolio-items .video-link").magnificPopup({
		type: "iframe"
	});
	
	/* -----------------------------------
	    14. Validate Contact Form
	----------------------------------- */
    $(document).ready(function () {
        // Inicialmente deshabilitamos el botón de enviar
        $('#submit-btn').prop('disabled', true);
    
        // Escuchar cambios en los campos del formulario
        $('#contact-form input, #contact-form textarea').on('input', function () {
            checkFormFields();
        });
    
        // Función para verificar si todos los campos están completos
        function checkFormFields() {
            let isFormValid = true;
    
            // Recorrer todos los campos del formulario para verificar si están vacíos
            $('#contact-form input, #contact-form textarea').each(function () {
                if ($(this).val().trim() === '') {
                    isFormValid = false;
                }
            });
    
            // Habilitar o deshabilitar el botón de enviar según la validez del formulario
            if (isFormValid) {
                $('#submit-btn').prop('disabled', false); // Habilitar botón si todos los campos están llenos
            } else {
                $('#submit-btn').prop('disabled', true); // Deshabilitar si algún campo está vacío
            }
        }
    
        // Validación con jQuery validate para mantener la funcionalidad anterior
        if ($("#contact-form").length) {
            $("#contact-form").validate({
                rules: {
                    name: {
                        required: true,
                        minlength: 4,
                        maxlength: 50
                    },
                    tema: {
                        required: true,
                        minlength: 5,
                        maxlength: 50
                    },
                    email: {
                        required: true,
                        email: true
                    },
                    note: {
                        required: true,
                        minlength: 5,
                        maxlength: 300
                    }
                },
                messages: {
                    name: {
                        required: "Por favor, introduzca su nombre",
                        minlength: "El nombre debe tener al menos 4 caracteres",
                        maxlength: "El nombre no debe exceder los 50 caracteres"
                    },
                    tema: {
                        required: "Por favor, introduzca su tema",
                        minlength: "El tema debe tener al menos 5 caracteres",
                        maxlength: "El tema no debe exceder los 50 caracteres"
                    },
                    email: {
                        required: "Introduzca su dirección de correo electrónico",
                        email: "Introduzca un correo electrónico válido con '@' y '.'"
                    },
                    note: {
                        required: "Debes agregar un mensaje",
                        minlength: "El mensaje debe tener al menos 5 caracteres",
                        maxlength: "El mensaje no debe exceder los 300 caracteres"
                    }
                },
                submitHandler: function (form) {
                    $.ajax({
                        type: "POST",
                        url: "mail.php",
                        data: $(form).serialize(),
                        beforeSend: function () {
                            $("#loader").show();
                        },
                        success: function () {
                            $("#loader").hide();
                            $("#success").slideDown("slow");
                            setTimeout(function () {
                                $("#success").slideUp("slow");
                            }, 3000);
                            form.reset();
                            $('#submit-btn').prop('disabled', true); // Deshabilitar botón de nuevo tras el envío
                        },
                        error: function () {
                            $("#loader").hide();
                            $("#error").slideDown("slow");
                            setTimeout(function () {
                                $("#error").slideUp("slow");
                            }, 3000);
                        }
                    });
                    return false;
                }
            });
        }
    });
    
});
