export default function Logo() {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='h-10 w-10'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      strokeWidth='2'
      stroke='currentColor'
      fill='none'
      strokeLinecap='round'
      strokeLinejoin='round'
    >
      <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
      <path d='M13 5h8'></path>
      <path d='M13 9h5'></path>
      <path d='M13 15h8'></path>
      <path d='M13 19h5'></path>
      <rect x='3' y='4' width='6' height='6' rx='1'></rect>
      <rect x='3' y='14' width='6' height='6' rx='1'></rect>
    </svg>
  );
}
