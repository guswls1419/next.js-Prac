export default function handler(req, res) {
  const { uid } = req.query
  const cookies = req.cookies
  // cookies,query를 미들웨어로 사용가능
  //req,res 관련 다양한 기능들은 미들웨어들을 활용할수 있다.
  //   res.status(200).json({ name: `hyunjin ${uid} ${JSON.stringify(cookies)}` })
  //   res.status(404).send({ error: 'error' }) => 원하는 에러를 커스텀 할수있다.
  res.redirect(307, '/api/user') //응답 api를 다른곳으로 치환하는것도 가능하다.
}
