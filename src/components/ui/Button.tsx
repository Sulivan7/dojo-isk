import Link from "next/link";

type ButtonVariant = "primary" | "secondary" | "whatsapp";

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: ButtonVariant;
  external?: boolean;
  className?: string;
};

const BASE_STYLES =
  "inline-flex items-center justify-center gap-2 rounded-md px-5 py-3.5 text-sm transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-iron-red";

const VARIANT_STYLES: Record<ButtonVariant, string> = {
  primary: "bg-iron-red text-white hover:bg-iron-red-dark",
  secondary:
    "border border-iron-600 text-iron-100 hover:border-iron-400 hover:text-iron-50",
  whatsapp: "bg-whatsapp text-iron-950 hover:brightness-110",
};

export default function Button({
  href,
  children,
  variant = "primary",
  external = false,
  className = "",
}: ButtonProps) {
  const styles = `${BASE_STYLES} ${VARIANT_STYLES[variant]} ${className}`;

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={styles}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={styles}>
      {children}
    </Link>
  );
}
