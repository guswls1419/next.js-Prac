import Link from 'next/link'

export function getServerSideProps() {
  console.log('server')
  return {
    props: { time: new Date().toISOString() },
  }
}

export default function Home({ time }) {
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
        <span style={{ fontWeight: 'bold', fontSize: '40px' }}>SSR</span>
        <br />
        <br />
        서버가 데이터를 가져와서 그린다.
        <br />
        getServerSideProps 함수사용
        <br />
        서버에서 데이터를 가져와서 페이지에 props 해준다.
      </div>
      <br />
      <br />
      <h1>
        <Link href="/csr">
          <a>CSR 로</a>
        </Link>
      </h1>
      <h1>
        <Link href="/ssg">
          <a>SSG 로</a>
        </Link>
      </h1>
      <h1>
        <Link href="/isr">
          <a>ISR 로</a>
        </Link>
      </h1>
    </>
  )
}
