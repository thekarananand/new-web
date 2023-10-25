const nav = document.querySelector('#nav')
const nav_toggle = document.querySelector('#nav_toggle')
const dark_filter = document.querySelector('#dark_filter')


nav_toggle.addEventListener('click', () => {
    const Visible = nav.getAttribute('data-visible')

    if (Visible == "false") {
        nav.setAttribute('data-visible', 'true')
        dark_filter.setAttribute('data-visible', 'true')
        nav_toggle.setAttribute('data-extended', 'true')
    } else {
        nav.setAttribute('data-visible', 'false')
        dark_filter.setAttribute('data-visible', 'false')
        nav_toggle.setAttribute('data-extended', 'false')
    }
})

dark_filter.addEventListener('click', () => {
    nav.setAttribute('data-visible', 'false')
    dark_filter.setAttribute('data-visible', 'false')
    nav_toggle.setAttribute('data-extended', 'false')
})

nav.querySelectorAll('li').forEach(element => {
    element.addEventListener('click', () => {
        nav.setAttribute('data-visible', 'false')
        dark_filter.setAttribute('data-visible', 'false')
        nav_toggle.setAttribute('data-extended', 'false')
    })
});

