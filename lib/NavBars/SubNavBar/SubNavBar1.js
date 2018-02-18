import React, { Component } from 'react';
import '../../css/reset.css'
import '../../css/SuperStyleSheet.css';
import StyleSheet from 'nestingstyles';

export default class SubNavbar1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
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
        }
    }
    componentDidMount() {
        const SUBNAVBAR_NAVBAR_LI = StyleSheet.create({
            subnavbar_navbar_li: {
                display: 'flex',
                flex: 1,
                fontSize: this.state.fontSize,
                fontWeight: this.state.fontWeight,
                justifyContent: 'center',
                margin: this.state.itemSpaceing,
                background: this.state.itemBackground,
                fontVariant: this.state.fontVariant,
            },
            '@media screen and (max-width: 440px)': {
                subnavbar_navbar_li: {
                    display: this.state.smdis,
                }
            },
            '@media screen and (min-width: 441px) and (max-width: 760px)': {
                subnavbar_navbar_li: {
                    display: this.state.mddis,
                }
            },
        })
        const CHILDS = React.Children.toArray(this.props.children)
        const NAVBAR = CHILDS.map((x, i) => {
            return <li key={i} style={SUBNAVBAR_NAVBAR_LI.subnavbar_navbar_li} id={this.state.itemsid} className={this.state.itemsClassName}>{x}</li>
        })
        this.setState({ childs: NAVBAR })
    }
    componentWillReceiveProps(newProps) {
        const SUBNAVBAR_NAVBAR_LI = StyleSheet.create({
            subnavbar_navbar_li: {
                display: 'flex',
                flex: 1,
                fontSize: this.state.fontSize,
                fontWeight: this.state.fontWeight,
                justifyContent: 'center',
                margin: this.state.itemSpaceing,
                background: this.state.itemBackground,
                fontVariant: this.state.fontVariant,
            },
            '@media screen and (max-width: 440px)': {
                subnavbar_navbar_li: {
                    display: this.state.smdis,
                }
            },
            '@media screen and (min-width: 441px) and (max-width: 760px)': {
                subnavbar_navbar_li: {
                    display: this.state.mddis,
                }
            },
        })
        const CHILDS = React.Children.toArray(newProps.children)
        const NAVBAR = CHILDS.map((x, i) => {
            return <li key={i} style={SUBNAVBAR_NAVBAR_LI.subnavbar_navbar_li} id={this.state.itemsid} className={this.state.itemsClassName}>{x}</li>
        })
        this.setState({ childs: NAVBAR })
    }

    render() {
        const SUBNAVBAR = StyleSheet.create({
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
                zIndex: this.state.zIndex,
            },
            '@media screen and (max-width: 440px)': {
                subnavbar: {
                    display: this.state.smdis,
                }
            },
            '@media screen and (min-width: 441px) and (max-width: 760px)': {
                subnavbar: {
                    display: this.state.mddis,
                    alignItems: 'center',
                }
            },
        })
        const SUBNAVBAR_NAVBAR = StyleSheet.create({
            subnavbar_navbar: {
                width: this.state.navBarWidth,
                height: 'inherit',
                display: 'flex',
                flexWrap: 'wrap',
                flex: 1,
                alignItems: this.state.columnAlign,
                fontFamily: this.state.fontFamily,
                flexDirection: this.state.direction,
            },
            '@media screen and (max-width: 440px)': {
                subnavbar_navbar: {
                    display: this.state.smdis,
                }
            },
            '@media screen and (min-width: 441px) and (max-width: 760px)': {
                subnavbar_navbar: {
                    display: this.state.mddis,
                    width: '90%'
                }
            },
        })

        return (
            <nav style={SUBNAVBAR.subnavbar} id={this.state.navid} className={`subnavbar1 socialness ${this.state.navClassName}`}>
                <ul style={SUBNAVBAR_NAVBAR.subnavbar_navbar} id={this.state.listid} className={`subnavbar1-navbar ${this.state.listClassName}`}>
                    {this.state.childs}
                </ul>
            </nav>
        )
    }
}