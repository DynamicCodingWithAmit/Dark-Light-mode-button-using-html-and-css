let mode_V = document.getElementById('mode');

mode_V.addEventListener('click',()=>{
    if(mode_V.checked == true){
        document.getElementById('body').style.background="white";
    }
    else{
        document.getElementById('body').style.background="rgb(37,35,58)"; 
    }
})