# react-stylux


**This project is part of the larger react-stylux library.**
**Brand Blocks currently disabled**

This is currently a very alpha stage project, documentation will be lack luster for a few weeks. Please stand by while testing occurs. Responsive implementation is in its infancy and will continue to improve. There are currently three sizes, please see Responsive notes for more information.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

```
npm install --save react-stylux-navigation
```

## How To Use Stylux
### Table of Contents
- [What's included](#whats-included-in-the-navigation-varsion-of-react-stylux-is)
- [Step by Step](#step-by-step)
- [Animation Notes](#animation-notes)
- [Responsive Notes](#responsive-notes)
- [Navigation](#navigation-specific)
    - [Navbars](#navbars)
    - [SubNavbars](#subnavbars)
    - [Dropdowns](#dropdownnavs-there-needs-to-be-an-accesibility-rework)
    - [Brand](#brand)
- [Feature Wish List](#feature-wish-list)
- [Acknowledgments](#acknowledgments)
- [Changelog](#changelog)


### Included in the navigation version of react-stylux is:
* Navbar 1
* SubNavbar 1-5
* Dropdowns 1-5
* Brand 1-5 (disabled)

#### Currently not done:
* Dropdown Nav 2
* DropDown Nav 4
* SubNavBar 3
* SubNavBar 4
* SubNavBar 5

### Step by step:

Stylux utilizes three main components and flex-box to handle layouts effectively. As an example, import Container1, Holder1, and Navbar1:

```
import {
    Container1,
    Holder1,
    NavBar1,
} from 'react-stylux';
```

Now you can use these components like any other component!

```
<Container1>
    <Holder1>
        <NavBar1>
            <Link to="">Item1</Link>
            <Link to="">Item2</Link>
            <Link to="">Item3</Link>
        </NavBar1>
        <NavBar1>
            <Link to="facebook.com"></Link>
            <Link to="twitter.com"></Link>
            <Link to="instagram.com"></Link>
        </NavBar1>
    </Holder1>
</Container1>
```
Children are passed into the block level component to render based on type. In the example above, NavBar1 is used in conjunction with Holder1. This will create two spaces, and create two navbars center aligned. As a special note, every navbar block is hooked up with a className to psuedo render a logo based on href/to address info using the font awesome library.

props can be passed into every item to further create a custom expierence:
```
<Container1>
    <Holder1
        block1="2">
        <NavBar1>
            <Link to="">Item1</Link>
            <Link to="">Item2</Link>
            <Link to="">Item3</Link>
        </NavBar1>
        <NavBar1
            align="flex-end"
            navbarWidth="60%">
            <Link to="facebook.com"></Link>
            <Link to="twitter.com"></Link>
            <Link to="instagram.com"></Link>
        </NavBar1>
    </Holder1>
</Container1>
```
This is just a basic example of what can be done with stylux. Basic documentation on the current blocks can be seen below, a more comprehensive website is currently being worked on.
### Animation Notes:

**The animation library is currently mostly from: animate.css, please see [Acknowledgments](#acknowledgments) for full acknowledgment.**

#### defaults

all blocks have access to:
- animationIterationCount in the form of: props.aniCount,
- animationTimingFunction in the form of: props.aniTime,
- animationName in the form of: props.aniName,
- animationDuration in the form of: props.aniDur,
- transformOrigin in the form of: props.transformOrigin,

animate.css recommends the following defaults:
aniDur ='1s'
aniFillMode = 'both'

if wanting an infinite animation:
aniCount = 'infinite'


#### Animation Names

to see what these do, please refer to animation [Acknowledgments](#acknowledgments) or go to http://daneden.me/animate
each animation will be associated with suggested defaults, these will be improved as more testing is accomplished.

- bounce
    - transform-origin: center bottom
- pulse
- handShake
    - animation-timing-function: ease-in-out
- jello
    - transform-origin: center
- bounceIn
    - animation-duration: 0.75s
- bounceInDown
- bounceInLeft
- bounceInRight
- bounceInUp
- bounceOut
- bounceOutLeft
- bounceOutRight
- bounceOutUp
- fadeIn
- fadeOut
- flipInX (needs better integration)
- flipInY (needs better integration)
- flipOutX (needs better integration)
- flipOutY (needs better integration)
- hinge
    - animation-duration: 2s
- slideInLeft
- slideInRight
- slideOutLeft
- slideOutRight

### Responsive Notes:
There are two breakpoints on the follow elements:
* containers
* holders
* headings
* paragraphs
* images

#### Small Breakpoint:
use this through props as: smdis
the breakpoint for this is currently set at max-width: 440px (subject to change)

#### Medium Breakpoint:
use this through props as: mddis
the breakpoint for this is currently set at min-width: 441px and max-width: 760px (subject to change)


## Documentation:

Each element will be shown with an example of the possible props equal to the default props, if no default is set then the prop will have no equals.
Each elements will then be shown is an example of children accepted.


#### Navigation Specific

#### Navbars

##### Navbar1
```
<Navbar1
    font = 'serif'
    totalWidth = '100%'
    navbarWidth = '100%'
    height
    display = 'flex'
    direction = 'row'
    align = 'center'
    columnAlign = 'center'
    margin = '0'
    padding = '0'
    itemSpacing = '10px 0'
    mainBackground = 'inherit'
    itemBackground = 'inherit'
    color = 'black'
    fontSize = 1em
    fontWeight = '100'
    fontVariant = 'none'
    count = '0'
    smDis = 'flex' (if no count set, if count > 0 then 'none')
    mdDis = 'flex'
    hoverColor
    hamSmDis = 'flex' (if no count set, then 'none')
    hamMdDis = 'none'
    hamTop = '7%'
    hamSmDis = 'flex'
    hamMdDis = 'none'
    hamShadow = '1px 2px 2px black'
    hamBackground = 'white'
    hamPosition = 'absolute'
    navid
    itemsid
    navClassName
    itemsClassName
    >
```
This accepts unlimited? children and renders them.
Will render anything beyond count into the ham menu.
```
<Navbar1
    count ='3'>
    <a href="">Home</a>
    <a href="">About</a>
    <a href="">Contact</a>
    <a href="">Home</a>
    <a href="">About</a>
    <a href="">Contact</a>
<navbar1>
```


#### SubNavBars

##### SubNavBar1
**Still working on**
```
<SubNavbar2
font = 'serif'
    totalWidth = '100%'
    navbarWidth = '100%'
    height
    display = 'flex'
    direction = 'row'
    align = 'center'
    columnAlign = 'center'
    margin = '0'
    padding = '0'
    itemSpacing = '10px 0'
    mainBackground = 'black'
    itemBackground = 'inherit'
    color = 'whitesmoke'
    fontSize = 0.9em
    fontWeight = '100'
    fontVariant = 'none'
    navid
    itemsid
    navClassName
    listClassName
    itemsClassName
    smDis = 'none'
    mdDis ='flex'
    >
```
This accepts unlimited? children and renders them.
```
<SubNavbar1
    navbarWidth='70%'>
    <a href=''>Item1</a>
    <a href=''>Item2</a>
    <a href=''>Item3</a>
    <a href=''>Item4</a>
</SubNavbar1>
```
##### SubNavBar2
**will be added soon**


#### DropDownNavs (There needs to be an accesibility rework)

##### DropDownNav1
**Not Finished**
This uses two mouse events and is not optimized for tablet or mobile use.

```
<DropDownNav1
    background
    boxShadow = '1px 2px 2px black'
    borderRadius = '0 0 5px 5px'
    offset
    color = 'black'
    textAlign = 'left'
    margin
    padding
    width
    mainid
    titleid
    itemsid
    mainClassName
    titleClassName
    itemsClassName
    smDis = 'flex'
    mdDis = 'flex'
    >
```
This accepts unlimited? children and renders them, the first child is the title. A downward pointing arrow is rendered after title
```
<DropDownNav1>
    <a href="">store</a>
    <a href="">product1</a>
    <a href="">product2</a>
    <a href="">product3</a>
</DropDownNav1>
```


##### DropDownNav3
**will be added soon**


##### DropDownNav5
**Not Finished**
This uses two mouse events and is not optimized for tablet or mobile use.

```
<DropDownNav5
    background
    boxShadow = '1px 2px 2px black'
    borderRadius = '0 5px 5px 0'
    offset
    width
    mainid
    titleid
    itemsid
    mainClassName
    titleClassName
    itemsClassName
    smDis = 'flex'
    mdDis = 'flex'
    >
```
This accepts unlimited? children and renders them, the first child is the title. A sideways pointing arrow is rendered after title
```
<DropDownNav5>
    <a href="">store</a>
    <a href="">product1</a>
    <a href="">product2</a>
    <a href="">product3</a>
</DropDownNav5>
```


#### Brand
**currently disabled, and not finished**

##### Brand1

##### Brand2

##### Brand3

##### Brand4

##### Brand5



## Known Bugs

**Will be added soon**


## Feature Wish List

**Will be added soon** 


## Built With

* [React](http://www.reactjs.org) - The library used

## Code of Conduct

a link should go to the code of conduct

## Contributing

No Contributions will be accepted outside of the project team until the project is out of full Alpha Testing


## Versioning
for a more detailed list of changes, please refer to the changelog

**0.2.1**
* works and has media queries/ham menu on navbar1

## Authors

* **Christopher Fox** -

## License

This is licensed under MIT license. If used in any project, please give ackknowledgments to Christoher Fox.


## Acknowledgments

* A Giant Thank you to [Dev Mountain](https://devmountain.com/) for teaching me to code good
* A big thank you to Morten Rand-Hendriksen for your videos on flex box and the code that allows the className socialness to work
* Credit to http://meyerweb.com/eric/tools/css/reset/  for use of a reset file
* Credit to the React-Styles team (used as nestingstyles) for the code to allow for media queries through style object
* Massive credit for the animations to Daniel Eden - animate.css - http://daneden.me/animate


## Changelog
**0.2.1**
* updated to current stable version of react-stylux 0.2.9