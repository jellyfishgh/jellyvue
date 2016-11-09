import fetch from './fetch'
import Vue from 'vue'

fetch('/data/pages.json', (data) => {
    new Vue({
        el: '#pages',
        data: {
            pages: data
        }
    })
}, (err) => {
    console.log(err)
})