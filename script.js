const quizData = [
  {
      question: "日本の郵便ポストは昔赤色ではありませんでした。さて、何色だったでしょうか?",
      a: "オレンジ",
      b: "青",
      c: "緑",
      d: "黒",
      correct: "d",
  },
  {
      question: "キリンの平均睡眠時間は?",
      a: "2時間",
      b: "20分",
      c: "8時間",
      d: "寝ない",
      correct: "b",
  },
  {
      question: "ハイヒールが生まれた当初の目的は?",
      a: "汚物に触れないようにすること",
      b: "ステップを踏んで音を出すこと",
      c: "脚を細く見せること",
      d: "ただのオシャレ",
      correct: "a",
  },
  {
      question: "ラー油の「ラー」とはどんな意味でしょうか?",
      a: "香ばしい",
      b: "辛い",
      c: "赤い",
      d: "美味しい",
      correct: "b",
  },
];

const quiz = document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')

let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {
  deselectAnswers()

  const currentQuizData = quizData[currentQuiz]

  questionEl.innerText = currentQuizData.question
  a_text.innerText = currentQuizData.a
  b_text.innerText = currentQuizData.b
  c_text.innerText = currentQuizData.c
  d_text.innerText = currentQuizData.d
}

function deselectAnswers() {
  answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {
  let answer

  answerEls.forEach(answerEl => {
      if(answerEl.checked) {
          answer = answerEl.id
      }
  })

  return answer
}

submitBtn.addEventListener('click', () => {
  const answer = getSelected()

  if(answer) {
      if(answer === quizData[currentQuiz].correct) {
          score++
      }

      currentQuiz++

      if(currentQuiz < quizData.length) {
          loadQuiz()
      } else {
          quiz.innerHTML = `
              <h2>あなたの結果は ${score}/${quizData.length} 問正解しました</h2>
              <button onclick="location.reload()">Reload</button>
          `
      }
  }
}) 