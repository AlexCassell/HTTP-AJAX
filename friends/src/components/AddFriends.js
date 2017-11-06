import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addFriends } from '../actions';
import axios from 'axios';

class AddFriends extends Component {    
    constructor () {
        super();
        this.state = {
            name: '',
            age: '',
            email: '',
            index: ''
        };
    }

    handleNameChange = (e) => {
        this.setState({name: e.target.value});
    }

    handleAgeChange = (e) => {
        this.setState({age: e.target.value});
    }

    handleEmailChange = (e) => {
        this.setState({email: e.target.value});
    }

    handleIndexChange = (e) => {
        this.setState({index: e.target.value});
    }

    newFriend = (e) => {
        e.preventDefault();
        const newFriend = {
            name: this.state.name,
            age: this.state.age,
            email: this.state.email
        };

    this.props.addFriends(newFriend);
    this.setState({
        name: '',
        age: '',
        email: '',
        index: ''
    });
};

    render() {
        return (
            <div>
                <input value = {this.state.name} onChange={this.handleNameChange} placeholder="Name" />
                <input value = {this.state.age} onChange={this.handleAgeChange} placeholder="Age" />
                <input value = {this.state.email} onChange={this.handleEmailChange} placeholder="Email" />
                <input value={this.state.index} onChange={this.handleIndexChange} placeholder="ID #" />
                <button onClick={this.newFriend}>Add friend</button>
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return{
        friendsData: state.friendsData
    };
};

export default connect(mapStateToProps, {addFriends})(AddFriends)