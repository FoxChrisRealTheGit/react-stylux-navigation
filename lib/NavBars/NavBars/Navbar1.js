import React, {Component} from 'react';
import '../../css/reset.css'
import '../../css/SuperStyleSheet.css';
import StyleSheet from 'nestingstyles';

export default class Navbar1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
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
        }
        this.toggle = this.toggle.bind(this)
    }
    toggle() {
        this.setState({ hamShow: !this.state.hamShow })
    }
    componentDidMount() {
        const NAVBAR_NAVBAR_LI = StyleSheet.create({
            navbar_navbar_li: {
                display: this.state.display,
                flex: 1,
                fontSize: this.state.fontSize,
                fontWeight: this.state.fontWeight,
                justifyContent: 'center',
                margin: this.state.itemSpaceing,
                background: this.state.itemBackground,
                fontVariant: this.state.fontVariant,
            },
            hoverStyle: {
                color: this.state.hoverColor
            },
            '@media screen and (max-width: 440px)': {
                navbar_navbar_li: {
                    display: this.state.smdis,
                }
            },
            '@media screen and (min-width: 441px) and (max-width: 760px)': {
                navbar_navbar_li: {
                    display: this.state.mddis,
                }
            },
        })
        const HAM_NAVBAR_LI = StyleSheet.create({
            ham_navbar_li: {
                visibility: this.state.hamShow ? 'visible' : 'collaspe',
                flex: 1,
                fontSize: this.state.fontSize,
                fontWeight: this.state.fontWeight,
                justifyContent: 'center',
                margin: this.state.itemSpaceing,
                background: this.state.itemBackground,
                fontVariant: this.state.fontVariant,
            },
            hoverStyle: {
                color: this.state.hoverColor
            },
            '@media screen and (max-width: 440px)': {
                ham_navbar_li: {
                    visibility: this.state.hamShow ? 'visible' : 'collaspe',
                }
            },
            '@media screen and (min-width: 441px) and (max-width: 760px)': {
                ham_navbar_li: {
                    visibility: this.state.hamShow ? 'visible' : 'collaspe',
                }
            },
        })
        const CHILDS = React.Children.toArray(this.props.children)
        if (+this.state.initialCount !== 0) {
            const LGDIS = []
            const SMDIS = []
            for (var x = 0; x < +this.state.initialCount; x += 1) {
                LGDIS.push(CHILDS[x])
            }
            for (var i = +this.state.initialCount; i < CHILDS.length; i += 1) {
                SMDIS.push(CHILDS[i])
            }
            const NAVBARLG = LGDIS.map((x, i) => {
                return <li key={i} style={NAVBAR_NAVBAR_LI.navbar_navbar_li}>{x}</li>
            })
            const NAVBARSM = SMDIS.map((x, i) => {
                return <li key={i} style={HAM_NAVBAR_LI.ham_navbar_li}>{x}</li>
            })

            this.setState({ childs: NAVBARLG, hams: NAVBARSM, smdis: 'none' })
        } else {
            const NAVBARACTUAL = CHILDS.map((x, i) => {
                return <li key={i} style={NAVBAR_NAVBAR_LI.navbar_navbar_li}>{x}</li>
            })
            this.setState({
                childs: NAVBARACTUAL,
                hamMenuDis: 'none',
                hamShow: false,
                hamSmDis: 'none',
                hamMdDis: 'none'
            })
        }
    }
    componentWillReceiveProps(newProps) {
        const NAVBAR_NAVBAR_LI = StyleSheet.create({
            navbar_navbar_li: {
                display: this.state.display,
                flex: 1,
                fontSize: this.state.fontSize,
                fontWeight: this.state.fontWeight,
                justifyContent: 'center',
                margin: this.state.itemSpaceing,
                background: this.state.itemBackground,
                fontVariant: this.state.fontVariant,
            },
            hoverStyle: {
                color: this.state.hoverColor
            },
            '@media screen and (max-width: 440px)': {
                navbar_navbar_li: {
                    display: this.state.smdis,
                }
            },
            '@media screen and (min-width: 441px) and (max-width: 760px)': {
                navbar_navbar_li: {
                    display: this.state.mddis,
                }
            },
        })
        const HAM_NAVBAR_LI = StyleSheet.create({
            ham_navbar_li: {
                visibility: this.state.hamShow ? 'visible' : 'collaspe',
                flex: 1,
                fontSize: this.state.fontSize,
                fontWeight: this.state.fontWeight,
                justifyContent: 'center',
                margin: this.state.itemSpaceing,
                background: this.state.itemBackground,
                fontVariant: this.state.fontVariant,
            },
            hoverStyle: {
                color: this.state.hoverColor
            },
            '@media screen and (max-width: 440px)': {
                ham_navbar_li: {
                    visibility: this.state.hamShow ? 'visible' : 'collaspe',
                }
            },
            '@media screen and (min-width: 441px) and (max-width: 760px)': {
                ham_navbar_li: {
                    visibility: this.state.hamShow ? 'visible' : 'collaspe',
                }
            },
        })
        const CHILDS = React.Children.toArray(this.props.children)
        if (+this.state.initialCount !== 0) {
            const LGDIS = []
            const SMDIS = []
            for (var x = 0; x < +this.state.initialCount; x += 1) {
                LGDIS.push(CHILDS[x])
            }
            for (var i = +this.state.initialCount; i < CHILDS.length; i += 1) {
                SMDIS.push(CHILDS[i])
            }
            const NAVBARLG = LGDIS.map((x, i) => {
                return <li key={i} style={NAVBAR_NAVBAR_LI.navbar_navbar_li}>{x}</li>
            })
            const NAVBARSM = SMDIS.map((x, i) => {
                return <li key={i} style={HAM_NAVBAR_LI.ham_navbar_li}>{x}</li>
            })

            this.setState({ childs: NAVBARLG, hams: NAVBARSM })
        } else {
            const NAVBARACTUAL = CHILDS.map((x, i) => {
                return <li key={i} style={NAVBAR_NAVBAR_LI.navbar_navbar_li}>{x}</li>
            })
            this.setState({ childs: NAVBARACTUAL })
        }
    }

    render() {
        const NAVBAR = StyleSheet.create({
            navbar: {
                width: this.state.totalWidth,
                height: this.state.totalHeight,
                display: 'flex',
                flexDirection: 'column',
                alignItems: this.state.alignItems,
                margin: '0',
                padding: this.state.padding,
                background: this.state.mainBackground,
                color: this.state.color,
            },
            '@media screen and (max-width: 440px)': {
                navbar: {
                    display: 'flex',
                }
            },
            '@media screen and (min-width: 441px) and (max-width: 760px)': {
                navbar: {
                    display: 'flex',
                }
            },
        })
        const NAVBAR_NAVBAR = StyleSheet.create({
            navbar_navbar: {
                width: this.state.navBarWidth,
                height: 'inherit',
                display: this.state.display,
                flexWrap: 'wrap',
                alignItems: this.state.columnAlign,
                fontFamily: this.state.fontFamily,
                flexDirection: this.state.direction,
            },
            '@media screen and (max-width: 440px)': {
                navbar_navbar: {
                    display: this.state.smdis,
                }
            },
            '@media screen and (min-width: 441px) and (max-width: 760px)': {
                navbar_navbar: {
                    display: this.state.mddis,
                }
            },
        })
        const HAMNAV = StyleSheet.create({
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
            },
        })
        const HAMLINES = {
            display: 'flex',
            width: '25px',
            height: '5px',
            backgroundColor: 'black',
            margin: '3px 0',
        }
        const HAMESTNAV = StyleSheet.create({
            hamestnav: {
                visibility: 'hidden',
                width: '100%',
                flexDirection: 'column',
                position: this.state.hamPosition,
                top: this.state.hamTop,
                left: this.state.hamLeft,
                background: this.state.hamBackground,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                boxShadow: this.state.hamShadow,
            },
            '@media screen and (max-width: 440px)': {
                hamestnav: {
                    visibility: this.state.hamShow ? 'visible' : 'hidden',
                }
            },
            '@media screen and (min-width: 441px) and (max-width: 760px)': {
                hamestnav: {
                    visibility: this.state.hamShow ? 'visible' : 'hidden',
                }
            },
        })
        return (
            <nav style={NAVBAR.navbar} id={this.state.navid} className={this.state.navClassName}>
                <ul style={NAVBAR_NAVBAR.navbar_navbar} id={this.state.navid} className={`${this.state.navClassName} navbar1-navbar socialness`}>
                    {this.state.childs}
                </ul>
                <div style={HAMNAV.HAMNAV} onClick={this.toggle}>
                    <div style={HAMLINES} />
                    <div style={HAMLINES} />
                    <div style={HAMLINES} />
                </div>
                <ul style={HAMESTNAV.hamestnav}>
                    {this.state.hams}
                </ul>
            </nav>
        )
    }
}