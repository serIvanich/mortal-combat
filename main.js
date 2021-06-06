
const player1 = {
    name: 'Sonya',
    hp: 80,
    srcImage: 'http://reactmarathon-api.herokuapp.com/assets/sonya.gif',
    weapon: ['ice-sword', 'double-ax', 'ice-blow'],
    attack: function () {
        console.log(`${this.name} + Fight`)
    }
}

const player2 = {
    name: 'Liukang',
    hp: 50,
    srcImage: 'http://reactmarathon-api.herokuapp.com/assets/liukang.gif',
    weapon: ['double-sword', 'ax', 'fire-blow'],
    attack: function () {
        console.log(`${this.name} + Fight`)
    }
}
const createPlayer = (playerClass, player) => {
    let $player = document.createElement('div')
    $player.classList.add(playerClass)

    const $progressbar = document.createElement('div')
    $progressbar.classList.add('progressbar')

    const $life = document.createElement('div')
    $life.classList.add('life')
    $life.style.width = `${player.hp}%`

    const $name = document.createElement('div')
    $name.classList.add('name')
    $name.innerHTML = player.name

    $progressbar.appendChild($life)
    $progressbar.appendChild($name)


    const $character = document.createElement('div')
    $character.classList.add('character')

    const $img = document.createElement('img')
    $img.src= player.srcImage

    $character.appendChild($img)

    $player.appendChild($progressbar)
    $player.appendChild($character)

    const $arenas = document.querySelector('.arenas')
    $arenas.appendChild($player)
}

createPlayer('player1', player1);
createPlayer('player2', player2);

