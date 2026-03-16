const fs = require("fs");
const path = require("path");
const vm = require("vm");

const projectRoot = path.resolve(__dirname, "..");
const sourcePath = path.join(projectRoot, "quiz_data.js");
const outputPath = path.join(projectRoot, "data", "questions.json");

function loadQuizData(filePath) {
  const raw = fs.readFileSync(filePath, "utf8");
  const script = new vm.Script(`${raw}\nQUIZ_DATA;`, { filename: "quiz_data.js" });
  return script.runInNewContext({});
}

function normalizeQuestion(question) {
  return {
    id: question.id,
    category: question.category,
    question: question.question,
    choices: question.choices,
    correct_answers: question.correct_answers,
    answer_count: question.answer_count,
    explanation: question.explanation || "",
    question_image: question.question_image || "",
    answer_image: question.answer_image || "",
    has_diagram: Boolean(question.has_diagram),
  };
}

const quizData = loadQuizData(sourcePath);

if (!quizData || !Array.isArray(quizData.questions)) {
  throw new Error("quiz_data.js does not contain a QUIZ_DATA.questions array.");
}

const output = {
  generated_at: new Date().toISOString(),
  total_questions: quizData.questions.length,
  questions: quizData.questions.map(normalizeQuestion),
};

fs.writeFileSync(outputPath, JSON.stringify(output, null, 2), "utf8");
console.log(`Wrote ${output.total_questions} questions to ${outputPath}`);
