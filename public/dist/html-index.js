'use strict';

var _fetch = require('./fetch');

var _fetch2 = _interopRequireDefault(_fetch);

var _vue = require('vue');

var _vue2 = _interopRequireDefault(_vue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _fetch2.default)('/data/pages.json', function (data) {
    new _vue2.default({
        el: '#pages',
        data: {
            pages: data
        }
    });
}, function (err) {
    console.log(err);
});