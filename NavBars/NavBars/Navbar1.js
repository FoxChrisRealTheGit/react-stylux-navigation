'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

require('../../css/reset.css');

require('../../css/SuperStyleSheet.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Navbar1 = function (_Component) {
    _inherits(Navbar1, _Component);

    function Navbar1(props) {
        _classCallCheck(this, Navbar1);

        var _this = _possibleConstructorReturn(this, (Navbar1.__proto__ || Object.getPrototypeOf(Navbar1)).call(this, props));

        _this.state = {
            fontFamily: props.font || 'serif',
            totalWidth: props.totalWidth || '100%',
            navBarWidth: props.navbarWidth || '100%',
            totalHeight: props.height,
            display: props.display || 'flex',
            direction: props.direction || 'row',
            alignItems: props.align || 'center',
            columnAlign: props.columnAlign || 'center',
            margin: props.margin || '0',
            padding: props.padding || '0',
            itemSpaceing: props.itemSpacing || '10px 0',
            mainBackground: props.mainBackground || 'inherit',
            itemBackground: props.itemBackground || 'inherit',
            color: props.color || 'black',
            fontSize: props.fontSize || '1em',
            fontWeight: props.fontWeight || '100',
            fontVariant: props.fontVariant || 'none',
            navid: props.navid,
            itemsid: props.itemsid,
            navClassName: props.navClassName,
            itemsClassName: props.itemsClassName,
            childs: ''
        };
        return _this;
    }

    _createClass(Navbar1, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var NAVBAR_NAVBAR_LI = {
                display: 'flex',
                flex: 1,
                fontSize: this.state.fontSize,
                fontWeight: this.state.fontWeight,
                justifyContent: 'center',
                margin: this.state.itemSpaceing,
                background: this.state.itemBackground,
                fontVariant: this.state.fontVariant
            };
            var CHILDS = _react2.default.Children.toArray(this.props.children);
            var NAVBARACTUAL = CHILDS.map(function (x, i) {
                return _react2.default.createElement(
                    'li',
                    { key: i, style: NAVBAR_NAVBAR_LI },
                    x
                );
            });
            this.setState({ childs: NAVBARACTUAL });
        }
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(newProps) {
            var NAVBAR_NAVBAR_LI = {
                display: 'flex',
                flex: 1,
                fontSize: this.state.fontSize,
                fontWeight: this.state.fontWeight,
                justifyContent: 'center',
                margin: this.state.itemSpaceing,
                background: this.state.itemBackground,
                fontVariant: this.state.fontVariant
            };
            var CHILDS = _react2.default.Children.toArray(newProps.children);
            var NAVBARACTUAL = CHILDS.map(function (x, i) {
                return _react2.default.createElement(
                    'li',
                    { key: i, style: NAVBAR_NAVBAR_LI },
                    x
                );
            });
            this.setState({ childs: NAVBARACTUAL });
        }
    }, {
        key: 'render',
        value: function render() {
            var NAVBAR = {
                width: this.state.totalWidth,
                height: this.state.totalHeight,
                display: this.state.display,
                flexDirection: 'column',
                alignItems: this.state.alignItems,
                margin: '0',
                padding: this.state.padding,
                background: this.state.mainBackground,
                color: this.state.color
            };
            var NAVBAR_NAVBAR = {
                width: this.state.navBarWidth,
                height: 'inherit',
                display: 'flex',
                flexWrap: 'wrap',
                alignItems: this.state.columnAlign,
                fontFamily: this.state.fontFamily,
                flexDirection: this.state.direction
            };
            return _react2.default.createElement(
                'nav',
                { style: NAVBAR, id: this.state.navid, className: this.state.navClassName },
                _react2.default.createElement(
                    'ul',
                    { style: NAVBAR_NAVBAR, id: this.state.itemsid, className: 'navbar1-navbar socialness ' + this.state.itemsClassName },
                    this.state.childs
                )
            );
        }
    }]);

    return Navbar1;
}(_react.Component);

exports.default = Navbar1;