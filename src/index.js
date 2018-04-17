import _ from 'lodash';
import { cube } from './math.js';
import './styles.css';
//import Icon from './icon.png';
//import Data from './data.xml';
import printMe from './print.js';

if (process.env.NODE_ENV !== 'production') {
   console.log('Looks like we are in development mode!');
}

function component() {
  var element = document.createElement('div');
  var btn = document.createElement('button');
  var pre = document.createElement('pre');

  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  pre.innerHTML = [
    'Hello again!',
    '5 cubed is equal to ' + cube(5)
  ].join('\n\n');
  element.appendChild(pre);
  //element.classList.add('hello');

  //var myIcon = new Image();
  //myIcon.src = Icon;
  //element.appendChild(myIcon);

  //console.log(Data);

  btn.innerHTML = 'Click me once';
  btn.onclick = printMe;

  element.appendChild(btn);

  return element;
}

//document.body.appendChild(component());
let element = component(); // Store the element to re-render on print.js changes
document.body.appendChild(element);


if(module.hot) {
  module.hot.accept('./print.js', function(){
    console.log('Accepting the updated printMe module!');
    //printMe();
    document.body.removeChild(element);
    element = component(); //Re-render the "component" to update the click handler
    document.body.appendChild(element);
  });
}
