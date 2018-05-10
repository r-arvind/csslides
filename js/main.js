//layers contains elements with the classname 'layer'
var layers = Array.prototype.slice.call(document.querySelectorAll('.layer'));


//returns the index of currently active slide
    function getCurrent(){
        var index=0;
        layers.forEach(function(layer,i){
            if(layer.classList.contains('show')){
                index = i;
            }
        });
        return index;
    }


//check active slide
    function checkActive(){
        var index= 'none';
        layers.forEach(function(layer,i){
            if(layer.classList.contains('show')){
                index = i;
            }
        });
        if (index === 'none'){
            layers[0].classList.add('show');
        }
    }

//change Slide
function changeSlide(target,direction){
	layers.forEach(function(layer) {
		layer.classList.remove( 'left', 'right' );
        layer.classList.add( direction );
		if( layer.classList.contains( 'show' ) ) {
			layer.classList.remove( 'show' );
			layer.classList.add( 'hide' );
		}
		else {
			layer.classList.remove( 'hide' );
		}
    });            
	layers[target].classList.add( 'show' );
    }


//change to the next slide
function nextSlide(){
    maxSlides = layers.length -1 ;
    var target = getCurrent()+1;
    if(target-1 < maxSlides){
        changeSlide(target, 'right' );
    }
    updateProgress();
}


//change to prev slide
function prevSlide(){
    var target = getCurrent() - 1;
    if(target + 1> 0){
        changeSlide(target, 'left' );        
    }
    updateProgress();
}

//create a progress bar
function createProgressBar(){
    var pbar = document.createElement('div');
    pbar.className = 'progressbar';
    var progress = document.createElement('div');
    progress.className = 'progress';
    pbar.appendChild(progress);
    document.querySelector('.everything').appendChild(pbar);
}

//update progress
function updateProgress(){
    var totalSlides= layers.length - 1;
    var currentSlide = getCurrent();
    percent = (currentSlide/totalSlides)*100;
    document.querySelector('.progress').style.width = percent + '%'
}

//initializing the functions
    function init(){
        checkActive();
        createProgressBar();
        updateProgress();
        document.addEventListener('keyup', function(event) {
            if(event.keyCode === 39){
                nextSlide();
            }
            if(event.keyCode === 37){
                prevSlide();
            }
        });
    }

  
window.addEventListener('load',init());