# Button videos

Each of the four language buttons opens its **own** video. Put the files in this
folder using these exact names (they are referenced in `lib/config.ts`):

| Button text                         | File           |
| ----------------------------------- | -------------- |
| Just give it a try (English)        | `intro-en.mp4` |
| Solo inténtalo (Spanish)            | `intro-es.mp4` |
| Cử thử xem sao (Vietnamese)         | `intro-vi.mp4` |
| Probier es einfach mal aus (German) | `intro-de.mp4` |

Use `.mp4` (H.264) for the widest browser support. To use different filenames,
or to add/remove buttons, edit `languageOptions` in `lib/config.ts`.
