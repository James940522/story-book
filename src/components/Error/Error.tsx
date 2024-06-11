type PropsType = {
  children: string;
};

export default function ErrorMessage({ children }: PropsType) {
  return <p className="text-error text-xs">{children}</p>;
}
