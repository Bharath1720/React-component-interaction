import React, { Component } from 'react'
import ComponentC from './ComponentC'

 class ComponentB extends Component {
  render() {
    return (
        <React.Fragment>
        <div className='card m-4'>
            <div className='card-body bg-primary text-white'>
                <p className='h3'>Component B</p>
                <pre>{JSON.stringify(this.props.userInfo)}</pre>
                <ComponentC userInfo={this.props.userInfo}/>
            </div>

        </div>
     </React.Fragment>
    )
  }
}
export default ComponentB