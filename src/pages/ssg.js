import Layout from '../components/Layout'
import SubLayout from '../components/SuLayout'

export function getStaticProps() {
  console.log('server')
  return {
    props: { time: new Date().toISOString() },
  }
}

export default function SSG({ time }) {
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
        <span style={{ fontWeight: 'bold', fontSize: '40px' }}>SSG</span>
        <br />
        <br />
        SSG ์ ์ ์ธ ๋ฐ์ดํฐ๋ฅผ ๊ฐ์ ธ์์ ๋ฏธ๋ฆฌ ๊ทธ๋ ค๋๋ค. <br />
        <br />
        dev๋ก ์คํํ  ๊ฒฝ์ฐ SSG๋ ์ ๋๋ก ๋์ํ์ง ์๊ณ 
        <br /> getServerSideProps ์ฒ๋ผ ๋์ํ๋ค.
        <br /> (dev๋ ๊ฐ๋ฐํ๊ฒฝ์ผ๋ก SSG๋ ๊ฐ๋ฐํ๊ฒฝ์์ ์๋ํ์ง ์๊ธฐ ๋๋ฌธ) <br />
        ์ ๋๋ก ๋ณด๋ ค๋ฉด build ํ 'start'๋ช๋ น์ด๋ก ์คํ์์ผ์ผํ๋ค. <br />
        <br />
        ์ฆ, build ํ ๋ ํ์ด์ง๋ฅผ ๋ง๋ค์ด ๋ฒ๋ฆฐ๋ค๋ ๋ง. <br />
        (ex)๋ธ๋ก๊ทธ ๊ฐ์ด ์ ์ ์ธ ํ์ด์ง๋ผ๊ณ  ํ ๋ ์๋ก ๋ฐฐํฌํ๊ธฐ ์ ๊น์ง <br />
        ์ด์ ๋ฐ์ดํฐ๊ฐ ์ ์ง๋์ด ์ด์ ๋ฐ์ดํฐ ํ๋ฉด์ ๋ณด์ฌ์ฃผ๋๊ฒ. <br />
        <br />
        SSG๋ ์ ์ ์ธ ํ์ด์ง์ ํํด์ ์ด๋ฏธ ๋ง๋ค์ด์ง ํ์ด์ง๋ฅผ ๋ง๋ค์ด
        <br /> ๋ฒ๋ฆฌ๊ธฐ๋๋ฌธ์ ์๋ฒ ๋ถํ๊ฐ ์ ๋ค.
        <br />
        <br /> ์ฌ์ฉ ํจ์ <br />
        getStaticProps : ๋ฏธ๋ฆฌ ์ ์ ์ธ ํ๋ฉด์ ๊ทธ๋ ค๋๋ค.
        <br />
        getStaticPaths : ์ด๋ค path๋ฅผ ์จ์ผํ ์ง ์๊ธฐ์ํด ์ฌ์ฉํ๋ค. <br />
        (ex)[ooo].js ์ ๊ฐ์ด ์ด๋ค path๊ฐ ์ฌ์ง ๋ชจ๋ฅผ๋ ์ฌ์ฉํ๋ค.
        <br />
        <br /> *getStaticPaths๋ฅผ ์ธ๋๋ ๊ผญ getStaticProps๋ฅผ ๊ฐ์ด ์จ์ผํ๋ค.
      </div>
    </>
  )
}
SSG.getLayout = function getLayout(page) {
  return (
    <Layout>
      <SubLayout>{page}</SubLayout>
    </Layout>
  )
}
