import { PropsWithChildren } from "react";

// Variants - TypeScript
type MessageVariant = "RIGHT" | "LEFT";

// Toujours nommer "Element" + "Props" = MessageProps
type MessageProps = PropsWithChildren<{
  author: string;
  variant?: MessageVariant;
}>;

export const Message = ({
  author,
  children,
  variant = "RIGHT",
}: MessageProps) => {
  return (
    <p
      style={{
        display: "flex",
        flexDirection: variant === "RIGHT" ? "row" : "row-reverse",
      }}>
      <b>{author}</b>: {children}
    </p>
  );
};

// Exemple - Syntaxe sans utilise "type = MessageProps"
/* export const Message = ({
  author,
  children,
}: {
  author: string;
  children: string;
}) => {
  return (
    <p>
      <b>{author}</b>: {children}
    </p>
  );
}; */
