const express = require('express')
const app = express()
const sqlite3 = require('sqlite3')
const dbPath = "app/db/database.sqlite3"
const path = require('path')

// データベースに接続するときにnpm run connectで接続するとdatabase.sqlite3が
// 開けないから　sqlite3 app/db/database.sqlite3として接続する

// express.staticはスタティックコンテンツを返す簡易WEBサーバーを作るメソッド
// publicをルートディレクトリに指定
//path.joinは第一引数と第二引数をパスをつなぐメソッド
//dirnameにはapp.jsがあるパスが入る
app.use(express.static(path.join(__dirname, 'public')))


// 全てのユーザーを取得
app.get('/api/v1/users', (err, res) => {
    const db = new sqlite3.Database(dbPath)

    db.all('SELECT * FROM users;', (err, rows) => {
        res.json(rows)
    })

    db.close()
})


// :idに指定されたユーザー情報を取得する
// db.getは１つだけデータを取得する
app.get('/api/v1/users/:id', (req, res) => {
    const db = new sqlite3.Database(dbPath)
    const id = req.params.id

    db.get(`select * from users where id = ${id}`, (err, row) => {
        res.json(row)
    })

    db.close()
})

// 検索実装
app.get('/api/v1/search', (req, res) => {
    const db = new sqlite3.Database(dbPath)
    const keyword = req.query.q

    db.all(`select * from users where name LIKE "%${keyword}%" `, (err, rows) => {
        res.json(rows)
    })

    db.close()
})



const port = process.env.PORT || 3000
app.listen(port)
console.log("リッスン中：　" + port)
