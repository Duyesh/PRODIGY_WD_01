/*===== Declare Variable for closing trailer window =====*/
const trailer = document.querySelector('.trailer')
const video = document.querySelector('video')

/*===== Function for Closing Trailer Window  =====*/
function toggleVideo(){
    video.pause();
    trailer.classList.toggle('active')
}

/*===== GOOGLE FONTS =====*/
function changeBg(bg, title){

    /*===== Declaring Variables for Changing Background =====*/
    const banner = document.querySelector('.banner');
    const contents = document.querySelectorAll('.content');
    banner.style.background = `url('../images/movies/${bg}')`;
    banner.style.backgroundSize = 'cover';
    banner.style.backgroundPosition = 'center';

    contents.forEach(content => {
        content.classList.remove('active');
        if (content.classList.contains(title))
        {
            content.classList.add('active');
        }
    });
}