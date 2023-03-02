import styles from './ContentTask.module.css'
import Trash from '../assets/trash.svg'


interface PropsTasks {
  id: string;
  task: string;
  isTaskCompleted: boolean;
  handleDeleteTask: (id: string) => void;
  handleTaskToggle: (id: string) => void;
}

const ContentTask = ({ id, task, isTaskCompleted, handleDeleteTask, handleTaskToggle }: PropsTasks) => {
  return (
    <div className={styles.container}>
      <div className={styles.contentTask}>
        <div className={styles.task}>
          <input readOnly id='checkBox' type="checkbox" onClick={() => handleTaskToggle(id) } />
          <label htmlFor="checkBox"> </label>
          <p className={isTaskCompleted && styles.isCompleted}>{task}</p>
        </div>
        <img src={Trash} alt="" onClick={() => handleDeleteTask(id)} />
      </div>
    </div>
  )
}

export default ContentTask
