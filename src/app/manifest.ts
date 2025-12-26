import type { MetadataRoute } from "next";
import { RESUME_DATA } from "@/data/resume-data";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${RESUME_DATA.name} - Professional Resume`,
    short_name: RESUME_DATA.name,
    description: RESUME_DATA.about,
    start_url: "/",
    display: "standalone",
    background_color: "#fff",
    theme_color: "#fff",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
