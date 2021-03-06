'use strict';

exports.__esModule = true;

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _ = require('./');

var _2 = _interopRequireDefault(_);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var getDisplayName = function getDisplayName(WrappedComponent) {
  return WrappedComponent.displayName || WrappedComponent.name || 'Component';
};

exports['default'] = function () {
  var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

  return function lazyload(WrappedComponent) {
    return (function (_Component) {
      _inherits(LazyLoadDecorated, _Component);

      function LazyLoadDecorated() {
        _classCallCheck(this, LazyLoadDecorated);

        _Component.apply(this, arguments);
      }

      LazyLoadDecorated.prototype.render = function render() {
        return _react2['default'].createElement(
          _2['default'],
          options,
          _react2['default'].createElement(WrappedComponent, this.props)
        );
      };

      _createClass(LazyLoadDecorated, null, [{
        key: 'displayName',
        value: 'LazyLoad' + getDisplayName(WrappedComponent),
        enumerable: true
      }]);

      return LazyLoadDecorated;
    })(_react.Component);
  };
};

module.exports = exports['default'];