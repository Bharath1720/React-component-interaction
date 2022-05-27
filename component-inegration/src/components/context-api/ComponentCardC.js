import React, { Component } from 'react'

import UserContext from './usercontext'

 class ComponentCardC extends Component {
  render() {
    return (
        <React.Fragment>
        <div className='card m-4'>
            <div className='card-body bg-danger text-white'>
                <p className='h3'>Component C</p>
                {/* <pre>{JSON.stringify(this.props.userInfo)}</pre> */}
                <UserContext.Consumer>
                  {
                    (userInfo) =>(
                      <span>{JSON.stringify(userInfo)}</span>
                    )
                   }

                </UserContext.Consumer>
            </div>

        </div>
     </React.Fragment>
    )
  }
}
export default ComponentCardC