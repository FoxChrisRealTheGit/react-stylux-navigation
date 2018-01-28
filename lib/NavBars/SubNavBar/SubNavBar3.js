import React, {Component} from 'react';
import '../../css/reset.css'
import '../../css/SuperStyleSheet.css';

export default class SubNavbar3 extends Component {
    render() {
        const CHILDS = React.Children.toArray(this.props.children)
        const NAVBAR = CHILDS.map((x, i) => {
            return <li key={i}>{x}</li>
        })
        return (
            <nav className="subnavbar3">
                <ul className="subnavbar3-navbar">
                    {NAVBAR}
                </ul>
            </nav>
        )
    }
}