const $arenas = document.querySelector('.arenas')
const $randomButton = document.querySelector('.button')

const player1 = {
    player: 1,
    name: 'Sonya',
    hp: 100,
    srcImage: 'http://reactmarathon-api.herokuapp.com/assets/sonya.gif',
    weapon: ['ice-sword', 'double-ax', 'ice-blow'],
    attack: function () {
        console.log(`${this.name} + Fight`)
    }
}

const player2 = {
    player: 2,
    name: 'Liukang',
    hp: 100,
    srcImage: 'http://reactmarathon-api.herokuapp.com/assets/liukang.gif',
    weapon: ['double-sword', 'ax', 'fire-blow'],
    attack: function () {
        console.log(`${this.name} + Fight`)
    }
}

function createElement(tag, className) {
    const $tag = document.createElement(tag)
    if (className) {
        $tag.classList.add(className)
    }
    return $tag
}

const createPlayer = (playerObj) => {
    const $player = createElement('div', 'player' + playerObj.player)
    const $progressbar = createElement('div', 'progressbar')
    const $life = createElement('div', 'life')
    const $name = createElement('div', 'name')
    const $character = createElement('div', 'character')
    const $img = createElement('img',)

    $life.style.width = `${playerObj.hp}%`
    $name.innerHTML = playerObj.name
    $img.src = playerObj.srcImage

    $progressbar.appendChild($life)
    $progressbar.appendChild($name)
    $character.appendChild($img)
    $player.appendChild($progressbar)
    $player.appendChild($character)


    return $player
}

function randomizer() {
    return Math.ceil(Math.random() * 20)
}

function changeHP(player) {

    const $playerLife = document.querySelector('.player' + player.player + ' .life')
    if ($randomButton.disabled === false) {
        player.hp -= randomizer()

        if (player.hp < 0) {
            player.hp = 0
            $randomButton.disabled = true
            $arenas.appendChild(playerWins(player.name))
            $randomButton.disabled = true
        }
        $playerLife.style.width = player.hp + '%'
    }
}

function playerWins(name) {
    const $winsTitle = createElement('div', 'loseTitle')
    if (name === player1.name) {
        $winsTitle.innerText = player2.name + ' wins'
    } else {
        $winsTitle.innerText = player1.name + ' wins'
    }
    return $winsTitle
}

$randomButton.addEventListener('click', function () {
    changeHP(player1)
    changeHP(player2)
})
$arenas.appendChild(createPlayer(player1))
$arenas.appendChild(createPlayer(player2))



