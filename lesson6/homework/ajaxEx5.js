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
    const users = (await doAJAXCall(` https://reqres.in/api/users`)).data;
    for (const user of users) {
        const tr = usersTable.insertRow();
        tr.insertCell().innerText = user.first_name;
        tr.insertCell().innerText = user.last_name;
        tr.insertCell().innerText = user.email;
        tr.insertCell().innerHTML =`<img src='${user.avatar}'></img>`;
    }
}
init();



