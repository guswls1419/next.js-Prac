import Layout from 'components/Layout'
import SubLayout from 'components/SuLayout'
import Link from 'next/link'
import { useRouter } from 'next/router'

export default function CartDateslug() {
  const router = useRouter()
  const { date } = router.query
  //const { slug } = router.query
  //=> slug는 배열로 받아진다.

  //파일명에 [[]] => 대괄호 2번 씌워두면 폴더에 index 파일이 없어도 404 안뜨고 페이지노출이 가능하다.
  //Link로 slug 보낼수있고 button안에서는 router.push를 사용하면 보낼수있다.
  return (
    <>
      <h1 className="title">Cart Date slug {JSON.stringify(date)}</h1>
      <Link href="/cart/2022/06/05">
        <a>2022년 6월 5일로</a>
      </Link>
      <br />
      <button onClick={() => router.push('/cart/2022/06/05')}>
        2022년 6월 5일로
      </button>
    </>
  )
}
CartDateslug.getLayout = function getLayout(page) {
  return (
    <Layout>
      <SubLayout>{page}</SubLayout>
    </Layout>
  )
}
