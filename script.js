yes = document.getElementById("yes")
no = document.getElementById("no")
container = document.getElementById("container")

count = 0 

no.addEventListener("click",function(){
    x= Math.floor(Math.random() * (-50 - 50)) + 10
    y= Math.floor(Math.random() * (200 - 100)) + 10
    if(count==0){
        no.style.transform=`translate(${x}px, ${x}px)`
        count = 1  
    }   
    else{
        no.style.transform=`translate(${y}px, ${y}px)`
        count=0
        console.log(count) 
    }
    
})

yes.addEventListener("click",function(){
    //container.innerHTML = "<div class='ans' style='display:flex;justify-content:center;flex-direction:row-reverse'><h1>مانا عارف اصلا </h1><span class='emoji' style='padding-top:5px;font-size:40px'>😜😂</span></div>"
    container.innerHTML = "<div class='ans'><h1>مانا عارف اصلا </h1><span class='emoji'>😜😂</span></div>"
})
