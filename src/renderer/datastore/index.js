/*
 * @Author: Sun
 * @LastEditors: Sun
 * @Email: jianfengtheboy@163.com
 * @Date: 2021-07-07 15:31:53
 * @LastEditTime: 2021-07-07 15:36:21
 */
import Datastore from 'nedb'
import path from 'path'
import { remote } from 'electron'

let db = {}
let config = {
  autoload: true,
  timestampData: true
}
let userDataPath = remote.app.getPath('userData')

db.download = new Datastore({
  ...config,
  filename: path.join(userDataPath, '/download.db')
})

db.test = new Datastore({
  ...config,
  filename: path.join(userDataPath, '/test.db')
})

db.lyric = new Datastore({
  ...config,
  filename: path.join(userDataPath, '/lyric.db')
})

export default db
