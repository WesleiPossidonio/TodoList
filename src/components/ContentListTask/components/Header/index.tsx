import Styles from './header.module.css'
import TodoListLogo from '../../../../assets/Logo-TodoList.svg'

export const Header = () => {
  return (
    <div className={Styles.containerHeader}>
       <img src={TodoListLogo} alt="Logo-do-site" />
    </div>
  )
}


