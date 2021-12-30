function loadScript(url, callback = null) {
    if(typeof url === "function") {
        let element = document.createElement("script");
        element.onload = url;
    } else if(typeof url === "string") {
        let element = document.createElement("script");
        element.type = "text/javascript";
        element.src = url;
        element.onload = callback;
        document.body.appendChild(element);
    } else if(typeof url === 'object') {
        url.forEach(el => {
            let element = document.createElement("script");
            element.type = "text/javascript";
            element.src = el;
            document.body.appendChild(element);
        });
        let element = document.createElement("script");
        element.onload = callback;
    }
}

