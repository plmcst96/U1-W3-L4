const cellAllTab = []

const numberOfCell = function () {
    for (let i = 0; i < 77; i++) {
        cellAllTab.push(i)
    }
}
numberOfCell()
console.log(cellAllTab)

const numberInCell = function (i) {
    const positionTab = document.getElementById('tabellone')

    for (let i = 1; i < cellAllTab.length; i++) {
        const creatDivTab = document.createElement('div')
        creatDivTab.classList.add('cell')
        creatDivTab.innerText = i
        positionTab.appendChild(creatDivTab)
    }
    const positionButton = document.getElementById('tabellone')
    const newButton = document.createElement('button')
    newButton.classList.add('newBtn')
    newButton.innerText = 'GIRA LA FORTUNA'
    newButton.addEventListener('click', getNum)
    positionButton.appendChild(newButton)
}

const previousNumber = []

const getNum = function () {
    const randomNumber = Math.floor(Math.random() * 77)
    console.log(randomNumber)

    const allTheCells = document.querySelectorAll('.cell')

    allTheCells.forEach((cell) => {
        console.log(cell.innerText)
        if (parseInt(cell.innerText) === randomNumber) {
            console.log('trovato')
            cell.classList.add('selector')
        }
    })

}

