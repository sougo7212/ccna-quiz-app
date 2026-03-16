const fs = require("fs");
const path = require("path");

const projectRoot = path.resolve(__dirname, "..");
const dataPath = path.join(projectRoot, "data", "questions.json");

function usage() {
  console.error("Usage: node scripts/get_question_prompt.js <question-id>");
  process.exit(1);
}

function formatChoice(choice, index) {
  return `${index + 1}. ${choice}`;
}

function formatAnswer(question) {
  return question.correct_answers
    .map((answerIndex) => formatChoice(question.choices[answerIndex], answerIndex))
    .join("\n");
}

const id = Number.parseInt(process.argv[2], 10);
if (!Number.isInteger(id) || id < 1) {
  usage();
}

const raw = fs.readFileSync(dataPath, "utf8");
const dataset = JSON.parse(raw);
const question = dataset.questions.find((item) => item.id === id);

if (!question) {
  console.error(`Question ${id} was not found in ${dataPath}`);
  process.exit(1);
}

const output = [
  "以下のCCNA問題を解説してください。",
  "正答の理由、誤答の理由、関連知識、試験での見分け方を含めて日本語で説明してください。",
  "",
  `問題番号: ${question.id}`,
  `カテゴリ: ${question.category}`,
  `問題文: ${question.question}`,
  "",
  "選択肢:",
  question.choices.map(formatChoice).join("\n"),
  "",
  `正答数: ${question.answer_count}`,
  "正答:",
  formatAnswer(question),
  "",
  `既存解説: ${question.explanation || "なし"}`,
  `問題画像: ${question.question_image || "なし"}`,
  `解答画像: ${question.answer_image || "なし"}`,
  `図の有無: ${question.has_diagram ? "あり" : "なし"}`,
].join("\n");

process.stdout.write(output);
