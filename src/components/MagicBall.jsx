export default function MagicBall({ answer, question, onShake }) {
  return (
    <div className="ball-section">
      <div className="ball-wrapper" onClick={onShake}>
        <div className="ball">
          <div className="window">
            <div className="triangle">
              <span>{answer || "8"}</span>
            </div>
          </div>
        </div>
      </div>

      {answer && (
        <div className="result-box">
          {question && <p className="question">Вопрос: {question}</p>}
          <p className="answer">Ответ: {answer}</p>
        </div>
      )}
    </div>
  );
}