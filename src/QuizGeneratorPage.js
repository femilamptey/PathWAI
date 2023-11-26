import React, { useState } from 'react';

const QuizGeneratorPage = () => {
    const [paragraphInput, setParagraphInput] = useState('');
    const [generatedResult, setGeneratedResult] = useState('');

    const handleParagraphChange = (e) => {
        setParagraphInput(e.target.value);
    };

    const handleGenerate = () => {
        // Your processing logic goes here
        // For demonstration purposes, let's just set the input as the result
        setGeneratedResult(paragraphInput);
    };

    return (
        <div>
            <h1>Quiz Generator Page</h1>
            <p>
                List all the topics you would like a quiz generated for in the text area below.
                A quiz will be generated for you.
            </p>

            <label htmlFor="paragraphInput">Enter Paragraph:</label>

            <div>
                <textarea
                    id="paragraphInput"
                    value={paragraphInput}
                    onChange={handleParagraphChange}
                    rows={4}
                    cols={50}
                />

            </div>

            <div>
                <button onClick={handleGenerate}>Generate</button>
            </div>

            {generatedResult && (
                <div>
                    <h2>Generated Result:</h2>
                    <p>{generatedResult}</p>
                </div>
            )}
        </div>
    );
};

export default QuizGeneratorPage;