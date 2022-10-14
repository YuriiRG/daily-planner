type XButtonProps = {
  [key: string]: unknown;
};

export default function XButton(props: XButtonProps) {
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
      <path d='M18 6L6 18' />
      <path d='M6 6L18 18' />
    </svg>
  );
}
