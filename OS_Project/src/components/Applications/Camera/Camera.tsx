import { Button } from "@components/shared/Button/Button";

export const Camera = () => {
  return (
    <div className="flex-1 flex flex-col px-6 overflow-y-auto max-h-full">
      <h1 className="text-left w-full font-bold text-4xl">Camera</h1>
      <div className="my-3 flex flex-col gap-y-3 flex-1 max-h-[600px] rounded-xl bg-slate-700"></div>
      <Button>Take a picture</Button>
    </div>
  );
};
