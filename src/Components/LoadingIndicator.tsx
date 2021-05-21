import React, { FC } from 'react';

type Props = {
  loading: boolean,
  className?: string
}

export const LoadingIndicator: FC<Props> = ({ loading, className }: Props) => {
  return (
    <div 
      className={`absolute top-0 transition-all ease-in-out duration-150 
      h-2 bg-blue-500 ${className}
      ${loading ? 'animate-load' : ''}`}
    >
    </div>
  );
};