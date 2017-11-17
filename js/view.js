'use strict'

// function toggleNav() {
//     var elNav = document.querySelector('.nav-buttons')
//     if (!elNav.classList.contains('fadeInDown')) {
//         elNav.classList.add('fadeInDown')
//     }else{
//         elNav.classList.add('fadeOutDown')
//     }
// }


function toggleNav() {
    var elNav = document.querySelector('.nav-buttons')
    if (elNav.classList.contains('fadeInDown') || elNav.classList.contains('fadeOutDown')) {
        elNav.classList.toggle('fadeInDown' , 'fadeOutUp');
        // elNav.classList.toggle('fadeOutUp');
        

    }else{
        elNav.classList.add('fadeInDown')
    }

}