export const addToLibrary = (book) => {
    const existing = JSON.parse(localStorage.getItem('myLibrary')) || [];

    const alreadingExists = existing.find((b) => b.id === book.id);
    if (alreadingExists) {
        alert('This book is already in your library!');
        return;
    }

    const updated = [...existing, book];
    localStorage.setItem('myLibrary', JSON.stringify(updated));
    alert('Book added to your library!');
};

export const getLibrary = () => {
  return JSON.parse(localStorage.getItem('myLibrary')) || [];
};