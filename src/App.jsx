import { useState } from "react";
import MagicBall from "./components/MagicBall";
import "./App.css";

const PHRASES = [
  "Бесспорно",
  "Предрешено",
  "Никаких сомнений",
  "Определённо да",
  "Можешь быть уверен в этом",
  "Мне кажется — «да»",
  "Вероятнее всего",
  "Хорошие перспективы",
  "Знаки говорят — «да»",
  "Да",
  "Пока не ясно, попробуй снова",
  "Спроси позже",
  "Лучше не рассказывать",
  "Сейчас нельзя предсказать",
  "Сконцентрируйся и спроси опять",
  "Даже не думай",
  "Мой ответ — «нет»",
  "По моим данным — «нет»",
  "Перспективы не очень хорошие",
  "Весьма сомнительно"
];

function getRandomPhrase(list) {
  const index = Math.floor(Math.random() * list.length);
  return list[index];
}

export default function App() {
  const [question, setQuestion] = useState("");
  const [submittedQuestion, setSubmittedQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmed = question.trim();
    if (!trimmed) return;
    setSubmittedQuestion(trimmed);
    setAnswer(getRandomPhrase(PHRASES));
  };

  const handleShake = () => {
    const trimmed = question.trim();
    if (trimmed) {
      setSubmittedQuestion(trimmed);
    }
    setAnswer(getRandomPhrase(PHRASES));
  };

  return (
    <div className="app">
      <h1>Магический шар предсказаний</h1>

      <form onSubmit={handleSubmit} className="form">
        <input
          type="text"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          placeholder="Введите ваш вопрос..."
        />
        <button type="submit">Спросить</button>
      </form>

      <MagicBall
        answer={answer}
        question={submittedQuestion}
        onShake={handleShake}
      />
    </div>
  );
}