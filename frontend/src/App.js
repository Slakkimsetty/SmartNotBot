import React, { useState } from 'react';

function App() {
  const [transcript, setTranscript] = useState('');
  const [summary, setSummary] = useState('');

  const handleSummarize = async () => {
    try {
      const response = await fetch('http://127.0.0.1:5000/summarize', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ text: transcript }),
      });

      const data = await response.json();
      if (data.summary) {
        setSummary(data.summary);
      } else {
        setSummary("Failed to summarize. Error: " + data.error);
      }
    } catch (error) {
      setSummary("An error occurred: " + error.message);
    }
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h1>SmartNoteBot</h1>
      <textarea
        rows={10}
        cols={80}
        value={transcript}
        onChange={(e) => setTranscript(e.target.value)}
        placeholder="Paste your meeting transcript here..."
      />
      <br />
      <button onClick={handleSummarize} style={{ marginTop: '10px' }}>Summarize</button>

      <h2 style={{ marginTop: '2rem' }}>Summary:</h2>
      <div>
        {summary
          ? summary.split('\n').map((line, index) => (
              <li key={index}>{line}</li>
            ))
          : "No summary yet."}
      </div>
    </div>
  );
}

export default App;
