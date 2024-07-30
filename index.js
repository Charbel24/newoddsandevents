const form =document.querySelector('form')
const numberBank=[]

form.addEventListener('submit',function(e){
    e.preventDefault()

    const number = e.currentTarget.number.value
    numberBank.push(number)
    e.currentTarget.reset()
    showNumberBank()
})

function showNumberBank(){
    const outputEL = document.querySelector("#numberBank output")
    outputEL.value = numberBank.join("")
}

