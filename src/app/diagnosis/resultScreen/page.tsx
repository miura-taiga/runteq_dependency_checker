"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function ResultPage() {
  const router = useRouter();
  const [score, setScore] = useState<string | null>(null);

  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    const queryScore = searchParams.get("score");
    if (queryScore) {
      setScore(queryScore);
    }
  }, []);

  const appUrl = "https://runteq-dependency-checker.vercel.app"; // 実際のアプリのURLをここに設定
  const ogImageUrl = `${appUrl}/images/result-${score}.png`; // scoreに応じたOGP画像を設定

  const tweetText = `私のRUNTEQ依存度は ${score}% でした！ #RUNTEQ依存度チェッカー #RUNTEQ総選挙`;
  const tweetUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
    tweetText
  )}&url=${encodeURIComponent(appUrl)}`;

  if (!score) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className="min-h-screen bg-gradient-to-r from-green-200 to-blue-200 flex items-center justify-center p-4">
        <div className="bg-white p-10 rounded-3xl shadow-2xl w-full max-w-md text-center">
          <h1 className="text-3xl md:text-4xl font-extrabold mb-6 text-gray-800">
            RUNTEQ依存度結果
          </h1>
          <p className="text-lg md:text-xl text-gray-700 mb-4">
            あなたのRUNTEQ依存度は
          </p>
          <p className="text-5xl font-extrabold text-green-600 mt-4">
            {score}%
          </p>
          <p className="mt-8 text-base md:text-lg text-gray-700">
            診断結果に基づき、RUNTEQでの学習スタイルを見直してみましょう!
          </p>
          <div className="mt-8 flex flex-col items-center space-y-4">
            <a
              href={tweetUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-500 text-white py-3 px-6 rounded-full text-lg font-semibold shadow-md hover:bg-blue-600 hover:shadow-lg transition duration-300 w-full text-center"
            >
              Xに共有する
            </a>
            <Link
              href="/"
              className="bg-gray-500 text-white py-3 px-6 rounded-full text-lg font-semibold shadow-md hover:bg-gray-600 hover:shadow-lg transition duration-300 w-full text-center"
            >
              ホームに戻る
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
