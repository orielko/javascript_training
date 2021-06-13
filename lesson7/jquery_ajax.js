"use strict";
/// <reference path="jquery-3.6.0.js" />

$(function () {
    $("#ajaxCall").click(function () {
        $.ajax({
            url: "https://jsonplaceholder.typicode.com/todos",
            success: todos => {
                $("ul").empty();
                for (const todo of todos) {
                    $("ul").append(`<li>${JSON.stringify(todo)}</li>`);
                }

            },
            error: err => $("div").text(JSON.stringify(err))
        })
    }

    )
})