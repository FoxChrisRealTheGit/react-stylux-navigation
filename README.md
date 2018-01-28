# react-stylux

This is currently a very alpha stage project, documentation will be lack luster for a few weeks. Please stand by while testing occurs. It should also be noted that no items are responsive, and are only psuedo responsive to the extent that flex-wrap is responsive. 

Utilizing three simple component types, this project simplifies layout and front-end considerations for react projects. The three component types are: containers (subject to change), holders, and blocks. Containers (subject to change) define the horizonal space and act as a wrapper for all blocks. Holders then go inside of the container to define the space for the blocks. Holders can go inside of Holders to further define space. Each holder has a pre determinded child length and will render children placed into the holder.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

```
npm install --save react-stylux
```

## How To Use Stylux

### Included in the base version of react-stylux is:
* Navbar 1
* SubNavbar 1-5
* Dropdowns 1-5
* Brand 1-5

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

## Documentation:

Each element will be shown with an example of the possible props equal to the default props, if no default is set then the prop will have no equals.
Each elements will then be shown is an example of children accepted.


### Navigation Specific

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
    navid
    itemsid
    navClassName
    itemsClassName
    >
```
This accepts unlimited? children and renders them
```
<Navbar1>
    <a href="">Home</a>
    <a href="">About</a>
    <a href="">Contact</a>
<navbar1>
```


#### SubNavBars

##### SubNavBar1
**will be added soon**

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
    offset = '-5px'
    color = 'black'
    textAlign = 'center'
    margin
    padding
    width
    mainid
    titleid
    itemsid
    mainClassName
    titleClassName
    itemsClassName
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
    offset
    width
    mainid
    titleid
    itemsid
    mainClassName
    titleClassName
    itemsClassName
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
**Not Finished**

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

**0.2.0**
* Added media queries to containers, holders, headings, and pargaraphs
* added display ability through props
* updated readme

**0.1.0**
* major name changes will break all prior versions, see changelog
* Heading/Paragraph blocks have text align, height and width props available
* css reset hooked up to every block

**0.0.12**
* documentation added to readme

**0.0.10** works
* this is the furthest back that is mostly working


## Authors

* **Christopher Fox** -

## License

This is licensed under MIT license. If used in any project, please give ackknowledgments to Christoher Fox.


## Acknowledgments

* A Giant Thank you to [Dev Mountain](https://devmountain.com/) for teaching me to code good
* A big thank you to Morten Rand-Hendriksen for your videos on flex box and the code that allows the className socialness to work
* Credit to http://meyerweb.com/eric/tools/css/reset/  for use of a reset file
* Credit to the React-Styles team (used as nestingstyles) for the code to allow for media queries through style


## Changelog
**0.2.0**
* fixed carousel componentWillUnmount - still needs testing, will probably still show error in console
* added smdis && mddis to every container, holder, heading blocks, paragraph blocks, and image blocks
* added media queries for max-width 481px and minwidth 482px max-wdith 1200px everything else should render above 1200px
* adding in placeholder sizes until more responsive testing occurs
* readme updated for changes
* new animation and responsive design sections added to readme

**0.1.6**
* added lifecycle componentWillUnmount to carousels to stop interval
* added lifecycle componentWillRecieveProps to most blocks to allow for render updates

**0.1.5**
* added Table1 and Table2
* added animation path to blocks (feature not fully implemented)
* added the outline for animation integration into basic blocks (feature not fully implemented)
* moved most children to array into componentdidmount to set children on state
* fixed navbar1 classname & id
* lowered dropdownnav5 default text size
* fixed horizontal ticker 1
* readme updated for changes

**0.1.4**

* fixed dropdownnav1
* added togglePlace onto toggler2, this uses flexDirection to change toggle place eg 'column-reverse' || 'row' etc...
* changed toggler1 position to fixed from absolute, still changeable through props.
* added modul1, popup with an x close in the upper right corner
* navigation font sizes adjusted (needs more work)

* readme updated for changes


**0.1.3**

* Fixed Holders 8-13 block 5 styles
* got rid of a tags in Brands, will rework Brand Blocks
* text-shadow added to headings and paragraphs
* border, border-left, border-right, border-top, border-bottom added to headings, paragraphs, holders, and toggler 1 & 2
* added box-shadow to dropdownnav1 and toggler1
* border-radius, text-align, and color added to dropdownnav1
* color also added to navbar, subnav 1 & 2
* got rid of default yellow hover highlight will be allow for easier adjusting of this soon
* toggler 1 now has z-index of 2000
* color, border, weight, shadow, margin, padding, variant, and background added to the toggler 1 & 2 button

* readme updated to reflect the changes

**0.1.0**
* text align added to heading and paragraph blocks
* Width and Height now available for heading and paragraph blocks

* mainHeading name changed to H1 + num
* Heading name changed to H2 + num
* SubHeading name changed to H3 + num
* SecondarySubHeading name changed to H4 + num
* Paragraph name changed to P + num
* PullQuote name changed to PLQ + num

* z Index of 1000 added to the DropDownNav1
* z Index of 200 added to the SubNavBAr1, this fixes a stacking issue

* css reset hooked up to every block

* readme updated to reflect changes

* fixed Holder4 block 3-5 styles

**0.0.12**
* readme was updated with minor documentation

**0.0.10**
* baselineish that things are mostly working