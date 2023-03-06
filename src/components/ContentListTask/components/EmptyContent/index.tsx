import styles from './EmptyContent.module.css'
import imgContentTask from '../../../../assets/Clipboard.svg'

export const EmptyContentTask = () => {
  return (
    <div className={styles.container}>
      <div className={styles.containerContentTask}>
        <img src={imgContentTask} alt="imagem de tarefas vazias" />
        <h3>Você ainda não tem tarefas cadastradas</h3>
        <p>Crie tarefas e organize seus itens a fazer</p>
      </div>
    </div>
  )
}


