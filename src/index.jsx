import React from "react";
import ReactDOM from "react-dom";

class ClassComponent extends React.Component {
    render() {
        return <h1>React.Component</h1>;
    }
}

class PureComponent extends React.PureComponent {
    render() {
        return <h1>React.PureComponent</h1>;
    }
}

const FunctionComponent = () => <h1>Functional Component</h1>;

class CreateElement extends React.Component {
    render() {
      return React.createElement('h1', null, 'React.createElement');
    }
  }

const App = () => (<div>
    <ClassComponent />
    <PureComponent />
    <FunctionComponent />
    <CreateElement />
</div>)

ReactDOM.render(<App />, document.getElementById("app"));
