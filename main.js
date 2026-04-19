
const CELL_AMOUNT = 100
let current_color = 'black'
let field = document.querySelector('.field')

for (let i = 0 ; i < CELL_AMOUNT; i += 1) {
    let newElement = document.createElement('div')
    newElement.classList.add ('cell')
    newElement.addEventListener('click', function(event){
        event.target.style.backgroundColor = current_color
    })


    field.appendChild(newElement)
}
function paint (event){
    let element = event.target
    let isCell = element.classList.contains ('cell')
    if (isCell){
        event.target.style.backgroundColor = current_color
    }
}
field.addEventListener('mousedown', function(){
field.addEventListener('mousemove',paint)

}
)
field.addEventListener('mouseup', function(){
    field.removeEventListener('mousemove',paint)
    })
const colors = document.querySelectorAll('.color')

colors.forEach (color=>{
    color.addEventListener ("click", function(){
     current_color = this.style.backgroundColor   
    })
})
field.addEventListener('mousedown',function(){
    field.addEventListener('mousemove',paint)
})
field.addEventListener('mouseup',function(){
    field.removeEventListener('mousemove',paint)
})
const clearBtn = document.getElementById ("clear")
clearBtn.addEventListener ("click",() => {
    const cells = document.querySelectorAll(".cell")
    cells.forEach(cell => {
        cell.style.background = "transparent"
    })
})
