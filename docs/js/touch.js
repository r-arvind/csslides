//touch support for the slides
var touchX = 0;
var touchConsumed = false;
        
document.addEventListener( 'touchstart', function( event ) {
    touchConsumed = false;
    lastX = event.touches[0].clientX;
}, false );

document.addEventListener( 'touchmove', function( event ) {
    event.preventDefault();

    if( !touchConsumed ) {
        if( event.touches[0].clientX > lastX + 10 ) {
            prevSlide();
            touchConsumed = true;
        }
        else if( event.touches[0].clientX < lastX - 10 ) {
            nextSlide();
            touchConsumed = true;
        }
    }
}, false );
