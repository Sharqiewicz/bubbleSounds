const bubbles = document.querySelectorAll('.bubbles div');
const sounds = document.querySelectorAll('audio');
const colors = ['#845EC2','#D65DB1','#FF6F91', '#FF9671', '#FFC75F', '#F9F871'];

const fatherEl = document.querySelector('.container');

//  settings

// reset delay
sounds.forEach( sound => sound.currentTime = 0);


function sendBubble( index ){

    let sentbb = document.createElement('div');
    sentbb.classList.add('sentbb');
    sentbb.style.background = colors[index];
    sentbb.style.animation = 'sent 1s ease-in-out';

    fatherEl.appendChild(sentbb);


    document.querySelector('.animation .bigBubble').style.background = colors[index];

    sentbb.addEventListener('animationend', function(){
        fatherEl.removeChild(sentbb);
    })
}


bubbles.forEach( (bubble, index) => {
    bubble.addEventListener('click', () => {
            sendBubble( index );
            sounds[index].play();
    })
} )
