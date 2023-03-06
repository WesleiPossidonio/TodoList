import styles from './ContentTask.module.css'
import Trash from '../../../../assets/trash.svg'

import { BsFillCheckCircleFill } from 'react-icons/bs'


interface PropsTasks {
  id: string;
  task: string;
  isTaskCompleted: Boolean;
  handleDeleteTask: (id: string) => void;
  handleTaskToggle: (id: string) => void;
}

export const ContentTask = ({ id, task, isTaskCompleted, handleDeleteTask, handleTaskToggle }: PropsTasks) => {
  return (
    <div className={styles.container}>
      <div className={styles.contentTask}>
        <div className={styles.task}>
          <button  id='checkBox' className={styles.contentButtonTask}
             onClick={() => handleTaskToggle(id) }>
             {isTaskCompleted ? <BsFillCheckCircleFill />: <div />}
          </button>
          <p className={isTaskCompleted && styles.isCompleted}>{task}</p>
        </div>
        <img src={Trash} alt="" onClick={() => handleDeleteTask(id)} />
      </div>
    </div>
  )
}


