document.addEventListener('DOMContentLoaded', function () {
    var enlaceCategorias = document.getElementById('categorias');
    var menuCategorias = document.getElementById('menu-categorias');

    enlaceCategorias.addEventListener('click', function (event) {
        event.stopPropagation();
        if (menuCategorias.style.display === 'none' || menuCategorias.style.display === '') {
            menuCategorias.style.display = 'block';
        } else {
            menuCategorias.style.display = 'none';
        }
    });

    document.addEventListener('click', function (event) {
        if (event.target !== enlaceCategorias && event.target.parentNode !== menuCategorias) {
            menuCategorias.style.display = 'none';
        }
    });
});