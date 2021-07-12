// const $ = document.querySelector.bind(document)
// const $$ = document.querySelectorAll.bind(document)

const battle = document.querySelectorAll('.battle_item')
const battle_pane = document.querySelectorAll('.battle_pane')

const battleActive = document.querySelector('.battle_item.active')
const battle_line = document.querySelector('.battles .line')

function battleLine(battleActive) {
    battle_line.style.left = battleActive.offsetLeft + 'px'
    battle_line.style.width = battleActive.offsetWidth + 'px'
}
battleLine(battleActive)

battle.forEach((tab, index) => {
    const battlepane = battle_pane[index]
    tab.onclick = function(){
        battleLine(this)
        document.querySelector('.battle_pane.active').classList.remove('active')
        battlepane.classList.add('active')
        document.querySelector('.battle_item.active').classList.remove('active')
        this.classList.add('active')
    }
})


// ----------------------
const x = document.querySelectorAll('.title')
const y = document.querySelectorAll('.pane')

const titleActive = document.querySelector('.title.active')
const title_line = document.querySelector('.titles .lines')

function titleLine(titleActive){
    title_line.style.left = titleActive.offsetLeft + 'px'
    title_line.style.width = titleActive.offsetWidth + 'px'
}
titleLine(titleActive)

x.forEach((tab, index) => {
    const titilepane = y[index]
    tab.onclick = function(){
        titleLine(this)
        document.querySelector('.pane.active').classList.remove('active')
        titilepane.classList.add('active')
        document.querySelector('.title.active').classList.remove('active')
        this.classList.add('active')
    }
})

// -------------------------

const a = document.querySelectorAll('.result_title')
const b = document.querySelectorAll('.result_pane')

const resultActive = document.querySelector('.result_title.active')
const result_line = document.querySelector('.result_titles .result_line')

function ResultLine(resultActive){
    result_line.style.left = resultActive.offsetLeft + 'px'
    result_line.style.width = resultActive.offsetWidth + 'px'
}
ResultLine(resultActive)

a.forEach((tab, index) => {
    const resultpane = b[index]
    tab.onclick = function(){
        ResultLine(this)
        document.querySelector('.result_pane.active').classList.remove('active')
        resultpane.classList.add('active')
        document.querySelector('.result_title.active').classList.remove('active')
        this.classList.add('active')
    }
})