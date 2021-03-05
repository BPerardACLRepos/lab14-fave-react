import React from 'react';
import {
    getCatFacts,
    getCatPics,
} from '../UTILS/api-utils.js';
import { getAllUserFavorites } from '../UTILS/ApiUtils.js';


export default class SearchPage extends React.Component {
    state = {
        catFacts: [],
        catPics: [],
        queryAmount: 4,
        favorites: [],
    }

    componentDidMount = async () => {
        await this.fetchFavorites();
    }

    // Fetch Functions
    fetchPicsAndFacts = async () => {
        const responseFacts = await getCatFacts(this.state.queryAmount);
        const responsePics = await getCatPics(this.state.queryAmount);

        this.setState({
            catFacts: responseFacts,
            catPics: responsePics,
        })
    }

    fetchFavorites = async () => {
        const response = await getAllUserFavorites(this.props.token);

        this.setState({
            favorites: response,
        })
    }

    // Event Handlers
    handleQueryAmountChange = (e) => {
        this.setState({
            queryAmount: e.target.value,
        })
    }

    handleAddFavorite = async (e) => {
        e.preventDefault();

        const catFact = this.state.catFacts[index];
        const catPic = this.state.catPics[index];

        const favorite = {
            fact_api_id: catFact._id,
            fact: catFact.text,
            pic_url: catPic.url,
        }

        await addUserFavorite(favorite, this.props.token);

        await this.fetchFavorites();
    }

    // Loading component with gif from past lab
    //
    // map render each search item
    // div > img > factText > add favorite(index during map for state array) or favorite icon (check (!)favorites call on element)
    //
    // number select with value onChange linked to state.query amount
    // submit button with select to fire new search chain
    //
    //component did update linked to prev.state/this.state of favorites and facts array?

    checkFavoriteStatus = (catFact, favorites) => {
        for (let favorite of favorites) {
            if (favorite.fact_api_id === catFact._id) {
                return true;
            }
        }
        return false;
    }

    render() {
        return (
            <div>
                {/* <div className="todos-wrapper">
                    {this.state.todos.map(todo =>
                        <div key={todo.todo} className="todos-div"
                            onClick={() =>
                                this.handleComplete(todo.id)
                            }>
                            <p className={todo.completed && 'finished'}>{todo.todo}</p>
                        </div>
                    )}
                </div >
                <form onSubmit={this.handleAddTodo}>
                    <label>
                        <input value={this.state.todoInput} onChange={this.handleTodoInputChange} required />
                    </label>
                    <button>Add Todo</button>
                </form> */}
            </div>
        );
    }
}