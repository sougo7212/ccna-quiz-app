const statusText = document.getElementById("statusText");
const questionMeta = document.getElementById("questionMeta");
const questionCard = document.getElementById("questionCard");
const promptOutput = document.getElementById("promptOutput");
const copyPromptButton = document.getElementById("copyPromptButton");
const sharePromptButton = document.getElementById("sharePromptButton");
const lookupForm = document.getElementById("lookupForm");
const questionIdInput = document.getElementById("questionId");

let questions = [];
let currentPrompt = "";

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function buildPrompt(question) {
  const choiceBlock = question.choices
    .map((choice, index) => `${index + 1}. ${choice}`)
    .join("\n");

  const answerBlock = question.correct_answers
    .map((answerIndex) => `${answerIndex + 1}. ${question.choices[answerIndex]}`)
    .join("\n");

  return [
    "以下のCCNA問題を解説してください。",
    "正答の理由、誤答の理由、関連知識、試験での見分け方、最後に要点まとめを日本語で出してください。",
    "",
    `問題番号: ${question.id}`,
    `カテゴリ: ${question.category}`,
    `問題文: ${question.question}`,
    "",
    "選択肢:",
    choiceBlock,
    "",
    `正答数: ${question.answer_count}`,
    "正答:",
    answerBlock,
    "",
    `既存解説: ${question.explanation || "なし"}`,
    `問題画像: ${question.question_image || "なし"}`,
    `解答画像: ${question.answer_image || "なし"}`,
    `図の有無: ${question.has_diagram ? "あり" : "なし"}`,
  ].join("\n");
}

function renderQuestion(question) {
  const choices = question.choices
    .map((choice, index) => {
      return `<li class="choice-item"><span class="choice-index">${index + 1}.</span>${escapeHtml(choice)}</li>`;
    })
    .join("");

  const correctAnswers = question.correct_answers
    .map((answerIndex) => `${answerIndex + 1}. ${question.choices[answerIndex]}`)
    .join("<br>");

  questionMeta.textContent = `問題 ${question.id} / ${question.category}`;
  questionCard.innerHTML = `
    <p class="question-text">${escapeHtml(question.question)}</p>
    <ul class="choice-list">${choices}</ul>
    <div class="meta-grid">
      <div class="meta-card">
        <span class="meta-label">正答</span>
        <span class="meta-value">${correctAnswers}</span>
      </div>
      <div class="meta-card">
        <span class="meta-label">画像</span>
        <span class="meta-value">問題: ${escapeHtml(question.question_image || "なし")}<br>解答: ${escapeHtml(question.answer_image || "なし")}</span>
      </div>
      <div class="meta-card">
        <span class="meta-label">図の有無</span>
        <span class="meta-value">${question.has_diagram ? "あり" : "なし"}</span>
      </div>
      <div class="meta-card">
        <span class="meta-label">既存解説</span>
        <span class="meta-value">${escapeHtml(question.explanation || "なし")}</span>
      </div>
    </div>
  `;
}

function setPrompt(prompt) {
  currentPrompt = prompt;
  promptOutput.value = prompt;
  copyPromptButton.disabled = !prompt;
  sharePromptButton.disabled = !prompt || !navigator.share;
}

function loadQuestion(id) {
  const question = questions.find((item) => item.id === id);
  if (!question) {
    statusText.textContent = `問題 ${id} は見つかりませんでした。`;
    return;
  }

  renderQuestion(question);
  setPrompt(buildPrompt(question));
  statusText.textContent = `問題 ${id} を読み込みました。コピーしてAIに貼れます。`;

  const url = new URL(window.location.href);
  url.searchParams.set("q", String(id));
  window.history.replaceState({}, "", url);
}

async function copyPrompt() {
  if (!currentPrompt) {
    return;
  }

  await navigator.clipboard.writeText(currentPrompt);
  statusText.textContent = "プロンプトをコピーしました。";
}

async function sharePrompt() {
  if (!currentPrompt || !navigator.share) {
    return;
  }

  await navigator.share({
    title: "CCNA Study Helper",
    text: currentPrompt,
  });
}

async function initialize() {
  try {
    const response = await fetch("./data/questions.json", { cache: "no-store" });
    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`);
    }

    const dataset = await response.json();
    questions = dataset.questions || [];
    statusText.textContent = `${questions.length} 問を読み込みました。`;

    const params = new URLSearchParams(window.location.search);
    const queryValue = Number.parseInt(params.get("q"), 10);
    if (Number.isInteger(queryValue) && queryValue > 0) {
      questionIdInput.value = String(queryValue);
      loadQuestion(queryValue);
    }
  } catch (error) {
    statusText.textContent = `データ読込に失敗しました: ${error.message}`;
  }
}

lookupForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const id = Number.parseInt(questionIdInput.value, 10);

  if (!Number.isInteger(id) || id < 1) {
    statusText.textContent = "1以上の問題番号を入力してください。";
    return;
  }

  loadQuestion(id);
});

copyPromptButton.addEventListener("click", () => {
  copyPrompt().catch((error) => {
    statusText.textContent = `コピーに失敗しました: ${error.message}`;
  });
});

sharePromptButton.addEventListener("click", () => {
  sharePrompt().catch((error) => {
    statusText.textContent = `共有に失敗しました: ${error.message}`;
  });
});

initialize();
