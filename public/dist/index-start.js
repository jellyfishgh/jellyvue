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