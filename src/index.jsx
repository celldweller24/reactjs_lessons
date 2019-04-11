import React from "react";
import ReactDOM from "react-dom";
import HeaderSearch from "./containers/HeaderSearch";
import HeaderDetail from "./containers/HeaderDetail";
import Filter from './components/header/Filter';
import Content from "./containers/Content";
import Footer from "./containers/Footer";

import './main.scss';

// class ClassComponent extends React.Component {
//     render() {
//         return <h1>{this.props.name}</h1>;
//     }
// }

// class PureComponent extends React.PureComponent {
//     render() {
//         return <h1>React.PureComponent</h1>;
//     }
// }

// const FunctionComponent = (props) => <h1>{props.name}</h1>;

// class CreateElement extends React.Component {
//     render() {
//       return React.createElement('h1', { className: this.props.className }, this.props.name);
//     }
// }

// const Http = new XMLHttpRequest();
// const url='https://reactjs-cdp.herokuapp.com/movies';
// Http.open("GET", url);
// Http.send();
// Http.onreadystatechange = (e) => {
//     console.log(Http.responseText);
// }

function Header(props) {
    const isDetail = props.isDetail;
    console.log(props);
    return (isDetail) ? <HeaderDetail /> : <HeaderSearch /> ;
}


const App = () => (<div>
    {/* <ClassComponent name='React.Componentsss' />
    <PureComponent />
    <FunctionComponent name='funccct'/>
    <CreateElement name='Ololo' className='cellse'/> */}
    <Header isDetail={(window.location.pathname === '/') ? false : true} />
    <Filter quantityFilmsFound="7"/>
    <Content />
    <Footer />
</div>)

ReactDOM.render(<App />, document.getElementById("app"));
