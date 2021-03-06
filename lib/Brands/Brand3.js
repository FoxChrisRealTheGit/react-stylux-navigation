import React, { Component } from 'react';
import '../css/reset.css';
import '../css/animations.css';
import SquareImage from '../Images/SquareImage';

export default class Brand3 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            display: props.display || 'flex',
            size: props.size || 'sm',
            animationIterationCount: props.aniCount,
            animationTimingFunction: props.aniTime,
            animationName: props.aniName,
            animationDuration: props.aniDur,
            transformOrigin: props.transformOrigin,
            animationFillMode: props.aniFillMode,
            smdis: props.smDis || 'flex',
            mddis: props.mdDis || 'flex',
            childs: [],
        }
    }
    componentDidMount(){
        const CHILDS = React.Children.toArray(this.props.children)
        return this.setState({ childs: CHILDS })
    }
    componentWillReceiveProps(newProps) {
        const CHILDS = React.Children.toArray(newProps.children)
        return this.setState({ childs: CHILDS })
    }
    render() {
        const BRAND = {
            display: 'flex',
            alignItems: 'center',
            animationIterationCount: this.state.animationIterationCount,
            animationTimingFunction: this.state.animationTimingFunction,
            animationName: this.state.animationName,
            animationDuration: this.state.animationDuration,
            transformOrigin: this.state.transformOrigin,
            animationFillMode: this.state.animationFillMode,
        }
        return (
            <section style={BRAND}>
                <SquareImage
                    size={this.state.size}>
                    {this.state.childs[0]}
                    logo
                </SquareImage>
            </section>
        )
    }
}