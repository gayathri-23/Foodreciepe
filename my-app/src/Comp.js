import React, {Component} from 'react';

class Comp extends Component{
 render(){
  return(<div>
   <h1> This is a class component</h1>
  <h1> This is from parent's component {this.props.name}</h1>
   </div>
  )
 }
}
export default Comp;