// index.jsはindex.htmlを読み込んだときに最初に実行される関数を記述する

const indexModule = (() => {
    // 検索ボタンがクリックされたときに実行されるイベントリスナーを設定
    document.getElementById('search-btn').addEventListener('click', () => {
        return searchModule.searchUsers()
    })
    // userModuleのfetchALLUsersを呼び出すメソッド
    return usersModule.fetchAllUsers()
})()