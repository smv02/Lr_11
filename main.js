let numberWord = document.querySelector('.number>span');
let arrWord = [];
let slider = document.querySelector('.slider');
let trueTranslate = document.querySelector('.true>span');
let falseTranslate = document.querySelector('.false>span');
let resultLevel = document.querySelector('.resultLevel');
let input = document.querySelector('input');

let checkNumberWord = 1;
let numberTrueTranslate = 0;
let numberFalseTranslate = 0;

arrWord[0] = {
    engWord: 'always',
    translate: 'завжди'
};
arrWord[1] = {
    engWord: 'food',
    translate: 'їжа'
};
arrWord[2] = {
    engWord: 'dog',
    translate: 'собака'
};
arrWord[3] = {
    engWord: 'sea',
    translate: 'море'
};
arrWord[4] = {
    engWord: 'life',
    translate: 'життя'
};
arrWord[5] = {
    engWord: 'house',
    translate: 'будинок'
};
arrWord[6] = {
    engWord: 'land',
    translate: 'земля'
};
arrWord[7] = {
    engWord: 'city',
    translate: 'місто'
};
arrWord[8] = {
    engWord: 'bird',
    translate: 'птаха'
};
arrWord[9] = {
    engWord: 'animal',
    translate: 'тварина'
};

function random(n) {
    return Math.floor(Math.random() * Math.floor(n));
}
  
function shuffle (arr) {
    for (var i = 0; i < arr.length; i++) {
      var j = random(arr.length);
      var k = random(arr.length);
      var t = arr[j];
      arr[j] = arr[k];
      arr[k] = t;
    }
    return arr;
}

shuffle(arrWord);

$(function(){

    for(let i = 0; i < arrWord.length; i++){
        $('.slider').append('<div class="block-word"><span class="word">' + arrWord[i].engWord +'</span></div>');
    }
    ////////////////////////////
	$('.slider').slick({
        infinite: false,
        nextArrow: '.block-btn_next',
        draggable: false,
    });
    $('.slick-prev').hide();
    ////////////////////////////
    $('.block-btn_next').click(function() {
        if(checkNumberWord == 10) {
            if(numberTrueTranslate >= 9) {
                resultLevel.innerHTML = 'вище рівня A1';
            } else if(numberTrueTranslate >= 7){
                resultLevel.innerHTML = 'A1';
            } else{
                resultLevel.innerHTML = 'нижче рівня A1';
            }
            $('#login-form').modal();
        }
        if((numberTrueTranslate + numberFalseTranslate) !== 10){
            if(input.value == arrWord[checkNumberWord - 1].translate){
                numberTrueTranslate++;
                trueTranslate.innerHTML = numberTrueTranslate;
            } else {
                numberFalseTranslate++;
                falseTranslate.innerHTML = numberFalseTranslate;
            }
        }
        if(checkNumberWord < 10){
            checkNumberWord++;
            numberWord.innerHTML = checkNumberWord;
        }
    });
});
