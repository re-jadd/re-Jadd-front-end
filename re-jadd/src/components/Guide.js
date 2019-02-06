import React, { Component } from "react";
import Recylicng from "../components/images/recylicng-bin.png";
import Can from "../components/images/water-bottle.png";

class RecyclingInfo extends Component {
    constructor() {
        super()
        this.state = {
          showInfo: true,
        }
    }
    
    changeShow() {
        this.setState({ showInfo: !this.state.showInfo })
      }

  render() {
    return (
    <div class="container">
    <h1 className="WCWR">What Can We Recycle?</h1>

    <div className="card">
     <h1>Plastic</h1> 
    <img className="Can" src={ Can } />
    <img className="basket" src={ Recylicng } />
    </div>

    <div  className="Paper" >
      <h1>Papers</h1>
    </div>

    <div  className="Electron" >
      <h1>Electronics</h1>
    </div>

    </div>  
    );
  }
};

export default RecyclingInfo;