"use strict";
/// <reference path="jquery-3.6.0.js" />


function getUsers(url) {
    return new Promise((resolve, reject) => {
        $.ajax({
            url,
            success: data=>resolve(data),
            error: err=>reject(err)
        })
    })
}
$("#classWork").click(async () => {
    try {
        const users = await getUsers('https://reqres.in/api/users');
        // getUsers('https://reqres.in/api/users').then(resolve=>console.log(resolve));
        console.log(users);
    } catch (err) {
        console.log(err);
    }
})
