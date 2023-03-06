<<<<<<< HEAD:src/components/ContentListTask/components/Header/index.tsx
import Styles from './header.module.css'
import TodoListLogo from '../../../../assets/Logo-TodoList.svg'
=======
import Styles from './Header.module.css'
import TodoListLogo from '../assets/Logo-TodoList.svg'
>>>>>>> origin:src/components/Header.tsx

export const Header = () => {
  return (
    <div className={Styles.containerHeader}>
       <img src={TodoListLogo} alt="Logo-do-site" />
    </div>
  )
}


