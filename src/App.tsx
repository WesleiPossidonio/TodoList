
import { Header } from "./components/Header";
import styles from "./App.module.css"
import { ContentListTak } from "./components/ContentListTask";

export function App() {
  return (
    <div  className={styles.container}>
     <Header/>
     <main >
     <ContentListTak/>
     </main>
    </div>
  )

 
}


