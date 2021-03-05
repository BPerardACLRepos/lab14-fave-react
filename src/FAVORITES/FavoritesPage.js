import React from 'react';
import { deleteUserFavorite } from '../UTILS/ApiUtils';


export default class FavoritesPage extends React.Component {

    state = {
        favorites: [],
        todoInput: '',
    }

    componentDidMount = async () => {
        await this.fetchFavorites();
    }

    fetchFavorites = async () => {
        const response = await getAllUserFavorites(this.props.token);

        this.setState({
            favorites: response,
        })
    }

    handleDeleteFavorite = async (e) => {
        e.preventDefault();

        await deleteUserFavorite(id, this.props.token);

        await this.fetchFavorites();
    }

    // Loading component with gif from past lab
    //
    // map render each favorites item
    // div > img > factText > delete favorite button linked to favorites api value
    //
    //component did update linked to prev.state/this.state of favorites array?

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