import { ChangeEvent, FormEvent, InvalidEvent, useState } from "react";
import styles from './ContentLIstTask.module.css'
import imgButton from '../assets/plus.svg'

import * as UUID from 'uuid'
import { EmptyContentTask } from "./EmptyContentTask";
import ContentTask from "./ContentTask";

interface ListTask {
    id: string;
    content: string;
    isTaskCompleted: boolean;
}

export function ContentListTak() {
    const [tasks, setTasks] = useState<ListTask[]>([]);
    const [newTask, setNewTask] = useState("");

    function handleCreateNewTask(event: FormEvent) {
        event.preventDefault();
        const createNewListTask: ListTask = {
            id: UUID.v4(),
            content: newTask,
            isTaskCompleted: false
        }

        setTasks([...tasks, createNewListTask]);

        setNewTask("");
    }

    function handleTaskInvalid(event: InvalidEvent<HTMLInputElement>) {
        event.target.setCustomValidity("Esse campo é obrigatorio!");
    }

    function handleNewTaskChange(event: ChangeEvent<HTMLInputElement>) {
        event.target.setCustomValidity("");
        setNewTask(event.target.value)
    }

    function handleTaskToggle(id: string) {
        const taskIndex = tasks.findIndex((task) => {
            return task.id == id;
        });

        const newTaskList = [...tasks];

        newTaskList[taskIndex].isTaskCompleted = !newTaskList[taskIndex].isTaskCompleted

        setTasks(newTaskList);
    }

    function handleDeleteTask(id: string) {
        const removeTask = tasks.filter((task) => task.id !== id)

        setTasks(removeTask);
    }

    const taskCompleted = tasks.filter((task) => task.isTaskCompleted === true)

    return (
        <div className={styles.container}>
            <form className={styles.containerNewTask} onSubmit={handleCreateNewTask}>
                <input
                    className={styles.inputList}
                    name="newTask"
                    onChange={handleNewTaskChange}
                    type="text"
                    value={newTask}
                    placeholder="Adicione uma nova tarefa"
                    onInvalid={handleTaskInvalid}
                    required
                />
                <button className={styles.buttonTask}>
                    Criar <img src={imgButton} alt="adicionar" />
                </button>
            </form>

            <div className={styles.aboutTask}>
                <p className={styles.createdTasks}>
                    Tarefas Cliadas <span>{tasks.length}</span>
                </p>
                <p className={styles.completedTasks}>
                    Concluídas {
                        tasks.length === 0 ?
                            <span>0</span> :
                            <span>{taskCompleted.length} de {tasks.length}</span>
                    }
                </p>
            </div>
            <ul>
                {
                    tasks.length === 0 ? (
                        <EmptyContentTask />
                    ) : (
                        tasks.map(task => {
                            return (
                                <li key={task.id}>
                                    <ContentTask
                                        id={task.id}
                                        task={task.content}
                                        isTaskCompleted={task.isTaskCompleted}
                                        handleDeleteTask={handleDeleteTask}
                                        handleTaskToggle={handleTaskToggle}
                                    />
                                </li>
                            )
                        })
                    )
                }
            </ul>
        </div>
    )
}



