import React from 'react'
import './Component.css'


const productsItems = [
   {itemName: 'Smart Tv',  startPrice: '15000 Rs'},
   {itemName: 'Console',  startPrice: '50000 Rs'},
   {itemName: 'Toys',  startPrice: '999 Rs'},
   {itemName: 'Appliances',  startPrice: '25000 Rs'},
   {itemName: 'Kitchen Ware',  startPrice: '3500 Rs'}
]

const HOC = (WrappedCompo) => {
    class searchItem extends React.Component{
      constructor(){
        super();
        this.state={
          search: '',
        }
      }
  
      updateSearch = (e) =>{
       this.setState({search: e.target.value})
      }

      filterItems = (e) =>{
      return  productsItems.filter(productItems => productItems.itemName.toLowerCase().includes(this.state.search))
      }
      
  render(){
    
    return (
      <div>
        <h1>Higher Order Component</h1>
        <label>Search</label>  
        <input type="text" onChange={this.updateSearch}/>
        
      
        <WrappedCompo products = {this.filterItems()} {...this.props}/>  
    
      </div>
    )
  }
  } 
  return searchItem;
}
export default HOC;
