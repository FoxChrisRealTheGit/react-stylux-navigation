import React, { Component } from 'react';
import '../css/reset.css';
import '../css/animations.css';
import RectangleImage from '../Images/RectangleImage';

export default class Brand2 extends Component {
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
                <RectangleImage
                    size='exsm'>
                    {CHILDS[0]}
                    logo
                </RectangleImage>
            </section>
        )
    }
}