import React, { Component } from "react";

class ShowData extends Component {
    constructor() {
        super();
        this.state = {
        }
    }

    render() {
        return (
            <div>
                <table>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                    </tr>
                    <tr>
                        <td>{this.props.user.name}</td>
                        <td>{this.props.user.email}</td>
                        <td>{this.props.user.phone}</td>
                    </tr>
                </table>
            </div >
        );
    }
}

export default ShowData;