import React from 'react';

import "./index.css"

export default class PostAddForm extends React.Component {
    state = {
        text: ''
    }

    onSubmit = e => {
        e.preventDefault();
        if (!this.state.text) {
            return
        }
        this.props.onAdd(this.state.text);
        this.setState({text: ''});
    }

    onChange = e => {
        this.setState({text: e.target.value});
    }

    render() {
        return (
            <form onSubmit={this.onSubmit}
                  className="post-form__container">
                <input 
                    value={this.state.text}
                    onChange={this.onChange}
                    type="text"
                    placeholder="New post"
                    className="post-form__input"/>
                <button type="submit"
                        className="post-form__btn">
                    Add post
                </button>
            </form>
        )
    }
}