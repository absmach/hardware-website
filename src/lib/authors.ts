export interface Author {
  id: string;
  name: string;
  role: string;
  github: string;
  url?: string;
  avatar?: string;
}

const DEFAULT_AUTHOR_ID = "abstract-machines";

export const AUTHORS: Record<string, Author> = {
  "abstract-machines": {
    id: "abstract-machines",
    name: "Abstract Machines",
    role: "Core Team",
    github: "absmach",
    url: "https://absmach.eu",
  },
};

export function resolveAuthors(authorIds?: string[]): Author[] {
  if (!authorIds || authorIds.length === 0) {
    return [AUTHORS[DEFAULT_AUTHOR_ID]];
  }

  const resolved = authorIds
    .map((id) => AUTHORS[id])
    .filter((author): author is Author => Boolean(author));

  return resolved.length > 0 ? resolved : [AUTHORS[DEFAULT_AUTHOR_ID]];
}
