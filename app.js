const express = require('express')
const path = require('path')

const app = express()

app.listen(3000, () => {
    console.log(`Server is listening at: http://localhost:3000
Let's play a game :) `)
})

app.use(express.static(path.join(__dirname, 'public')))

let goodAnswers = 0;
let callToFriendUsed = false;
let fiftyFiftyUsed = false
let questionToTheCrowd = false

const questions = [
    {
        question: "Jaki jest najlepszy język programowania",
        answers: ['C++', 'JavaScript', 'Python', 'Java'],
        correctAnser: 1,
    },
    {
        question: "Jaki framework dla aplikacji webowych dla języka Python",
        answers: ['ASP.net', 'Node.js', 'Django', 'Swift'],
        correctAnser: 2,
    },
    {
        question: "Za pomocą którego atrybutu można zwalidować formularz w JS?",
        answers: ['title', 'required', 'isCorrect', 'type'],
        correctAnser: 1,
    },
]

app.get('/question', (req, res) => {
    if (goodAnswers === questions.length) {
        res.json({
            winner: true
        })
    } else {
        const nextQuestion = questions[goodAnswers]
        console.log('nextQuestion', nextQuestion)
        const { question, answers } = nextQuestion
        res.json({
            question, answers
        })
    }
})