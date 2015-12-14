$(document).ready(function(){
    //Kosongkan img yang berada di dalam div #bg-slideshow
    var $slide = $("#bg-slideshow");
    $slide.empty();    
    
    // Buat array yang berisi letak gambar - gambar yang akan dijadikan 
    // slideshow. Lalu append gambar gambar tersebut di dalam div #bg-slideshow
    var bg_img = new Array('http://placehold.it/300x200/888&text=Item 1','http://placehold.it/300x200/aaa&text=Item 2','http://placehold.it/300x200/444&text=Item 3','images/4.png');
    for (var i=0; i < bg_img.length; i++) {
        imgTemplate = "<img src='" + bg_img[i] + "' alt='image' >";
        $slide.append(imgTemplate);
    }
    
    //Slideshow
    $("#bg-slideshow img:gt(0)").hide();
    setInterval(function(){
        $visible = $("#bg-slideshow img:visible");
        $visible.fadeOut(1000);
        if( $visible.next('img').length == 0 ) {
            $("#bg-slideshow img:first").fadeIn(1000);
        } else {
            $visible.next('img').fadeIn(1000);
        }
    },5000);
    
});
