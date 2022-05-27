import React, { Component } from 'react'
import ChildCard from './ChildCard'

class ParentCard extends Component {
  state ={
    msg :"",
    fromChild : ""
  }

  updateInput = (event) =>{
    this.setState({
      msg : event.target.value
    })
  }

  receiveData = (data) =>{
    this.setState({
      fromChild : data
    })

  }

  render() {
    return (
      <React.Fragment>
        <div className='card m-3'>
          <div className='card-header bg-success text-white'>
            <p className='h4'>ParentCard</p>
              <pre>{JSON.stringify(this.state)}</pre>
          </div>
          <div className='card-body'>
            <form>
              <div className='form-group'>
                <input
                value={this.state.msg}
                onChange={this.updateInput}
                type="text" className='form-control' placeholder='Parent' />
              </div>
            </form>
          </div>
          <ChildCard sendData ={this.receiveData} message ={this.state.msg}/>

        </div>
      </React.Fragment>
    )
  }
}
export default ParentCard