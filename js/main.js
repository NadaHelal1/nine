let btn=document.querySelector('.btn-top')
window.onscroll=function(){
    if(window.onscrollY>=500){
        console.log(`${window.scrollY}`)
       btn.style.display="none"
  
    }

    else{
        btn.style.display="block"
       }
}

btn.onclick= function(){
    window.scrollTo({
        left:0,
        top:0,
        behavior:'smooth'
        
    })

}