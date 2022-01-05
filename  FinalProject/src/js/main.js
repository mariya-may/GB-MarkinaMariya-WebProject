import ('../css/style.scss');
import baseData from './basedata.js';
import { renderImageElement, renderAudioElement, renderVideoElement } from './render.js';


//Project
const mediaRender = document.querySelector('.media');

baseData.forEach((element) => {
    if (element.type == 'image') {
        mediaRender.insertAdjacentHTML('beforeend', renderImageElement(element));
    } else if(element.type == 'audio') {
        mediaRender.insertAdjacentHTML('beforeend', renderAudioElement(element));
    } else if(element.type == 'video') {
        mediaRender.insertAdjacentHTML('beforeend', renderVideoElement(element));
    } else {
        console.log('error render');
    }
});
