import React from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux'

/* import actions from actions folder */
import { updateUser } from './actions/user-actions'
//import PropTypes from 'prop-types'


/* functional component 
this will not have access to state and props as this.state or this.props
*/
function App(props) {


  function handleClick(e, n) {
    e.preventDefault();
    console.log('The link was clicked.');
    props.onUpdateUser(n)
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <p>Hello World</p>
      <div onClick={(e) => handleClick(e, 'Johnny1234')}>Update User</div>
      <div>User {props.user}</div>
    </div>
  );
}

const mapStateToProps = state => ({
  products: state.products,
  user: state.user
});

const mapActionsToProps = {
  onUpdateUser: updateUser
}

/* react's connect function allows stateprops and actionprops to be linked with the
functional component so there is not need to specifically call store.dispatch()*/
export default connect ( mapStateToProps, mapActionsToProps) (App)
//export default App;
