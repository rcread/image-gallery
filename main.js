function changeImage(imgs){
    var mainImage = document.getElementById('display');
    var imgText = document.getElementById('imgText');
    mainImage.src = imgs.src;
    imgText.innerHTML = imgs.alt;
    mainImage.parentElement.style.display ='block';
}


