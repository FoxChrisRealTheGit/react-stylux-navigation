import React, {Component} from 'react';
import '../../css/reset.css'
import '../../css/SuperStyleSheet.css';
import '../../css/animations.css';
import Holder2 from '../../Holders/Holder2';

export default class DropDownNav3 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visibility: 'hidden',
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
            animationIterationCount: props.aniCount,
            animationTimingFunction: props.aniTime,
            animationName: props.aniName,
            animationDuration: props.aniDur,
            transformOrigin: props.transformOrigin,
            animationFillMode: props.aniFillMode || 'both',
            smdis: props.smDis || 'flex',
            mddis: props.mdDis || 'flex',
            childs: [],
        }
        this.enter = this.enter.bind(this);
        this.left = this.left.bind(this);
    }
    enter() {
        this.setState({
            visibility: 'visible',
            animationIterationCount: '1',
            animationTimingFunction: 'ease-in',
            animationName: 'fadeIn',
            animationDuration: '0.55s',
            transformOrigin: 'top',
        });
    }
    componentDidMount() {
        const CHILDS = React.Children.toArray(this.props.children)
        this.setState({ childs: CHILDS })
    }
    componentWillReceiveProps(nextProps) {
        const CHILDS = React.Children.toArray(nextProps.children)
        this.setState({ childs: CHILDS })
    }
    left() {
        this.setState({
            animationIterationCount: '1',
            animationTimingFunction: 'ease-out',
            animationName: 'fadeOut',
            animationDuration: '0.55s',
            transformOrigin: 'inherit'
        });
    }
    render() {
        const DROPDOWN = {
            position: 'absolute',
            visibility: this.state.visibility,
            margin: `0 0 0 ${this.state.offset}`,
            width: this.state.width,
            padding: '5px',
            textAlign: 'center',
            flex: 1,
            background: this.state.background,
            animationIterationCount: this.state.animationIterationCount,
            animationTimingFunction: this.state.animationTimingFunction,
            animationName: this.state.animationName,
            animationDuration: this.state.animationDuration,
            transformOrigin: this.state.transformOrigin,
            animationFillMode: this.state.animationFillMode,
        }
        // const DropDown_NavBar_Li = {

        // }
        const HASCHILDS = {
            fontSize: '1.333em',
        }
        return (
            <nav id={this.state.mainid} className={`dropdownnav3 ${this.state.mainClassName}`}>
                <li style={HASCHILDS}
                    onMouseOver={() => this.enter()}
                    onMouseOut={() => this.left()}
                    id={this.state.titleid} className={this.state.titleClassName}>
                    {this.state.childs[0]}
                    <ul style={DROPDOWN} id={this.state.itemsid} className={this.state.itemsClassName}>
                        <Holder2>
                            {this.state.childs[1]}
                            {this.state.childs[2]}
                            {this.state.childs[3]}
                            {this.state.childs[4]}
                            {this.state.childs[5]}
                            {this.state.childs[6]}
                            {this.state.childs[7]}
                            {this.state.childs[8]}
                            {this.state.childs[9]}
                            {this.state.childs[10]}
                        </Holder2>
                    </ul>
                </li>
            </nav>
        )
    }
}