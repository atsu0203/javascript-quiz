const quiz = [
  {
    question: '現在の〇〇株式会社のテナントビル名は？',
    answers: [ 'Aビル', 'Bビル', 'Cビル', 'Dビル','Eビル'],
    correct: 'Aビル'
  },{
    question: 'オフィス移転する前に〇〇株式会社があった場所はどこ？',
    answers: [ '渋谷', '新宿', '日本橋', '銀座', '那覇'],
    correct: '銀座'
  },{
    question: '〇〇株式会社の運営するITスクールは?',
    answers: [ 'A Camp', 'B Academy', 'C CODE', 'D WEBCAMP','E スキル塾'],
    correct: 'A Camp'
  },{
    question: '現在の〇〇株式会社の1階に入っている中華料理屋の名前は？',
    answers: [ '中華一番', 'チャオチャオ','王将'],
    correct: '中華一番'
  },
];

const $window = window;
const $doc = document;
const $question = $doc.getElementById('js-question');
const $buttons = $doc.querySelectorAll('.btn');

const quizLen = quiz.length;
let quizCount = 0;
let score = 0;

const init = () => {
  $question.textContent = quiz[quizCount].question;
  
  const buttonLen = $buttons.length;
  let btnIndex = 0;
  
  while(btnIndex < buttonLen){
    $buttons[btnIndex].textContent = quiz[quizCount].answers[btnIndex];
    btnIndex++;
  }
};

const goToNext = () => {
  quizCount++;
  if(quizCount < quizLen){
    init(quizCount);
  } else {
    // $window.alert('クイズ終了！');
    showEnd();
  }
};

const judge = (elm) => {
  if(elm.textContent === quiz[quizCount].correct){
    $window.alert('正解!');
    score++;
  } else {
    $window.alert('不正解!');
  }
  goToNext();
};

const showEnd = () => {
  let point = score * 20
  $question.textContent = '終了！あなたのスコアは' + point + '点でした。' + quizLen + '問中'+ score + '問正解でした。' ;
  
  const $items = $doc.getElementById('js-items');
  $items.style.visibility = 'hidden';
};

init();

let answersIndex = 0;
let answersLen = quiz[quizCount].answers.length;

while(answersIndex < answersLen){
  $buttons[answersIndex].addEventListener('click', (e) => {
    judge(e.target);
  });
  answersIndex++;
}