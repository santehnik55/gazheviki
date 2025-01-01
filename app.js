let turn = '';
let win = '';
let text = document.getElementById('text')
let spanwho = document.getElementById('spanwho');
let blockarea = document.getElementById('blockarea')
let blockitems = document.querySelectorAll('.blockitem')
let blockwin = document.getElementById('blockwin')
let spanwin = document.getElementById('spanwin')
let button = document.getElementById('button')
const wincomb = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]];
let counter = 0;

const who = () => {
    if(turn == 'krest'){
        turn = 'circle'
        spanwho.innerText = 'Левики'
    } else {
        turn = 'krest'
        spanwho.innerText = 'Гажики'
    }
}
who()

blockitems.forEach((item) => {
    item.addEventListener('click', () => {
        if(!item.classList.contains('circle') && !item.classList.contains('krest')){
            item.classList.add(turn)
            if(turn == 'krest')
                item.innerText = 'x'
            else
                item.innerText = 'O'
            who()
            counter++
            getwincircle()
            getwinkrest()
            nowin()
        }
    })
})

const getwincircle = () => {
    for(let i=0; i<wincomb.length; i++){
        if(blockitems[wincomb[i][0]].classList.contains('circle') &&
        blockitems[wincomb[i][1]].classList.contains('circle') &&
        blockitems[wincomb[i][2]].classList.contains('circle')){
            blockitems[wincomb[i][0]].classList.add('wincolor')
            blockitems[wincomb[i][1]].classList.add('wincolor')
            blockitems[wincomb[i][2]].classList.add('wincolor')

            win = 'ЛЕВИКИ'
            end(win)
            return 1
        }
    }
}

const getwinkrest = () => {
    for(let i=0; i<wincomb.length; i++){
        if(blockitems[wincomb[i][0]].classList.contains('krest') &&
        blockitems[wincomb[i][1]].classList.contains('krest') &&
        blockitems[wincomb[i][2]].classList.contains('krest')){
            blockitems[wincomb[i][0]].classList.add('wincolor')
            blockitems[wincomb[i][1]].classList.add('wincolor')
            blockitems[wincomb[i][2]].classList.add('wincolor')

            win = 'ГАЖИКИ'
            end(win)
            return 1
        }
    }
}

const nowin = () => {
    if(!getwincircle() && !getwinkrest() && counter == 9){
        win = 'НИЧЬЯ МИР ЛЮБОВЬ'
        end(win)
    }
}

const end = (winner) => {
    blockarea.style.pointerEvents = 'none';
    blockwin.style.display = 'flex'
    spanwin.innerText = winner
    text.innerText = 'ИГРА ОКОНЧЕНА'
    spanwho.innerText = ''
}

button.addEventListener('click', () => document.location.reload())