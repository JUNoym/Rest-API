// index.jsはindex.htmlを読み込んだときに最初に実行される関数を記述する

const indexModule = (() => {
    // userModuleのfetchALLUsersを呼び出すメソッド
    return usersModule.fetchAllUsers()
})()