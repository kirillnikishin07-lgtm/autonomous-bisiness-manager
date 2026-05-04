type ButtonProps = {
  children: React.ReactNode;
};

export function Button({
  children,
}: ButtonProps) {
  return (
    <button className="bg-violet-600 hover:bg-violet-500 transition-all px-4 py-2 rounded-xl">
      {children}
    </button>
  );
}