let mode = "black"
let body = document.querySelector("body")
let btn = document.querySelector(".themelogo");

btn.addEventListener("click", ()=>{

    if(mode==="black"){
        mode = "white"
        body.classList.add("white")
        body.classList.remove("black")   
    }
    else{
        mode="black"
        body.classList.add("black")
        body.classList.remove("white")
    }  
})


function genratePassword(){


   
    let fname = document.querySelector(".fnametxt").value
    let lname = document.querySelector(".lnametxt").value
    let bdate = document.querySelector(".bdatetxt").value
    let skeyword = document.querySelector(".skeywordtxt").value
    let ssymbol = document.querySelector(".ssymboltxt").value
    let bdatestr = bdate.toString()
    let bdatearr = str.split('-');

   
    var combinations = [
        fname + lname + bdate + skeyword + ssymbol + bdatearr[0] + bdatearr[1] + bdatearr[2],   
    ];

    let password = document.querySelector(".password")
        finalpassword = combinations[1]
        
      

      password.textContent = finalpassword
   
}
