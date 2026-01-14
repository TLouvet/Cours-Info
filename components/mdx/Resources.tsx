import { FiExternalLink, FiBook, FiFileText, FiVideo, FiGlobe } from 'react-icons/fi';

interface Resource {
  title: string;
  description: string;
  url: string;
  type?: 'doc' | 'tutorial' | 'video' | 'website';
}

interface ResourcesProps {
  resources: Resource[];
}

const typeIcons = {
  doc: FiBook,
  tutorial: FiFileText,
  video: FiVideo,
  website: FiGlobe,
};

const typeLabels = {
  doc: 'Documentation',
  tutorial: 'Tutoriel',
  video: 'Vidéo',
  website: 'Site web',
};

const typeColors = {
  doc: 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400',
  tutorial: 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400',
  video: 'bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400',
  website: 'bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-400',
};

export default function Resources({ resources }: ResourcesProps) {
  return (
    <div className="my-8 grid gap-4 sm:grid-cols-2">
      {resources.map((resource, index) => {
        const type = resource.type || 'website';
        const Icon = typeIcons[type];
        const typeColor = typeColors[type];

        return (
          <a
            key={index}
            href={resource.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group block p-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg hover:border-cyan-500 dark:hover:border-cyan-500 transition-colors"
          >
            <div className="flex items-start justify-between gap-3 mb-2">
              <div className="flex items-center gap-2">
                <Icon className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />
                <h4 className="font-semibold text-gray-900 dark:text-gray-100 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                  {resource.title}
                </h4>
              </div>
              <FiExternalLink className="w-4 h-4 text-gray-400 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors flex-shrink-0" />
            </div>

            <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
              {resource.description}
            </p>

            <span className={`inline-block px-2 py-1 text-xs font-medium rounded ${typeColor}`}>
              {typeLabels[type]}
            </span>
          </a>
        );
      })}
    </div>
  );
}
