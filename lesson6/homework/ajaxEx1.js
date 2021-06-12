"use strict";
const ajax=new XMLHttpRequest();
ajax.onreadystatechange=()=>{
    if(ajax.readyState===4 && ajax.status===200){
        const contactsResult=JSON.parse(ajax.responseText);
        for (const contact of contactsResult) {
            const tr=contactsTable.insertRow();
            tr.insertCell().innerText=contact.name;
            tr.insertCell().innerText=contact.username;
            tr.insertCell().innerText=contact.email;
            tr.insertCell().innerText=contact.phone;
            tr.insertCell().innerText=contact.address.city;
            tr.insertCell().innerText=contact.address.street;
            tr.insertCell().innerText=contact.address.zipcode;
            tr.insertCell().innerText=contact.company.name;
        }
    }
}
ajax.open("GET","https://jsonplaceholder.typicode.com/users");
ajax.send();