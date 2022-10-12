type HamburgerProps = {
  onClick?: React.MouseEventHandler<SVGSVGElement> | undefined;
  className?: string | undefined;
};

export default function Hamburger(props: HamburgerProps) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={24}
      height={24}
      viewBox='0 0 24 24'
      strokeWidth={2}
      stroke='currentColor'
      fill='none'
      strokeLinecap='round'
      strokeLinejoin='round'
      {...props}
    >
      <path d='M0 0h24v24H0z' stroke='none' />
      <path d='M4 6L20 6' />
      <path d='M4 12L20 12' />
      <path d='M4 18L20 18' />
    </svg>
  );
}
