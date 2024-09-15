document.addEventListener('DOMContentLoaded', function() {
    show();
});

window.addEventListener('scroll', show);
function show() {
    var show = document.querySelectorAll('.show');
    for(var i = 0; i < show.length; i++) {
        var windowsHeight = window.innerHeight;
        var showtop = show[i].getBoundingClientRect().top;
        var showpoint = 150;

        if(showtop < windowsHeight - showpoint) {
            show[i].classList.add('active');
        } else {
            show[i].classList.remove('active');
        }
    }
}