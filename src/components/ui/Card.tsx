type CardProps = {
  children: React.ReactNode;
  className?: string;
};

export default function Card({ children, className = "" }: CardProps) {
  return (
    <div
      className={`rounded-xl border border-iron-700 bg-iron-800 p-5 ${className}`}
    >
      {children}
    </div>
  );
}
