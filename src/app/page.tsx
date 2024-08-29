"use client";

import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  const startDiagnosis = () => {
    router.push("/diagnosis/startScreen");
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-green-200 to-blue-300 flex items-center justify-center p-4">
      <div className="text-center p-8 bg-white rounded-3xl shadow-2xl max-w-lg transform hover:scale-105 transition-transform duration-300">
        <h1 className="text-4xl font-extrabold mb-6 text-gray-800">
          RUNTEQ 依存度チェック
        </h1>
        <p className="text-lg text-gray-700 mb-6">
          あなたのRUNTEQ依存度を診断してみましょう。日々の学習習慣がどれだけRUNTEQに依存しているかを確認できます。
        </p>
        <button
          onClick={startDiagnosis}
          className="bg-green-500 text-white py-3 px-6 rounded-full text-lg font-semibold shadow-md hover:bg-green-600 hover:shadow-lg transition duration-300"
        >
          診断を開始する
        </button>
      </div>
    </div>
  );
}
