"use client";

import { FC } from "react";
import { Button } from "antd";
import { ClockCircleOutlined, AudioOutlined } from "@ant-design/icons";

const WordListenPage: FC = () => {
  return (
    <main className="min-h-screen bg-zinc-950 text-white flex items-center justify-center px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      
      {/* Ambient background glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[600px] h-[600px] bg-red-900/10 blur-[160px] rounded-full" />
      </div>

      <div className="w-full max-w-2xl text-center space-y-8 z-10">

        {/* Icon */}
        <div className="flex justify-center">
          <div className="w-16 h-16 rounded-2xl bg-zinc-900 border border-zinc-800 flex items-center justify-center shadow-lg">
            <AudioOutlined className="text-red-500 text-2xl" />
          </div>
        </div>

        {/* Title */}
        <div className="space-y-2">
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Word Listen
          </h1>
          <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
            A dedicated audio experience for sermons, devotionals, and teachings.
          </p>
        </div>

        {/* Status card */}
        <div className="bg-zinc-900/40 border border-zinc-800 rounded-2xl p-6 space-y-3">
          <div className="flex items-center justify-center gap-2 text-zinc-300 text-sm font-medium">
            <ClockCircleOutlined className="text-yellow-500" />
            Coming Soon
          </div>

          <p className="text-zinc-500 text-xs leading-relaxed max-w-md mx-auto">
            This feature is currently under development and will be available soon.
            We are preparing a seamless audio experience for listening to sermons on the go.
          </p>
        </div>

        {/* Optional actions */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
          <Button
            disabled
            className="!bg-zinc-800 !text-zinc-500 !border-zinc-700 cursor-not-allowed"
          >
            Not Available Yet
          </Button>

          <Button
            type="primary"
            className="!bg-red-600 hover:!bg-red-700 !border-0"
            onClick={() => window.location.href = "/online/youtube"}
          >
            Watch Sermons Instead
          </Button>
        </div>

        {/* Footer note */}
        <p className="text-[10px] text-zinc-600 uppercase tracking-widest pt-4">
          Word Tabernacle Media Experience
        </p>
      </div>
    </main>
  );
};

export default WordListenPage;