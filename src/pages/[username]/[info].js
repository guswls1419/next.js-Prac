import Layout from 'components/Layout'
import SubLayout from 'components/SuLayout'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

export default function UsernameInfo() {
  const router = useRouter()
  const { username, info, uid } = router.query
  console.log(uid)
  // 폴더명에도 slug지정 가능하다.

  const [name, setName] = useState('?')

  // useEffect(() => {
  //   fetch('/api/user')
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setName(data.name)
  //     })
  // }, [])
  useEffect(() => {
    if (uid != null) {
      //클라이언트쪽에선 처음 렌더를할때 uid가 undefined 상태이기때문에 조건문 걸어주기
      fetch(`/api/user-info/${uid}`)
        .then((res) => res.json())
        .then((data) => {
          setName(data.name)
        })
    }
  }, [uid])
  return (
    <>
      <h1 className="title">
        {username}'s' {info}
      </h1>

      <h1 className="title">Name : {name}</h1>
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
