
const inputValue = document.getElementsByTagName('input')[0];
const ul = document.getElementsByClassName('list')[0];
const afterButton = document.getElementById('button');
const beforeButton = document.getElementById('before');
const removeButton = document.getElementById('remove');
// 새로운 HTML요소 생성
let li = document.createElement('li');
// 새로운 Node 요소인 li를 ul에 추가
ul.appendChild(li);
li.textContent = '안녕'
// -----------------------------------------------------------
// 요소의 뒤에 추가: appendChild
afterButton.addEventListener('click', e => {
  e.preventDefault();
  createdFunction();
})
// -----------------------------------------------------------
// 선택한 요소의 앞에 추가: insertBefore(arg1, arg2) [new, target]
beforeButton.addEventListener('click', e => {
  e.preventDefault();
  let target = document.getElementById('target');
  createdFunction('insertBefore', target);
});
// -----------------------------------------------------------

function createdFunction(attr='appendChild', target='') {

    let newLi = document.createElement('li');
    let newButton = document.createElement('button');
    newLi.textContent = inputValue.value;
    newButton.textContent = 'X';
    newLi.appendChild(newButton);
    // 요소가 생성된 직후 event 부착
    newButton.addEventListener('click', e => e.target.parentNode.remove());

    if(attr === 'appendChild') {
      ul.appendChild(newLi)
    } else {
      ul.insertBefore(newLi, target)
    }
  
    clearInput();

}
function clearInput() {
  inputValue.value = '';
  // input에 mouse cursor가 자동으로 focus 된다.
  inputValue.focus();
}