import React, { Component } from 'react'

class ChildComponent extends Component {
    state ={
        data :"Good Morning"
    }

    clickButton = () =>{
        this.props.parentFunc(this.state.data)
    }

  render() {
    return (
      <React.Fragment>
          <div className='card m-3'>
              <div className='card-body'>
                  <p className='h4' >Child Component</p>
                  <p className='h3' >From Parent : {this.props.message}</p>
                  <button onClick={this.clickButton}  className='btn btn-primary btn-sm' >Send</button>
              </div>

          </div>
      </React.Fragment>
    )
  }
}
export default ChildComponent