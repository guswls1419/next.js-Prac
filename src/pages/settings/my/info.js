import Layout from 'components/Layout'
import SubLayout from 'components/SuLayout'
import { useRouter } from 'next/router'
import { useState } from 'react'

export function getServerSideProps() {
  console.log('server')
  return {
    props: {},
  }
}

export default function MyInfo() {
  // **Shallow Routing**

  // getServerSideProps / getStaticProps 등을 실행시키지 않고, 현재 상태를 잃지 않고 url을 바꾸는 방법

  // 상태는 유지하면서 url만 바꾸고 싶은경우
  // 사용자가 어떤 동작을 했고, 그 기록을 query로 남기고 싶을때

  // *query로 남기면 사용자가 새로코침을 해도 유지된다.

  // ex)사용자가 페이지를 10까지 넘어가있을때 새로고침을해도 다시 페이지 10을 볼수있다.
  // Data fetching을 일으키고 싶지않을때 사용

  const router = useRouter()
  const [clicked, setClicked] = useState(false)
  const { status = 'initial' } = router.query

  return (
    <>
      <h1 className="title">My Info</h1>
      <h1 className="title">clicked: {String(clicked)}</h1>
      <h1 className="title">status: {status}</h1>
      {/* 
        url을 바꾸는 3가지 방식
        - location.replace("url"): 로컬 sate 유지 안됨(리렌더일어남)
        - router.push(url): 로컬 state 유지 / data feching은 일어남(서버가 실행됨.)
        - router.push(url, as, { shallow: true}) : 로컬 state 유지/ data fetching X 
          (로컬도 유지되고, 서버도 실행안됨. 정말 url만 바뀜)

          ** query가 아니라 url자체가 바뀌면 리렌더, 리패칭 된다.
      */}
      <button
        onClick={() => {
          alert('edit')
          setClicked(true)
          location.replace('/settings/my/info?status=editing')
        }}
      >
        edit (replace)
      </button>
      <br />
      <button
        onClick={() => {
          alert('edit')
          setClicked(true)
          router.push('/settings/my/info?status=editing')
        }}
      >
        edit (push)
      </button>
      <br />
      <button
        onClick={() => {
          alert('edit')
          setClicked(true)
          router.push('/settings/my/info?status=editing', undefined, {
            shallow: true,
          })
        }}
      >
        edit (shallow)
      </button>
    </>
  )
}
MyInfo.getLayout = function getLayout(page) {
  return (
    <Layout>
      <SubLayout>{page}</SubLayout>
    </Layout>
  )
}
