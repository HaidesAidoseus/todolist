import React, { Component, Fragment } from 'react'
import TodoItem from './TodoItem'

export default class TodoList extends Component {
    render() {
        const {
            items,
            updateTodosToShow,
            clearList,
            handleDelete,
            handleEdit,
            handleDoneTask,
            handleDeleteDoneTasks
        } = this.props

        return (
            <Fragment>
                <h3 className="text-center">
                    Управление задачами
                </h3>

                <div className="row">
                    <div className="col-md-12">
                        <button 
                            type="button"
                            className="btn btn-warning btn-block mt-1"
                            onClick={() => updateTodosToShow("all")}
                        >
                            Все задачи
                        </button>
                    </div>
                 </div>
                 <div className="row">
                    <div className="col-md-6">
                        <button 
                            type="button"
                            className="btn btn-success btn-block mt-1"
                            onClick={() => updateTodosToShow("done")}
                        >
                            Выполненные
                        </button>
                    </div>
                    <div className="col-md-6">
                        <button 
                            type="button"
                            className="btn btn-danger btn-block mt-1"
                            onClick={() => updateTodosToShow("todo")}
                        >
                            Не выполненные
                        </button>
                    </div>
                </div>
                <div>
                    <ul className="list-group my-5">
                        {
                            items.map(item => {
                                return (
                                    <TodoItem
                                        key={item.id}
                                        id={item.id}
                                        title={item.title}
                                        completed={item.completed}
                                        handleDelete={() => handleDelete(item.id)}
                                        handleEdit={() => handleEdit(item.id)}
                                        handleDoneTask={handleDoneTask}
                                    />
                                )
                            })
                            
                        }
                        

                        <div className="row mt-4">
                            <div className="col-md-6">
                                <button 
                                    type="button"
                                    className="btn btn-danger btn-block mt-1"
                                    onClick={handleDeleteDoneTasks}
                                >
                                    Удалить завершенные
                                </button>
                            </div>
                            <div className="col-md-6">
                                <button 
                                    type="button"
                                    className="btn btn-danger btn-block mt-1"
                                    onClick={clearList}
                                >
                                    Удалить все задачи
                                </button>
                            </div>
                        </div>
                    </ul>
                </div>
            </Fragment>
        )
    }
}
