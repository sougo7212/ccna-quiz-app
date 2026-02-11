# Codex作業指示書（更新版）

## 画像処理方法について

### オプション1: Vision APIを使用（推奨）

もしあなた（Codex）がVision機能を持っている場合、以下の手順で進めてください：

```python
# 例: Anthropic Claude API を使用する場合
import anthropic
import base64
import json

client = anthropic.Anthropic(api_key="YOUR_API_KEY")

def process_image(image_path):
    with open(image_path, "rb") as f:
        image_data = base64.standard_b64encode(f.read()).decode("utf-8")

    message = client.messages.create(
        model="claude-3-5-sonnet-20241022",
        max_tokens=4096,
        messages=[{
            "role": "user",
            "content": [
                {
                    "type": "image",
                    "source": {
                        "type": "base64",
                        "media_type": "image/jpeg",
                        "data": image_data,
                    },
                },
                {
                    "type": "text",
                    "text": """この画像からCCNA問題を抽出してください。

                    以下のJSON形式で出力してください：
                    {
                        "questions": [
                            {
                                "id": 問題番号,
                                "category": "カテゴリ名",
                                "question": "問題文",
                                "choices": ["選択肢A", "選択肢B", ...],
                                "correct_answers": [0, 2],
                                "answer_count": 2
                            }
                        ]
                    }
                    """
                }
            ],
        }]
    )

    return message.content[0].text

# 使用例
for i in range(46, 125):  # 0046.jpg から 0124.jpg まで
    image_path = f"問題画像/{i:04d}.jpg"
    result = process_image(image_path)
    # JSONをパースして quiz_data.js に追加
```

### オプション2: 手動で画像を確認（Vision機能がない場合）

Vision機能が使えない場合：

1. **画像を目視で確認**して、問題文・選択肢・正解を手動で入力
2. 以下のテンプレートを使って、1問ずつデータ化：

```javascript
{
    "id": 77,
    "category": "（画像上部のヘッダーから転記）",
    "question": "（問題文を転記）",
    "choices": [
        "（選択肢1）",
        "（選択肢2）",
        "（選択肢3）",
        "（選択肢4）"
    ],
    "correct_answers": [0], // A=0, B=1, C=2, D=3, E=4
    "answer_count": 1,
    "images": {
        "question": "問題画像/0046.jpg",
        "answer": "解答画像/page_0077.png"
    },
    "explanation": "（解答画像から転記）"
}
```

### オプション3: Tesseract OCR を使用（精度が低い可能性あり）

日本語OCRライブラリを使う場合：

```python
import pytesseract
from PIL import Image

# Tesseract に日本語データが必要
# sudo apt-get install tesseract-ocr-jpn

image = Image.open("問題画像/0046.jpg")
text = pytesseract.image_to_string(image, lang='jpn')

# テキストから問題を抽出（正規表現などで）
# ただし、精度が低く手動修正が必要な可能性が高い
```

**注意**: Tesseractは日本語の認識精度が低いため、**オプション1または2を推奨**します。

## 推奨アプローチ

### あなた（Codex）の能力に応じて選択してください：

1. **Vision APIが使える場合**
   - Anthropic Claude API、OpenAI GPT-4 Vision、Google Gemini Vision などを使用
   - 画像を直接AIに読ませて、JSONデータを生成
   - 最も効率的で正確

2. **Vision APIが使えない場合**
   - 画像を開いて目視確認
   - 手動でデータを入力（時間はかかるが確実）

3. **OCRライブラリを使う場合**
   - Tesseract等で試すことは可能
   - ただし精度が低く、手動修正が必須になる可能性が高い

## 作業開始前に確認してください

以下のコマンドで、自分（Codex）が使える技術を確認してください：

```bash
# Python環境確認
python --version

# 使用可能なライブラリ確認
pip list | grep -E "anthropic|openai|google|pytesseract|pillow"
```

もし何も環境が整っていない場合は、**手動入力（オプション2）** が最も確実です。

## 私（Claude）からのアドバイス

私は画像を直接読み取って、自動的にデータ化できます。
もしあなた（Codex）が同様の機能を持っていないなら、無理にOCRを使うより、**手動で正確に入力する方が結果的に早い**かもしれません。

191問残っているので、1問あたり2-3分で入力できれば、6-10時間程度で完了します。

## 質問があれば

このファイルに質問を追記してコミットするか、GitHub Issuesに投稿してください。

---

**Good luck! 🚀**
