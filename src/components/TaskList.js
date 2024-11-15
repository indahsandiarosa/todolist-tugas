import React from 'react';

const TaskList = ({ tasks, deleteTask, showEditForm, toggleStatus }) => {
    const getPriorityColor = (priority) => {
        switch(priority.toLowerCase()) {
            case 'high': return '#FF4646';
            case 'medium': return '#FFA116';
            case 'low': return '#1EA7FF';
            default: return '#1EA7FF';
        }
    };

    const getStatusBg = (status) => {
        switch(status.toLowerCase()) {
            case 'to do': return '#808080';
            case 'in progress': return '#CD0000';
            case 'done': return '#4CAF50';
            default: return '#F2F2F2';
        }
    };

    return (
        <div className="mt-4">
            {/* Header/Title row */}
            <div className="bg-white rounded-3 p-3 mb-3 d-flex align-items-center shadow-sm">
                <div style={{ flex: '2' }} className="fw-bold">Task Name</div>
                <div style={{ flex: '1' }} className="fw-bold text-center">Priority</div>
                <div style={{ flex: '1' }} className="fw-bold text-center">Status</div>
                <div style={{ flex: '0.5' }} className="fw-bold text-center">Progress</div>
                <div style={{ flex: '0.5' }} className="fw-bold text-center">Actions</div>
            </div>

            {/* Task Items */}
            {tasks.map((task, index) => (
                <div 
                    key={index}
                    className="bg-white rounded-3 p-3 mb-3 d-flex align-items-center shadow-sm"
                >
                    {/* Task Name Column */}
                    <div style={{ flex: '2' }} className="d-flex align-items-center">
                        <span className="ms-2">{task.name}</span>
                    </div>

                    {/* Priority Column */}
                    <div style={{ flex: '1' }} className="text-center">
                        <span 
                            className="badge rounded-pill px-3 py-2"
                            style={{ 
                                backgroundColor: getPriorityColor(task.priority),
                                color: 'white'
                            }}
                        >
                            {task.priority}
                        </span>
                    </div>

                    {/* Status Column */}
                    <div style={{ flex: '1' }} className="text-center">
                        <span 
                            className="badge rounded-pill px-3 py-2"
                            style={{ backgroundColor: getStatusBg(task.status) }}
                        >
                            {task.status}
                        </span>
                    </div>

                    {/* Progress Column */}
                    <div style={{ flex: '0.5' }} className="text-center">
                        <input
                            type="checkbox"
                            checked={task.status === 'Done'}
                            onChange={() => toggleStatus(task.id)}
                            className="form-check-input border-2"
                            style={{ width: '20px', height: '20px' }}
                        />
                    </div>

                    {/* Actions Column */}
                    <div style={{ flex: '0.5' }} className="d-flex justify-content-center gap-2">
                        <button 
                            className="btn btn-link p-1"
                            onClick={() => showEditForm(task)}
                        >
                            <i className="bi bi-pencil" style={{ color: '#7749F8' }}></i>
                        </button>
                        <button 
                            className="btn btn-link p-1"
                            onClick={() => deleteTask(task.id)}
                        >
                            <i className="bi bi-trash" style={{ color: '#FF4646' }}></i>
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default TaskList;