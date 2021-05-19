/**I am basically rewriting my original quiz app, only after hardcoding it a second time
 * I will be improving them with new skills aquired, and even more over time.
*/
'use strict'

const store = {
    //I want to create a varying selection of questions this time.
    questions:[
        {
            question:'This is a question?',
            answers:[
                'one',
                'two',
                'three',
                'four'
            ],
            correctAnswer: 'correct'
            image: 'image00.jpg'
            alt:'image001.jpg'
            explaination:'explains'
        },
        {
            question: 'Why more questions?',
            answers:[
                'uno',
                'two',
                'Eh',
                'you\'re feelin\'in it!'
            ],
            correctAnswer: 'Tbh I was feel\'in it!'
            image: 'image00.jpg'
            alt:'image001.jpg'
            explaination:'explains'
        },
        {
            question: 'Why more questions?',
            answers:[
                'uno',
                'two',
                'Eh',
                'you\'re feelin\'in it!'
            ],
            correctAnswer: 'Tbh I was feel\'in it!'
            image: 'image00.jpg'
            alt:'image001.jpg'
            explaination:'explains'
        },
        {
            question: 'Why more questions?',
            answers:[
                'uno',
                'two',
                'Eh',
                'you\'re feelin\'in it!'
            ],
            correctAnswer: 'Tbh I was feel\'in it!'
            image: 'image00.jpg'
            alt:'image001.jpg'
            explaination:'explains'
        },
    ],
    questionNumber: 0,
    score: 0
    quizStarted: false

};

function renderPageOne(){
    let startPage =  <section class='quizContent'>
    <h1>App</h1>
        <button type='button' class='start' aria-label='Start'>Start Game</button>
        </section>;
        return startPage;

}
function renderQuizQuestions(){
    return `<section class='quizContent'>
    <h1>App</h1>
    <p>Question `+store.questionNumber+` of 5 </p>`
}
}