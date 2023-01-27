import cs from "classnames";
import { IconSvg, IconDefinition } from "./Icon.generated";

export * from "./Icon.generated";

export interface IconProps {
  alt?: string;
  title?: string;
  spin?: boolean;
  className?: string;
  disabled?: boolean;
  icon: IconDefinition;
  onClick?: () => void;
}

export function Icon(props: IconProps) {
  if (!props.icon) {
    return null;
  }

  return (
    <div
      title={props.title}
      onClick={() => {
        if (props.onClick && props.disabled !== true) {
          props.onClick();
        }
      }}
      className={cs(props.className, {
        "opacity-30": props.disabled,
      })}
    >
      {IconSvg[props.icon]}
    </div>
  );
}
