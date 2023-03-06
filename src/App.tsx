
import styles from "./App.module.css"
import { ContentListTak } from "./components/ContentListTask";
import { Header } from "./components/ContentListTask/components";

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


