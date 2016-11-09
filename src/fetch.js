export default function(url, succeeded, failed) {
    const xhr = new window.XMLHttpRequest()
    xhr.open('GET', url, true)
    xhr.timeout = 3000
    xhr.responseType = 'json'
    xhr.onload = () => {
        succeeded(xhr.response)
    }
    xhr.onerror = (err) => {
        failed(err)
    }
    xhr.ontimeout = () => {
        failed(new Error('time out'))
    }
    xhr.send()
}