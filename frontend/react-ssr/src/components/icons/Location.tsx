type Props = {
  height?: number;
  width?: number;
};

export function Location({ height = 24, width = 21 }: Props) {
  return (
    <>
      <svg width={width} height={height} viewBox="0 0 9 12">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M9 4.2639C9 6.56538 4.5 11.4031 4.5 11.4031C4.5 11.4031 0 6.56538 0 4.2639C0 1.96243 2.01472 0.0967102 4.5 0.0967102C6.98528 0.0967102 9 1.96243 9 4.2639ZM6.54545 4.2639C6.54545 5.31003 5.62967 6.15808 4.5 6.15808C3.37033 6.15808 2.45455 5.31003 2.45455 4.2639C2.45455 3.21777 3.37033 2.36972 4.5 2.36972C5.62967 2.36972 6.54545 3.21777 6.54545 4.2639Z"
          fill="currentColor"
        />
      </svg>
    </>
  );
}
