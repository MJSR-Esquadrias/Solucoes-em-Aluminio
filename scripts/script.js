const form = document.getElementById('formContato');

if (form) {
    form.addEventListener('submit', function (e) {
        e.preventDefault();
        alert('Mensagem enviada ! Agradecemos o contato , Em breve retornaremos.');
        form.reset();
    });
}