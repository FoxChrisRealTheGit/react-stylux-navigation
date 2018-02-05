import React, {Component} from 'react';
import '../../css/reset.css'
import '../../css/SuperStyleSheet.css';
import '../../css/animations.css';

export default class DropDownNav1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visibility: 'hidden',
            background: props.background,
            boxShadow: props.boxShadow || '1px 2px 2px black',
            borderRadius: props.borderRadius || '0 0 5px 5px',
            offset: props.offset,
            color: props.color || 'black',
            textAlign: props.textAlign || 'left',
            margin: props.margin,
            padding: props.padding,
            width: props.width,
            mainid: props.mainid,
            titleid: props.titleid,
            itemsid: props.itemsid,
            mainClassName: props.mainClassName,
            titleClassName: props.titleClassName,
            itemsClassName: props.itemsClassName,
            animationIterationCount: props.aniCount || '1',
            animationTimingFunction: props.aniTime || 'ease-in',
            animationName: props.aniName || 'bounceInDown',
            animationDuration: props.aniDur || '1s',
            transformOrigin: props.transformOrigin,
            animationFillMode: props.aniFillMode || 'both',
            childs: [],
            first: [],
            smdis: props.smDis || 'flex',
            mddis: props.mdDis || 'flex',
        }
        this.enter = this.enter.bind(this);
        this.left = this.left.bind(this);
    }
    componentDidMount() {
        const DropDown_NavBar_Li = {
            color: this.state.color,
        }

        const CHILDS = React.Children.toArray(this.props.children)

        const NAVBAR = CHILDS.map((x, i, arr) => {
            return <li key={i} style={DropDown_NavBar_Li}>{arr[i + 1]}</li>
        })
        const FIRST = CHILDS[0];
        this.setState({ childs: NAVBAR, first: FIRST })
    }
    componentWillReceiveProps(newProps) {
        const DropDown_NavBar_Li = {
            color: this.state.color,
        }

        const CHILDS = React.Children.toArray(newProps.children)

        const NAVBAR = CHILDS.map((x, i, arr) => {
            return <li key={i} style={DropDown_NavBar_Li}>{arr[i + 1]}</li>
        })
        const FIRST = CHILDS[0];
        this.setState({ childs: NAVBAR, first: FIRST })
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
            borderRadius: this.state.borderRadius,
            boxShadow: this.state.boxShadow,
            margin: `0 0 0 ${this.state.offset}`,
            width: this.state.width,
            padding: '5px',
            textAlign: this.state.textAlign,
            flex: 1,
            background: this.state.background,
            zIndex: "1000",
            color: this.state.color,
            animationIterationCount: this.state.animationIterationCount,
            animationTimingFunction: this.state.animationTimingFunction,
            animationName: this.state.animationName,
            animationDuration: this.state.animationDuration,
            transformOrigin: this.state.transformOrigin,
            animationFillMode: this.state.animationFillMode,
        }

        const HASCHILDS = {
            fontSize: '1em',
            color: this.state.color,
            cursor: 'default',
        }

        return (
            <nav id={this.state.mainid} className={`dropdownnav1 ${this.state.mainClassName}`}>
                <li id={this.state.titleid} className={`DropDown ${this.state.titleClassName}`} style={HASCHILDS}
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