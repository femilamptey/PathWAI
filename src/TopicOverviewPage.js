import React, { useState } from 'react';

const TopicOverviewPage = () => {
    const [selectedFile, setSelectedFile] = useState(null);
    const [processingResult, setProcessingResult] = useState(null);

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        setSelectedFile(file);
    };

    const handleUpload = async () => {
        if (!selectedFile) {
            alert('Please select a file before uploading.');
            return;
        }

        // Simulate processing the file (you can replace this with your actual processing logic)
        // For demonstration purposes, using a simple setTimeout
        setTimeout(() => {
            const result = `Processed: ${selectedFile.name}`;
            setProcessingResult(result);
        }, 2000);
    };

    return (
        <div>
            <h1>Topic Overview Page</h1>
            <p>
                Upload the syllabus for a class, and the modules will be extracted, with notes
                for the key topics in each module generated and displayed.
            </p>
            <input type="file" onChange={handleFileChange} />
            <button onClick={handleUpload}>Upload</button>

            {processingResult && (
                <div>
                    <h2>Processing Result:</h2>
                    <p>{processingResult}</p>
                </div>
            )}
        </div>
    );
};

export default TopicOverviewPage;