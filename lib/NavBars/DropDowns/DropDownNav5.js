import React, {Component} from 'react';
import '../../css/reset.css'
import '../../css/SuperStyleSheet.css';

export default class DropDownNav5 extends Component {
    constructor(props) {
        super(props);
        this.state = {
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
            itemsClassName: props.itemsClassName,
        }
    }

    render() {
        const DROPDOWN = {
            position: 'absolute',
            display: this.state.display,
            margin: `0 0 0 ${this.state.offset}`,
            width: this.state.width,
            padding: '5px',
            textAlign: 'center',
            flex: 1,
            background: this.state.background,
        }
        const DropDown_NavBar_Li = {

        }
        const HASCHILDS = {
            fontSize: '1em',
        }
        const CHILDS = React.Children.toArray(this.props.children)
        const NAVBAR = CHILDS.map((x, i, arr) => {
            return <li key={i} style={DropDown_NavBar_Li}>{arr[i + 1]}</li>
        })
        return (
            <nav id={this.state.mainid} className={`dropdownnav5 ${this.state.mainClassName}`}>
                <li style={HASCHILDS} id={this.state.titleid} className={`DropDown_Side ${this.state.titleClassName}`}
                    onMouseOver={() => this.setState({ display: 'inline' })}
                    onMouseOut={() => this.setState({ display: 'none' })}>
                    {CHILDS[0]}
                    <ul style={DROPDOWN} id={this.state.itemsid} className={this.state.itemsClassName}>
                        {NAVBAR}
                    </ul>
                </li>
            </nav>
        )
    }
}