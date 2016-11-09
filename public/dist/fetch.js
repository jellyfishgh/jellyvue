'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (url, succeeded, failed) {
    var xhr = new window.XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.timeout = 3000;
    xhr.responseType = 'json';
    xhr.onload = function () {
        succeeded(xhr.response);
    };
    xhr.onerror = function (err) {
        failed(err);
    };
    xhr.ontimeout = function () {
        failed(new Error('time out'));
    };
    xhr.send();
};