import Image from 'next/image'
import Layout from '../components/Layout'
import styles from '../styles/Nosotros.module.css'

const Nosotros = () => {
    return (
        <Layout
            pagina='Nosotros'
        >
            <main className='contenedor'>
                <h2 className='heading'>Nosotros</h2>

                <div className={styles.contenido}>
                    <Image layout='responsive' width={600} height={450} src='/img/nosotros.jpg' alt='nosotros' />

                    <div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ultricies accumsan est, rhoncus tempor nulla tincidunt vestibulum. Nullam eget vulputate arcu, nec mattis nisi. In et erat eu odio ullamcorper rutrum tincidunt non lorem. Pellentesque ullamcorper velit nec nisi varius, lobortis consequat eros interdum. Nullam viverra nunc eros, eget sodales enim vestibulum ac. Vestibulum eleifend augue a lectus vestibulum condimentum. Nullam nec commodo enim. Suspendisse varius enim vel accumsan pellentesque.</p>

                        <p>Vivamus ultricies sapien ac eros porttitor, sed vehicula ante tempor. Fusce mattis dui mauris, in placerat metus vulputate in. Aenean nec augue et velit sagittis egestas. Vestibulum aliquam porttitor ullamcorper. Quisque bibendum felis ut mattis rhoncus. Vivamus finibus auctor fermentum. Donec porta sagittis commodo. Nam sodales ut sem ut luctus. Nulla et neque imperdiet, vulputate massa et, scelerisque nunc. Aenean vel dolor eu nisi ultrices varius. Aenean ut libero id urna congue mattis. Morbi ullamcorper enim vel turpis fringilla bibendum. In placerat fringilla urna id cursus. Suspendisse ex magna, maximus a elementum vitae, lacinia sit amet sem. Aliquam eget mauris vitae nisi iaculis suscipit eu a nunc.</p>
                    </div>
                </div>
            </main>
        </Layout>
    )
}

export default Nosotros
