import Layout from "../../components/Layout"
import Image from "next/image"
import styles from '../../styles/Guitarra.module.css'

const Producto = ({ guitarra }) => {

    const { nombre, descripcion, precio, imagen, url } = guitarra

    return (
        <Layout
            pagina={nombre}
        >
            <div className={styles.guitarra}>
                <Image src={imagen.url} alt={`imagen guitarra ${nombre}`} width={180} height={350} layout="responsive" />

                <div className={styles.contenido}>
                    <h3>{nombre}</h3>

                    <p className={styles.descripcion}>{descripcion}</p>

                    <p className={styles.precio}>$ {precio}</p>
                </div>
            </div>
        </Layout>
    )
}

export async function getServerSideProps({ query: { url } }) {
    const urlAPI = `${process.env.API_URL}/guitarras?url=${url}`
    const respuesta = await fetch(urlAPI)
    const guitarra = await respuesta.json()

    return {
        props: {
            guitarra: guitarra[0]
        }
    }
}

export default Producto
