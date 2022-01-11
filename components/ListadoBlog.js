import Entrada from './Entrada'
import styles from '../styles/Blog.module.css'

const ListadoBlog = ({ entradas }) => {
    return (
        <div className={styles.blog}>
            {entradas.map(entrada => (
                <Entrada
                    key={entrada.id}
                    entrada={entrada}
                />
            ))}
        </div>
    )
}

export default ListadoBlog
