# Study Helpers

## Generate JSON

```powershell
node scripts/generate_questions_json.js
```

This reads `quiz_data.js` and writes `data/questions.json`.

## Build an AI Prompt

```powershell
node scripts/get_question_prompt.js 57
```

This prints a copy-paste prompt for ChatGPT or Claude using the structured data in `data/questions.json`.
