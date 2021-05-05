function gameRoutes(app){
    
let correctAnswer = 0;
let callToFriendUsed = false;
let fiftyFiftyUsed = false
let questionToTheCrowdUsed = false

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

// pobieramy pytania
app.get('/question', (req, res) => {
    if (correctAnswer === questions.length) {
        res.json({
            winner: true
        })
    } else {
        const nextQuestion = questions[correctAnswer]
        console.log('nextQuestion', nextQuestion)
        const { question, answers } = nextQuestion
        res.json({
            question, answers
        })
    }
})
}

module.exports = gameRoutes;