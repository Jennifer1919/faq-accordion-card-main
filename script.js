var questions = document.querySelectorAll('p');

for (var i = 0; i < questions.length; i++) {

    questions[i].addEventListener('click', function(){
        var arrow = this.children[0];
        var answer = this.nextElementSibling;
        
        // Question font weight changes
        if(this.classList.contains('selectedQuestion') === false){
            this.classList.add('selectedQuestion');
         } else {
            this.classList.remove('selectedQuestion');
         }

         // Arrow rotates
        if(arrow.classList.contains('selectedArrow') === false){
            arrow.classList.add('selectedArrow');
        } else {
            arrow.classList.remove('selectedArrow');
        }

        //The article is displayed
        if(answer.classList.contains('articleHidden') === true){
            answer.classList.remove('articleHidden');
        } else {
            answer.classList.add('articleHidden');
        }

        
        
    })
}

console.log(questions);