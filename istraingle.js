const inputs = document.querySelectorAll(".angle-input")
const istriangle = document.querySelector(".is-traingle")
const output = document.querySelector("#output")

const checkTraingle=() =>{
    if(inputs[0].value>0 && inputs[1].value>0 && inputs[2].value>0){
    let sum = Number(inputs[0].value) + Number(inputs[1].value) + Number(inputs[2].value)
    if (sum === 180) {
        output.innerText = `Yay, It's a traingle`
    } else {
        output.innerText = `Oh no, It is not a triangle`
    }
    }
    else{
        output.innerText =`Enter positive number`
    }
}
istriangle.addEventListener("click", checkTraingle, false)
