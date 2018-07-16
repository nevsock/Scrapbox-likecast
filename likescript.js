//URL読み込み
let url = location.href
let frame = document.body.appendChild(document.createElement('div'))
frame.id = 'frame'

//リアクションをロード
const loadReaction = function() {
  if(localStorage.getItem(url)){
    let data = JSON.parse(localStorage.getItem(url))
    for(let i=0; i<data.length; i++){
      let reaction = document.appendChild(document.createElement('p'))
      reaction.className = 'reactions'
      reaction.innerHTML = data[i].content
    }
  }
}

//ボタン作成・frameに追加
let clearButton = frame.appendChild(document.createElement('button'))
let reactionViewer = frame.appendChild(document.createElement('div'))
let plusButton = frame.appendChild(document.createElement('button'))
let textBox = frame.appendChild(document.createElement('input'))
textBox.setAttribute('type', 'text')
//idでcssを適応できるように
clearButton.id = 'clear_button'
reactionViewer.id = 'reaction_viewer'
plusButton.id = 'plus_button'
textBox.id = 'textbox'
//ボタン内容生成
clearButton.innerHTML = 'clear'
plusButton.innerHTML = '+'

//いいねボタンを押した時の挙動
const plusReaction = function() {
  let content = document.getElementById('textBox').value
  let addData = { reaction : string(content), count : 0 }
  if(!localStorage.getItem(url)){
    let data = new Array()
    localStorage.setItem(url, JSON.stringify(data.push(addData)))
  } else {  
    let data = JSON.parse(localStorage.getItem(url)).push(addData)
    localStorage.setItem(url, JSON.stringify(data))
  }
  loadReaction()
}

//クリックでイベント発火
plusButton.addEventListener('click', ()=>{plusReaction()}, false)
clearButton.addEventListener('click', ()=>{localStorage.setItem(url, '[]'); loadReaction();}, false)

//ロード時に呼び出し
window.onload = loadReaction()