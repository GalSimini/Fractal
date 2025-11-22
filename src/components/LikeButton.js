import React, { useState, useCallback } from 'react';
import { HeartIcon as HeartSolid } from '@heroicons/react/24/solid';
import { HeartIcon as HeartOutline } from '@heroicons/react/24/outline';

/**
 * Props:
 *  initialLiked?: boolean (uncontrolled start)
 *  liked?: boolean (controlled)
 *  onChange?: (liked: boolean) => void
 *  size?: number (px)
 */
const LikeButton = ({
  initialLiked = false,
  liked,
  onChange,
  size = 20,
  className = '',
}) => {
  const [inner, setInner] = useState(initialLiked);
  const isControlled = liked !== undefined;
  const isLiked = isControlled ? liked : inner;

  const toggle = useCallback(() => {
    const next = !isLiked;
    if (!isControlled) setInner(next);
    onChange && onChange(next);
  }, [isLiked, isControlled, onChange]);

  const Icon = isLiked ? HeartSolid : HeartOutline;

  return (
    <button
      type="button"
      onClick={toggle}
      aria-pressed={isLiked}
      aria-label={isLiked ? 'Remover like' : 'Curtir'}
      className={`relative inline-flex items-center justify-center rounded-full transition
        ${isLiked ? 'bg-rose-100' : 'bg-gray-100 hover:bg-gray-200'}
        ${className}`}
      style={{ width: size + 10, height: size + 10 }}
    >
      <Icon
        className={`transition-transform ${isLiked ? 'text-rose-500 scale-110' : 'text-gray-500'} `}
        style={{ width: size, height: size }}
      />
    </button>
  );
};

export default LikeButton;