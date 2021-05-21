import React, { FC } from 'react';
import { Hadena } from '../Icons/Hadena';

export const EmptyState: FC = () => {
  return (
    <div className="flex-grow flex items-center justify-center px-16 flex-col space-y-12">
      <Hadena className="h-[255px] w-[255px]" />
      <p className="text-5xl font-black text-center">{'Oh no! We couldn\'t find any results!'}</p>
    </div>
  );
};