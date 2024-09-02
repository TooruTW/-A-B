const showResult = document.getElementById("currentResult");
const currentAnswer = document.getElementById("currentAnswer");
const checkbtn = document.getElementById("check-answer");
const prevAnswers = document.getElementById("log");

let target ;
let newAnswer;
let a = 0;
let b = 0;
let screen = "Result";


//generate target
function generateTarget(num){
    let result = [];
    while(result.length < num){
        let newTarget = Math.floor(Math.random()*10);
        if(!result.includes(newTarget)){
            result.push(newTarget)
        }
    }
    return result;
}
 

//acess answer & log answer
function accrssAnswer(answerArr){
    for(const num of answerArr){
        if(target.includes(num)){b++;}
    }
    for(i=0 ; i<target.length ; i++){
        if(target[i]===answerArr[i]){
            a++;
            b--;
        }
    }
    console.log(a,b);
    prevAnswers.innerHTML += `<p id="answer-log">
                <span class="answer">${answerArr}</span>
                <span class="result">${a}A${b}B</span>
            </p>`
    if(a===4){
        showResult.innerText = "You Win"
    }else{
        showResult.innerText = `${a}A${b}B`
    }
}
//handle screen



//Button Setup
//handle input
checkbtn.addEventListener('click',()=>{
    a=0; b=0;
    newAnswer = currentAnswer.value;
    let answerArr = newAnswer.split('').map(Number)
    console.log(answerArr);
    accrssAnswer(answerArr)
})

//start game
target = generateTarget(4);
console.log(target);