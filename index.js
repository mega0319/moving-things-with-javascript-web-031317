const app = "I don't do much."

function moveDodgerRight() {
    var rightNumbers =
        dodger.style.right.replace('px', '')
    var right = parseInt(rightNumbers, 10)
    if(right > 0) {
        dodger.style.right = `${right - 1}px`
    }
}

document.addEventListener('keydown', function(key){
    return console.log(key)
})

document.addEventListener("keydown", function(key){
    if (key.which === 39) {
        moveDodgerRight()
    }
})
