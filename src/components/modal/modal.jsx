import React, { Component } from 'react';

export default  class modal extends Component {
    state={
        showModal: false
    };

    handleOpenModal = this.handleOpenModal.bind(this);
    handleCloseModal = this.handleCloseModal.bind(this);

    handleOpenModal(){
        this.setState({ showModal: true});
    }

    handleCloseModal(){
        this.setState({ showModal: false});
    }

    render(){
        return (
            <div>
                {/* <ReactModal isOpen={this.state.showModal} content-label="Modal"/> */}
            </div>
        );
    }
};


