import React from 'react';

const Bookmark = ({ filled = false, size = 20, className = '' }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    className={className}
    fill={filled ? 'currentColor' : 'none'}
    stroke="currentColor"
    strokeWidth={filled ? 0 : 2}
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M6 2h12a1 1 0 0 1 1 1v19l-7-4-7 4V3a1 1 0 0 1 1-1z" />
  </svg>
);

const SaveButton = ({ saved = false, onChange, size = 20, className = '' }) => {
  const handleClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    onChange && onChange();
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      aria-pressed={saved}
      aria-label={saved ? 'Remover dos favoritos' : 'Salvar nos favoritos'}
      className={`inline-flex items-center justify-center bg-transparent p-0 text-brand-red hover:opacity-90 active:scale-95 transition ${className}`}
    >
      <Bookmark filled={saved} size={size} />
    </button>
  );
};

export default SaveButton;