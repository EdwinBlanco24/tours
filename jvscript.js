window.onscroll = function(){
    if(document.documentElement.scrollTop > 100){
        document.querySelector(".base").classList.add("show");
    }else{
        document.querySelector(".base").classList.remove("show");
    }
}

document.querySelector(".base").addEventListener("click", ()=>{
    window.scrollTo({
        top: 0, behavior:"smooth"
    });
});