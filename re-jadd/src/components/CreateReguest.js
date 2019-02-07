import React, { Component } from "react";
import com from "../components/images/com.png";
import house from "../components/images/house.png";
import small from "../components/images/small.png";

class CreateReguest extends Component {
    constructor() {
        super();
        this.state = {
            user_id: 0,
            type: '',
            size: ''

        }
    }

    handleChange(event) {
        const Name = event.target.name;
        const Value = event.target.value;

        this.setState({
            user_id: this.props.user.id,
            [Name]: Value
        }, function () { console.log(this.state) })
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.handleRequest(this.state)
    }

    render() {
        return (
            <div className="order">
                <form onSubmit={this.handleSubmit.bind(this)}>
                <div className="section"> 
<div>
                    <input type="radio" id="control_01" name="type" value="Plastic" onChange={this.handleChange.bind(this)} />
                    <label className="label1" for="control_01">
                        <h2>Plastic </h2>
                        <p>Example: cups , Plastic Spoons , bags</p>
                    </label>
                    </div>
                    <div>
                    <input type="radio" id="control_02" name="type" value="Paper" onChange={this.handleChange.bind(this)} />
                    <label className="label1" for="control_02">
                        <h2> Paper</h2>
                        <p>Example: books </p>
                    </label></div>
                    <div>
                    <input type="radio" id="control_03" name="type" value="Electronic" onChange={this.handleChange.bind(this)} />
                    <label className="label1" for="control_03">
                        <h2>Electronic</h2>
                        <p> Example: radio ,old computer , wire , </p>

                    </label></div>
                    </div>
                    {/* Number: <input type="number" name="size" onChange={this.handleChange.bind(this)} /> <br /> */}
                    <div className="row">
                        <div className="card-image">
                            <div onClick={() => this.setState({ size: 'Small' })}>
                                <img alt className="image" src={small} />

                            </div>
                        </div>

                        <div className="card-image">
                            <div onClick={() => this.setState({ size: 'Medium' })}>
                                <img alt className="image" src={house} />

                            </div>
                        </div>
                        <div className="card-image">
                            <div onClick={() => this.setState({ size: 'Large' })}>
                                <img alt className="image" src={com} />
                            </div>
                        </div>
                    </div>
                    <button className="btnsub">Submit</button>
                </form>
                {/* <div onClick={() => this.setState({size: 'Small'})}>Small</div>
                <div onClick={() => this.setState({size: 'Medium'})}>Medium</div>
                <div onClick={() => this.setState({size: 'Large'})}>Large</div>  */}
            </div >
        );
    }
}

export default CreateReguest;