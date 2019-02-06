import React, { Component } from "react";
import Recylicng from "../components/images/recylicng-bin.png";
import PlasticBottle from "../components/images/water-bottle.png";
import PlasticDrink from "../components/images/paper-cup.png";
import PlasticBag from "../components/images/plastic_bag-512.png";
import BlueRecylicng from "../components/images/blue.png";
import PaperBag from "../components/images/Shopping_and_Commerce_-_Outline_55-512.png"
import PaperTwist from "../components/images/paper.png";
import PaperT from "../components/images/paper3.png";
import RedRecylicng from "../components/images/red.png";
import ElectronicCable from "../components/images/el1.png";
import ElectronicUsb from "../components/images/el2.png";
import ElectronicHeadphones from "../components/images/el3.png";

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

    <div className="Plastic">
    <h1>Plastic</h1> 
      <p className="p">One of the biggest reasons for recycling plastic is its huge quantity. It has been observed that 90% of the waste accumulated by the municipal corporation is a plastic waste. Apart from this, plastic is used for manufacturing various types of goods and items that are being used on a daily basis. This will not only help increase the production of plastic but will also take care of the environment.</p>
      </div>
    
    <img className="PlasticBottle" src={ PlasticBottle } />
    <img className="PlasticBag" src={ PlasticBag } />
    <img className="PlasticDrink" src={ PlasticDrink } />

    <img className="basket" src={ Recylicng } />
    </div>

    
    <div  className="card" >

    <div className="Plastic">
      <h1>Papers</h1>
      <p className="p">Paper recycling may be defined as a range of activities associated with the recovery and processing of scrap paper so that it can be used in the production of new paper products, nearly all kinds of papers are recyclable. Paper items which are not typically acceptable in collection bins include brown and craft envelopes, carbon paper, paper towels, tissues, candy wrappers, coffee cups, and pizza boxes.</p>
      </div>

      <img className="PaperBag" src={ PaperBag } />
      <img className="PaperTwist" src={ PaperTwist } />
      <img className="PaperT" src={ PaperT } />
      <img className="basket" src={ BlueRecylicng } />


    </div>

    <div  className="card" >
    <div className="Plastic">
    <h1>Electronics</h1>
      <p className="p"> Electronics waste, commonly known as e-scrap and e-waste, is the trash we generate from surplus, broken and obsolete electronic devices. E-waste or electronics recycling is the process of recovering material from old devices to use in new products, including copper, tin, iron, aluminum, fossil fuels, titanium, gold, and silver. Many of the materials used in making these electronic devices can be recovered, reused and recycled, including plastics, metals, and glass. In a report, Apple revealed that it recovered 2,204 pounds of gold —worth $40 million—from recycled iPhones, Macs and iPads in 2015.</p>
      </div>
      <img className="ElectronicCable" src={ ElectronicCable } />
      <img className="ElectronicUsb" src={ ElectronicUsb } />
      <img className="ElectronicHeadphones" src={ ElectronicHeadphones } />

      <img className="basket" src={ RedRecylicng } />

    </div>

    </div>  
    );
  }
};

export default RecyclingInfo;