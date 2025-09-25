export function createIntersectionObserver(callback: IntersectionObserverCallback, options?: IntersectionObserverInit): IntersectionObserver {
    return new IntersectionObserver(callback, options);
}

export function reduceMotionGuard(callback: () => void): () => void {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        return () => {};
    }
    return callback;
}