"use strict";
function onIDChange() {

    const ajax = new XMLHttpRequest();
    ajax.onreadystatechange = () => {
        if (ajax.readyState === 4 && ajax.status === 200) {
            document.getElementById('res').innerHTML = '';
            const contactResult = JSON.parse(ajax.responseText);
            if (Object.keys(contactResult).length !== 0) {
                const title = document.createElement('h1');
                title.innerHTML = contactResult.name;
                document.getElementById('res').appendChild(title);
                const details = ['username', 'email', 'phone', 'address.city', 'address.street', 'address.zipcode', 'company.name'];
                for (const detail of details) {
                    const detailArr = detail.split('.');
                    console.log(detailArr);
                    let dVal = contactResult[detailArr[0]];
                    for (let index = 1; index < detailArr.length; index++) {
                        dVal = dVal[detailArr[index]];

                    }
                    addLiItem(dVal);
                }
            }
        }else if(ajax.readyState === 4 && ajax.status ===404){//404
            document.getElementById('res').innerHTML = '';
            const title = document.createElement('h1');
            title.innerHTML = 'No such user is found';
            document.getElementById('res').appendChild(title);
        }
    }
    ajax.open("GET", `https://jsonplaceholder.typicode.com/users/${userId.value}`);
    ajax.send();
}
function addLiItem(text) {
    const element = document.createElement('li');
    element.innerText = text;
    document.getElementById('res').appendChild(element);
}