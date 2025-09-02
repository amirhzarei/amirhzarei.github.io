// components/DeveloperCard.tsx
"use client";

import React from "react";

const DeveloperCard: React.FC = () => {
    return (
        <div className="bg-inherit dark:bg-[#0d1117] text-gray-200 rounded-xl shadow-lg overflow-hidden border border-gray-800 max-w-lg">
            {/* Top bar with buttons */}
            <div className="flex items-center gap-2 px-4 py-2 bg-[#161b22] border-b border-gray-800">
                <span className="w-3 h-3 rounded-full bg-red-500"></span>
                <span className="w-3 h-3 rounded-full bg-yellow-500"></span>
                <span className="w-3 h-3 rounded-full bg-green-500"></span>
                <span className="ml-auto text-xs text-gray-400">developer.js</span>
            </div>

            {/* Code content */}
            <pre className="p-4 text-sm overflow-x-auto">
                <code className="whitespace-pre text-[14px] leading-relaxed font-mono">
                    <span className="text-gray-500">// Software Engineer{"\n"}</span>
                    <span className="text-pink-500">const</span>{" "}
                    <span className="text-blue-400">developer</span>{" "}
                    <span className="text-pink-500">=</span>{" "}
                    <span className="text-blue-400 dark:text-white">
                        {"{"}
                    </span>
                    {"\n"}
                    {"  "}
                    <span className="text-purple-400">name</span>:
                    <span className="text-green-400">'Amirhossein Zarei'</span>,
                    {"\n"}
                    {"  "}
                    <span className="text-purple-400">skills</span>:
                    <span className="text-blue-400 dark:text-white">
                        [
                    </span>
                    <span className="text-green-400">'React'</span>,{" "}
                    <span className="text-green-400">'Js'</span>,{" "}
                    <span className="text-green-400">'TS'</span>
                    <span className="text-blue-400 dark:text-white">
                        ],
                    </span>
                    {"\n"}
                    {"  "}
                    <span className="text-purple-400">focuses</span>:
                    <span className="text-blue-400 dark:text-white">
                        [
                    </span>
                    <span className="text-green-400">'FrontEnd Developer'</span>,{" "}
                    <span className="text-green-400">'Web Performance'</span>
                    <span className="text-blue-400 dark:text-white">
                        ],
                    </span>
                    {"\n"}
                    {"  "}
                    <span className="text-purple-400">Work experience</span>:{" "}
                    <span className="text-green-400">'3+'</span>,
                    {"\n"}
                    {"  "}
                    <span className="text-purple-400">learning</span>:
                    <span className="text-green-400">'Always'</span>
                    {"\n"}
                    <span className="text-blue-400 dark:text-white">
                        {"};"}
                    </span>
                </code>
            </pre>
        </div>
    );
};

export default DeveloperCard;