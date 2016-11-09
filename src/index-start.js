import fetch from './fetch'

export default function start(container, url) {
    fetch(url, (data) => {
        const pages = []
        data.map((url) => {
            pages.push(`<li><a target='_blank' href="/html/${url}">${url}</a></li>`)
        })
        container.innerHTML = pages.join('')
    }, (err) => {
        console.log(err.toString())
    })
}