// Image Carousel

// Query Selectors
var imgDisplay = document.querySelector('.img-display');
var prev = document.querySelector('prev');
var next = document.querySelector('next');
var index = 0;

//Image Array
var imgArray = ['./img/belt1.JPG','./img/belt3.JPG','./img/belt5.JPG','./img/belt4.JPG','./img/belt6.JPG','./img/belt7.JPG','./img/belt8.JPG','./img/belt9.JPG'];

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