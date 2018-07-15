//URL読み込み
let url = location.href

//新しくURLに紐づけされたカウントを設定する
const setCount = function(url) {
  let initialize = 0
  localStorage.setItem(url, initialize)
}

//カウントをロード、なければ生成
const loadCount = function() {
  if(!localStorage.getItem(url)){
    setCount(url)
  }
  button.innerHTML = '♡ ' + localStorage.getItem(url)
}

//ボタン作成・bodyに追加
let button = document.body.appendChild(document.createElement('button'))
let clearButton = document.body.appendChild(document.createElement('button'))
//idでcssを適応できるように
button.id = 'like_button'
clearButton.id = 'clear_button'
//ボタン内容生成
clearButton.innerHTML = 'clear'

//いいねボタンを押した時の挙動
const plusCount = function() {
  localStorage.setItem(url, Number(localStorage.getItem(url)) + 1)
  loadCount()
}

//クリックでイベント発火
button.addEventListener('click', ()=>{plusCount()}, false)
clearButton.addEventListener('click', ()=>{localStorage.setItem(url, 0); loadCount();}, false)

//ロード時に呼び出し
window.onload = loadCount()