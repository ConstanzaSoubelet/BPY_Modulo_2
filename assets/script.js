$(document).ready(function(){
    $('#boton').click(function(){ // misma notacion para los selectores por etiqueta. Retornará el primer elemento encontrado con el id correspondiente 
        let name = $('#name').val();
        let email = $('#email').val();
        let message = $('#message').val();

        if(name === "" || email === "" || message === "") {
            alert('Por favor, complete todos los campos.');
        } else {
            $('#nombre').text(name);
            $('#correo').text(email);
            $('#mensaje').text(message);
            $('#contactForm').trigger('reset');
        }
    });
});
