function generatePassword() {
    let fname = document.querySelector(".fnametxt").value.trim();
    let lname = document.querySelector(".lnametxt").value.trim();
    let bdate = document.querySelector(".bdatetxt").value.trim();
    let skeyword = document.querySelector(".skeywordtxt").value.trim();
    let ssymbol = document.querySelector(".ssymboltxt").value.trim();
    let bdatearr = bdate.split('-');

    

    let elements = [fname, lname, skeyword, ssymbol];

    if (bdatearr[0]) elements.push(bdatearr[0]);
    if (bdatearr[1]) elements.push(bdatearr[1]);
    if (bdatearr[2]) elements.push(bdatearr[2]);


    elements = elements.filter(Boolean);

    let permutations = permute(elements);

 
    let randomIndex = Math.floor(Math.random() * permutations.length);
    let finalpassword = permutations[randomIndex];

   
    let passwordOutput = document.querySelector(".password");
    passwordOutput.textContent = `${finalpassword}`;
}


function permute(arr) {
    let results = [];

    function backtrack(path, options) {
        if (path.length === arr.length) {
            results.push(path.join('')); 
            return;
        }
        for (let i = 0; i < options.length; i++) {
            backtrack(path.concat(options[i]), options.slice(0, i).concat(options.slice(i + 1)));
        }
    }

    backtrack([], arr);
    return results;
}

let mode = "black";
let body = document.querySelector("body");
let btn = document.querySelector(".themelogo");
let innerbtn = document.querySelector(".innerbtn");
let position = 'flex-start';
btn.addEventListener("click", () => {

    if (position === "flex-start") {
        position = "flex-end";
        btn.style.justifyContent = position;
    } else {
        position = "flex-start";
        btn.style.justifyContent = position;
    }

    if (mode === "black") {
        mode = "white";
        body.classList.add("white");
        body.classList.remove("black");
    } else {
        mode = "black";
        body.classList.add("black");
        body.classList.remove("white");
    }
});
