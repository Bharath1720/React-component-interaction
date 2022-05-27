import React, { Component } from 'react'
 class ChildCard extends Component {
     state ={
         text : ""
     }


     updateInput = (event) =>{
         this.setState({
             text : event.target.value
         });
         this.props.sendData(this.state.text)
     }

  render() {
    return (
        <React.Fragment>
        <div className='card m-3'>
          <div className='card-header bg-danger text-white'>
            <p className='h4'>Child Card</p>
            <p>{this.state.text}</p>

          </div>
          <div className='card-body'>
            <form>
              <div className='form-group'>
                <input
                value={this.state.text}
                onChange={this.updateInput}
                type="text" className='form-control' placeholder='Child' />
              </div>
            </form>
            <p>From Parent : {this.props.message}</p>
          </div>

        </div>
      </React.Fragment>
    )
  }
}

export default ChildCard