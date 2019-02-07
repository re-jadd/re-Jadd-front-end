import React, { Component } from "react";


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
    
    </div>  
    );
  }
};

export default RecyclingInfo;