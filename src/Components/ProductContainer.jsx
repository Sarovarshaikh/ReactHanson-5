import React, { Component } from 'react'
import './Component.css'
import HOC from './HigherOrderCompo';


class ProductContainer extends Component {
    render(){
    return (
   
    <div className='search-result'>
        
    
     {
        this.props.products.map((items,index)=>{
            return(   
                <center>
                    <p className='p1' key={index}>{items.itemName} {items.startPrice} {this.brands}</p>
                </center>
            )
        })
     }
     <center>
        <div>
            
            <p className='p2'>A higher-order component is a function that takes a component and returns a new component. A higher-order component (HOC) is the advanced technique in React.js for reusing a component logic. Higher-Order Components are not part of the React API. They are the pattern that emerges from React’s compositional nature. The component transforms props into UI, and a higher-order component converts a component into another component.</p>
            <p><strong>Syntax :</strong>  const EnhancedComponent = higherOrderComponent(WrappedComponent); </p>
        </div>
     </center>
    </div>
   
  )
}
}
export default HOC(ProductContainer);
