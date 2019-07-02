function create(sentences) {
    for (let sentance of sentences) {
      let div = document.createElement('div');
      let content = document.getElementById('content');
      div.innerHTML = `<p style="display: none">${sentance}</p>`;
      div.addEventListener('click',onClick);
      content.appendChild(div);
    }
    function onClick() {
      this.querySelector('p').style.display = 'inline'
    }
  }