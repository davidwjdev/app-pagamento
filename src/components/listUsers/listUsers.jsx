import React, { Component } from 'react';
import Axios from 'axios';
import './../../components/listUsers/listUsers.css';
import './../../components/listUsers/modal.css'

export default class ListUsers extends Component {
    // estado do Array dos usuarios e variavel show
    constructor() {
        super();
        this.state = {
            users: [],
            show: false,
            cards: [
                // valid card
                {
                    card_number: '1111111111111111',
                    cvv: 789,
                    expiry_date: '01/18',
                },
                // invalid card
                {
                    card_number: '4111111111111234',
                    cvv: 123,
                    expiry_date: '01/20',
                },
            ],
            payment:false
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

    //pega as informações do usuario com axios - api
    componentDidMount() {
        Axios.get("https://www.mocky.io/v2/5d531c4f2e0000620081ddce")
            .then(response => {
                const users = response.data;
                this.setState({ users });
                console.log(this.setState({ users }));
            });
        

    };
    paymentUser = () => {
        const payment = { card_number :document.getElementById('user_card_number'), 
        value : document.getElementById('user-value')};
        Axios.post("https://run.mocky.io/v3/533cd5d7-63d3-4488-bf8d-4bb8c751c989", 
        payment).then(response => {const payment = response.data;
             this.setState({payment: true})});
             console.log(this.setState({payment}));
        };

    // rendeniza as informações
   
    render() { 
        const { users, cards } = this.state;
        const showHideClassName = this.state.show ? "modal modal-show" : "modal modal-hide";
        // const paymantFinish = 'Concluido com sucesso';
        // const paymantError = 'Nao com sucesso';

        // if(this.state.payment.card_number = '1111111111111111'){
        
        // }
        return (<div>
            {/* {if(this.state.payment.card_number = '1111111111111111'){
                
            }} */}
            {/* modal */}
            <div className={showHideClassName}  >
                <div className="modal-title" >
                    Pagamento para 
                </div>
                <div className="modal-body">
                    <input className='user-value-pay modal-item' id='user-value'  type='number' placeholder='R$ 0,00' />
                    <select name="cards" className='user-cards modal-item ' >
                        {cards.map(card => (
                            <option value={card.card_number} id='user_card_number'>Cartão com final {card.card_number.slice(-4)}</option>
                        ))}
                    </select>
                    <div className='modal-button'>
                        <input className="button-pay modal-item" type="button" value="Pagar" onClick={this.paymentUser} />
                        <input className="button-pay modal-item" type="button" value="Cancela" onClick={this.hideModal} />
                    </div>
                </div>
            </div>

            {/* rendeniza os usuarios */}
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

        </div>);
    };
};
