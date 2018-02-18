'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

require('../../css/reset.css');

require('../../css/SuperStyleSheet.css');

var _nestingstyles = require('nestingstyles');

var _nestingstyles2 = _interopRequireDefault(_nestingstyles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SubNavbar1 = function (_Component) {
    _inherits(SubNavbar1, _Component);

    function SubNavbar1(props) {
        _classCallCheck(this, SubNavbar1);

        var _this = _possibleConstructorReturn(this, (SubNavbar1.__proto__ || Object.getPrototypeOf(SubNavbar1)).call(this, props));

        _this.state = {
            fontFamily: props.font || 'serif',
            totalWidth: props.totalWidth || '100%',
            navBarWidth: props.navbarWidth || '50%',
            totalHeight: props.height || '30px',
            display: props.display || 'flex',
            direction: props.direction || 'row',
            alignItems: props.align || 'flex-start',
            columnAlign: props.columnAlign || 'center',
            //margin: props.margin || '0',
            padding: props.padding || '0',
            itemSpaceing: props.itemSpacing || '0',
            mainBackground: props.mainBackground || 'black',
            itemBackground: props.itemBackground || 'inherit',
            color: props.color || 'whitesmoke',
            fontSize: props.fontSize || '0.9em',
            fontWeight: props.fontWeight || '100',
            fontVariant: props.fontVariant || 'none',
            navid: props.navid,
            listid: props.listid,
            itemsid: props.itemsid,
            navClassName: props.navClassName,
            listClassName: props.listClassName,
            itemsClassName: props.itemsClassName,
            childs: '',
            smdis: props.smDis || 'none',
            mddis: props.mdDis || 'flex',
            top: props.top || '-1px',
            bottom: props.bottom,
            left: props.left,
            right: props.right,
            position: props.position || "sticky",
            zIndex: props.zIndex || '200'
        };
        return _this;
    }

    _createClass(SubNavbar1, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _this2 = this;

            var SUBNAVBAR_NAVBAR_LI = _nestingstyles2.default.create({
                subnavbar_navbar_li: {
                    display: 'flex',
                    flex: 1,
                    fontSize: this.state.fontSize,
                    fontWeight: this.state.fontWeight,
                    justifyContent: 'center',
                    margin: this.state.itemSpaceing,
                    background: this.state.itemBackground,
                    fontVariant: this.state.fontVariant
                },
                '@media screen and (max-width: 440px)': {
                    subnavbar_navbar_li: {
                        display: this.state.smdis
                    }
                },
                '@media screen and (min-width: 441px) and (max-width: 760px)': {
                    subnavbar_navbar_li: {
                        display: this.state.mddis
                    }
                }
            });
            var CHILDS = _react2.default.Children.toArray(this.props.children);
            var NAVBAR = CHILDS.map(function (x, i) {
                return _react2.default.createElement(
                    'li',
                    { key: i, style: SUBNAVBAR_NAVBAR_LI.subnavbar_navbar_li, id: _this2.state.itemsid, className: _this2.state.itemsClassName },
                    x
                );
            });
            this.setState({ childs: NAVBAR });
        }
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(newProps) {
            var _this3 = this;

            var SUBNAVBAR_NAVBAR_LI = _nestingstyles2.default.create({
                subnavbar_navbar_li: {
                    display: 'flex',
                    flex: 1,
                    fontSize: this.state.fontSize,
                    fontWeight: this.state.fontWeight,
                    justifyContent: 'center',
                    margin: this.state.itemSpaceing,
                    background: this.state.itemBackground,
                    fontVariant: this.state.fontVariant
                },
                '@media screen and (max-width: 440px)': {
                    subnavbar_navbar_li: {
                        display: this.state.smdis
                    }
                },
                '@media screen and (min-width: 441px) and (max-width: 760px)': {
                    subnavbar_navbar_li: {
                        display: this.state.mddis
                    }
                }
            });
            var CHILDS = _react2.default.Children.toArray(newProps.children);
            var NAVBAR = CHILDS.map(function (x, i) {
                return _react2.default.createElement(
                    'li',
                    { key: i, style: SUBNAVBAR_NAVBAR_LI.subnavbar_navbar_li, id: _this3.state.itemsid, className: _this3.state.itemsClassName },
                    x
                );
            });
            this.setState({ childs: NAVBAR });
        }
    }, {
        key: 'render',
        value: function render() {
            var SUBNAVBAR = _nestingstyles2.default.create({
                subnavbar: {
                    width: this.state.totalWidth,
                    height: this.state.totalHeight,
                    display: this.state.display,
                    flexDirection: 'column',
                    alignItems: this.state.alignItems,
                    margin: '0',
                    padding: this.state.padding,
                    background: this.state.mainBackground,
                    color: this.state.color,
                    top: this.state.top,
                    bottom: this.state.bottom,
                    left: this.state.left,
                    right: this.state.right,
                    position: this.state.position,
                    zIndex: this.state.zIndex
                },
                '@media screen and (max-width: 440px)': {
                    subnavbar: {
                        display: this.state.smdis
                    }
                },
                '@media screen and (min-width: 441px) and (max-width: 760px)': {
                    subnavbar: {
                        display: this.state.mddis,
                        alignItems: 'center'
                    }
                }
            });
            var SUBNAVBAR_NAVBAR = _nestingstyles2.default.create({
                subnavbar_navbar: {
                    width: this.state.navBarWidth,
                    height: 'inherit',
                    display: 'flex',
                    flexWrap: 'wrap',
                    flex: 1,
                    alignItems: this.state.columnAlign,
                    fontFamily: this.state.fontFamily,
                    flexDirection: this.state.direction
                },
                '@media screen and (max-width: 440px)': {
                    subnavbar_navbar: {
                        display: this.state.smdis
                    }
                },
                '@media screen and (min-width: 441px) and (max-width: 760px)': {
                    subnavbar_navbar: {
                        display: this.state.mddis,
                        width: '90%'
                    }
                }
            });

            return _react2.default.createElement(
                'nav',
                { style: SUBNAVBAR.subnavbar, id: this.state.navid, className: 'subnavbar1 socialness ' + this.state.navClassName },
                _react2.default.createElement(
                    'ul',
                    { style: SUBNAVBAR_NAVBAR.subnavbar_navbar, id: this.state.listid, className: 'subnavbar1-navbar ' + this.state.listClassName },
                    this.state.childs
                )
            );
        }
    }]);

    return SubNavbar1;
}(_react.Component);

exports.default = SubNavbar1;