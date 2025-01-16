document.getElementById('viewStore').addEventListener('click', function() {
    alert('¡Bienvenido a la tienda de objetos! Aquí puedes ver los objetos nuevos.');
});

document.getElementById('viewNewItems').addEventListener('click', function() {
    window.location.href = 'objetos_nuevos.html'; // Redirige a la página de objetos nuevos
});