import React, { Component } from 'react'

export default class TodoInput extends Component {
    render() {
        const {item, handleChange, handleSubmit, editItem} = this.props  
        
        return (
            <div className="card card-body my-3">
                <form onSubmit={handleSubmit}>
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <div className="input-group-text bg-info text-white">
                                <i className="fas fa-tasks" />
                            </div>
                        </div>

                        <input
                            type="text"
                            className="form-control"
                            placeholder="Введите задачу..."
                            value={item}
                            onChange={handleChange}
                        />
                    </div>

                    <button 
                        type="submit"
                        className={`btn btn-block mt-3 ${editItem ? 'btn-success' : 'btn-link'}`}
                    >
                        {editItem ? 'Изменить' : 'Добавить задачу'}
                    </button>
                </form>
            </div>
        )
    }
}
