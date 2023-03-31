window.onload = () =>{
    document.getElementById("btn").onclick = function (e) {
        var menu = document.querySelector('#menu');
        var btn = document.querySelector('.toggle-btn');

        menu.classList.toggle('is-active');
        btn.classList.toggle('is-active');

    }
    var submit = document.querySelector('#submit-btn');
    submit.addEventListener('click',function (e) {
        document.getElementById('feedback-form').style.display='none';
        document.getElementById('thank-you').style.display='block';
    });

    let input = document.getElementById('q1');
    input.addEventListener('keyup', function (e){
        if(input.value.length>0){
            document.getElementById('submit-btn').disabled = false;
        }else{
            document.getElementById('submit-btn').disabled = true;
        }
    })



}

