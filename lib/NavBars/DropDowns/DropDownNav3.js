import React, {Component} from 'react';
import '../../css/reset.css'
import '../../css/SuperStyleSheet.css';
import Holder2 from '../../Holders/Holder2';

export default class DropDownNav3 extends Component {
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
            fontSize: '1.333em',
        }
        const CHILDS = React.Children.toArray(this.props.children)
        return (
            <nav id={this.state.mainid} className={`dropdownnav3 ${this.state.mainClassName}`}>
                <li style={HASCHILDS}
                    onMouseOver={() => this.setState({ display: 'block' })}
                    onMouseOut={() => this.setState({ display: 'none' })}
                    id={this.state.titleid} className={this.state.titleClassName}>
                    {CHILDS[0]}
                    <ul style={DROPDOWN}id={this.state.itemsid} className={this.state.itemsClassName}>
                        <Holder2>
                            {CHILDS[1]}
                            {CHILDS[2]}
                            {CHILDS[3]}
                            {CHILDS[4]}
                            {CHILDS[5]}
                            {CHILDS[6]}
                            {CHILDS[7]}
                            {CHILDS[8]}
                            {CHILDS[9]}
                            {CHILDS[10]}
                        </Holder2>
                    </ul>
                </li>
            </nav>
        )
    }
}