import React, { useState, useEffect } from 'react';
import { Modal, Form } from 'react-bootstrap';

const TaskForm = ({ show, handleClose, addTask, editTask, taskToEdit }) => {
    const [task, setTask] = useState({ 
        name: '', 
        priority: 'Medium', 
        status: 'To Do' 
    });

    useEffect(() => {
        if (taskToEdit) {
            setTask(taskToEdit);
        }
    }, [taskToEdit]);

    const handleChange = (e) => {
        setTask({ ...task, [e.target.name]: e.target.value });
    };

    const handleSubmit = () => {
        taskToEdit ? editTask(task) : addTask(task);
        setTask({ name: '', priority: 'Medium', status: 'To Do' });
        handleClose();
    };

    return (
        <Modal show={show} onHide={handleClose} centered>
            <Modal.Header closeButton className="border-0">
                <Modal.Title className="fs-5">{taskToEdit ? 'Edit Task' : 'Add Task'}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group className="mb-3">
                        <Form.Label className="text-muted small">Task</Form.Label>
                        <Form.Control
                            type="text"
                            name="name"
                            value={task.name}
                            onChange={handleChange}
                            className="border-0 bg-light"
                            placeholder="Enter task name"
                        />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label className="text-muted small">Priority</Form.Label>
                        <Form.Select 
                            name="priority" 
                            value={task.priority} 
                            onChange={handleChange}
                            className="border-0 bg-light"
                        >
                            <option value="Low">Low</option>
                            <option value="Medium">Medium</option>
                            <option value="High">High</option>
                        </Form.Select>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label className="text-muted small">Status</Form.Label>
                        <Form.Select 
                            name="status" 
                            value={task.status} 
                            onChange={handleChange}
                            className="border-0 bg-light"
                        >
                            <option>To Do</option>
                            <option>In Progress</option>
                            <option>Done</option>
                        </Form.Select>
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer className="border-0">
                <button 
                    className="btn btn-primary px-4 py-2 rounded-pill"
                    style={{ backgroundColor: '#7749F8' }}
                    onClick={handleSubmit}
                >
                    {taskToEdit ? 'Update Task' : 'Add Task'}
                </button>
            </Modal.Footer>
        </Modal>
    );
};

export default TaskForm;