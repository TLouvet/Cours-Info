import { FiInfo, FiAlertTriangle, FiCheckCircle, FiAlertCircle, FiZap } from 'react-icons/fi';

type CalloutType = 'info' | 'warning' | 'success' | 'error' | 'tip';

interface CalloutProps {
  type?: CalloutType;
  title?: string;
  children: React.ReactNode;
}

const calloutStyles = {
  info: {
    container: 'bg-blue-900/20 border-blue-800',
    icon: 'text-blue-400',
    title: 'text-blue-100',
    Icon: FiInfo,
  },
  warning: {
    container: 'bg-yellow-900/20 border-yellow-800',
    icon: 'text-yellow-400',
    title: 'text-yellow-100',
    Icon: FiAlertTriangle,
  },
  success: {
    container: 'bg-green-900/20 border-green-800',
    icon: 'text-green-400',
    title: 'text-green-100',
    Icon: FiCheckCircle,
  },
  error: {
    container: 'bg-red-900/20 border-red-800',
    icon: 'text-red-400',
    title: 'text-red-100',
    Icon: FiAlertCircle,
  },
  tip: {
    container: 'bg-cyan-900/20 border-cyan-800',
    icon: 'text-cyan-400',
    title: 'text-cyan-100',
    Icon: FiZap,
  },
};

export default function Callout({ type = 'info', title, children }: CalloutProps) {
  const styles = calloutStyles[type];
  const Icon = styles.Icon;

  const defaultTitles = {
    info: 'Information',
    warning: 'Attention',
    success: 'Succès',
    error: 'Erreur',
    tip: 'Astuce',
  };

  return (
    <div className={`my-6 p-4 rounded-lg border ${styles.container}`}>
      <div className="flex items-start gap-3">
        <Icon className={`w-5 h-5 flex-shrink-0 mt-0.5 ${styles.icon}`} />
        <div className="flex-1">
          {(title || defaultTitles[type]) && (
            <h4 className={`font-semibold mb-2 ${styles.title}`}>
              {title || defaultTitles[type]}
            </h4>
          )}
          <div className="text-sm text-gray-300 prose prose-sm max-w-none">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
