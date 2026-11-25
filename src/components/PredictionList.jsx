export default function PredictionList({ question, phrases }) {
    if (!phrases.length) return null;
    return (
        <div className="results">
            {question && <p className="question">Вопрос: {question}</p>}
            <ul>
                {phrases.map((phrase, index) => (
                    <li key={'${phrase}-${index}'}>{phrase}</li>
                ))}
            </ul>
        </div>
    )
}