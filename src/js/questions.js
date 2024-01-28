const questions = document.getElementsByClassName("question");

const questionsArr = Array.from(questions);

questionsArr.forEach(question => {
    question.addEventListener("click", (e) => {
        const target = e.target.closest(".question").parentElement;
        const targetState = target.dataset.expanded;
        const targetQuestionId = target.dataset.questionid;
        
        questionsArr.forEach(ques => {
            if(ques.parentElement.dataset.questionid != targetQuestionId) ques.parentElement.dataset.expanded = "false";
            else {
                const newState = targetState === "true" ? "false" : "true";
                ques.parentElement.dataset.expanded = newState;
            }
        });


    })
})