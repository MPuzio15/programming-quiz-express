// frontend
const question = document.getElementById('question')

function fillQuestionElements(data) {
    console.log('data w fillQuestionElements: ', data)
    for(const i in data.answers){
        console.log(i)
        const answerElement = document.querySelector(`#answer${Number(i)+1}`)
        answerElement.innerText = data.answers[i]
    }
    question.textContent = data.question
}
function showNextQuestion() {
    fetch('/question', {
        method: "GET"})
        .then(r => r.json())
        .then(data => {
        fillQuestionElements(data)
    })
}

showNextQuestion()
// aby to zadziałało musimy obsłużyć pliki statyczne po stronie expressa

