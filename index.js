const cellAllTab = []

const numberOfCell = function () {
    for (let i = 0; i < 100; i++) {
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
    newButton.style.margin = '2em 15em 3em 15em'
    newButton.innerText = 'GIRA LA FORTUNA'
    newButton.addEventListener('click', getNum)
    positionButton.appendChild(newButton)
}

const previousNumber = []

const getNum = function () {
    let randomNumber = Math.floor(Math.random() * 100)

    while (previousNumber.includes(randomNumber)) {
        randomNumber = Math.floor(Math.random() * 100)
    }
    previousNumber.push(randomNumber)
    console.log('ecco')

    const allTheCells = document.querySelectorAll('.cell')
    allTheCells.forEach((cell) => {
        if (parseInt(cell.innerText) === randomNumber) {
            cell.classList.add('selector')
        }
    })
}
