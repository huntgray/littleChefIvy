(function () {
    var main_logo = document.getElementById('home_logo'), footer_logo = document.getElementById('footer_logo'), recipes = document.getElementById('recipes'), close_heart = document.getElementById('close_heart'), more_recipes_outer_container = document.getElementById('more_recipes_outer_container');
    
    if (main_logo) {
        footer_logo.style.display = 'none';
    } else {
        footer_logo.style.display = 'inline-block';
    }
    
    recipes.addEventListener('click', function (e) {
        e.stopPropagation();
        more_recipes_outer_container.style.display = 'block';
    });

    close_heart.addEventListener('click', function (e) {
        e.stopPropagation();
        more_recipes_outer_container.style.display = 'none';
    });

}());
