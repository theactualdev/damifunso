export const publicImages = {
  df4: "/images/df-4.JPG",
  df5: "/images/df-5.JPG",
  df6: "/images/df-6.JPG",
  df142: "/images/DF-142.JPEG.jpg",
  img9609: "/images/IMG_9609.JPG",
  loveNotesLogo: "/images/Love notes Logo.JPG",
  wa1: "/images/WhatsApp Image 2025-09-15 at 15.54.25_054c30b2.jpg",
  wa2: "/images/WhatsApp Image 2025-09-15 at 15.54.25_b2a735b9.jpg",
  wa3: "/images/WhatsApp Image 2025-09-15 at 15.54.26_50647350.jpg",
} as const;

export type PublicImageKey = keyof typeof publicImages;
