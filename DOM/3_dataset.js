const h2 = document.getElementsByTagName('h2')[0];
console.log(h2);
// 요소의 dataset을 사용하려면 dataset.작성한 이름
console.log(h2.dataset.example);
h2.dataset.example = 'hello js!'
console.log(h2.dataset.example);


const li = document.getElementsByTagName('li');
const img = document.getElementsByTagName('img')[0];

for(let i=0; i<li.length; i++) {
  li[i].addEventListener('click', () => {
    console.log(li[i]);
    img.src = li[i].dataset.img;
  })
}