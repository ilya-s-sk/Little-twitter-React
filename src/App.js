import React from 'react';
import './App.css';

import PostList from './components/PostList/PostList';
import PostAddForm from './components/PostAddForm/PostAddForm';
import Header from './components/Header/Header';
import Filter from './components/Filter/Filter';

class App extends React.Component {

    state = {
        data: [],
        onlyLiked: false
    }

    maxId = 0;

    componentDidMount() {
        for (let key in localStorage) {
            if (!localStorage.hasOwnProperty(key)) {
                continue;
            }
            const post = JSON.parse(localStorage.getItem(key));
            this.maxId = key + 1;
            this.setState(({data}) => {
                const newData = [...data, post];
                return {
                    data: newData
                }
            })
        }
    }

    onAdd = (postText) => {

        const newItem = {
            text: postText,
            id: this.maxId++,
            like: false
        }

        this.setState(({data}) => {
            const newData = [...data, newItem];
            return {
                data: newData
            }
        })
        localStorage.setItem(newItem.id, JSON.stringify(newItem));
    }

    onDelete = id => {
        this.setState(({data}) => {
            
            const index = data.findIndex(item => item.id === id);

            const newData = [...data.slice(0, index), ...data.slice(index + 1)];

            return {data: newData}
        })
        localStorage.removeItem(id);
    }

    onLike = id => {
        
        this.setState(({data}) => {
            
            const index = data.findIndex(item => item.id === id);
            const oldPost = data[index];
            const newPost = {...oldPost, like: !oldPost.like};

            localStorage.setItem(newPost.id, JSON.stringify(newPost));
            const newData = [...data.slice(0, index), newPost, ...data.slice(index + 1)];

            return {data: newData}
        })
    }

    showLiked = () => {
        this.setState({onlyLiked: !this.state.onlyLiked})
    }


    render() {

    let numOfPosts = this.state.data.length;
    let numOfLikedPosts = this.state.data.filter(post => post.like).length;
    
    return (
        <div className="App">
            <Header
                numOfPosts={numOfPosts}
                numOfLikedPosts={numOfLikedPosts}/>
            
            <nav className="main__nav">
                <Filter
                    showLiked={this.showLiked}
                    onlyLiked={this.state.onlyLiked}/>
            </nav> 
            <div className="main__posts-container">
                <PostAddForm 
                    onAdd={this.onAdd}/>
                
                <PostList 
                    posts={this.state.data}
                    onlyLiked={this.state.onlyLiked}
                    onDelete={this.onDelete} 
                    onLike={this.onLike}/> 
            </div>
            <aside className="main__aside">

            </aside>
            
        </div>
        );
    }
}



export default App;
