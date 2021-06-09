"use strict";
function getCountries(){
    return new Promise((resolve,reject)=>{
        const ajax=new XMLHttpRequest();
        ajax.onreadystatechange=()=>{
            if(ajax.readyState===4 && ajax.status===200){
                // console.log(ajax.responseText);
                const countries=JSON.parse(ajax.responseText);
                resolve(countries);
               
            }
        };
        ajax.open("GET","https://restcountries.eu/rest/v2/all");
        ajax.send();
    });
    

}
async function showCountries(){
        const countries=getCountries();
        countries.then(countries=>{
            let countries_list_string='';
            let countries_list_options_string='';
            for(const country of countries){
                console.log(country);
                countries_list_string+=`<li>${country.name}, ${country.capital}</li>`;
                countries_list_options_string+=`<option value=${country.name}>${country.name}</option>`;
            }
            counties_list.innerHTML=countries_list_string;
            console.log(countries_list_options_string);
            counties_list_select.innerHTML=countries_list_options_string;
        }).catch((err)=>{alert(err)});

  
}
