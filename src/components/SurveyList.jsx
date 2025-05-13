import React from 'react';

export default function SurveyList({ surveys }) {
  return (
    <div className="bg-white rounded-lg shadow p-4">
      <h2 className="text-lg font-semibold mb-4">Completed Surveys</h2>
      <ul className="divide-y divide-gray-200">
        {surveys.map((survey) => (
          <li key={survey.id} className="py-3">
            <div className="flex justify-between items-center">
              <div>
                <p className="font-medium text-gray-800">{survey.title}</p>
                <p className="text-sm text-gray-500">{survey.category}</p>
              </div>
              <div className="text-right">
                <p className="text-sm text-gray-400">{survey.completedAt}</p>
                <p className="font-semibold text-indigo-600">{survey.score}%</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
