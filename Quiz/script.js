//getting all required elements
const start_btn = document.querySelector(".start_btn button");
const info_box = document.querySelector(".info_box");
const exit_btn = info_box.querySelector(".buttons .quit");
const continue_btn = info_box.querySelector(".buttons .restart");
const quiz_box = document.querySelector(".quiz_box");
const timeCount = quiz_box.querySelector(".timer .timer_sec");
const timeLine = quiz_box.querySelector("header .time_line");
const timeOff = quiz_box.querySelector("header .time_text");

const option_list = document.querySelector(".option_list");

//If Start quiz button clicked
start_btn.onclick =()=>{
    info_box.classList.add("activeInfo");
}

//If Exit quiz button clicked
exit_btn.onclick =()=>{
    info_box.classList.remove("activeInfo");//hide the info box
}

//If Continue button clicked
continue_btn.onclick =()=>{
    info_box.classList.remove("activeInfo");//hide the info box
    quiz_box.classList.add("activeQuiz");//show the quiz box
    showQuestion(0);
    queCounter(1);
    clearInterval(counter);
    startTimer(timeValue);
    startTimerLine(0);
   
}

let que_count = 0;
let que_numb = 1;
let counter;
let counterLine;
let timeValue = 15;
let widthValue = 0;
let userScore = 0;

const next_btn = quiz_box.querySelector(".next_btn");
const result_box = document.querySelector(".result_box");
const restart_quiz = result_box.querySelector(".buttons .restart");
const quit_box = result_box.querySelector(".buttons .quit");

//restarting the quiz box
restart_quiz.onclick = () =>{
    result_box.classList.remove("activeResult");
    quiz_box.classList.add("activeQuiz");
    let que_count = 0;
    let que_numb = 1;
    let timeValue = 15;
    let widthValue = 0;
    let userScore = 0;
    showQuestion(que_count);
    queCounter(que_numb);
    clearInterval(counter);
    startTimer(timeValue);
    clearInterval(counterLine);
    startTimerLine(widthValue);
    next_btn.style.display = "none";
    timeOff.textContent = "Time Left";
}

quit_box.onclick = () =>{
    window.location.reload();
}


//If next button clicked
next_btn.onclick = ()=>{
    if(que_count < questions.length - 1){
    que_count++;
    que_numb++;
    showQuestion(que_count);
    queCounter(que_numb);
    clearInterval(counter);
    startTimer(timeValue);
    clearInterval(counterLine);
    startTimerLine(widthValue);
    next_btn.style.display = "none";
    timeOff.textContent = "Time Left";
    }else{
        clearInterval(counter);
        clearInterval(counterLine);
        console.log("Questions completed");
        showResultBox();
    }
}

//geting questions and options from array
function showQuestion(index){
    const que_text = document.querySelector(".que_text");
    let que_tag= '<span>'+ questions[index].numb +" . "+ questions[index].question +'</span>';
    let option_tag = '<div class = "option">'+ questions[index].options[0] +'<span></span></div>'
                     + '<div class = "option"><span>'+ questions[index].options[1] +'</span></div>'
                     + '<div class = "option"><span>'+ questions[index].options[2] +'</span></div>'
                     + '<div class = "option"><span>'+ questions[index].options[3] +'</span></div>';
    que_text.innerHTML = que_tag;
    option_list.innerHTML = option_tag ;
    const option = option_list.querySelectorAll(".option")
    for (let i = 0; i < option.length; i++) {
        option[i].setAttribute("onclick", "optionSelected(this)");
    }
}


//When user select the answer
function optionSelected(answer){
    clearInterval(counter);
    clearInterval(counterLine);
    let userAns = answer.textContent;
    let correctAns = questions[que_count].answer;
    let allOption = option_list.children.length;
    
    if(userAns == correctAns){
        userScore += 1;
        console.log(userScore);
        answer.classList.add("correct");
        console.log("Answer is Correct");        
    }else{
        answer.classList.add("incorrect");
        console.log("Answer is worng");
        
        //if answer incorrect then automatically selected the correct answer
        for(let i = 0; i < allOption;i++) {
            if (option_list.children[i].textContent == correctAns){
                option_list.children[i].setAttribute("class", "option correct");         
        } 
    }    
           
    }
    //once user seleted disabled the other options
    for (let i = 0; i < allOption; i++) {
        option_list.children[i].classList.add("disabled");
    }
    next_btn.style.display = "block";
}

function showResultBox(){
    info_box.classList.remove("activeInfo");//hide the info box
    quiz_box.classList.remove("activeQuiz");//hide the quiz box
    result_box.classList.add("activeResult");//show the result box
    const scoreText = result_box.querySelector(".score_text");
    if (userScore > 6){
            let scoreTag ='<span><p style = "color: green;">Exallent Marks!</p> You got<p>'+userScore +'</p>out of <P>'+questions.length +'</P> </span>';
            scoreText.innerHTML = scoreTag;
    }
    else if (userScore > 3) {
        let scoreTag ='<span><p style = "color: yellow;">Good work!</p> You got only <p>'+userScore +'</p>out of <P>'+questions.length +'</P> </span>';
        scoreText.innerHTML = scoreTag;
    }
    else{
        let scoreTag ='<span><p style = "color: re;">Not bad!</p> You got only <p>'+userScore +'</p>out of <P>'+questions.length +'</P> </span>';
        scoreText.innerHTML = scoreTag;
    }
}

function startTimer(time){
    counter = setInterval(timer, 1000);
    function timer(){
        timeCount.textContent = time;
        time--;
        if(time < 9){
            let addZero = timeCount.textContent;
            timeCount,textContent = "0" + addZero;
        }
        if(time < 0){
            clearInterval(counter);
            timeCount.textContent= "00";
            timeOff.textContent = "Time Over";
            
            let correctAns = questions[que_count].answer;
            let allOption = option_list.children.length;

                for(let i = 0; i < allOption;i++) {
                    if (option_list.children[i].textContent == correctAns){
                        option_list.children[i].setAttribute("class", "option correct");
                    }
            for (let i = 0; i < allOption; i++) {
                option_list.children[i].classList.add("disabled");
            }
            next_btn.style.display = "block";
            }
        }
     }
}    

function startTimerLine(time){
    counterLine = setInterval(timer, 29);
    function timer(){
        time += 1;
        timeLine.style.width = time + "px";
        if(time > 549){
            clearInterval(counterLine);
        }
    }
}  

function queCounter(index){
    const bottom_ques_counter = quiz_box.querySelector(".total_que");
    let totalQuesCountTag = '<span>Questions :<p>'+ index +'</p>/<p>'+ questions.length +'</p></span>';
    bottom_ques_counter.innerHTML = totalQuesCountTag;
}