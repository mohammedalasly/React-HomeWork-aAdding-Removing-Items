import React from "react";
//1- extend your Todo List app from week 1:
class DynamicList extends React.Component {
    constructor() {
        super()
        this.handleAdd = this.handleAdd.bind(this)
        this.handleRemove = this.handleRemove.bind(this)
        // this.handleDeleteAll=this.handleDeleteAll.bind(this)

        /*
        2- Instead of loading in a JSON file we want to put it into the application state.
           This creates a copy of it that we can change.
        3- Create a state object
        4- Import and move your JSON content to state
        */
        this.state = {
            tasks: [
                {
                    id: 1,
                    description: "Get out of bed",
                    deadline: "2017-09-11",
                    done: true
                },
                {
                    id: 2,
                    description: "Brush teeth",
                    deadline: "2017-09-10",
                    done: false
                },
                {
                    id: 3,
                    description: "Eat breakfast",
                    deadline: "2017-09-09",
                    done: false
                }
            ]
        }
        console.log(this.state.tasks)
    }
    //5- Change the state:
    handleAdd(event) {
        event.preventDefault();
        const add = {
            id: this.state.tasks,
            description: event.target.description.value,
            deadline: event.target.deadline.value
        }
        // const handleAdd = event => {
        //     if (value) {
        //       setList(list.concat(value));
        //     }
        // this.props.createContact(contact);
        this.setState({ tasks: this.state.tasks.concat(add) })
    }

    handleRemove(event) {
        const remove = this.state.tasks.filter(item => item.id !== event);
        this.setState({ tasks: remove })
    }

    /* 5- by rendering JSX we gonna create a form that takes an Input field component(s),
    and create a Button(s) component to be used for adding new elements.
    
    -In order to remove an item(s) from an array we have to use filter(method).
    -In order to add an item(s) from an array we have to use map(method).
    */
    render() {
        return (
            <div className="form">
                <form onSubmit={this.handleAdd}>
                    <input type="submit" value="ADD" className="green"></input>

                    <button className="desc">DESC:</button>
                    <input type="text" name="description" placeholder="description"></input>

                    <button className="time">Date:</button>
                    <input type="date" name="deadline"></input>
                    <div>
                        {this.state.tasks.map((element) =>
                            <div className="list-item" key={element.id}>
                                <p className="parag"> {element.description} / {element.deadline} </p>
                                <button onClick={() => this.handleRemove(element.id)} className="red">Remove</button>
                            </div>
                        )}
                    </div>

                </form>
            </div>
        )
    }
}

export default DynamicList;