

window.onload = () => {

    document.getElementById("btn").onclick = function (e) {
        var menu = document.querySelector('#menu');
        var btn = document.querySelector('.toggle-btn');

        menu.classList.toggle('is-active');
        btn.classList.toggle('is-active');
    }

    const track =document.getElementById("image-track");

    window.onmousedown = e =>{
        track.dataset.mouseDownAt = e.clientX;
    }

    window.onmouseup = () =>{
        track.dataset.mouseDownAt = "0";
        track.dataset.prevPercentage = track.dataset.percentage;
    }

    window.onmousemove = e => {

        if(track.dataset.mouseDownAt === "0")return;

        const mouseDelta = parseFloat(track.dataset.mouseDownAt) - e.clientX,
            maxDelta = window.innerWidth / 2;

        const percentage = (mouseDelta / maxDelta) * -100,
            nextPercentage = parseFloat(track.dataset.prevPercentage) + percentage;
        Math.min(nextPercentage,0);
        Math.max(nextPercentage,-100);
        track.dataset.percentage = nextPercentage;


        track.animate({
            transform: `translate(${nextPercentage}%, -50%)`}
            , {duration: 1200, fill:"forwards"
        });


        for(const image of track.getElementsByClassName("image")){
            image.animate({
                objectPosition: `${nextPercentage + 100}% center`},
                {duration: 1200, fill:"forwards"
            })
        }
    }


}


