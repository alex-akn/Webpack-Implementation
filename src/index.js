//import _ from 'lodash';

if('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/service-worker.js').then(registration => {
      console.log('SW registeed: ', registration);
    }).catch(registrationError => {
      console.log('SW registration failed: ', registrationError);
    });
  });
}

function component() {
   var element = document.createElement('div');

   var button = document.createElement('button');
   var br = document.createElement('br');

   button.innerHTML = 'Click me and look at the console';

   //join imported by ProvidePlugin
   //element.innerHTML = _.join(['Hello', 'webpack'], ' ');
   element.innerHTML = join(['Hello', 'webpack'], ' ');

   element.appendChild(br);
   element.appendChild(button);

   // Note that because a network request is involved, some indication
   // of loading would need to be shown in a production-level site/app.

    button.onclick = e => import(/* webpackChunkName: "print" */ './print').then(module => {
      var print = module.default;
      print();
    });

    return element;
}

document.body.appendChild(component());
