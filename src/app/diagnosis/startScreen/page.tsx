"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

interface Answers {
  [key: string]: string;
}

export default function RunteqDependencyChecker() {
  const [answers, setAnswers] = useState<Answers>({});
  const router = useRouter();

  const handleAnswerChange = (question: string, answer: string) => {
    setAnswers((prevAnswers) => ({ ...prevAnswers, [question]: answer }));
  };

  const calculateDependency = () => {
    let score = 0;

    if (answers.q1 === "Y") score += 10;
    if (answers.q2 === "Y") score += 10;
    if (answers.q3 === "Y") score += 10;
    if (answers.q4 === "Y") score += 10;
    if (answers.q5 === "Y") score += 10;
    if (answers.q6 === "Y") score += 10;
    if (answers.q7 === "Y") score += 10;
    if (answers.q8 === "Y") score += 10;
    if (answers.q9 === "Y") score += 10;
    if (answers.q10 === "Y") score += 10;

    // 診断結果ページにスコアを渡して遷移
    router.push(`/diagnosis/resultScreen?score=${score}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-green-200 to-blue-200 flex items-center justify-center p-4">
      <div className="bg-white p-8 rounded-3xl shadow-2xl w-full max-w-2xl transform hover:scale-105 transition-transform duration-300">
        <h1 className="text-3xl md:text-4xl font-extrabold text-center mb-8 text-gray-800">
          RUNTEQ依存度チェック
        </h1>

        <div className="space-y-6">
          <Question
            question="学習をする際Discordに入って学習している"
            questionKey="q1"
            handleAnswerChange={handleAnswerChange}
            selectedAnswer={answers.q1}
          />
          <Question
            question="timesを毎日更新している"
            questionKey="q2"
            handleAnswerChange={handleAnswerChange}
            selectedAnswer={answers.q2}
          />
          <Question
            question="同じRUNTEQ生のtimesにスタンプを押している"
            questionKey="q3"
            handleAnswerChange={handleAnswerChange}
            selectedAnswer={answers.q3}
          />
          <Question
            question="X で'RUNTEQ'を発見したら即座にフォローしている"
            questionKey="q4"
            handleAnswerChange={handleAnswerChange}
            selectedAnswer={answers.q4}
          />
          <Question
            question="X で入学したてのRUNTEQ生を発見したらリポストしている"
            questionKey="q5"
            handleAnswerChange={handleAnswerChange}
            selectedAnswer={answers.q5}
          />
          <Question
            question="イベントに参加したことがある"
            questionKey="q6"
            handleAnswerChange={handleAnswerChange}
            selectedAnswer={answers.q6}
          />
          <Question
            question="イベントを企画したことがある"
            questionKey="q7"
            handleAnswerChange={handleAnswerChange}
            selectedAnswer={answers.q7}
          />
          <Question
            question="イベントに自分のアプリを提出したことがある"
            questionKey="q8"
            handleAnswerChange={handleAnswerChange}
            selectedAnswer={answers.q8}
          />
          <Question
            question="コミュニティを利用して誰かにGiveをしている"
            questionKey="q9"
            handleAnswerChange={handleAnswerChange}
            selectedAnswer={answers.q9}
          />
          <Question
            question="菊本久寿（ひさじゅ）校長がLOVEである"
            questionKey="q10"
            handleAnswerChange={handleAnswerChange}
            selectedAnswer={answers.q10}
          />
        </div>

        <div className="mt-8 text-center">
          <button
            onClick={calculateDependency}
            className="bg-green-500 text-white py-3 px-6 rounded-full text-lg font-semibold shadow-md hover:bg-green-600 hover:shadow-lg transition duration-300"
          >
            診断する
          </button>
        </div>
      </div>
    </div>
  );
}

interface QuestionProps {
  question: string;
  questionKey: string;
  handleAnswerChange: (question: string, answer: string) => void;
  selectedAnswer?: string;
}

function Question({
  question,
  questionKey,
  handleAnswerChange,
  selectedAnswer,
}: QuestionProps) {
  return (
    <div className="bg-gray-100 p-4 rounded-xl shadow-md hover:bg-gray-200 transition duration-200">
      <p className="font-semibold text-gray-800">{question}</p>
      <div className="mt-2 flex space-x-4">
        <button
          onClick={() => handleAnswerChange(questionKey, "Y")}
          className={`py-2 px-4 rounded-lg ${
            selectedAnswer === "Y"
              ? "bg-green-500 text-white"
              : "bg-gray-300 text-gray-700"
          } hover:bg-green-400 transition duration-200`}
        >
          Yes
        </button>
        <button
          onClick={() => handleAnswerChange(questionKey, "N")}
          className={`py-2 px-4 rounded-lg ${
            selectedAnswer === "N"
              ? "bg-blue-500 text-white"
              : "bg-gray-300 text-gray-700"
          } hover:bg-blue-400 transition duration-200`}
        >
          No
        </button>
      </div>
    </div>
  );
}
