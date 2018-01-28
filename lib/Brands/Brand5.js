import React, { Component } from 'react';
import '../css/reset.css';
import '../css/animations.css';

export default class Brand5 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            display: props.display || 'flex',
            animationIterationCount: props.aniCount,
            animationTimingFunction: props.aniTime,
            animationName: props.aniName,
            animationDuration: props.aniDur,
        }
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
        }
        const CHILDS = React.Children.toArray(this.props.children)
        return (
            <section style={BRAND}>
            </section>
        )
    }
}