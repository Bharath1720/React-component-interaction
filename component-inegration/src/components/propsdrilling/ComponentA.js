import React, { Component } from 'react'
import ComponentB from './ComponentB'

 class ComponentA extends Component {
  render() {
    return (
      <React.Fragment>
          <div className='card m-4'>
              <div className='card-body bg-secondary text-white'>
                  <p className='h3'>Component A</p>
                  <pre>{JSON.stringify(this.props.userInfo)}</pre>
                    <ComponentB userInfo={this.props.userInfo}/>
              </div>

          </div>
       </React.Fragment>
    )
  }
}
export default ComponentA