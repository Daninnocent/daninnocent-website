var images = ['background1.png', 'background2.jfif', 'background3.jfif'];
$('html').css({'background-image': 'url(../images/' + images[Math.floor(Math.random() * images.length)] + ')'});