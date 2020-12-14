import React from "react";
import Login from './components/login';
import Dashboard from './components/dashboard';
import { BrowserRouter as Router } from 'react-router-dom';
import { connect } from "react-redux";
import {getLoggedStatus} from './actions/auth'

class Main extends React.Component<any,any>{
  constructor(props:any){
    super(props);
    props.getLoggedStatus();
  }
  render(){
    if(this.props.auth.isLoggedIn){
      return (
        <Router>
          <Dashboard />
        </Router>
      )
      }else{
        return <Login />
      }
  }
}

const mapStateToProps = (state:any) => {
  return { auth: state.auth };
};


const App = connect(mapStateToProps, {getLoggedStatus})(Main);

export default App;