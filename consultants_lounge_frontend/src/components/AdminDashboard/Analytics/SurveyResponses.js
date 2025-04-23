import React, { useState, useEffect } from 'react';
import { getData } from '../../../utilities/fetchOps';

const SurveyResponses = () => {
    const [responses, setResponses] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchSurveyResponses();
    }, []);

    const fetchSurveyResponses = async () => {
        try {
            const response = await getData('http://localhost:5000/api/v1/survey/responses');
            if (response.success) {
                setResponses(response.data);
            } else {
                setError(response.message);
            }
        } catch (error) {
            setError('Error fetching survey responses');
            console.error('Error:', error);
        } finally {
            setLoading(false);
        }
    };

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div className="survey-responses">
            <h2>Survey Responses</h2>
            <div className="responses-container">
                {responses.map((response, index) => (
                    <div key={index} className="response-card">
                        <h3>{response.surveyType} Survey</h3>
                        <p>Submitted: {new Date(response.submittedAt).toLocaleString()}</p>
                        {response.userId && (
                            <p>User: {response.userId.first_name} {response.userId.last_name}</p>
                        )}
                        <div className="answers">
                            {Array.from(response.answers).map(([question, answer], i) => (
                                <div key={i} className="answer">
                                    <strong>{question}:</strong>
                                    <p>{Array.isArray(answer) ? answer.join(', ') : answer}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SurveyResponses; 