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

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Navbar1 = function (_Component) {
    _inherits(Navbar1, _Component);

    function Navbar1(props) {
        _classCallCheck(this, Navbar1);

        var _this = _possibleConstructorReturn(this, (Navbar1.__proto__ || Object.getPrototypeOf(Navbar1)).call(this, props));

        _this.state = {
            position: props.position,
            top: props.top,
            left: props.left,
            right: props.right,
            bottom: props.bottom,
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
            fontSize: props.fontSize || '1.333em',
            fontWeight: props.fontWeight || '100',
            fontVariant: props.fontVariant || 'none',
            navid: props.navid,
            itemsid: props.itemsid,
            navClassName: props.navClassName,
            itemsClassName: props.itemsClassName,
            childs: '',
            hams: '',
            smdis: props.smDis || 'flex',
            mddis: props.mdDis || 'flex',
            initialCount: props.count || '0',
            hoverColor: props.hoverColor,
            hamMenuDis: 'none',
            hamShow: false,
            hamTop: props.hamTop || '75px',
            hamLeft: props.hamLeft || '0',
            hamSmDis: props.hamSmDis || 'flex',
            hamMdDis: props.hamMdDis || 'none',
            hamShadow: props.hamShadow || '1px 2px 2px black',
            hamBackground: props.hamBackground || 'white',
            hamPosition: props.hamPosition || 'absolute',
            animationIterationCount: props.aniCount || '1',
            animationTimingFunction: props.aniTime || 'ease-in',
            animationName: props.aniName || 'fadeIn',
            animationDuration: props.aniDur || '0.75s',
            transformOrigin: props.transformOrigin || 'top',
            animationFillMode: props.aniFillMode || 'both'
        };
        _this.toggle = _this.toggle.bind(_this);
        return _this;
    }

    _createClass(Navbar1, [{
        key: 'toggle',
        value: function toggle() {
            this.setState({ hamShow: !this.state.hamShow });
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            var NAVBAR_NAVBAR_LI = _nestingstyles2.default.create({
                navbar_navbar_li: {
                    display: this.state.display,
                    flex: 1,
                    fontSize: this.state.fontSize,
                    fontWeight: this.state.fontWeight,
                    justifyContent: 'center',
                    margin: this.state.itemSpaceing,
                    background: this.state.itemBackground,
                    fontVariant: this.state.fontVariant
                },
                hoverStyle: {
                    color: this.state.hoverColor
                },
                '@media screen and (max-width: 440px)': {
                    navbar_navbar_li: {
                        display: this.state.smdis
                    }
                },
                '@media screen and (min-width: 441px) and (max-width: 760px)': {
                    navbar_navbar_li: {
                        display: this.state.mddis
                    }
                }
            });
            var HAM_NAVBAR_LI = _nestingstyles2.default.create({
                ham_navbar_li: {
                    visibility: this.state.hamShow ? 'visible' : 'collaspe',
                    flex: 1,
                    fontSize: this.state.fontSize,
                    fontWeight: this.state.fontWeight,
                    justifyContent: 'center',
                    margin: this.state.itemSpaceing,
                    background: this.state.itemBackground,
                    fontVariant: this.state.fontVariant,
                    animationIterationCount: this.state.animationIterationCount,
                    animationTimingFunction: this.state.animationTimingFunction,
                    animationName: this.state.animationName,
                    animationDuration: this.state.animationDuration,
                    transformOrigin: this.state.transformOrigin,
                    animationFillMode: this.state.animationFillMode
                },
                hoverStyle: {
                    color: this.state.hoverColor
                },
                '@media screen and (max-width: 440px)': {
                    ham_navbar_li: {
                        visibility: this.state.hamShow ? 'visible' : 'collaspe'
                    }
                },
                '@media screen and (min-width: 441px) and (max-width: 760px)': {
                    ham_navbar_li: {
                        visibility: this.state.hamShow ? 'visible' : 'collaspe'
                    }
                }
            });
            var CHILDS = _react2.default.Children.toArray(this.props.children);
            if (+this.state.initialCount !== 0) {
                var LGDIS = [];
                var SMDIS = [];
                for (var x = 0; x < +this.state.initialCount; x += 1) {
                    LGDIS.push(CHILDS[x]);
                }
                for (var i = +this.state.initialCount; i < CHILDS.length; i += 1) {
                    SMDIS.push(CHILDS[i]);
                }
                var NAVBARLG = LGDIS.map(function (x, i) {
                    return _react2.default.createElement(
                        'li',
                        { key: i, style: NAVBAR_NAVBAR_LI.navbar_navbar_li },
                        x
                    );
                });
                var NAVBARSM = SMDIS.map(function (x, i) {
                    return _react2.default.createElement(
                        'li',
                        { key: i, style: HAM_NAVBAR_LI.ham_navbar_li },
                        x
                    );
                });

                this.setState({ childs: NAVBARLG, hams: NAVBARSM, smdis: 'none' });
            } else {
                var NAVBARACTUAL = CHILDS.map(function (x, i) {
                    return _react2.default.createElement(
                        'li',
                        { key: i, style: NAVBAR_NAVBAR_LI.navbar_navbar_li },
                        x
                    );
                });
                this.setState({
                    childs: NAVBARACTUAL,
                    hamMenuDis: 'none',
                    hamShow: false,
                    hamSmDis: 'none',
                    hamMdDis: 'none'
                });
            }
        }
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(newProps) {
            var NAVBAR_NAVBAR_LI = _nestingstyles2.default.create({
                navbar_navbar_li: {
                    display: this.state.display,
                    flex: 1,
                    fontSize: this.state.fontSize,
                    fontWeight: this.state.fontWeight,
                    justifyContent: 'center',
                    margin: this.state.itemSpaceing,
                    background: this.state.itemBackground,
                    fontVariant: this.state.fontVariant
                },
                hoverStyle: {
                    color: this.state.hoverColor
                },
                '@media screen and (max-width: 440px)': {
                    navbar_navbar_li: {
                        display: this.state.smdis
                    }
                },
                '@media screen and (min-width: 441px) and (max-width: 760px)': {
                    navbar_navbar_li: {
                        display: this.state.mddis
                    }
                }
            });
            var HAM_NAVBAR_LI = _nestingstyles2.default.create({
                ham_navbar_li: {
                    visibility: this.state.hamShow ? 'visible' : 'collaspe',
                    flex: 1,
                    fontSize: this.state.fontSize,
                    fontWeight: this.state.fontWeight,
                    justifyContent: 'center',
                    margin: this.state.itemSpaceing,
                    background: this.state.itemBackground,
                    fontVariant: this.state.fontVariant,
                    animationIterationCount: this.state.animationIterationCount,
                    animationTimingFunction: this.state.animationTimingFunction,
                    animationName: this.state.animationName,
                    animationDuration: this.state.animationDuration,
                    transformOrigin: this.state.transformOrigin,
                    animationFillMode: this.state.animationFillMode
                },
                hoverStyle: {
                    color: this.state.hoverColor
                },
                '@media screen and (max-width: 440px)': {
                    ham_navbar_li: {
                        visibility: this.state.hamShow ? 'visible' : 'collaspe'
                    }
                },
                '@media screen and (min-width: 441px) and (max-width: 760px)': {
                    ham_navbar_li: {
                        visibility: this.state.hamShow ? 'visible' : 'collaspe'
                    }
                }
            });
            var CHILDS = _react2.default.Children.toArray(this.props.children);
            if (+this.state.initialCount !== 0) {
                var LGDIS = [];
                var SMDIS = [];
                for (var x = 0; x < +this.state.initialCount; x += 1) {
                    LGDIS.push(CHILDS[x]);
                }
                for (var i = +this.state.initialCount; i < CHILDS.length; i += 1) {
                    SMDIS.push(CHILDS[i]);
                }
                var NAVBARLG = LGDIS.map(function (x, i) {
                    return _react2.default.createElement(
                        'li',
                        { key: i, style: NAVBAR_NAVBAR_LI.navbar_navbar_li },
                        x
                    );
                });
                var NAVBARSM = SMDIS.map(function (x, i) {
                    return _react2.default.createElement(
                        'li',
                        { key: i, style: HAM_NAVBAR_LI.ham_navbar_li },
                        x
                    );
                });

                this.setState({ childs: NAVBARLG, hams: NAVBARSM });
            } else {
                var NAVBARACTUAL = CHILDS.map(function (x, i) {
                    return _react2.default.createElement(
                        'li',
                        { key: i, style: NAVBAR_NAVBAR_LI.navbar_navbar_li },
                        x
                    );
                });
                this.setState({ childs: NAVBARACTUAL });
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var _hamestnav;

            var NAVBAR = _nestingstyles2.default.create({
                navbar: {
                    width: this.state.totalWidth,
                    height: this.state.totalHeight,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: this.state.alignItems,
                    margin: '0',
                    padding: this.state.padding,
                    background: this.state.mainBackground,
                    color: this.state.color

                },
                '@media screen and (max-width: 440px)': {
                    navbar: {
                        display: 'flex'
                    }
                },
                '@media screen and (min-width: 441px) and (max-width: 760px)': {
                    navbar: {
                        display: 'flex'
                    }
                }
            });
            var NAVBAR_NAVBAR = _nestingstyles2.default.create({
                navbar_navbar: {
                    width: this.state.navBarWidth,
                    height: 'inherit',
                    display: this.state.display,
                    flexWrap: 'wrap',
                    alignItems: this.state.columnAlign,
                    fontFamily: this.state.fontFamily,
                    flexDirection: this.state.direction,
                    top: this.state.top,
                    right: this.state.right,
                    left: this.state.left,
                    bottom: this.state.bottom,
                    position: this.state.position,
                    zIndex: 200
                },
                '@media screen and (max-width: 440px)': {
                    navbar_navbar: {
                        display: this.state.smdis
                    }
                },
                '@media screen and (min-width: 441px) and (max-width: 760px)': {
                    navbar_navbar: {
                        display: this.state.mddis
                    }
                }
            });
            var HAMNAV = _nestingstyles2.default.create({
                HAMNAV: {
                    width: '50px',
                    height: '50px',
                    display: this.state.hamMenuDis,
                    cursor: 'pointer',
                    flexDirection: 'column'

                },
                '@media screen and (max-width: 440px)': {
                    HAMNAV: {
                        width: '50px',
                        height: '50px',
                        display: this.state.hamSmDis
                    }
                },
                '@media screen and (min-width: 441px) and (max-width: 760px)': {
                    HAMNAV: {
                        width: '50px',
                        height: '50px',
                        display: this.state.hamMdDis
                    }
                }
            });
            var HAMLINES = {
                display: 'flex',
                width: '25px',
                height: '5px',
                backgroundColor: 'black',
                margin: '3px 0'
            };
            var HAMESTNAV = _nestingstyles2.default.create({
                hamestnav: (_hamestnav = {
                    visibility: 'hidden',
                    width: '100%',
                    flexDirection: 'column',
                    position: this.state.hamPosition,
                    top: this.state.hamTop,
                    left: this.state.hamLeft,
                    background: this.state.hamBackground,
                    display: 'flex'
                }, _defineProperty(_hamestnav, 'flexDirection', 'column'), _defineProperty(_hamestnav, 'alignItems', 'center'), _defineProperty(_hamestnav, 'boxShadow', this.state.hamShadow), _defineProperty(_hamestnav, 'animationIterationCount', this.state.animationIterationCount), _defineProperty(_hamestnav, 'animationTimingFunction', this.state.animationTimingFunction), _defineProperty(_hamestnav, 'animationName', this.state.animationName), _defineProperty(_hamestnav, 'animationDuration', this.state.animationDuration), _defineProperty(_hamestnav, 'transformOrigin', this.state.transformOrigin), _defineProperty(_hamestnav, 'animationFillMode', this.state.animationFillMode), _hamestnav),
                '@media screen and (max-width: 440px)': {
                    hamestnav: {
                        visibility: this.state.hamShow ? 'visible' : 'hidden'
                    }
                },
                '@media screen and (min-width: 441px) and (max-width: 760px)': {
                    hamestnav: {
                        visibility: this.state.hamShow ? 'visible' : 'hidden'
                    }
                }
            });
            return _react2.default.createElement(
                'nav',
                { style: NAVBAR.navbar, id: this.state.navid, className: this.state.navClassName },
                _react2.default.createElement(
                    'ul',
                    { style: NAVBAR_NAVBAR.navbar_navbar, id: this.state.navid, className: this.state.navClassName + ' navbar1-navbar socialness' },
                    this.state.childs
                ),
                _react2.default.createElement(
                    'div',
                    { style: HAMNAV.HAMNAV, onClick: this.toggle },
                    _react2.default.createElement('div', { style: HAMLINES }),
                    _react2.default.createElement('div', { style: HAMLINES }),
                    _react2.default.createElement('div', { style: HAMLINES })
                ),
                _react2.default.createElement(
                    'ul',
                    { style: HAMESTNAV.hamestnav },
                    this.state.hams
                )
            );
        }
    }]);

    return Navbar1;
}(_react.Component);

exports.default = Navbar1;