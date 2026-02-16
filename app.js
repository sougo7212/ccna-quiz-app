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
        this.lastAnswered = null;

        this.loadQuestions();
        this.checkSavedWrongQuestions();
        this.lastAnswered = this.loadLastAnswered();
        this.setupStartScreen();
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

    saveLastAnswered(questionId, index) {
        localStorage.setItem('ccna_last_answered_id', String(questionId));
        localStorage.setItem('ccna_last_answered_index', String(index));
        this.lastAnswered = { id: questionId, index };
    }

    loadLastAnswered() {
        const savedId = localStorage.getItem('ccna_last_answered_id');
        const savedIndex = localStorage.getItem('ccna_last_answered_index');

        if (savedId === null || savedIndex === null) {
            return null;
        }

        const index = parseInt(savedIndex, 10);
        if (Number.isNaN(index) || index < 0 || index >= this.questions.length) {
            return null;
        }

        return {
            id: savedId,
            index
        };
    }

    clearLastAnswered() {
        localStorage.removeItem('ccna_last_answered_id');
        localStorage.removeItem('ccna_last_answered_index');
        this.lastAnswered = null;
    }

    setupStartScreen() {
        const continueBtn = document.getElementById('continueBtn');
        if (continueBtn) {
            continueBtn.addEventListener('click', () => this.startFromLastAnswered());
        }

        this.updateProgressInfo();
    }

    updateProgressInfo() {
        const progressInfo = document.getElementById('progressInfo');
        if (!progressInfo) return;

        this.lastAnswered = this.loadLastAnswered();

        if (!this.lastAnswered) {
            progressInfo.style.display = 'none';
            return;
        }

        const lastIndex = this.lastAnswered.index;
        const nextQuestionNumber = lastIndex + 2;

        if (nextQuestionNumber > this.questions.length) {
            progressInfo.style.display = 'none';
            return;
        }

        document.getElementById('lastQuestionNumber').textContent = String(lastIndex + 1);
        document.getElementById('progressCount').textContent = String(lastIndex + 1);
        document.getElementById('nextQuestionNumber').textContent = String(nextQuestionNumber);
        progressInfo.style.display = 'block';
    }

    startFromLastAnswered() {
        this.lastAnswered = this.loadLastAnswered();
        if (!this.lastAnswered) {
            alert('再開できる進捗が見つかりません。');
            return;
        }

        const startQuestion = this.lastAnswered.index + 2;
        if (startQuestion > this.questions.length) {
            alert('前回の進捗は完了済みです。最初から始めてください。');
            this.clearLastAnswered();
            this.updateProgressInfo();
            return;
        }

        document.getElementById('startQuestion').value = String(startQuestion);
        this.startQuizFromNumber(startQuestion, false);
    }

    startQuizFromNumber(startNum, shouldClearProgress = true) {
        if (startNum < 1 || startNum > this.questions.length) {
            alert(`1から${this.questions.length}の間で指定してください。`);
            return false;
        }

        if (shouldClearProgress) {
            this.clearLastAnswered();
        }

        this.currentQuestionIndex = startNum - 1;
        this.userAnswers = [];
        this.score = 0;
        this.wrongQuestions = [];
        this.isReviewMode = false;

        this.showScreen('quizScreen');
        this.displayQuestion();
        return true;
    }

    startQuiz() {
        const startNum = parseInt(document.getElementById('startQuestion').value, 10);
        this.startQuizFromNumber(startNum, true);
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
        const questionImg = document.getElementById('questionImage');
        questionImg.src = `問題画像/${question.question_image}`;
        questionImg.onclick = () => this.openImageModal(questionImg.src);

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

        // 最後に解答した問題を保存
        if (!this.isReviewMode) {
            this.saveLastAnswered(question.id, this.currentQuestionIndex);
        }
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
        const answerImg = document.getElementById('answerImage');
        answerImg.src = `解答画像/${question.answer_image}`;
        answerImg.onclick = () => this.openImageModal(answerImg.src);

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

        // 結果画面到達時は進捗をクリア（完了扱い）
        this.clearLastAnswered();
        this.updateProgressInfo();

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
        this.updateProgressInfo();
    }

    showScreen(screenId) {
        const screens = document.querySelectorAll('.screen');
        screens.forEach(screen => screen.classList.remove('active'));
        document.getElementById(screenId).classList.add('active');
    }

    openImageModal(imageSrc) {
        const modal = document.getElementById('imageModal');
        const modalImg = document.getElementById('modalImage');

        modal.classList.add('active');
        modalImg.src = imageSrc;

        // 閉じるボタン
        const closeBtn = document.querySelector('.modal-close');
        closeBtn.onclick = () => this.closeImageModal();

        // 背景クリックで閉じる
        modal.onclick = (e) => {
            if (e.target === modal) {
                this.closeImageModal();
            }
        };
    }

    closeImageModal() {
        const modal = document.getElementById('imageModal');
        modal.classList.remove('active');
    }

    showDetailedExplanation() {
        const question = this.isReviewMode
            ? this.reviewQuestions[this.currentQuestionIndex]
            : this.questions[this.currentQuestionIndex];

        const modal = document.getElementById('explanationModal');
        const modalBody = document.getElementById('explanationModalBody');

        // 詳細解説を表示
        if (question.detailed_explanation) {
            // Markdownスタイルのテキストを整形して表示
            modalBody.innerHTML = this.formatExplanation(question.detailed_explanation);
        } else {
            // 詳細解説がない場合は基本の解説を表示
            modalBody.innerHTML = `<p>${question.explanation || '解説が登録されていません。'}</p>`;
        }

        modal.classList.add('active');

        // 閉じるボタン
        const closeBtn = modal.querySelector('.modal-close');
        closeBtn.onclick = () => this.closeExplanationModal();

        // 背景クリックで閉じる
        modal.onclick = (e) => {
            if (e.target === modal) {
                this.closeExplanationModal();
            }
        };
    }

    formatExplanation(text) {
        // Markdown風のテキストをHTMLに変換
        let html = text;

        // **太字** を <strong> に変換
        html = html.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');

        // ✅と❌を強調
        html = html.replace(/✅/g, '<span class="correct-mark">✅</span>');
        html = html.replace(/❌/g, '<span class="incorrect-mark">❌</span>');

        // コードブロック ```...``` を <pre> に変換
        html = html.replace(/```([^`]+)```/g, '<pre class="code-block">$1</pre>');

        // 表形式 |...|...|... を <table> に変換（簡易版）
        const lines = html.split('\n');
        let inTable = false;
        let tableHtml = '';
        let newLines = [];

        for (let i = 0; i < lines.length; i++) {
            const line = lines[i].trim();
            if (line.startsWith('|') && line.endsWith('|')) {
                if (!inTable) {
                    inTable = true;
                    tableHtml = '<table class="explanation-table">';
                }
                const cells = line.split('|').filter(c => c.trim());
                if (i === 0 || (i > 0 && !lines[i - 1].includes('---'))) {
                    // ヘッダー行または通常行
                    const isHeader = tableHtml === '<table class="explanation-table">';
                    tableHtml += '<tr>';
                    cells.forEach(cell => {
                        tableHtml += isHeader ? `<th>${cell.trim()}</th>` : `<td>${cell.trim()}</td>`;
                    });
                    tableHtml += '</tr>';
                }
            } else {
                if (inTable) {
                    tableHtml += '</table>';
                    newLines.push(tableHtml);
                    inTable = false;
                    tableHtml = '';
                }
                newLines.push(line);
            }
        }
        if (inTable) {
            tableHtml += '</table>';
            newLines.push(tableHtml);
        }

        html = newLines.join('\n');

        // 改行を <br> に変換（段落分け）
        html = html.replace(/\n\n/g, '</p><p>');
        html = html.replace(/\n/g, '<br>');

        // 全体を <p> で囲む
        if (!html.startsWith('<')) {
            html = '<p>' + html + '</p>';
        }

        return html;
    }

    closeExplanationModal() {
        const modal = document.getElementById('explanationModal');
        modal.classList.remove('active');
    }
}

// アプリの初期化
const app = new QuizApp();
