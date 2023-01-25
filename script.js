const questionCards = document.getElementsByClassName('question-card');
console.log(questionCards)

for (let i = 0; i < questionCards.length; i++) {
    questionCards[i].addEventListener('click', function() {
        this.classList.toggle('hide-para')
    })
}