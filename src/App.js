import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

function App() {
    const [tasks, setTasks] = useState([]);
    const [showForm, setShowForm] = useState(false);
    const [taskToEdit, setTaskToEdit] = useState(null);
    
    const handleShowForm = () => setShowForm(true);
    const handleCloseForm = () => {
        setShowForm(false);
        setTaskToEdit(null);
    };

    const addTask = (task) => {
        setTasks([...tasks, { ...task, id: Date.now() }]);
    };
    
    const editTask = (updatedTask) => {
        setTasks(tasks.map(task => (task.id === updatedTask.id ? updatedTask : task)));
    };
    
    const deleteTask = (id) => {
        setTasks(tasks.filter(task => task.id !== id));
    };
    
    const showEditForm = (task) => {
        setTaskToEdit(task);
        handleShowForm();
    };

    const toggleStatus = (id) => {
        setTasks(tasks.map(task => {
            if (task.id === id) {
                return {
                    ...task,
                    status: task.status === 'Done' ? 'To Do' : 'Done'
                };
            }
            return task;
        }));
    };

    React.useEffect(() => {
        document.body.style.backgroundColor = '#f5f5f5';  // Anda bisa sesuaikan kode warna abu-abu
        
        // Cleanup function
        return () => {
            document.body.style.backgroundColor = '';
        };
    }, []);
    
    return (
        <Container className="py-5" style={{ maxWidth: '800px' }}>
            <div className="d-flex justify-content-between align-items-center mb-4">
                <h1 className="mb-0">Task List</h1>
                <button 
                    className="btn btn-primary px-4 py-2 rounded-pill"
                    style={{ backgroundColor: '#7749F8' }}
                    onClick={handleShowForm}
                >
                    + Add Task
                </button>
            </div>
            <TaskList 
                tasks={tasks} 
                deleteTask={deleteTask} 
                showEditForm={showEditForm}
                toggleStatus={toggleStatus}
            />
            <TaskForm
                show={showForm}
                handleClose={handleCloseForm}
                addTask={addTask}
                editTask={editTask}
                taskToEdit={taskToEdit}
            />
        </Container>
    );    
}

export default App;