import React, {Component} from 'react';
import '../../css/reset.css'
import '../../css/SuperStyleSheet.css';
import '../../css/animations.css';

export default class DropDownNav5 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visibility: 'hidden',
            background: props.background,
            boxShadow: props.boxShadow || '1px 2px 2px black',
            borderRadius: props.borderRadius || '0 5px 5px 0',
            offset: props.offset || '-10',
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
            first: [],
            childs: [],
        }
        this.enter = this.enter.bind(this);
        this.left = this.left.bind(this);
    }
    componentDidMount() {
        const CHILDS = React.Children.toArray(this.props.children)
        const NAVBAR = CHILDS.map((x, i, arr) => {
            return <li key={i} >{arr[i + 1]}</li>
        })
        this.setState({ first: CHILDS[0], childs: NAVBAR })
    }
    componentWillReceiveProps(nextProps) {
        const CHILDS = React.Children.toArray(nextProps.children)
        const NAVBAR = CHILDS.map((x, i, arr) => {
            return <li key={i} >{arr[i + 1]}</li>
        })
        this.setState({ first: CHILDS[0], childs: NAVBAR })
    }
    enter() {
        this.setState({
            visibility: 'visible',
            animationIterationCount: '1',
            animationTimingFunction: 'ease-in',
            animationName: 'fadeIn',
            animationDuration: '0.55s',
        });
    }
    left() {
        this.setState({
            animationIterationCount: '1',
            animationTimingFunction: 'ease-out',
            animationName: 'fadeOut',
            animationDuration: '0.55s',
        });
    }
    render() {
        const DROPDOWN = {
            position: 'absolute',
            zIndex: '1000',
            borderRadius: this.state.borderRadius,
            boxShadow: this.state.boxShadow,
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
        const HASCHILDS = {
            fontSize: '1em',
        }
        return (
            <nav id={this.state.mainid} className={`dropdownnav5 ${this.state.mainClassName}`}>
                <li style={HASCHILDS} id={this.state.titleid} className={`DropDown_Side ${this.state.titleClassName}`}
                    onMouseOver={() => this.enter()}
                    onMouseOut={() => this.left()}>
                    {this.state.first}
                    <ul style={DROPDOWN} id={this.state.itemsid} className={this.state.itemsClassName}>
                        {this.state.childs}
                    </ul>
                </li>
            </nav>
        )
    }
}