type PropsType = {
  htmlFor: string;
  children: string;
};

export function Label({ htmlFor, children }: PropsType) {
  return (
    <label htmlFor={htmlFor} className="text-sm text-secondary">
      {children}
    </label>
  );
}
