import { Icon } from "@components/shared/Icon/Icon";
import { WindowType } from "@context/WindowContext/WindowContext";
import { IconDefinition } from "@components/shared/Icon/Icon.generated";

export type ApplicationProps = {
  name: string;
  type: WindowType;
  icon: IconDefinition;
};

type Props = ApplicationProps & {
  onDoubleClick: () => void;
};

export const Application = (props: Props) => {
  return (
    <div
      onDoubleClick={props.onDoubleClick}
      className="flex flex-col items-center cursor-pointer"
    >
      <div className="w-[90px] h-[90px] rounded-[50px] bg-grey p-7 flex items-center justify-center shadow-md">
        <Icon icon={props.icon} className="w-full" />
      </div>
      <h2 className="text-base mb-5">{props.name}</h2>
    </div>
  );
};
