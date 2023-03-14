const data = [
    {
        question: 'Which CSS property allows you to set multiple list properties at once?',
        a: 'List-Style-Type',
        b: 'List-Style',
        c: 'List-Style-Position',
        d: 'List-Style-Image',
        correct: 'b'
    },
    {
        question: 'Which CSS property determines how much the text should be emblazoned?',
        a: 'Font-Weight',
        b: 'Font-Size',
        c: 'Font-Family',
        d: 'Font-Style',
        correct: 'a'
    },
    {
        question: 'The latest HTML standard is ?',
        a: 'XML',
        b: 'SGML',
        c: 'HTML 4.0',
        d: 'HTML 5.0',
        correct: 'd'
    },
    {
        question: 'Which language is a typical Arduino code based on?',
        a: 'C/C++',
        b: 'Java',
        c: 'Python',
        d: 'Assembly Code',
        correct: 'a'
    },
    {
        question: 'When a program is executed, the _____ interacted by sending a message to one another?',
        a: 'Objects',
        b: 'Classes',
        c: 'Operating System',
        d: 'Memory',
        correct: 'a'
    },
    {
        question: 'Objects are the variables of type ___?',
        a: 'String',
        b: 'Boolean',
        c: 'Class',
        d: 'All data types can be included',
        correct: 'c'
    },
    {
        question: 'What is the most striking feature of class?',
        a: 'Data encapsulation',
        b: 'Collection of objects of similar type',
        c: 'Inheritance',
        d: 'All the above',
        correct: 'a'
    },
    {
        question: 'Why classes are known as abstract data types (ADT)?',
        a: 'Because classes are user-defined data types',
        b: 'Because it supports the theory of hierarchical classification',
        c: 'Because it allows dynamic binding',
        d: 'Because it uses the concept of data abstraction',
        correct: 'd'
    },
    {
        question: 'Which lanng. among the following suppor an object-oriented approcach?',
        a: 'Modula-3',
        b: 'Ada 95',
        c: 'Modula-2',
        d: 'Both A and B',
        correct: 'd'
    },
    {
        question: 'Which concept is not supported by object-based programming languages?',
        a: 'Inheritance',
        b: 'Dynamic binding',
        c: 'Only A',
        d: 'Both A and B',
        correct: 'd'
    },
    {
        question: ' Which one of the following is the demerit of procedure-oriented languages?',
        a: 'A procedure-oriented language does not model real-world problems',
        b: 'A procedure-oriented language does not model real-world problems',
        c:'A procedure-oriented Language works slowly',
        d:'In procedure-oriented Language, it is difficult to apply the inheritance concept',
        correct: 'b'
    }
]
let count = 0;
let length=data.length;
console.log(length);

const submitBtn = document.querySelector('.button');
const btn=document.getElementById('.button');
const question = document.getElementById('question-head');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const answersEl = document.querySelectorAll('.answer');
const quiz_final=document.getElementById('quiz-final');

//main function to change the question

function nextQuestion() {
    deselect();
    const q_count=count+1
    const mainData = data[count];
    a_text.innerHTML = mainData.a;
    b_text.innerHTML = mainData.b;
    c_text.innerHTML = mainData.c;
    d_text.innerHTML = mainData.d;
    question.innerHTML =`${q_count}`+'. '+mainData.question;
}

let score = 0;
let answer = undefined;

//selection checking  function
function getSelected() {
    answersEl.forEach((answerEl1) => {
        if (answerEl1.checked) {
            answer = answerEl1.id;
        }
    });

    return answer;
}

//making every radio to null after clicking the submit button
function deselect() {
    answersEl.forEach((answerEl1) => {
        answerEl1.checked = false;
    })
}
submitBtn.addEventListener("click", function () {

    //checking the selection status
     answer = getSelected();
    console.log(answer);

    //if choice is not null then only next qstion is displayed
    if (answer) {
        const result=data[count];
        count++;
        //score validation
        console.log(result);
        if (answer === result.correct) {
            score++;
        }
        if (count < data.length) {
            nextQuestion();  //calling the next question
        }
        else {
            const percentage=score/(data.length)*100;
            // const quiz_final_p=document.querySelector('.quiz_final_p');
            if (Math.round(percentage)>60){
                quiz_final.innerHTML=`<p style="color:green;font-size:20px;font-style:bold;text-align:center;padding:10px;">PASS<p><h2>You completed the competiton with score of ${score}/${data.length}, aggregate of ${Math.round(percentage)}% </h2><button class="button" onclick="location.reload()">Try-Again</button><p>`
            }
            else{
                quiz_final.innerHTML=`<p style="color:red;font-size:20px;font-style:bold;text-align:center;padding:10px;">FAIL<p><h2>You completed the competiton with score of ${score}/${data.length}, aggregate of ${Math.round(percentage)}% </h2><button class="button" onclick="location.reload()">Try-Again</button><p>`
            }
            
        }
        answer=undefined;
    }
})

nextQuestion();