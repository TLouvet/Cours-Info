'use client';

const PROGRESS_KEY = 'r4a10-course-progress';

export interface Progress {
  completedSections: string[];
  lastVisited?: string;
}

export function getProgress(): Progress {
  if (typeof window === 'undefined') {
    return { completedSections: [] };
  }

  try {
    const stored = localStorage.getItem(PROGRESS_KEY);
    if (stored) {
      return JSON.parse(stored);
    }
  } catch (error) {
    console.error('Failed to load progress:', error);
  }

  return { completedSections: [] };
}

export function saveProgress(progress: Progress): void {
  if (typeof window === 'undefined') return;

  try {
    localStorage.setItem(PROGRESS_KEY, JSON.stringify(progress));
  } catch (error) {
    console.error('Failed to save progress:', error);
  }
}

export function markSectionComplete(sectionId: string): void {
  const progress = getProgress();
  if (!progress.completedSections.includes(sectionId)) {
    progress.completedSections.push(sectionId);
    saveProgress(progress);
  }
}

export function markSectionIncomplete(sectionId: string): void {
  const progress = getProgress();
  progress.completedSections = progress.completedSections.filter(
    (id) => id !== sectionId
  );
  saveProgress(progress);
}

export function isSectionComplete(sectionId: string): boolean {
  const progress = getProgress();
  return progress.completedSections.includes(sectionId);
}

export function updateLastVisited(sectionId: string): void {
  const progress = getProgress();
  progress.lastVisited = sectionId;
  saveProgress(progress);
}

export function getProgressPercentage(totalSections: number): number {
  const progress = getProgress();
  if (totalSections === 0) return 0;
  return Math.round((progress.completedSections.length / totalSections) * 100);
}
