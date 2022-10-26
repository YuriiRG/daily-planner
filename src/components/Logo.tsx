type LogoProps = {
  className?: string | undefined;
};
export default function Logo(props: LogoProps) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 24 24'
      strokeWidth={2}
      stroke='currentColor'
      fill='none'
      strokeLinecap='round'
      strokeLinejoin='round'
      {...props}
    >
      <path d='M0 0h24v24H0z' stroke='none' />
      <path d='M6 4h11a2 2 0 012 2v12a2 2 0 01-2 2H6a1 1 0 01-1-1V5a1 1 0 011-1m3 0v18' />
      <path d='M13 8L15 8' />
      <path d='M13 12L15 12' />
    </svg>
  );
}
