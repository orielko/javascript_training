"use strict";
function doAJAXCall(url, method = "GET") {
    return new Promise((resolve, reject) => {
        const ajax = new XMLHttpRequest();
        ajax.onreadystatechange = () => {
            if (ajax.readyState === 4 && ajax.status === 200) {
                resolve(JSON.parse(ajax.responseText));
            } else if (ajax.readyState === 4 && ajax.status === 404) {
                reject('404');
            }
        }
        ajax.open(method, url);
        ajax.send();
    });
}

async function init() {
    const images = (await doAJAXCall(`https://jsonplaceholder.typicode.com/photos`)).splice(0, 100);
    console.log(images);
    for (const img of images) {
        console.log(img, img.albumId, img.id, img.title, img.thumbnailUrl);
        const tr = picturesTable.insertRow();
        tr.insertCell().innerText = img.albumId;
        tr.insertCell().innerText = img.id;
        tr.insertCell().innerText = img.title;
        tr.insertCell().innerHTML =`<img src='${img.thumbnailUrl}'></img>`;

    }
}
init();



