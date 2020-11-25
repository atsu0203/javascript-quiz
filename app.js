const quiz = [
  {
    question: '現在のスキルエンジン株式会社のテナントビル名は？',
    answers: [ 'SKビル', 'SSKビル', 'SKKビル', 'SSKKビル','SkillEngineビル'],
    correct: 'SKKビル'
  },{
    question: '茅場町オフィスに移転する前にスキルエンジン株式会社があった場所はどこ？',
    answers: [ '渋谷', '新宿', '日本橋', '銀座', '那覇'],
    correct: '銀座'
  },{
    question: 'スキルエンジン株式会社の運営するITスクールは?',
    answers: [ 'Skill Camp', 'SkillAcademy', 'SKILL INTO CODE', 'SKK WEBCAMP','侍スキル塾'],
    correct: 'Skill Camp'
  },{
    question: '現在のスキルエンジン株式会社の1階に入っている中華料理屋の名前は？',
    answers: [ '海老仙', '紫金閣', '味園酒家', 'チャオチャオ','王将'],
    correct: '海老仙'
  },{
    question: 'その海老仙の食べログの評価は星いくつ？',
    answers: [ '1.8', '2.5', '3.2', '3.6','4.0'],
    correct: '3.2'
  }
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