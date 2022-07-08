import React from 'react';
import UserName from './components/UserName/UserName';
import Password from './components/Password/Password';
import Button from './components/Button/Button';
import './App.css';

class App extends React.Component {
  render() {
    return (
        <div className='container'>
            <UserName />
            <Password />
            <Button />
        </div>    
    );
  }
}
export default App;