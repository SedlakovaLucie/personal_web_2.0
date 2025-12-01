type Props = React.SVGProps<SVGSVGElement>;

export const ArrowDown = ({ className, ...props }: Props) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    width="14"
    height="13"
    viewBox="0 0 23 13"
    fill="none"
    {...props}
  >
    <path
      d="M1.5 1.5L11.5 11.5L21.5 1.5"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
