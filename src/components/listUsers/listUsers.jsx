import React, { Component } from 'react';
import Axios from 'axios';
import './../../components/listUsers/listUsers.css';

import Modal from './../modal/modal';

export default class ListUsers extends Component {
    // estado do Array dos usuarios e variavel show
    constructor() {
        super();
        this.state = {
            users: [],
            show: false
        };
        this.showModal = this.showModal.bind(this);
        this.hideModal = this.hideModal.bind(this);
      }

      showModal = () => {
        this.setState({ show: true });
      };
    
      hideModal = () => {
        this.setState({ show: false });
      };

    //pega as informações com axios - api
    componentDidMount() {
        Axios.get("https://www.mocky.io/v2/5d531c4f2e0000620081ddce")
            .then(response => {
                const users = response.data;
                this.setState({ users });
                console.log(this.setState({ users }));
            });

    };
    // rendeniza as informações
    render() {
        const { users } = this.state;
        return <div>
                <Modal show={this.state.show} handleClose={this.hideModal}/>
{/* rendeniza os usuarios, foto e botão          */}
                {users.map(user => (
                    <div className="body-background" key={user.id}>
                        <div className="user">
                            <div className="user-itens">
                                <div className="user-photo">
                                    <img src={user.img} alt={user.name} />
                                </div>
                                <div className="user-data">
                                    <div>
                                        <label>Usuario: </label>
                                        <span>{user.name}</span>
                                    </div>
                                    <div>
                                        <label>ID: </label>
                                        <span>{user.id}</span>
                                        <span> - </span>
                                        <label>Username: </label>
                                        <span>{user.username}</span>
                                    </div>
                                </div>
                            </div>
                            <div className="user-button">
                                <input className="button-pay" type="button" value="Pagar" onClick={this.showModal} />
                            </div>
                        </div>
                    </div>
                ))}
           
        </div>;
    }
};

