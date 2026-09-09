import { readFileSync } from "fs";
import { join } from "path";
import { ImageResponse } from "next/og";
import { site } from "@/lib/site";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

async function loadGoogleFont(text: string, weight: 600 | 700) {
  const url = `https://fonts.googleapis.com/css2?family=Sora:wght@600;700&text=${encodeURIComponent(text)}`;
  const css = await fetch(url).then((res) => res.text());
  const fontFace = css
    .split("@font-face")
    .find((block) => block.includes(`font-weight: ${weight};`));
  const resource = fontFace?.match(/src: url\(([^)]+)\) format\('(woff2|truetype)'\)/)?.[1];

  if (!resource) {
    return null;
  }

  return fetch(resource).then((res) => res.arrayBuffer());
}

export default async function OpengraphImage() {
  const logo = readFileSync(join(process.cwd(), "public", "new logo.png"));
  const logoSrc = `data:image/png;base64,${logo.toString("base64")}`;
  const fontText = `${site.name} ${site.tagline}`;
  const [font600, font700] = await Promise.all([
    loadGoogleFont(fontText, 600),
    loadGoogleFont(fontText, 700),
  ]);

  return new ImageResponse(
    (
      <div
        tw="relative flex h-full w-full items-center justify-center overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, #fbfffe 0%, #e3f6f3 34%, #a7dad4 70%, #0d9488 100%)",
        }}
      >
        <div
          tw="absolute left-[-160px] top-[-220px] flex h-[620px] w-[620px] rounded-full bg-white opacity-80"
          style={{ filter: "blur(36px)" }}
        />
        <div
          tw="absolute right-[-180px] top-[-180px] flex h-[680px] w-[680px] rounded-full bg-[#0d9488] opacity-30"
          style={{ filter: "blur(52px)" }}
        />
        <div
          tw="absolute bottom-[-320px] left-[240px] flex h-[620px] w-[620px] rounded-full bg-[#76c5bd] opacity-35"
          style={{ filter: "blur(46px)" }}
        />
        <div tw="absolute left-[96px] top-[86px] flex h-[458px] w-[1008px] bg-white opacity-22" />

        <div tw="relative flex w-full flex-col items-center justify-center px-20">
          <img
            src={logoSrc}
            alt={site.name}
            width={250}
            height={250}
            style={{
              objectFit: "contain",
            }}
          />

          <div
            tw="mt-5 flex items-baseline justify-center text-center text-[76px] font-bold leading-none tracking-[-3px]"
            style={{ fontFamily: "Sora, Arial, sans-serif" }}
          >
            <span tw="text-[#17211f]">Victorious</span>
            <span tw="ml-5 text-[#0d9488]">Aluminium</span>
          </div>

          <div
            tw="mt-6 flex max-w-[820px] text-center text-[27px] font-medium leading-snug tracking-[0px] text-[#24534e]"
            style={{ fontFamily: "Sora, Arial, sans-serif" }}
          >
            {site.tagline}
          </div>

          <div
            tw="mt-9 flex h-[4px] w-[260px]"
            style={{
              background:
                "linear-gradient(90deg, rgba(13,148,136,0) 0%, #0d9488 50%, rgba(13,148,136,0) 100%)",
            }}
          />
        </div>
      </div>
    ),
    {
      ...size,
      ...(font600 && font700
        ? {
            fonts: [
              {
                name: "Sora",
                data: font600,
                style: "normal" as const,
                weight: 600 as const,
              },
              {
                name: "Sora",
                data: font700,
                style: "normal" as const,
                weight: 700 as const,
              },
            ],
          }
        : {}),
    },
  );
}
