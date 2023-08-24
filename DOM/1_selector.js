const title = document.getElementById('title');
const items = document.getElementsByClassName('item');

console.log(title.textContent, title);
title.textContent = '신발';

const h2 = document.querySelector('#title');
// 다수의 요소가 셀렉터의 이름을 가지고 있을 경우 0번쨰 요소에만 접근
const queryItems = document.querySelector('.item');
// querySelectorAll : 다수의 요소를 전부 들고 온다
const queryAllItems = document.querySelectorAll('.item');


// ----------------------------------------------------------
// text만 접근가능
h2.textContent = '운동!!'
// HTML 요소도 삽입가능
h2.innerHTML = '<small>운동!!</small>'
// -> 해당 api들을 사용하는 경우 기존에 있던 요소 및 데이터가 전부 삭제되고 렌더링 됨
// ----------------------------------------------------------

const input = document.getElementsByName('myText')[0];
/*  setAttribute : 속성을 변경
- 첫번째 인자는 속성명, 두번째 인자는 변경값 
removeAttribute: 속성을 삭제
- 첫번째 인자로 속성명만 기제  */
input.setAttribute('placeholder', '헬스 운동을 입력하셈');
input.removeAttribute('placeholder')
// required : 필수로 입력되어야 하는 값 (boolean)
// 값이 없는 경우 : false
input.setAttribute('required', '')

// ----------------------------------------------------------

// HTML 요소에 style 속성 추가
let helloItem = document.getElementsByClassName('hello')[0];
console.log(helloItem);
// helloItem.style.color = '#fff';
// helloItem.style.backgroundColor = '#000';

// ----------------------------------------------------------

// HTML 요소에 class 추가
helloItem.classList.add('dark');
// class 삭제
helloItem.classList.remove('dark');

// ----------------------------------------------------------