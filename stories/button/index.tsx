import { FC } from 'react';

import './styles.css';

type Props = {
  label: string;
  primary?: boolean;
  backgroundColor?: string;
  size?: 'small' | 'medium' | 'large';
  onClick?: () => void;
};

export const Button: FC<Props> = ({ primary = false, backgroundColor, size = 'medium', label, ...props }) => {
  const mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary';
  return (
    <button
      type="button"
      className={['storybook-button', `storybook-button--${size}`, mode].join(' ')}
      style={backgroundColor ? { backgroundColor } : undefined}
      {...props}>
      {label}
    </button>
  );
};
