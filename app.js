class QuizApp {
    constructor() {
        this.questions = [];
        this.currentQuestionIndex = 0;
        this.userAnswers = [];
        this.score = 0;
        this.wrongQuestions = [];
        this.isReviewMode = false;
        this.reviewQuestions = [];
        this.savedWrongQuestions = []; // 復習用に保存

        this.loadQuestions();
        this.checkSavedWrongQuestions();
    }

    loadQuestions() {
        // quiz_data.jsから直接データを読み込む
        if (typeof QUIZ_DATA !== 'undefined') {
            this.questions = QUIZ_DATA.questions;
        } else {
            console.error('問題データの読み込みに失敗しました');
            alert('問題データの読み込みに失敗しました。');
        }
    }

    checkSavedWrongQuestions() {
        // LocalStorageから間違えた問題を読み込む
        const saved = localStorage.getItem('ccna_wrong_questions');
        if (saved) {
            try {
                const wrongIds = JSON.parse(saved);
                this.savedWrongQuestions = this.questions.filter(q => wrongIds.includes(q.id));

                // 復習ボタンを表示
                if (this.savedWrongQuestions.length > 0) {
                    document.getElementById('startReviewBtn').style.display = 'inline-block';
                }
            } catch (e) {
                console.error('保存データの読み込みエラー:', e);
            }
        }
    }

    saveWrongQuestions() {
        // 間違えた問題のIDをLocalStorageに保存
        const wrongIds = this.wrongQuestions.map(q => q.id);
        localStorage.setItem('ccna_wrong_questions', JSON.stringify(wrongIds));
    }

    addWrongQuestion(question) {
        // 既存の保存データを読み込む
        const saved = localStorage.getItem('ccna_wrong_questions');
        let wrongIds = [];

        if (saved) {
            try {
                wrongIds = JSON.parse(saved);
            } catch (e) {
                console.error('保存データの読み込みエラー:', e);
            }
        }

        // 新しい問題IDを追加（重複を避ける）
        if (!wrongIds.includes(question.id)) {
            wrongIds.push(question.id);
            localStorage.setItem('ccna_wrong_questions', JSON.stringify(wrongIds));
        }
    }

    removeCorrectQuestion(question) {
        // 正解した問題を保存データから削除
        const saved = localStorage.getItem('ccna_wrong_questions');
        if (saved) {
            try {
                let wrongIds = JSON.parse(saved);
                wrongIds = wrongIds.filter(id => id !== question.id);

                if (wrongIds.length > 0) {
                    localStorage.setItem('ccna_wrong_questions', JSON.stringify(wrongIds));
                } else {
                    localStorage.removeItem('ccna_wrong_questions');
                }
            } catch (e) {
                console.error('保存データの更新エラー:', e);
            }
        }
    }

    startQuiz() {
        const startNum = parseInt(document.getElementById('startQuestion').value);
        if (startNum < 1 || startNum > this.questions.length) {
            alert(`1から${this.questions.length}の間で指定してください。`);
            return;
        }

        this.currentQuestionIndex = startNum - 1;
        this.userAnswers = [];
        this.score = 0;
        this.wrongQuestions = [];
        this.isReviewMode = false;

        this.showScreen('quizScreen');
        this.displayQuestion();
    }

    displayQuestion() {
        const question = this.isReviewMode
            ? this.reviewQuestions[this.currentQuestionIndex]
            : this.questions[this.currentQuestionIndex];

        // 問題番号と進捗を更新
        const currentNum = this.currentQuestionIndex + 1;
        const totalNum = this.isReviewMode ? this.reviewQuestions.length : this.questions.length;

        document.getElementById('questionNumber').textContent = `問題 ${question.id}`;
        document.getElementById('progressText').textContent = `問題 ${currentNum} / ${totalNum}`;

        const progress = (currentNum / totalNum) * 100;
        document.getElementById('progressBar').style.width = progress + '%';

        // カテゴリーと問題文を表示
        document.getElementById('category').textContent = question.category;
        document.getElementById('questionText').textContent = question.question;

        // 問題画像を表示
        document.getElementById('questionImage').src = `問題画像/${question.question_image}`;

        // 選択肢を表示
        const choicesContainer = document.getElementById('choices');
        choicesContainer.innerHTML = '';

        question.choices.forEach((choice, index) => {
            const choiceDiv = document.createElement('div');
            choiceDiv.className = 'choice';

            const checkbox = document.createElement('input');
            checkbox.type = question.answer_count > 1 ? 'checkbox' : 'radio';
            checkbox.name = 'answer';
            checkbox.value = index;
            checkbox.id = `choice${index}`;

            const label = document.createElement('label');
            label.className = 'choice-text';
            label.htmlFor = `choice${index}`;
            label.textContent = `(${index + 1}) ${choice}`;

            choiceDiv.appendChild(checkbox);
            choiceDiv.appendChild(label);

            // クリックで選択状態を切り替え
            choiceDiv.addEventListener('click', (e) => {
                if (e.target !== checkbox) {
                    checkbox.checked = !checkbox.checked;
                }
                this.updateChoiceStyle();
            });

            choicesContainer.appendChild(choiceDiv);
        });
    }

    updateChoiceStyle() {
        const choices = document.querySelectorAll('.choice');
        choices.forEach(choice => {
            const checkbox = choice.querySelector('input');
            if (checkbox.checked) {
                choice.classList.add('selected');
            } else {
                choice.classList.remove('selected');
            }
        });
    }

    showAnswer() {
        const question = this.isReviewMode
            ? this.reviewQuestions[this.currentQuestionIndex]
            : this.questions[this.currentQuestionIndex];

        // ユーザーの選択を取得
        const selectedAnswers = [];
        const checkboxes = document.querySelectorAll('input[name="answer"]:checked');
        checkboxes.forEach(checkbox => {
            selectedAnswers.push(parseInt(checkbox.value));
        });

        if (selectedAnswers.length === 0) {
            alert('選択肢を選んでください。');
            return;
        }

        // 正解判定
        const isCorrect = this.checkAnswer(selectedAnswers, question.correct_answers);

        if (isCorrect) {
            this.score++;
            // 正解した場合は保存データから削除
            this.removeCorrectQuestion(question);
        } else {
            this.wrongQuestions.push(question);
            // 間違えた瞬間にリアルタイム保存
            this.addWrongQuestion(question);
        }

        this.userAnswers.push({
            questionId: question.id,
            selected: selectedAnswers,
            correct: question.correct_answers,
            isCorrect: isCorrect
        });

        // 解答画面を表示
        this.displayAnswer(question, selectedAnswers, isCorrect);
        this.showScreen('answerScreen');
    }

    checkAnswer(selected, correct) {
        if (selected.length !== correct.length) return false;
        const sortedSelected = [...selected].sort((a, b) => a - b);
        const sortedCorrect = [...correct].sort((a, b) => a - b);
        return sortedSelected.every((val, idx) => val === sortedCorrect[idx]);
    }

    displayAnswer(question, selectedAnswers, isCorrect) {
        // 正解/不正解の表示
        const resultText = document.getElementById('resultText');
        resultText.textContent = isCorrect ? '正解！' : '不正解';
        resultText.className = isCorrect ? 'correct' : 'incorrect';

        // 解答画像を表示
        document.getElementById('answerImage').src = `解答画像/${question.answer_image}`;

        // あなたの回答を表示
        const yourAnswersText = selectedAnswers.map(index => {
            return `(${index + 1}) ${question.choices[index]}`;
        }).join('<br>');
        const yourAnswersElement = document.getElementById('yourAnswersText');
        yourAnswersElement.innerHTML = yourAnswersText;
        yourAnswersElement.className = isCorrect ? 'correct' : 'incorrect';

        // 正解の選択肢を表示
        const correctAnswersText = question.correct_answers.map(index => {
            return `(${index + 1}) ${question.choices[index]}`;
        }).join('<br>');
        document.getElementById('correctAnswersText').innerHTML = correctAnswersText;

        // 解説を表示
        document.getElementById('explanation').textContent = question.explanation || '';
    }

    nextQuestion() {
        this.currentQuestionIndex++;

        const totalQuestions = this.isReviewMode ? this.reviewQuestions.length : this.questions.length;

        if (this.currentQuestionIndex < totalQuestions) {
            this.showScreen('quizScreen');
            this.displayQuestion();
        } else {
            this.showResult();
        }
    }

    showResult() {
        const totalQuestions = this.isReviewMode ? this.reviewQuestions.length : this.userAnswers.length;
        const percentage = Math.round((this.score / totalQuestions) * 100);

        document.getElementById('correctCount').textContent = this.score;
        document.getElementById('totalCount').textContent = totalQuestions;
        document.getElementById('scorePercentage').textContent = `${percentage}%`;

        // 間違えた問題のリストを表示
        const wrongQuestionsContainer = document.getElementById('wrongQuestions');
        if (this.wrongQuestions.length > 0) {
            wrongQuestionsContainer.innerHTML = '<h4>今回間違えた問題:</h4>';
            this.wrongQuestions.forEach(q => {
                const div = document.createElement('div');
                div.className = 'wrong-question-item';
                div.textContent = `問題 ${q.id}: ${q.category}`;
                wrongQuestionsContainer.appendChild(div);
            });

            // 復習ボタンを表示
            document.getElementById('reviewBtn').style.display = 'block';
        } else {
            wrongQuestionsContainer.innerHTML = '<h4>全問正解です！おめでとうございます！🎉</h4>';
            document.getElementById('reviewBtn').style.display = 'none';
        }

        this.showScreen('resultScreen');
    }

    reviewWrong() {
        if (this.wrongQuestions.length === 0) {
            alert('間違えた問題はありません。');
            return;
        }

        this.isReviewMode = true;
        this.reviewQuestions = [...this.wrongQuestions];
        this.currentQuestionIndex = 0;
        this.userAnswers = [];
        this.score = 0;
        this.wrongQuestions = [];

        this.showScreen('quizScreen');
        this.displayQuestion();
    }

    startReview() {
        // スタート画面から復習モードを開始
        if (this.savedWrongQuestions.length === 0) {
            alert('復習する問題がありません。');
            return;
        }

        this.isReviewMode = true;
        this.reviewQuestions = [...this.savedWrongQuestions];
        this.currentQuestionIndex = 0;
        this.userAnswers = [];
        this.score = 0;
        this.wrongQuestions = [];

        this.showScreen('quizScreen');
        this.displayQuestion();
    }

    restart() {
        this.currentQuestionIndex = 0;
        this.userAnswers = [];
        this.score = 0;
        this.wrongQuestions = [];
        this.isReviewMode = false;
        this.reviewQuestions = [];

        // 保存された間違えた問題をチェック
        this.checkSavedWrongQuestions();

        this.showScreen('startScreen');
        document.getElementById('startQuestion').value = '1';
    }

    showScreen(screenId) {
        const screens = document.querySelectorAll('.screen');
        screens.forEach(screen => screen.classList.remove('active'));
        document.getElementById(screenId).classList.add('active');
    }
}

// アプリの初期化
const app = new QuizApp();
