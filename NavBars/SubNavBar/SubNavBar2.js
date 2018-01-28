'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

require('../../css/reset.css');

require('../../css/SuperStyleSheet.css');

var _Holder = require('../../Holders/Holder1');

var _Holder2 = _interopRequireDefault(_Holder);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SubNavbar2 = function (_Component) {
    _inherits(SubNavbar2, _Component);

    function SubNavbar2(props) {
        _classCallCheck(this, SubNavbar2);

        var _this = _possibleConstructorReturn(this, (SubNavbar2.__proto__ || Object.getPrototypeOf(SubNavbar2)).call(this, props));

        _this.state = {
            fontFamily: props.font || 'serif',
            totalWidth: props.totalWidth || '100%',
            navBarWidth: props.navbarWidth || '50%',
            totalHeight: props.height || '30px',
            display: props.display || 'flex',
            direction: props.direction || 'row',
            alignItems: props.align || 'center',
            columnAlign: props.columnAlign || 'center',
            //margin: props.margin || '0',
            padding: props.padding || '0',
            itemSpaceing: props.itemSpacing || '0',
            mainBackground: props.mainBackground || 'gray',
            itemBackground: props.itemBackground || 'inherit',
            color: props.color || 'black',
            fontSize: props.fontSize || '0.8em',
            fontWeight: props.fontWeight || '100',
            fontVariant: props.fontVariant || 'none',
            navid: props.navid,
            leftItemsid: props.leftItemsid,
            rightItemsid: props.rightItemsid,
            navClassName: props.navClassName,
            leftItemsClassName: props.leftItemsClassName,
            rightItemsClassName: props.rightItemsClassName
        };
        return _this;
    }

    _createClass(SubNavbar2, [{
        key: 'render',
        value: function render() {
            var SUBNAVBAR = {
                width: this.state.totalWidth,
                height: this.state.totalHeight,
                color: this.state.color,
                display: this.state.display,
                flexDirection: 'column',
                alignItems: this.state.alignItems,
                margin: '0',
                padding: this.state.padding,
                background: this.state.mainBackground,
                posistion: 'sticky',
                top: 0
            };
            var SUBNAVBAR_NAVBAR1 = {
                width: this.state.navBarWidth,
                height: 'inherit',
                display: 'flex',
                flexWrap: 'wrap',
                flex: 1,
                alignItems: this.state.columnAlign,
                fontFamily: this.state.fontFamily,
                flexDirection: this.state.direction
            };
            var SUBNAVBAR_NAVBAR2 = {
                width: this.state.navBarWidth,
                height: 'inherit',
                display: 'flex',
                flexWrap: 'wrap',
                flex: 1,
                alignItems: this.state.columnAlign,
                fontFamily: this.state.fontFamily,
                flexDirection: this.state.direction
            };
            var SUBNAVBAR_NAVBAR_LI = {
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
            var NAVBAR = CHILDS.map(function (x, i, arr) {
                return _react2.default.createElement(
                    'li',
                    { key: i, style: SUBNAVBAR_NAVBAR_LI },
                    arr[i + 2]
                );
            });
            return _react2.default.createElement(
                'nav',
                { style: SUBNAVBAR, className: 'subnavbar2 socialness' },
                _react2.default.createElement(
                    _Holder2.default,
                    null,
                    _react2.default.createElement(
                        'ul',
                        { style: SUBNAVBAR_NAVBAR1, id: this.state.navid, className: 'subnavbar2-navbar1 ' + this.state.navClassName },
                        CHILDS[0],
                        CHILDS[1]
                    ),
                    _react2.default.createElement(
                        _Holder2.default,
                        {
                            alignBlock1: 'flex-end',
                            alignBlock2: 'flex-start' },
                        _react2.default.createElement(
                            'div',
                            { id: this.state.leftItemsid, className: 'subnavbar2-globalSearch ' + this.state.leftItemsClassName },
                            _react2.default.createElement(
                                'p',
                                null,
                                'Search Holder'
                            )
                        ),
                        _react2.default.createElement(
                            'ul',
                            { style: SUBNAVBAR_NAVBAR2, id: this.state.rightItemsid, className: 'subnavbar2-navbar2 ' + this.state.rightItemsClassName },
                            NAVBAR
                        )
                    )
                )
            );
        }
    }]);

    return SubNavbar2;
}(_react.Component);

exports.default = SubNavbar2;