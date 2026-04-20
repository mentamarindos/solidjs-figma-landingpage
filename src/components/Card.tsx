import { ParentProps } from "solid-js";

interface CardProps extends ParentProps {
  class?: string;
}

export default function Card(props: CardProps) {
  return (
    <div class={`bg-dark-card rounded-[2.5rem] p-8 ${props.class ?? ""}`}>
      {props.children}
    </div>
  );
}
