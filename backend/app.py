from flask import Flask, request, jsonify
from flask_cors import CORS
from transformers import pipeline

app = Flask(__name__)
CORS(app)

# Load the summarization pipeline
summarizer = pipeline("summarization", model="sshleifer/distilbart-cnn-12-6")

@app.route('/summarize', methods=['POST'])
def summarize_text():
    try:
        data = request.get_json()
        input_text = data.get("text", "")

        if not input_text:
            return jsonify({"error": "No input text provided"}), 400

        summary = summarizer(input_text, max_length=100, min_length=30, do_sample=False)
        formatted_summary = "\n".join(
            f"- {line.strip()}"
            for line in summary[0]['summary_text'].split('. ')
            if line.strip()
        )
        return jsonify({"summary": formatted_summary})
    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)
