import Curso from '../components/Curso'
import Layout from '../components/Layout'
import Listado from '../components/Listado'
import ListadoBlog from '../components/ListadoBlog'

export default function Home({ guitarras, cursos, entradas }) {
  return (
    <div>
      <Layout
        pagina='Inicio'
        guitarra={guitarras[3]}
      >
        <main className="contenedor">
          <h1 className="heading">Nuestra Colección</h1>

          <Listado
            guitarras={guitarras}
          />
        </main>

        <Curso
          cursos={cursos}
        />
        <div className="contenedor">
          <h2 className="heading">Blog</h2>

          <ListadoBlog
            entradas={entradas}
          />
        </div>
      </Layout>
    </div>
  )
}

export async function getServerSideProps() {
  const urlGuitarras = `${process.env.API_URL}/guitarras?_limit=6`
  const urlCursos = `${process.env.API_URL}/cursos`
  const urlEntradas = `${process.env.API_URL}/blogs?_limit=3&_sort=created_at:desc`

  const [resGuitarras, resCursos, resEntradas] = await Promise.all([
    fetch(urlGuitarras),
    fetch(urlCursos),
    fetch(urlEntradas),
  ])

  const [guitarras, cursos, entradas] = await Promise.all([
    resGuitarras.json(),
    resCursos.json(),
    resEntradas.json(),
  ])

  return {
    props: {
      guitarras,
      cursos,
      entradas,
    }
  }
}
