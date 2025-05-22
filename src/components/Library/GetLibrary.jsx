export const getLibrary = () => {
  return JSON.parse(localStorage.getItem('myLibrary')) || [];
};

export const removeFromLibrary = (bookId) => {
  const existing = getLibrary();
  const updated = existing.filter((b) => b.id !== bookId);
  localStorage.setItem('myLibrary', JSON.stringify(updated));
};