declare global {
  namespace JSX {
    interface IntrinsicElements {
      "swiper-container": React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      > & {
        slidesPerView?: number | "auto";
        spaceBetween?: number;
        navigation?: boolean | string;
        pagination?: boolean | string;
        loop?: boolean;
        autoplay?: boolean | object;
        thumbsSwiper?: string | HTMLElement;
        "slides-per-view"?: number | "auto";
        "space-between"?: number;
        "thumbs-swiper"?: string | HTMLElement;
        "watch-slides-progress"?: boolean | string;
        style?: React.CSSProperties;
      };

      "swiper-slide": React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      > & {
        style?: React.CSSProperties;
      };
    }
  }
}

export {};
