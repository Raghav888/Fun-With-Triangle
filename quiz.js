const quizform = document.querySelector(".quiz-form")
const btn = document.querySelector("#submit-ans")
const output = document.querySelector(".outputmarks")


const ans = ["90", "right angled","Equilateral","85","no"]

const checkAns=()=> {
    let score = 0
    let index = 0
    const formResult = new FormData(quizform)
    for (let value of formResult.values()) {
        if (value === ans[index]) {
            score += 1
        }
        index += 1
    }
    output.innerText = `Your score is ${score}`
}
btn.addEventListener("click", checkAns, false)
