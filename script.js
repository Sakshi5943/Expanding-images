const panels = document.querySelectorAll('.panel')    // selects all the elements and stores them in "plane variable"

panels.forEach(panel => {      // loops througheach panel elements
    panel.addEventListener('click', () => {
        removeActiveClasses()
        panel.classList.add('active')
    })
})

function removeActiveClasses() {
    panels.forEach(panel => {
        panel.classList.remove('active')
    })
}