import React from "react";
import './Component.css'
class PureComponent extends React.PureComponent {
    constructor() {
      super();
      this.state = {
        showText: "Hello",
        
      }
      this.handleClickEvent = this.handleClickEvent.bind(this)
    }
    
    handleClickEvent = (e) =>{
        this.setState({showText:"GoodBye"})
    }
    
    
    render() {
      
     console.log("pureCompo rendering only for one time for same input");
      
      return(
        <div className="Pure">
            <h1 style={{padding:'20px 0px'}}>Pure Component React</h1>
            <p>A React component is considered pure if it renders the same output for the same state and props. For this type of class component, React provides the PureComponent base class. Class components that extend the React.PureComponent class are treated as pure components.</p>
            <h2>{this.state.showText} Folks.</h2>
            <button className="btn-2" onClick={this.handleClickEvent}>ClickMe</button>
        </div>
      )

    }
  }

  export default PureComponent;
