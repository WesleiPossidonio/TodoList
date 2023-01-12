import styles from './ContentTask.module.css'

import Trash from '../assets/trash.svg'


interface PropsTasks {
  id: String;
  task: String;
  handleDeleteTask: (id: String) => void;
  handleTaskToggle: (id: String) => void;
}

const ContentTask = ({ id, task, handleDeleteTask, handleTaskToggle }: PropsTasks) => {
  return (
    <div className={styles.container}>
      <div className={styles.contentTask}>
        <div className={styles.task}>
          <input type="checkbox" onClick={() => handleTaskToggle(id) } />
          <p>{task}</p>
        </div>
        <img src={Trash} alt="" onClick={() => handleDeleteTask(id)} />
      </div>
    </div>
  )
}

export default ContentTask
