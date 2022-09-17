import React, { Component } from 'react'
import ProductContainer from './Components/ProductContainer';
import PureComponent from './Components/PureComponent';
import './App.css'

class App extends Component {
 render(){
  return (
    <div className='App'>
      <ProductContainer/>
      <PureComponent />

    </div>
  )
 }
}
export default App;
