// Image Carousel

// Query Selectors
var imgDisplay = document.querySelector('.img-display');
var prev = document.querySelector('prev');
var next = document.querySelector('next');
var index = 0;

//Image Array
var imgArray = ['./img/remodel1.JPG','./img/remodel2.JPG','./img/remodel3.JPG','./img/remodel4.JPG','./img/remodel5.JPG','./img/remodel6.JPG','./img/remodel7.JPG','./img/remodel8.JPG','./img/remodel9.JPG','./img/remodel10.JPG','./img/remodel11.JPG','./img/remodel12.JPG'];

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