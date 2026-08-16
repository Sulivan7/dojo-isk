type SectionProps = {
  id?: string;
  children: React.ReactNode;
  className?: string;
};

export default function Section({
  id,
  children,
  className = "",
}: SectionProps) {
  return (
    <section id={id} className={`scroll-mt-20 py-12 md:py-20 ${className}`}>
      {children}
    </section>
  );
}
