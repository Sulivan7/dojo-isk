type SectionLabelProps = {
  children: React.ReactNode;
};

export default function SectionLabel({ children }: SectionLabelProps) {
  return (
    <p className="font-display text-xs uppercase tracking-[0.18em] text-iron-red">
      {children}
    </p>
  );
}
