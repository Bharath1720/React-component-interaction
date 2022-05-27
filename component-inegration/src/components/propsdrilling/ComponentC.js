import React, { Component } from 'react'

 class ComponentC extends Component {
  render() {
    return (
        <React.Fragment>
        <div className='card m-4'>
            <div className='card-body bg-danger text-white'>
                <p className='h3'>Component C</p>
                <pre>{JSON.stringify(this.props.userInfo)}</pre>

            </div>

        </div>
     </React.Fragment>
    )
  }
}
export default ComponentC