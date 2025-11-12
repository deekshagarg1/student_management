import React, { useState } from "react";
import "./AskQuestion.css";

const AskQuestion = () => {
  const [name, setName] = useState("");
  const [question, setQuestion] = useState("");
  const [submittedQuestions, setSubmittedQuestions] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim() || !question.trim()) return;

    const newQuestion = {
      name,
      question,
      time: new Date().toLocaleString(),
    };

    setSubmittedQuestions([newQuestion, ...submittedQuestions]);
    setName("");
    setQuestion("");
  };

  return (
    <div className="ask-container">
      <h2>Ask Your Sir a Question</h2>
      <form onSubmit={handleSubmit} className="question-form">
        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <textarea
          placeholder="Type your question..."
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
        ></textarea>
        <button type="submit">Submit Question</button>
      </form>

      <div className="questions-list">
        <h3>Submitted Questions</h3>
        {submittedQuestions.length === 0 ? (
          <p>No questions yet.</p>
        ) : (
          submittedQuestions.map((q, idx) => (
            <div key={idx} className="question-card">
              <p><strong>{q.name}</strong> asked:</p>
              <p>{q.question}</p>
              <span>{q.time}</span>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default AskQuestion;
