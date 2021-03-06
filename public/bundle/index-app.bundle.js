(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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
},{}],2:[function(require,module,exports){
'use strict';

var _indexStart = require('./index-start');

var _indexStart2 = _interopRequireDefault(_indexStart);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _indexStart2.default)(document.querySelector('#pages'), '/data/pages.json');
},{"./index-start":3}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = start;

var _fetch = require('./fetch');

var _fetch2 = _interopRequireDefault(_fetch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function start(container, url) {
    (0, _fetch2.default)(url, function (data) {
        var pages = [];
        data.map(function (url) {
            pages.push('<li><a target=\'_blank\' href="/html/' + url + '">' + url + '</a></li>');
        });
        container.innerHTML = pages.join('');
    }, function (err) {
        console.log(err.toString());
    });
}
},{"./fetch":1}]},{},[2]);
