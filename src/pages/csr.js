import { useEffect, useState } from 'react'
import Layout from '../components/Layout'
import SubLayout from '../components/SuLayout'

export default function CSR() {
  const [time, setTime] = useState()

  useEffect(() => {
    console.log('client')
    setTime(new Date().toISOString())
  }, [])
  return (
    <>
      <h1 className="title">
        <span style={{ fontWeight: 'bold', fontSize: '30px' }}>예시👉 </span>
        {time}
      </h1>
      <div>(새로고침 하면서 client, server 양쪽 console확인)</div>
      <br />
      <br />
      <div>
        <span style={{ fontWeight: 'bold', fontSize: '40px' }}>CSR</span>
        <br />
        <br />
        클라이언트가 데이터를 가져와서 그리는 방식 <br />
        기존 react 구현방식
      </div>
    </>
  )
}
CSR.getLayout = function getLayout(page) {
  return (
    <Layout>
      <SubLayout>{page}</SubLayout>
    </Layout>
  )
}
