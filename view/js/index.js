const multiChoice = document.querySelector("#multi-choice");
const checkbox = document.querySelector('#checkbox')
const paragraph = document.querySelector('#paragraph')
const answerArea = document.querySelector('.answer-area');
const addQuest = document.querySelector('#add-quest');
const allQuestions = document.querySelector('.all-questions');


let questions = [
    {
        question: "What is your name?",
        answerType: "multiple",
        answer: ["Damian", 'Jon', 'Peter','Alex']
    },
    {
        question: "What is your age?",
        answerType: "checkbox",
        answer: ["10", '15', '20','25']
    },
    {
        question: "What is your country?",
        answerType: "paragraph",
        answer: ""
    }
]

function renderQuestions() {
    allQuestions.innerHTML = ``
    for (let i = 0; i < questions.length; i++){
        let questionContainer = document.createElement('div')
        questionContainer.classList.add(`question-container`)
        questionContainer.setAttribute('id', `qc-${i + 1}`)
        let questionText = document.createElement('h3')
        questionText.classList.add('question')
        questionText.innerHTML = questions[i]['question']
        let answerType = document.createElement('div')
        answerType.classList.add('answer-type')
        if (questions[i]['answerType'] == 'multiple') {
            for (let j = 0; j < questions[i]['answer'].length; j++){
                let option = document.createElement('div')
                option.classList.add('multi-choice')
                option.innerHTML = `<div><input type="radio" name="q${i+1}" id="q${i+1}" value="${questions[i]['answer'][j]}"> 
                ${questions[i]['answer'][j]}</div>
                <button type="button" id="remove-option-1a">Remove</button>
                `
                answerType.appendChild(option)
            }
        }
        if (questions[i]['answerType'] == 'checkbox') {
            for (let j = 0; j < questions[i]['answer'].length; j++){
                let option = document.createElement('div')
                option.classList.add('checkbox')
                option.innerHTML = `<div><input type="checkbox" name="q${i+1}" id="q${i+1}" value="${questions[i]['answer'][j]}"> 
                ${questions[i]['answer'][j]}</div>
                <button type="button" class="remove-quest-btn" id="remove-option-${i+1}${j+1}">Remove</button>
                `
                answerType.appendChild(option)
            }
        }
        questionContainer.appendChild(questionText)
        questionContainer.appendChild(answerType)
       
        allQuestions.appendChild(questionContainer)
    }
    
}
renderQuestions()

function createMultiChoice(event) {
    // event.preventDefault();
    
}

multiChoice.addEventListener('click', function(event){
    let option = document.createElement('div')
    option.classList.add('multi-choice')
    option.innerHTML = `<input type="radio" name="q1" id="q1" value="Option 1"> 
    <input type="text" placeholder="write the option here">
    <button type="button" id="remove-option-1a">Remove</button>
    `
    answerArea.appendChild(option)
})

addQuest.addEventListener('click', function (event) {
    event.preventDefault();
    let questionContainer = document.createElement('div')
    questionContainer.classList.add('question-container')
    questionContainer.innerHTML = `
    <textarea name="quest" id="quest" class = "quest-text-inp" cols="30" rows="3" placeholder = "Type your Question here"></textarea>
                <div class="answer-type">
                    <button type="button" id="multi-choice">Multiple Choice</button>
                    <button type="button" id="checkbox">Checkbox</button>
                    <button type="button" id="paragraph">Paragraph</button>
                </div>
                
                <div class="answer-area"></div>
    `
    allQuestions.appendChild(questionContainer)
})