
let menuToggle = document.querySelector('.toggle');
let navigation = document.querySelector('.navigation')
menuToggle.onclick = function(){
    menuToggle.classList.toggle('active');
    navigation.classList.toggle('active');
}


let list = document.querySelectorAll('.list');
for (let i = 0; i < list.length; i++) {
    list[i].onclick = (function(i) {
        return function() {
            for (let j = 0; j < list.length; j++) {
                list[j].className = 'list';
            }
            list[i].className = 'list active';
        }
    })(i);
}

