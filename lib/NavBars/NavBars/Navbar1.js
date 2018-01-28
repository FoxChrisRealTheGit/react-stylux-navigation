import React, {Component} from 'react';
import '../../css/reset.css'
import '../../css/SuperStyleSheet.css';

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
            fontSize: props.fontSize || '1em',
            fontWeight: props.fontWeight || '100',
            fontVariant: props.fontVariant || 'none',
            navid: props.navid,
            itemsid: props.itemsid,
            navClassName: props.navClassName,
            itemsClassName: props.itemsClassName,
            childs: ''
        }
    }
    componentDidMount() {
        const NAVBAR_NAVBAR_LI = {
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
        const NAVBARACTUAL = CHILDS.map((x, i) => {
            return <li key={i} style={NAVBAR_NAVBAR_LI}>{x}</li>
        })
        this.setState({ childs: NAVBARACTUAL })
    }
    componentWillReceiveProps(newProps) {
        const NAVBAR_NAVBAR_LI = {
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
        const NAVBARACTUAL = CHILDS.map((x, i) => {
            return <li key={i} style={NAVBAR_NAVBAR_LI}>{x}</li>
        })
        this.setState({ childs: NAVBARACTUAL })
    }
    render() {
        const NAVBAR = {
            width: this.state.totalWidth,
            height: this.state.totalHeight,
            display: this.state.display,
            flexDirection: 'column',
            alignItems: this.state.alignItems,
            margin: '0',
            padding: this.state.padding,
            background: this.state.mainBackground,
            color: this.state.color,
        };
        const NAVBAR_NAVBAR = {
            width: this.state.navBarWidth,
            height: 'inherit',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: this.state.columnAlign,
            fontFamily: this.state.fontFamily,
            flexDirection: this.state.direction,
        };
        return (
            <nav style={NAVBAR} id={this.state.navid} className={this.state.navClassName}>
                <ul style={NAVBAR_NAVBAR} id={this.state.itemsid} className={`navbar1-navbar socialness ${this.state.itemsClassName}`}>
                    {this.state.childs}
                </ul>
            </nav>
        )
    }
}