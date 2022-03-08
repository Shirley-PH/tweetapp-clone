
import './App.css';
import Navigation from './components/Navigation';
import NewTweet from './components/NewTweet';
import Tweet from './components/Tweet';
import {connect} from 'react-redux'; 
import { handleInitialData } from './components/actions/shared';
import { Component } from 'react';
import Dashboard from './components/Dashboard'; 

class App extends Component {

  componentDidMount(){
    this.props.dispatch(handleInitialData())
  }

  render(){
    return (
    <div className="App">
     <Navigation/> 
     <Dashboard/>
     {/* this.props.loading===true? null : <Dashboard/> */
    }
    </div>
  );
  }
}

function mapStateToProps({authedUser}){
  return{
    loading: authedUser === null
  }
}
  
//Esta es la forma de conectar con el Store y la App a través de REDUX
export default connect(mapStateToProps)(App);
