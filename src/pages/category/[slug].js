import Layout from 'components/Layout'
import SubLayout from 'components/SuLayout'
import { useRouter } from 'next/router'

export default function CategorySlug() {
  const router = useRouter()
  const { slug, from, age } = router.query
  // query는 slug 와 from 으로 받을수잇다.ex) ?from=""
  //slug는 먼저선언된거만 받을수있다 (중복 불가능)
  //from는 중복 가능하다.
  return (
    <>
      <h1 className="title">
        Category {slug} from {from} {age}
      </h1>
    </>
  )
}
CategorySlug.getLayout = function getLayout(page) {
  return (
    <Layout>
      <SubLayout>{page}</SubLayout>
    </Layout>
  )
}
