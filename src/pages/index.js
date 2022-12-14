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
        <span style={{ fontWeight: 'bold', fontSize: '30px' }}>์์๐ </span>
        {time}
      </h1>
      <div>(์๋ก๊ณ ์นจ ํ๋ฉด์ client, server ์์ชฝ consoleํ์ธ)</div>
      <br />
      <br />
      <div>
        <span style={{ fontWeight: 'bold', fontSize: '40px' }}>SSR</span>
        <br />
        <br />
        ์๋ฒ๊ฐ ๋ฐ์ดํฐ๋ฅผ ๊ฐ์ ธ์์ ๊ทธ๋ฆฐ๋ค.
        <br />
        getServerSideProps ํจ์์ฌ์ฉ
        <br />
        ์๋ฒ์์ ๋ฐ์ดํฐ๋ฅผ ๊ฐ์ ธ์์ ํ์ด์ง์ props ํด์ค๋ค.
      </div>
      <br />
      <br />
      <h1>
        <Link href="/csr">
          <a>CSR ๋ก</a>
        </Link>
      </h1>
      <h1>
        <Link href="/ssg">
          <a>SSG ๋ก</a>
        </Link>
      </h1>
      <h1>
        <Link href="/isr">
          <a>ISR ๋ก</a>
        </Link>
      </h1>
    </>
  )
}
