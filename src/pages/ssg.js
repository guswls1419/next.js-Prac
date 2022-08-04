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
        <span style={{ fontWeight: 'bold', fontSize: '30px' }}>예시👉 </span>
        {time}
      </h1>
      <div>(새로고침 하면서 client, server 양쪽 console확인)</div>
      <br />
      <br />
      <div>
        <span style={{ fontWeight: 'bold', fontSize: '40px' }}>SSG</span>
        <br />
        <br />
        SSG 정적인 데이터를 가져와서 미리 그려둔다. <br />
        <br />
        dev로 실행할 경우 SSG는 제대로 동작하지 않고
        <br /> getServerSideProps 처럼 동작한다.
        <br /> (dev는 개발환경으로 SSG는 개발환경에서 작동하지 않기 때문) <br />
        제대로 보려면 build 후 'start'명령어로 실행시켜야한다. <br />
        <br />
        즉, build 할때 페이지를 만들어 버린다는 말. <br />
        (ex)블로그 같이 정적인 페이지라고 할때 새로 배포하기 전까지 <br />
        이전데이터가 유지되어 이전데이터 화면을 보여주는것. <br />
        <br />
        SSG는 정적인 페이지에 한해서 이미 만들어진 페이지를 만들어
        <br /> 버리기때문에 서버 부하가 적다.
        <br />
        <br /> 사용 함수 <br />
        getStaticProps : 미리 정적인 화면을 그려둔다.
        <br />
        getStaticPaths : 어떤 path를 써야할지 알기위해 사용한다. <br />
        (ex)[ooo].js 와 같이 어떤 path가 올지 모를때 사용한다.
        <br />
        <br /> *getStaticPaths를 쓸때는 꼭 getStaticProps를 같이 써야한다.
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
