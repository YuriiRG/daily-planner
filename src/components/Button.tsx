import { MouseEventHandler, ReactNode } from 'react';

type ButtonProps = {
  children: ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
  className?: string | undefined;
};
export default function Button(props: ButtonProps) {
  return (
    <button
      {...props}
      className={
        'rounded bg-gray-200 py-1 px-2 hover:bg-gray-300 active:hover:bg-gray-400 ' +
        props?.className
      }
    />
  );
}
