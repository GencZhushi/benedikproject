/**
 * Central configuration for the landing page.
 *
 * EDIT THESE VALUES to customize the page. Everything visible (names, links,
 * the professor photo, the four videos, and the button text) is driven here.
 */
export const siteConfig = {
  /** Professor name, used in the heading and footer. */
  professorName: "Professor Benedikt",

  /** The digital assistant's name (emphasized in the heading). */
  assistantName: "Nicol AI",

  /** First line of the heading, shown above the assistant name. */
  headingPrefix: "Chat with Professor Benedikt's digital assistant,",

  /** University / faculty name shown in the footer (leave "" to hide). */
  universityName: "University of Puerto Rico",

  /**
   * Professor portrait shown at the top of the page.
   * Place the image at: /public/professor.jpg  (a portrait, e.g. 600x800, works best)
   */
  professorPhoto: "/professor.jpg",

  /**
   * The chat link opened by EVERY "Open Chat" button (the same link for all four).
   * Open your chat/GPT, click "Share", copy the public link, and paste it here.
   */
  customGptUrl:
    "https://chatgpt.com/g/g-6a1ff5c3b1cc8191913be4029eeae81a-professor-benedics-lectures",

  /** Label for the button shown under each video (opens the chat in a new tab). */
  chatButtonLabel: "Open Chat",

  /**
   * The four language buttons. Each one opens its OWN video.
   *
   * Drop the video files into /public/videos/ using the filenames below, or
   * change each `video` path to wherever you placed the file. To edit the text
   * shown inside a circle, change its `label`.
   */
  languageOptions: [
    { label: "Just give it a try", locale: "en", video: "/videos/intro-en.mp4" },
    { label: "Solo inténtalo", locale: "es", video: "/videos/intro-es.mp4" },
    { label: "Cử thử xem sao", locale: "vi", video: "/videos/intro-vi.mp4" },
    { label: "Probier es einfach mal aus", locale: "de", video: "/videos/intro-de.mp4" },
  ],
} as const;

/** A single language option (one gold button + its video). */
export type LanguageOption = (typeof siteConfig.languageOptions)[number];

/** Default placeholder, used to detect when the chat link hasn't been set yet. */
export const CHAT_URL_PLACEHOLDER = "PASTE_CHAT_LINK_HERE";

/** True once a real chat link has been configured. */
export const isChatConfigured =
  siteConfig.customGptUrl.trim().length > 0 &&
  (siteConfig.customGptUrl as string) !== CHAT_URL_PLACEHOLDER;
