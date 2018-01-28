import React, {Component} from 'react';
import '../../css/reset.css'
import '../../css/SuperStyleSheet.css';
import Holder1 from '../../Holders/Holder1';

export default class SubNavbar2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
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
            rightItemsClassName: props.rightItemsClassName,
        }
    }
    render() {
        const SUBNAVBAR = {
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
            top: 0,
        };
        const SUBNAVBAR_NAVBAR1 = {
            width: this.state.navBarWidth,
            height: 'inherit',
            display: 'flex',
            flexWrap: 'wrap',
            flex: 1,
            alignItems: this.state.columnAlign,
            fontFamily: this.state.fontFamily,
            flexDirection: this.state.direction,
        };
        const SUBNAVBAR_NAVBAR2 = {
            width: this.state.navBarWidth,
            height: 'inherit',
            display: 'flex',
            flexWrap: 'wrap',
            flex: 1,
            alignItems: this.state.columnAlign,
            fontFamily: this.state.fontFamily,
            flexDirection: this.state.direction,
        };
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
        const NAVBAR = CHILDS.map((x, i, arr) => {
            return <li key={i} style={SUBNAVBAR_NAVBAR_LI}>{arr[i + 2]}</li>
        })
        return (
            <nav style={SUBNAVBAR} className="subnavbar2 socialness">
                <Holder1>
                    <ul style={SUBNAVBAR_NAVBAR1} id={this.state.navid} className={`subnavbar2-navbar1 ${this.state.navClassName}`}>
                        {CHILDS[0]}
                        {CHILDS[1]}
                    </ul>
                    <Holder1
                        alignBlock1="flex-end"
                        alignBlock2="flex-start">
                        <div id={this.state.leftItemsid} className={`subnavbar2-globalSearch ${this.state.leftItemsClassName}`}>
                            <p>Search Holder</p>
                        </div>
                        <ul style={SUBNAVBAR_NAVBAR2} id={this.state.rightItemsid} className={`subnavbar2-navbar2 ${this.state.rightItemsClassName}`}>
                            {NAVBAR}
                        </ul>
                    </Holder1>
                </Holder1>
            </nav>
        )
    }
}