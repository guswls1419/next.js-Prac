import { userDetail } from 'constants/userDetail'

export default function handler(req, res) {
  res.status(200).json(userDetail)
}

//Response 사용법
//res.status(code)
//res.json(body): serializable object
//res.redirect(code, url)
//res.send(body):string/object/Buffer
