import _ from 'lodash';
import './css/style.styl'
import printMe from './print.js';

function component() {
  var element = document.createElement('div');
  var btn = document.createElement('button');

  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  btn.innerHTML = 'Click me and check the console!';
  btn.onclick = printMe;

  element.addClass
  element.classList.add('hello');

  return element;
}

document.body.appendChild(component());