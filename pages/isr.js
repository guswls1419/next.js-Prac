import Head from "next/head";
import { useEffect, useState } from "react";
import Layout from "../components/Layout";
import SubLayout from "../components/SuLayout";

export function getStaticProps() {
  console.log("server");
  return {
    props: { time: new Date().toISOString() },
    revalidate: 1,
  };
}

export default function ISR({ time }) {
  return (
    <>
      <h1 className="title">
        <span style={{ fontWeight: "bold", fontSize: "30px" }}>예시👉 </span>
        {time}
      </h1>
      <div>(새로고침 하면서 client, server 양쪽 console확인)</div>
      <br />
      <br />
      <div>
        <span style={{ fontWeight: "bold", fontSize: "40px" }}>ISR</span>
        <br />
        <br />
        증분 정적 사이트를 재생성한다. ➡ 특정주기로 데이터를 가져와서 다시
        그려둔다.
        <br />
        SSR 과 같이 getStaticProps를 사용하고 revalidate라는 값을 리턴한다.
        <br />
        <br />
        즉, revalidate 값을 getStaticProps에서 리턴하면
        <br />
        revalidate(초 단위) 의 초 만큼 다시 데이터를 가져온다.
        <br />
        <br />
        SSR과 SSG의 장점을 적절하게 사용할수 있다.
      </div>
    </>
  );
}
ISR.getLayout = function getLayout(page) {
  return (
    <Layout>
      <SubLayout>{page}</SubLayout>
    </Layout>
  );
};
