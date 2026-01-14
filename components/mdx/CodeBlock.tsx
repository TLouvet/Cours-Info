'use client';

import { useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { FiCopy, FiCheck } from 'react-icons/fi';

interface CodeBlockProps {
  children: string;
  language?: string;
  filename?: string;
  highlightLines?: number[];
}

export default function CodeBlock({
  children,
  language = 'javascript',
  filename,
  highlightLines = [],
}: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(children);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Custom style to match our theme
  const customStyle = {
    margin: 0,
    padding: '1rem',
    background: '#1e1e1e',
    fontSize: '0.875rem',
    lineHeight: '1.5',
  };

  return (
    <div className="my-6 rounded-lg overflow-hidden border border-gray-700">
      {/* Header */}
      {(filename || language) && (
        <div className="flex items-center justify-between px-4 py-2 bg-gray-800 border-b border-gray-700">
          <div className="flex items-center gap-2">
            {filename && (
              <span className="text-sm text-gray-300 font-mono">{filename}</span>
            )}
            {!filename && language && (
              <span className="text-xs text-gray-400 uppercase">{language}</span>
            )}
          </div>
          <button
            onClick={copyToClipboard}
            className="flex items-center gap-2 px-3 py-1 text-xs text-gray-300 hover:text-white transition-colors rounded hover:bg-gray-700"
            aria-label="Copy code"
          >
            {copied ? (
              <>
                <FiCheck className="w-4 h-4" />
                <span>Copié !</span>
              </>
            ) : (
              <>
                <FiCopy className="w-4 h-4" />
                <span>Copier</span>
              </>
            )}
          </button>
        </div>
      )}

      {/* Code with Syntax Highlighting */}
      <div className="relative">
        <SyntaxHighlighter
          language={language}
          style={vscDarkPlus}
          customStyle={customStyle}
          showLineNumbers={false}
          wrapLines={highlightLines.length > 0}
          lineProps={(lineNumber) => {
            const isHighlighted = highlightLines.includes(lineNumber);
            return isHighlighted
              ? {
                  style: {
                    backgroundColor: 'rgba(6, 182, 212, 0.1)',
                    borderLeft: '2px solid rgb(6, 182, 212)',
                    display: 'block',
                    marginLeft: '-1rem',
                    paddingLeft: 'calc(1rem - 2px)',
                  },
                }
              : {};
          }}
        >
          {children}
        </SyntaxHighlighter>

        {/* Copy button (floating, when no header) */}
        {!filename && !language && (
          <button
            onClick={copyToClipboard}
            className="absolute top-2 right-2 p-2 rounded bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-white transition-colors"
            aria-label="Copy code"
          >
            {copied ? <FiCheck className="w-4 h-4" /> : <FiCopy className="w-4 h-4" />}
          </button>
        )}
      </div>
    </div>
  );
}
