// app/game/page.tsx
"use client";
import React, { useState } from "react";

const GamePage: React.FC = () => {
  const [targetNumber, setTargetNumber] = useState(generateRandomNumber());
  const [userGuess, setUserGuess] = useState("");
  const [feedback, setFeedback] = useState("");
  const [attempts, setAttempts] = useState(0);
  const [gameOver, setGameOver] = useState(false);

  function generateRandomNumber() {
    return Math.floor(Math.random() * 100) + 1; // 1부터 100 사이의 랜덤 숫자 생성
  }

  const handleGuess = () => {
    const guess = parseInt(userGuess);
    setAttempts((prev) => prev + 1);

    if (guess === targetNumber) {
      setFeedback("정답입니다! 🎉");
      setGameOver(true);
    } else if (guess < targetNumber) {
      setFeedback("너무 낮아요!");
    } else {
      setFeedback("너무 높아요!");
    }
  };

  const handleRestart = () => {
    setTargetNumber(generateRandomNumber());
    setUserGuess("");
    setFeedback("");
    setAttempts(0);
    setGameOver(false);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-black font-pretendard text-white">
      <div className="w-full max-w-md p-8 space-y-6 bg-gray-800 rounded-lg shadow-lg text-center">
        <h2 className="text-3xl font-bold">숫자 맞추기 게임</h2>
        <p>1부터 100 사이의 숫자를 맞춰보세요!</p>
        <p className="text-gray-400">시도 횟수: {attempts}</p>

        {!gameOver ? (
          <div className="space-y-4">
            <input
              type="number"
              value={userGuess}
              onChange={(e) => setUserGuess(e.target.value)}
              className="w-full px-3 py-2 text-black rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="숫자를 입력하세요"
              min="1"
              max="100"
            />
            <button
              onClick={handleGuess}
              className="w-full py-2 font-semibold text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              맞추기
            </button>
          </div>
        ) : (
          <button
            onClick={handleRestart}
            className="w-full py-2 font-semibold text-white bg-green-600 rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            다시 시작하기
          </button>
        )}

        <p className="text-lg font-medium">{feedback}</p>
      </div>
    </div>
  );
};

export default GamePage;
