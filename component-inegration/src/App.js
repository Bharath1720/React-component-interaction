
import React from 'react';
import './App.css';
import ComponentCardA from './components/context-api/ComponentCardA';
import ParentCard from './components/ParentCard';

import ParentComponent from './components/ParentComponent';
import ComponentA from './components/propsdrilling/ComponentA';

import UserContext from './components/context-api/usercontext';

class App extends React.Component {
  state ={
    userInfo : {
      author : "Bharath Boyapati",
      Designation : "React Specialist"
    }
  }
  render(){
    return (
      <div className="App">
        <nav className='navbar navbar-dark bg-dark navbar-expand-sm'>
          <a href="/" className="navbar-brand" >React With Component Integration</a>
        </nav>
        {/* <ParentComponent/> */}
        {/* <ParentCard/> */}
        <React.Fragment>
            <div className='card m-4'>
                <div className='card-body bg-success text-white'>
                    <p className='h3'>App Component</p>
                    <pre>{JSON.stringify(this.state.userInfo)}</pre>
                    {/* <ComponentA userInfo ={this.state.userInfo} /> */}
                   <UserContext.Provider value={this.state.userInfo}>
                     <ComponentCardA/>

                   </UserContext.Provider>
                </div>

            </div>
         </React.Fragment>
      </div>
    );
  }  
}

export default App;
