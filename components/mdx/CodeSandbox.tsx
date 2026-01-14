import { FiExternalLink } from 'react-icons/fi';

interface CodeSandboxProps {
  sandboxId: string;
  title?: string;
  height?: number;
  view?: 'editor' | 'preview' | 'split';
}

export default function CodeSandbox({
  sandboxId,
  title = 'Code Sandbox',
  height = 500,
  view = 'split',
}: CodeSandboxProps) {
  const viewParam = view === 'editor' ? 'editor' : view === 'preview' ? 'preview' : 'split';
  const embedUrl = `https://codesandbox.io/embed/${sandboxId}?fontsize=14&hidenavigation=1&theme=dark&view=${viewParam}`;
  const sandboxUrl = `https://codesandbox.io/s/${sandboxId}`;

  return (
    <div className="my-8">
      <div className="flex items-center justify-between mb-3">
        <h4 className="text-sm font-semibold text-gray-900 dark:text-gray-100">
          💻 {title}
        </h4>
        <a
          href={sandboxUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-sm text-cyan-600 dark:text-cyan-400 hover:underline"
        >
          Ouvrir dans CodeSandbox
          <FiExternalLink className="w-4 h-4" />
        </a>
      </div>

      <div className="relative rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700">
        <iframe
          src={embedUrl}
          style={{
            width: '100%',
            height: `${height}px`,
            border: 0,
            borderRadius: '4px',
            overflow: 'hidden',
          }}
          title={title}
          allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
          sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
        ></iframe>
      </div>

      <p className="mt-2 text-xs text-gray-500 dark:text-gray-400">
        💡 Astuce : Modifiez le code dans l'éditeur pour voir les changements en direct
      </p>
    </div>
  );
}
