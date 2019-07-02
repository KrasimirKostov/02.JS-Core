function QuestionComponent(parent) {
    this.parent = parent;
    this.container = document.createElement('ul');

    this.parent.appendChild(this.container);
}

QuestionComponent.prototype.addQuestion = function (text) {
    let questionElement = document.createElement('li');
    questionElement.textContent = text;

    this.container.appendChild(questionElement);
};

QuestionComponent.prototype.render=function(){
    
}