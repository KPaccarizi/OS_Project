import cs from "classnames";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: string;
  hasError?: boolean;
}

export const Input = ({ hasError, error, className, ...inputProps }: Props) => {
  return (
    <>
      <input
        {...inputProps}
        className={cs(
          "rounded-xl px-3 bg-zinc-100 placeholder-slate-500 border-2 border-slate-500 bg-opacity-50 box-border",
          className
        )}
      />
      {hasError && <p className="w-full text-red-500 font-semibold">{error}</p>}
    </>
  );
};
