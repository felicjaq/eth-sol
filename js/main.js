const menuSpan = document.querySelectorAll('.header-mobile > span');

const menuList = document.querySelector('.header-menu');

const menuButton = document.querySelector('.header-mobile');




menuButton.addEventListener('click', function() {

    if(menuList.classList.contains('active')) {

        for( let i = 0; i < menuSpan.length; i++) {
            menuSpan[i].classList.remove('active');
        }

        menuList.classList.remove('active');

        } else {
        
        for( let i = 0; i < menuSpan.length; i++) {
            menuSpan[i].classList.add('active');
        }
    
        menuList.classList.add('active');
    }
})
