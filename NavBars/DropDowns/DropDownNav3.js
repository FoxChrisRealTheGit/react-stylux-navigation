'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

require('../../css/reset.css');

require('../../css/SuperStyleSheet.css');

var _Holder = require('../../Holders/Holder2');

var _Holder2 = _interopRequireDefault(_Holder);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DropDownNav3 = function (_Component) {
    _inherits(DropDownNav3, _Component);

    function DropDownNav3(props) {
        _classCallCheck(this, DropDownNav3);

        var _this = _possibleConstructorReturn(this, (DropDownNav3.__proto__ || Object.getPrototypeOf(DropDownNav3)).call(this, props));

        _this.state = {
            display: 'none',
            background: props.background,
            offset: props.offset,
            margin: '',
            padding: props.padding,
            width: props.width,
            mainid: props.mainid,
            titleid: props.titleid,
            itemsid: props.itemsid,
            mainClassName: props.mainClassName,
            titleClassName: props.titleClassName,
            itemsClassName: props.itemsClassName
        };
        return _this;
    }

    _createClass(DropDownNav3, [{
        key: 'render',
        value: function render() {
            var _this2 = this;

            var DROPDOWN = {
                position: 'absolute',
                display: this.state.display,
                margin: '0 0 0 ' + this.state.offset,
                width: this.state.width,
                padding: '5px',
                textAlign: 'center',
                flex: 1,
                background: this.state.background
            };
            var DropDown_NavBar_Li = {};
            var HASCHILDS = {
                fontSize: '1.333em'
            };
            var CHILDS = _react2.default.Children.toArray(this.props.children);
            return _react2.default.createElement(
                'nav',
                { id: this.state.mainid, className: 'dropdownnav3 ' + this.state.mainClassName },
                _react2.default.createElement(
                    'li',
                    { style: HASCHILDS,
                        onMouseOver: function onMouseOver() {
                            return _this2.setState({ display: 'block' });
                        },
                        onMouseOut: function onMouseOut() {
                            return _this2.setState({ display: 'none' });
                        },
                        id: this.state.titleid, className: this.state.titleClassName },
                    CHILDS[0],
                    _react2.default.createElement(
                        'ul',
                        { style: DROPDOWN, id: this.state.itemsid, className: this.state.itemsClassName },
                        _react2.default.createElement(
                            _Holder2.default,
                            null,
                            CHILDS[1],
                            CHILDS[2],
                            CHILDS[3],
                            CHILDS[4],
                            CHILDS[5],
                            CHILDS[6],
                            CHILDS[7],
                            CHILDS[8],
                            CHILDS[9],
                            CHILDS[10]
                        )
                    )
                )
            );
        }
    }]);

    return DropDownNav3;
}(_react.Component);

exports.default = DropDownNav3;