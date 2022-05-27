import React, { Component } from 'react'
import ChildComponent from './ChildComponent'

class ParentComponent extends Component {
    state ={
        msg : "I am from Parent",
        received : ""
        
    }

    parentFunc = (some) =>{
        this.setState({
            received : some
        })

    }


  render() {
    return (
      <React.Fragment>
         <div className='card mt-3'>
             <div className='card-body'>
                 <p className='h4'>Parent Component</p>
                 <p>From Child : {this.state.received}</p>
                 <ChildComponent parentFunc={this.parentFunc} message={this.state.msg} />
             </div>
         </div>
         
      </React.Fragment>
    )
  }
}
export default ParentComponent