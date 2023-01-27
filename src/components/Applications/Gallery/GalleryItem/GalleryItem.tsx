import { Gallery } from "@api/gallery/gallery";

export const GalleryItem = ({ thumbnailUrl, title }: Gallery) => {
  return (
    <div className="w-full flex flex-col items-start p-4 border-2 rounded-lg shadow-md">
      <img src={thumbnailUrl} />
      <p className="text-base text-left mt-4">{title}</p>
    </div>
  );
};
