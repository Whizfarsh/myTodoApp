'use strict';

let close = document.getElementsByClassName('del-icon');
let done = document.getElementsByClassName('done-icon');

function newElement() {
  let li = document.createElement('li');
  li.className = 'todo-list';
  let t = document.createTextNode('');
  li.append(t);

  let p = document.createElement('p');
  p.className = 'list-item';
  let inputValue = document.querySelector('.todo-input-text').value;
  let txt = document.createTextNode(inputValue);
  p.appendChild(txt);

  let span = document.createElement('span');
  span.className = 'del-icon';
  let spEl = document.createTextNode(`\u00D7`);
  span.appendChild(spEl);

  let openSpan = document.createElement('span');
  openSpan.className = 'done-icon';
  let openSpanEl = document.createTextNode(`\u2713`);
  openSpan.appendChild(openSpanEl);

  //checking if the input value is empty or not
  if (inputValue === '') {
    //if the input value is empty
    document.querySelector('.message').textContent =
      'Write something in the box !';
  } else {
    //if the input value is not empty then execute
    document.querySelector('.todo-lists').appendChild(li).appendChild(p);
    document.querySelector('.todo-lists').appendChild(li).appendChild(openSpan);
    document.querySelector('.todo-lists').appendChild(li).appendChild(span);
    document.querySelector('.message').textContent = '';
  }

  document.querySelector('.todo-input-text').value = '';

  //removing the todo lists
  for (let i = 0; i < close.length; i++) {
    function removeTodo() {
      close[i].addEventListener('click', function () {
        let theP = this.parentElement;
        theP.classList.add('hidden');
      });
    }
    removeTodo();
  }

  //for checking the list
  for (let i = 0; i < done.length; i++) {
    function checkList() {
      done[i].addEventListener('click', function () {
        let doneList = this.previousElementSibling;
        doneList.classList.add('checked');
      });
    }
    checkList();
  }
}

document.querySelector('.btn').addEventListener('click', newElement);
