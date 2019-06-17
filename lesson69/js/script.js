var carousel_tiere = document.querySelector('.carousel-tiere');
var cellCount = 15;
var selectedIndex = 0;

function rotateCarousel() {
    var angle = selectedIndex / cellCount * (-360);
    carousel_tiere.style.transform = 'translateZ(-1411px) rotateY(' + angle + 'deg)';
    console.log(carousel_tiere.style.transform);
}

var prevButton = document.querySelector('.previous-button');
prevButton.addEventListener('click', function() {
    selectedIndex--;
    console.log(selectedIndex);
    rotateCarousel();
});

var nextButton = document.querySelector('.next-button');
nextButton.addEventListener('click', function() {
    selectedIndex++;
    console.log(selectedIndex);
    rotateCarousel();
});