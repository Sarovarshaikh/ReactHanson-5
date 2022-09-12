import React, { Component } from 'react'

import HOC from './HOC';


class Products extends Component {
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
        
     </center>
    </div>
   
  )
}
}
export default HOC(Products);