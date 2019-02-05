import React, { Component } from "react";


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
            <div>
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <input type="radio" name="type" value="Plastic" onChange={this.handleChange.bind(this)} />Plastic <br />
                    <input type="radio" name="type" value="Paper" onChange={this.handleChange.bind(this)} />Paper <br />
                    <input type="radio" name="type" value="Electronic" onChange={this.handleChange.bind(this)} />Electronic <br />
                    {/* Number: <input type="number" name="size" onChange={this.handleChange.bind(this)} /> <br /> */}
                    <div onClick={() => this.setState({ size: 'Small' })}>Small</div>
                    <div onClick={() => this.setState({ size: 'Medium' })}>Medium</div>
                    <div onClick={() => this.setState({ size: 'Large' })}>Large</div>
                    <button>submit</button>
                </form>
                {/* <div onClick={() => this.setState({size: 'Small'})}>Small</div>
                <div onClick={() => this.setState({size: 'Medium'})}>Medium</div>
                <div onClick={() => this.setState({size: 'Large'})}>Large</div>  */}
            </div >
        );
    }
}

export default CreateReguest;