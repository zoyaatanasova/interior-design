import 'normalize.css';
import 'magnific-popup/dist/magnific-popup.css'
import '../css/style.css';
import $ from 'jquery'
import 'magnific-popup';

document.querySelector('.nav-toggle').addEventListener('click', () => {
    document.querySelector('.header').classList.toggle('header--open');
});



$('.designs').magnificPopup({
    delegate: 'a',
    type: 'image',
    gallery: {
        enabled: true
    },
});
