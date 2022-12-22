import * as React from 'react';

export interface ICardProps {
    title: string;
    message: string;
}

export function Card (props: ICardProps) {
    const {title, message} = props
  return (
    <div
    className="flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 text-white hover:bg-white/20"
  >
    <h3 className="text-2xl font-bold">{title}</h3>
    <div className="text-lg">
      {message}
    </div>
  </div>
  );
}
