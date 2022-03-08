import React, {Component} from 'react'
import {connect} from 'react-redux';

 class Dashboard extends Component {
   render(){
     const {tweetIds} = this.props;
     return (
        <div>
        <h3 >Your Timeline</h3>
            <ul>
              { tweetIds.map((id) => (
                <li key={id}>
                  <div>TWEET ID: {id}</div>
                </li>
              )) }
            </ul>
        </div>
    )
  }
  
}
 //Object.keys() method returns an array of a given object's own enumerable property names, iterated in the same order that a normal loop would.
function mapStateToProps({tweets}){
  return{
    tweetIds: Object.keys(tweets).sort((a,b)=>tweets[b].timestamp - tweets[a].timestamp)
  }
}

export default connect(mapStateToProps)(Dashboard);