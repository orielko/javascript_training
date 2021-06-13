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
    const users = await doAJAXCall(`https://jsonplaceholder.typicode.com/users/`);
    console.log(users);
    for (const user of users) {
        console.log(user.id, user.name);
        usersList.innerHTML += `<option value='${user.id}'>${user.name}</option>`;
    }
}
init();

async function displaySelectedUser() {
    document.getElementById('res').innerHTML = '';
    const user = await doAJAXCall(`https://jsonplaceholder.typicode.com/users/${usersList.value}`);
    console.log(user);
    const details = ['username', 'email', 'phone', 'address.city', 'address.street', 'address.zipcode', 'company.name'];
    for (const detail of details) {
        const detailArr = detail.split('.');
        console.log(detailArr);
        let dVal = user[detailArr[0]];
        for (let index = 1; index < detailArr.length; index++) {
            dVal = dVal[detailArr[index]];

        }
        addLiItem(dVal);
    }

}

function addLiItem(text) {
    const element = document.createElement('li');
    element.innerText = text;
    document.getElementById('res').appendChild(element);
}
