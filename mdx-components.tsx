import type { MDXComponents } from 'mdx/types';
import CodeBlock from '@/components/mdx/CodeBlock';
import Callout from '@/components/mdx/Callout';
import Exercise from '@/components/mdx/Exercise';
import Resources from '@/components/mdx/Resources';
import QuickCheck from '@/components/mdx/QuickCheck';
import CodeSandbox from '@/components/mdx/CodeSandbox';
import CodePlayground from '@/components/mdx/CodePlayground';

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // Custom MDX Components
    CodeBlock,
    Callout,
    Exercise,
    Resources,
    QuickCheck,
    CodeSandbox,
    CodePlayground,

    // Built-in HTML components with custom styling
    h1: ({ children }) => (
      <h1 className="text-4xl font-bold mt-8 mb-4 text-gray-900 dark:text-gray-100">
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-3xl font-semibold mt-6 mb-3 text-gray-900 dark:text-gray-100">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-2xl font-semibold mt-4 mb-2 text-gray-900 dark:text-gray-100">
        {children}
      </h3>
    ),
    h4: ({ children }) => (
      <h4 className="text-xl font-semibold mt-3 mb-2 text-gray-900 dark:text-gray-100">
        {children}
      </h4>
    ),
    p: ({ children }) => (
      <p className="text-base leading-7 mb-4 text-gray-700 dark:text-gray-300">
        {children}
      </p>
    ),
    code: ({ className, children }) => {
      // Inline code (no className means it's inline)
      if (!className) {
        return (
          <code className="bg-gray-100 dark:bg-gray-800 px-1.5 py-0.5 rounded text-sm font-mono text-cyan-600 dark:text-cyan-400">
            {children}
          </code>
        );
      }
      // This is handled by pre wrapper
      return <>{children}</>;
    },
    pre: ({ children }) => {
      // Extract code element from pre
      const childArray = Array.isArray(children) ? children : [children];
      const codeElement = childArray.find(
        (child: any) => child?.type === 'code' || child?.props?.className?.startsWith('language-')
      );

      if (codeElement) {
        const className = codeElement.props?.className || '';
        const language = className.replace('language-', '') || 'javascript';
        const code = codeElement.props?.children || '';

        return <CodeBlock language={language}>{String(code)}</CodeBlock>;
      }

      // Fallback for plain pre without code
      return (
        <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto mb-4 font-mono text-sm">
          {children}
        </pre>
      );
    },
    ul: ({ children }) => (
      <ul className="list-disc list-outside mb-4 space-y-2 text-gray-700 dark:text-gray-300 ml-6">
        {children}
      </ul>
    ),
    ol: ({ children }) => (
      <ol className="list-decimal list-outside mb-4 space-y-3 text-gray-700 dark:text-gray-300 ml-6">
        {children}
      </ol>
    ),
    li: ({ children }) => (
      <li className="pl-2">
        {children}
      </li>
    ),
    a: ({ href, children }) => (
      <a
        href={href}
        className="text-cyan-600 dark:text-cyan-400 hover:underline"
        target={href?.startsWith('http') ? '_blank' : undefined}
        rel={href?.startsWith('http') ? 'noopener noreferrer' : undefined}
      >
        {children}
      </a>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-cyan-500 pl-4 py-2 my-4 italic text-gray-700 dark:text-gray-300 bg-gray-50 dark:bg-gray-800/50">
        {children}
      </blockquote>
    ),
    table: ({ children }) => (
      <div className="my-6 overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
          {children}
        </table>
      </div>
    ),
    th: ({ children }) => (
      <th className="px-4 py-2 text-left text-sm font-semibold text-gray-900 dark:text-gray-100 bg-gray-100 dark:bg-gray-800">
        {children}
      </th>
    ),
    td: ({ children }) => (
      <td className="px-4 py-2 text-sm text-gray-700 dark:text-gray-300 border-t border-gray-200 dark:border-gray-700">
        {children}
      </td>
    ),
    ...components,
  };
}
