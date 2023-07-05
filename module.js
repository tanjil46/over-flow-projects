


const slideshowElements=document.querySelectorAll(".slideshow");

console.log(slideshowElements);

let countElements=1;

setInterval(()=>{

    
countElements++;

let allElements=document.querySelector(".current");

allElements.classList.remove("current");

if(countElements>slideshowElements.length){
   slideshowElements[0].classList.add("current")
   countElements=1;
   

}else{
    allElements.nextElementSibling.classList.add("current");

}











    


},2000);
