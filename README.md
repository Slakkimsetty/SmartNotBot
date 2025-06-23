# 🧠 SmartNoteBot

**SmartNoteBot** is an AI-powered meeting summarization tool designed to help teams quickly extract concise summaries and action points from chat transcripts or meeting notes. Built using a Flask backend and React frontend, it demonstrates how LLMs can streamline productivity tools.

---

## 🚀 Features

- 📝 **Natural Language Summarization**: Transforms long meeting transcripts into concise summaries.
- 📌 **Action Point Extraction** (coming soon): Identify key tasks and owners from the discussion.
- ⚙️ **Frontend-Backend Integration**: React-based frontend connected to Python Flask backend via REST API.
- 🛡️ **Robust Error Handling**: Graceful fallback and CORS-enabled communication.
- 💡 Simple UX: Clean UI for pasting/transcribing notes and receiving bullet-point summaries.

---

## 🛠 Tech Stack

| Layer         | Technology                      |
|---------------|----------------------------------|
| Frontend      | React.js, JavaScript             |
| Backend       | Python Flask                     |
| AI Model      | `transformers` (e.g. BART, T5)   |
| Integration   | Axios, REST API                  |
| Others        | CORS, JSON, VS Code              |

---

## 📷 Screenshots

| Input Interface | Output |
|-----------------|--------|
| ![input](screenshots/input.png) | ![output](screenshots/output.png) |

---

## 🧪 How to Run Locally

### 1. Clone the repository

```bash
git clone https://github.com/your-username/SmartNoteBot.git
cd SmartNoteBot
