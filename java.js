s=0
k=0
function en1(a,b,c,d){
    document.getElementById(a).disabled=true
    document.getElementById("n").disabled=false
    if(d=="1"){
        s=s+1
        document.getElementById(b).innerHTML=s
    }
    e= document.getElementsByClassName(c);
    for (let i = 0; i < e.length; i++) {
        e[i].style.backgroundColor = "red";
    }
    document.getElementById(a).style.backgroundColor ="#11B311"
    k=k+1
    if(k==5 && s>2){
        document.write('<h1 style="background-color: rgb(37, 36, 36); color: white; text-align: center;">You did Good :' + s + '/5</h1>');
    }
    else if(k==5 && s>0){
        document.write('<h1 style="background-color: rgb(37, 36, 36); color: white; text-align: center;">Nice you should try again :' + s + '/5</h1>');
    }
    else if(k==5){
        document.write('<h1 style="background-color: rgb(37, 36, 36); color: white; text-align: center;">You got some work to do :' + s + '/5</h1>');
    }
}
function init(){
    document.getElementById("n").disabled=true
}
function load(){
    window.scrollTo(0, 0);
    location.reload()
}