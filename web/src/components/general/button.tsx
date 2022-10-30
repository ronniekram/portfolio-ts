import Link from "next/link";
import tw, { styled } from "twin.macro";

//! ----------> TYPES <----------
export type LinkProps = {
  label: string;
  href: string;
  external?: boolean;
};

export type ButtonProps = {
  label: string;
  type?: `button` | `submit` | `reset`;
  action?: () => void;
  disabled?: boolean;
};

//! ----------> STYLES <----------
const buttonStyles = [
  tw`transition duration-500 ease-in-out`,
  tw`px-8 py-2 border border-black`,
  tw`text-white text-xs bg-purple-mid`,
  tw`hocus:(bg-purple-dark)`,
];

//! ----------> COMPONENTS <----------
export const LinkButton = ({ label, href, external }: LinkProps) => {
  return external ? (
    <a href={href} target="_blank" rel="noreferrer" css={[buttonStyles]}>{label}</a>
  ) : (
    <Link href={href} passHref>
      <a css={[buttonStyles]}>{label}</a>
    </Link>
  );
};

const Button = ({ label, type = `button`, action, disabled }: ButtonProps) => {
  return (
    <button type={type} onClick={action} disabled={disabled} css={[buttonStyles]}>
      {label}
    </button>
  );
};

export default Button;