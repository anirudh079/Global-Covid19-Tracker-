'use strict'
 
var request=new XMLHttpRequest();
request.open('GET','https://api.covid19api.com/world/total');
request.onload=function()
{
    var response= request.response;
    var data= JSON.parse(response);
    console.log(data);
    var c=data.TotalConfirmed;
    var d=data.TotalDeaths;
    var r=data.TotalRecovered;
    //console.log(r);
    var cc=document.querySelector('.a1');
    cc.textContent="TotalConfirmed:"+" "+c;
    var cd=document.querySelector('.a2');
    cd.textContent="TotalDeaths:"+" "+d;
    var cr=document.querySelector('.a3');
    cr.textContent='TotalDeaths:'+" "+r;
}

request.send();
