export const saveScrollPosition = () => {
  if (typeof window !== 'undefined') {
    sessionStorage.setItem('homeScrollPosition', window.scrollY.toString());
  }
};

export const restoreScrollPosition = () => {
  if (typeof window !== 'undefined') {
    const savedPosition = sessionStorage.getItem('homeScrollPosition');
    if (savedPosition) {
      window.scrollTo(0, parseInt(savedPosition));
    }
  }
}; 