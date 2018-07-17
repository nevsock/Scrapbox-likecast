//URL読み込みする
let url = location.href
let frame = document.body.appendChild(document.createElement('div'))
frame.id = 'frame'

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

//リアクションをロード
const loadReaction = function() {
  const reaction_viewer_ = document.getElementById('reaction_viewer')
  while(reaction_viewer_.firstChild){
    reaction_viewer_.removeChild(reaction_viewer_.firstChild)
  }
  if(localStorage.getItem(url)){
    let data = JSON.parse(localStorage.getItem(url))
    for(let i=0; i<data.length; i++){
      let reaction = document.getElementById('reaction_viewer').appendChild(document.createElement('p'))
      reaction.className = 'reactions'
      reaction.innerHTML = data[i].reaction
    }
  }
}

//プラスボタンを押した時の挙動
const plusReaction = function() {
  let content = document.getElementById('textbox').value
  let addData = { reaction : content, count : 0 }
  if(!localStorage.getItem(url)){
    let data = []
    localStorage.setItem(url, JSON.stringify(data.push(addData)))
  } else {  
    let data = JSON.parse(localStorage.getItem(url))
    data.push(addData)
    localStorage.setItem(url, JSON.stringify(data))
  }
  loadReaction()
}

//クリックでイベント発火
plusButton.addEventListener('click', ()=>{plusReaction()}, false)
clearButton.addEventListener('click', ()=>{localStorage.setItem(url, '[]'); loadReaction();}, false)

//ロード時に呼び出し
window.onload = loadReaction()