import { apiRequest } from "../Api";

import { Gallery } from "./gallery";

export const getGallery = () =>
  apiRequest<{}, Gallery[]>({
    url: "photos",
    method: "GET",
    params: {
      _limit: 12,
    },
  }).then((response) => response.data);
