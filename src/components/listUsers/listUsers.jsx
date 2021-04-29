import React, { Component } from 'react';
import Axios from 'axios';

export default class ListUsers extends Component {

    state = {
        users: []
    };


    componentDidMount() {
        Axios.get("https://www.mocky.io/v2/5d531c4f2e0000620081ddce")
            .then(response => {
                const users = response.data;
                this.setState({ users });
                console.log(this.setState({ users }));
            });

    };
    render() {
        const { users } = this.state;

        return users.map(user => (
            <div className="body-background"  key={user.id}>
                {/* <script src='https://kit.fontawesome.com/a076d05399.js' crossorigin='anonymous'></script> */}
                <div className="body">
                    <div className="user">
                        <div className="user-photo">
                            {/* {user.img == null ?
                                <img src='' alt={user.name} />
                                : <i class='far fa-user-circle'></i>} */}
                            <img src={user.img} alt={user.name} />

                        </div>
                        <div className="user-data">
                            <div>
                                <label>Nome do Usuario: </label>
                                <span>X</span>
                            </div>
                            <div>
                                <label>ID: </label>
                                <span>X</span>
                                <span> - </span>
                                <label>Username: </label>
                                <span>X</span>
                            </div>
                        </div>

                        <div className="user-button">
                            <input className="button-pay" type="button" value="Pagar" />
                        </div>
                        {user.name}
                    </div>

                </div>
            </div>
        ))
    }
};

