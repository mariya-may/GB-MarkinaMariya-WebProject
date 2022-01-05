function renderImageElement(element) {
    return `<div class="media_box">
                <p class="media_name">${element.name}</p>   
                <img src="${element.src}" alt="${element.type}">
                <p class="media_title">${element.title}</p>
            </div>
            `
}
function renderAudioElement(element) {
    return `<div class="media_box">
                <p class="media_name">${element.name}</p> 
                <audio src="${element.src}" controls></audio>  
                <p class="media_title">${element.title}</p>
            </div>
            `
}
function renderVideoElement(element) {
    return `<div class="media_box">
                <p class="media_name">${element.name}</p> 
                <video src="${element.src}" controls preload="none"></video>  
                <p class="media_title">${element.title}</p>
            </div>
            `
}

export { renderImageElement, renderAudioElement, renderVideoElement }
