import React, { Component } from 'react';
import '../../css/reset.css'
import '../../css/SuperStyleSheet.css';

export default class SubNavbar1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            zIndex: "200",
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
            fontSize: props.fontSize || '0.8em',
            fontWeight: props.fontWeight || '100',
            fontVariant: props.fontVariant || 'none',
            navid: props.navid,
            listid: props.listid,
            itemsid: props.itemsid,
            navClassName: props.navClassName,
            listClassName: props.listClassName,
            itemsClassName: props.itemsClassName,
            childs: ''
        }
    }
    componentDidMount() {
        const SUBNAVBAR_NAVBAR_LI = {
            display: 'flex',
            flex: 1,
            fontSize: this.state.fontSize,
            fontWeight: this.state.fontWeight,
            justifyContent: 'center',
            margin: this.state.itemSpaceing,
            background: this.state.itemBackground,
            fontVariant: this.state.fontVariant,
        };
        const CHILDS = React.Children.toArray(this.props.children)
        const NAVBAR = CHILDS.map((x, i) => {
            return <li key={i} style={SUBNAVBAR_NAVBAR_LI} id={this.state.itemsid} className={this.state.itemsClassName}>{x}</li>
        })
        this.setState({ childs: NAVBAR })
    }
    componentWillReceiveProps(newProps) {
        const SUBNAVBAR_NAVBAR_LI = {
            display: 'flex',
            flex: 1,
            fontSize: this.state.fontSize,
            fontWeight: this.state.fontWeight,
            justifyContent: 'center',
            margin: this.state.itemSpaceing,
            background: this.state.itemBackground,
            fontVariant: this.state.fontVariant,
        };
        const CHILDS = React.Children.toArray(newProps.children)
        const NAVBAR = CHILDS.map((x, i) => {
            return <li key={i} style={SUBNAVBAR_NAVBAR_LI} id={this.state.itemsid} className={this.state.itemsClassName}>{x}</li>
        })
        this.setState({ childs: NAVBAR })
    }
    render() {
        const SUBNAVBAR = {
            width: this.state.totalWidth,
            height: this.state.totalHeight,
            display: this.state.display,
            flexDirection: 'column',
            alignItems: this.state.alignItems,
            margin: '0',
            padding: this.state.padding,
            background: this.state.mainBackground,
            color: this.state.color,
            position: 'sticky',
            top: '-1px',
            zIndex: this.state.zIndex,
        };
        const SUBNAVBAR_NAVBAR = {
            width: this.state.navBarWidth,
            height: 'inherit',
            display: 'flex',
            flexWrap: 'wrap',
            flex: 1,
            alignItems: this.state.columnAlign,
            fontFamily: this.state.fontFamily,
            flexDirection: this.state.direction,
        };
        return (
            <nav style={SUBNAVBAR} id={this.state.navid} className={`subnavbar1 socialness ${this.state.navClassName}`}>
                <ul style={SUBNAVBAR_NAVBAR} id={this.state.listid} className={`subnavbar1-navbar ${this.state.listClassName}`}>
                    {this.state.childs}
                </ul>
            </nav>
        )
    }
}