import Layout from 'components/Layout'
import SubLayout from 'components/SuLayout'
import { useRouter } from 'next/router'

export default function UsernameInfo() {
  const router = useRouter()
  const { username, info } = router.query
  // 폴더명에도 slug지정 가능하다.

  return (
    <>
      <h1 className="title">
        {username}'s' {info}
      </h1>
    </>
  )
}
UsernameInfo.getLayout = function getLayout(page) {
  return (
    <Layout>
      <SubLayout>{page}</SubLayout>
    </Layout>
  )
}
