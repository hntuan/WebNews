// const $ = document.querySelector.bind(document)
// const $$ = document.querySelectorAll.bind(document)

const tabs = document.querySelectorAll('.tab_item')
const panes = document.querySelectorAll('.tab_pane')

const tabActive = document.querySelector('.tab_item.active')
const line = document.querySelector('.tabs .line')

function activeLine(tabActive) {
    line.style.left = tabActive.offsetLeft + 'px'
    line.style.width = tabActive.offsetWidth + 'px'
}
activeLine(tabActive)

tabs.forEach((tab, index) => {
    const pane = panes[index]
    tab.onclick = function(){
        activeLine(this)
        document.querySelector('.tab_pane.active').classList.remove('active')
        pane.classList.add('active')
        document.querySelector('.tab_item.active').classList.remove('active')
        this.classList.add('active')
    }
})