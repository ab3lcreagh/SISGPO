'use strict';
     
const UpdateProducts = function () {
    const form = $("#form_update_product");

    const initInputs= function () {};

    const initEvent = function () {

        $('#id_number').on('change', function () {
            if ($('#id_number').val() != '') {
                hiden_error_message($('#id_number'));
            } else {
                show_error_message($('#id_number'), 'Este campo es requerido');
            }
        });

        $('#id_name').on('change', function () {
            if ($('#id_name').val() != '') {
                hiden_error_message($('#id_name'));

                if($('#id_name').val().match(/^[a-zA-Z áÁéÉíÍóÓúÚñÑ.]+$/)) {
                    hiden_error_message($('#id_name'));
                } else {
                    show_error_message($('#id_name'), 'Este campo solo admite letras');
                }
            } else {
                show_error_message($('#id_name'), 'Este campo es requerido');
            }
        });

    };

    const submitForm = function () {

        $('#form_submit').click(function () {
            if($('#id_number').val() == ''){
                show_error_message($('#id_number'), 'Este campo es requerido');
                return;
            }

            if($('#id_name').val() == ''){
                show_error_message($('#id_name'), 'Este campo es requerido');
                return;
            }

            if(!$('#id_name').val().match(/^[a-zA-Z áÁéÉíÍóÓúÚñÑ.]+$/)) {
                show_error_message($('#id_name'), 'Este campo solo admite letras');
                return;
            }

            var formData = new FormData(form[0]);

            $.ajax({
                type: "POST",
                url: form.attr('action'),
                data: formData,
                contentType: false,
                processData: false,
                success: function (data) {
                    Swal.fire(
                        'La Clasificación de productos y servicios se ha modificado satisfactoriamente!', '', 'success'
                    ).then((result) => {
                        setTimeout(function() {
                            $(location).attr('href', data.results.url);
                        }, 1250);
                    });
                }
            });
        });

    };

    const show_error_message = function (element, message) {
        var x = element.closest('.input-content')[0].querySelector('small');
        x.innerHTML = message;
    };

    const hiden_error_message = function (element) {
        var x = element.closest('.input-content')[0].querySelector('small');
        x.innerHTML = '';
    };

    return {
        init: function () {
            initInputs();
            initEvent();
            submitForm();
        }
    };
}();

$(document).ready(function() {
    UpdateProducts.init();
});