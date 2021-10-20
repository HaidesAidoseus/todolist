import React, { Component } from 'react'
  

export default class TodoItem extends Component {
    render() {
        const {id , title, handleDelete, handleEdit, handleDoneTask, completed} = this.props

        return (
            <li className="list-group-item d-flex justify-content-between my-2">
                <h6 className={`mt-1 mb-0 align-middle ${completed ? 'completed-task' : ''}`}>{title}</h6>
                <div className="todo-icon" >
                    <span 
                        className={`mx-2 ${completed ? 'text-success' : 'text-secondary'}`}
                        onClick={() => handleDoneTask(id)}
                    >
                        <button title = "Метка выполнения"> <i className={`${completed ? 'far fa-check-square' : 'far fa-square'}`} />  </button>
                    </span>
                    <span 
                        className="mx-2 text-warning"
                        onClick={handleEdit}
                    >
                       <button title = "Изменить"> <i className="fas fa-edit" /> </button>
                    </span>
                    <span 
                        className="mx-2 text-danger"
                        onClick={handleDelete}
                    >
                        <button title = "Удалить"> <i className="fas fa-trash-alt" /> </button>
                    </span>
                </div>
            </li>
            
        )
    }
}
