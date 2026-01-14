'use client';

import { useState } from 'react';
import { FiPlay, FiRotateCw } from 'react-icons/fi';

interface CodePlaygroundProps {
  initialCode: string;
  title?: string;
  height?: number;
}

interface ConsoleOutput {
  type: 'log' | 'error' | 'warn';
  message: string;
  timestamp: number;
}

export default function CodePlayground({
  initialCode,
  title = 'Essayez ce code',
  height = 400,
}: CodePlaygroundProps) {
  const [code, setCode] = useState(initialCode);
  const [output, setOutput] = useState<ConsoleOutput[]>([]);
  const [isRunning, setIsRunning] = useState(false);

  const runCode = () => {
    setIsRunning(true);
    setOutput([]);

    // Capture console methods
    const logs: ConsoleOutput[] = [];
    const originalLog = console.log;
    const originalError = console.error;
    const originalWarn = console.warn;

    console.log = (...args: any[]) => {
      logs.push({
        type: 'log',
        message: args.map(arg =>
          typeof arg === 'object' ? JSON.stringify(arg, null, 2) : String(arg)
        ).join(' '),
        timestamp: Date.now(),
      });
      originalLog(...args);
    };

    console.error = (...args: any[]) => {
      logs.push({
        type: 'error',
        message: args.map(arg => String(arg)).join(' '),
        timestamp: Date.now(),
      });
      originalError(...args);
    };

    console.warn = (...args: any[]) => {
      logs.push({
        type: 'warn',
        message: args.map(arg => String(arg)).join(' '),
        timestamp: Date.now(),
      });
      originalWarn(...args);
    };

    try {
      // Execute code
      // Using indirect eval to run in global scope
      (0, eval)(code);
    } catch (error: any) {
      logs.push({
        type: 'error',
        message: error.message,
        timestamp: Date.now(),
      });
    } finally {
      // Restore console methods
      console.log = originalLog;
      console.error = originalError;
      console.warn = originalWarn;

      setOutput(logs);
      setIsRunning(false);
    }
  };

  const resetCode = () => {
    setCode(initialCode);
    setOutput([]);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Tab') {
      e.preventDefault();
      const target = e.target as HTMLTextAreaElement;
      const start = target.selectionStart;
      const end = target.selectionEnd;

      // Insert 2 spaces for tab
      const newCode = code.substring(0, start) + '  ' + code.substring(end);
      setCode(newCode);

      // Move cursor after the inserted spaces
      setTimeout(() => {
        target.selectionStart = target.selectionEnd = start + 2;
      }, 0);
    }
  };

  return (
    <div className="my-8 border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
      {/* Header */}
      <div className="bg-gray-50 dark:bg-gray-800 px-4 py-3 border-b border-gray-200 dark:border-gray-700 flex items-center justify-between">
        <h4 className="text-sm font-semibold text-gray-900 dark:text-gray-100">
          💻 {title}
        </h4>
        <div className="flex gap-2">
          <button
            onClick={resetCode}
            className="flex items-center gap-2 px-3 py-1.5 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 rounded transition-colors"
            title="Réinitialiser le code"
          >
            <FiRotateCw className="w-4 h-4" />
            Réinitialiser
          </button>
          <button
            onClick={runCode}
            disabled={isRunning}
            className="flex items-center gap-2 px-3 py-1.5 text-sm bg-cyan-600 hover:bg-cyan-700 disabled:bg-gray-400 text-white rounded transition-colors"
          >
            <FiPlay className="w-4 h-4" />
            Exécuter
          </button>
        </div>
      </div>

      {/* Code Editor */}
      <div className="relative bg-gray-900">
        <textarea
          value={code}
          onChange={(e) => setCode(e.target.value)}
          onKeyDown={handleKeyDown}
          className="w-full p-4 bg-transparent text-gray-100 font-mono text-sm resize-none focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-inset"
          style={{ height: `${height}px` }}
          spellCheck={false}
        />
      </div>

      {/* Console Output */}
      {output.length > 0 && (
        <div className="border-t border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900">
          <div className="px-4 py-2 bg-gray-100 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
            <span className="text-xs font-semibold text-gray-600 dark:text-gray-400">
              CONSOLE
            </span>
          </div>
          <div className="p-4 max-h-64 overflow-y-auto">
            {output.map((item, index) => (
              <div
                key={index}
                className={`mb-2 font-mono text-sm ${
                  item.type === 'error'
                    ? 'text-red-600 dark:text-red-400'
                    : item.type === 'warn'
                    ? 'text-yellow-600 dark:text-yellow-400'
                    : 'text-gray-800 dark:text-gray-200'
                }`}
              >
                <span className="text-gray-500 dark:text-gray-500 mr-2">
                  {item.type === 'error' ? '❌' : item.type === 'warn' ? '⚠️' : '›'}
                </span>
                <span className="whitespace-pre-wrap">{item.message}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Hint */}
      <div className="px-4 py-2 bg-gray-50 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
        <p className="text-xs text-gray-500 dark:text-gray-400">
          💡 Astuce : Modifiez le code ci-dessus et cliquez sur "Exécuter" pour voir le résultat
        </p>
      </div>
    </div>
  );
}
