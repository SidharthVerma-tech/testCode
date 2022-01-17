const quizData = [{
    question1: 'Which is the best programming language in the world?',
    a: ' Java',
    b: ' C++',
    c: '  Javascript',
    d: ' Python',
     correctAns:'c'},
    {
    question1: 'Who is the president of U.S.?',
    a: '           Donald trump',
    b: '           Joe biden',
    c: '         David warner',
    d: '        Sidharth Verma',
    correctAns:'b'},
    {
    question1: "What does HTML stands for?",
    a: "         Hyper Text Markup Language",
    b: "          HyperText Make up Language",
    c: "         Hypo Text Markup Language",
    d: "          Hello Text Market Language",
    correctAns:'a',
    },
    {
            question1: "When was Javascript Lunched ?",
            a: 2005,
            b: 2000,
            c: 1999,
            d: 1996,
            correctAns:'d',
    },
    {
       question1: "Abe Question kya Padh raha hai option Select kar jaldi se",
       a: "Mujhe kya Pata",
       b: "Apna kaam kar jaakar",
       c: "Prabhu aap bhagwaan ho",
       d: "Agar C option select nhi kiya toh overall score 0 kar dungaa",
       correctAns: 'c'

    }



]
const questionEl = document.getElementById('question');
const aText = document.getElementById('a1');
const bText = document.getElementById('b1');
const cText = document.getElementById('c1');
const dText = document.getElementById('d1');
const submit = document.getElementById('submit');
const quizz = document.getElementById('quiz');

let currentQuestion = 0;
let score = 0;
loadQuiz();
function loadQuiz(){
    deselect();
const currentQuizData = quizData[currentQuestion];
questionEl.innerText = currentQuizData.question1;
aText.innerHTML = currentQuizData.a;
bText.innerHTML = currentQuizData.b;
cText.innerHTML = currentQuizData.c;
dText.innerHTML = currentQuizData.d;


}
console.log(quizData[1].correctAns);

function getSelected(){
    const answers = document.getElementsByName('option');
let answer = undefined;
answers.forEach((answerEl) => {
       if(answerEl.checked){
               answer = answerEl.id;
       }

})
return answer;

}

function deselect(){
    const answers = document.getElementsByName('option');
    answers.forEach((answerEl) =>{
           answerEl.checked = false;

    })

}



submit.addEventListener("click",()=>{

    let answer1 = getSelected();
    console.log(answer1);

    if(answer1){
            if(answer1 === quizData[currentQuestion].correctAns){
                    score++;
            }
            // if(answer !== quizData.4){
            //         score = 0;
            // }
            currentQuestion++;
            


if(currentQuestion < quizData.length){
     loadQuiz();
    }
  else {
    //       Show results
       alert("You Finished the Quiz get Yourself an orange lemonade ");
       quizz.innerHTML = `<h1>Hey !!! You Finished the Quiz and your Score is ${score} out of ${quizData.length}</h1>`;

     }

    }
   
})