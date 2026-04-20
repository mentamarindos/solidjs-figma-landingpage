import { ParentProps } from "solid-js";

interface CardProps extends ParentProps {
  class?: string;
}

export default function Card(props: CardProps) {
  return (
    <div class={`bg-dark-card rounded-[22px] ${props.class ?? ""}`}>
      {props.children}
    </div>
  );
}
