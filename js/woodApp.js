// Image Carousel

// Query Selectors
var imgDisplay = document.querySelector('.img-display');
var prev = document.querySelector('prev');
var next = document.querySelector('next');
var index = 0;

//Image Array
var imgArray = ['./img/tea1.PNG','./img/tea4.JPG','./img/tea5.JPG','./img/tea6.JPG','./img/tea8.JPG','./img/tea9.JPG','./img/tea10.JPG'];

$('.prev').click(function() {
    if (index > 0) {
        console.log("jQuery load successfull")
        imgDisplay.src = imgArray[index - 1];
        index -= 1;
        console.log(index);
    };
});


$('.next').click(function() {
    if (index < (imgArray.length - 1)) {
        console.log("jQuery load successfull")
        imgDisplay.src = imgArray[index + 1];
        index += 1;
        console.log(index);
    };
});