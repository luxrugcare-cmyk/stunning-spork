import { SERVICES, SECTORS, AREAS, BLOG_POSTS } from "./site-data";

export interface CrossLink {
  label: string;
  href: string;
  description: string;
}

interface NamedItem {
  id: string;
  title: string;
  shortDesc: string;
}

export function getRelatedLinks(current: {
  type: "service" | "sector" | "area";
  slug?: string;
}): CrossLink[] {
  const links: CrossLink[] = [];
  const currentId = current.slug;

  // Add 2 other services (excluding current)
  (SERVICES as unknown as NamedItem[])
    .filter((s) => s.id !== currentId)
    .slice(0, 2)
    .forEach((s) => {
      links.push({
        label: s.title,
        href: `/services/${s.id}`,
        description: s.shortDesc,
      });
    });

  // Add 1-2 sectors that fit
  (SECTORS as unknown as NamedItem[]).slice(0, 2).forEach((sec) => {
    links.push({
      label: `Curtain Cleaning for ${sec.title}`,
      href: `/sectors/${sec.id}`,
      description: sec.shortDesc,
    });
  });

  // Add 1-2 areas
  AREAS.slice(0, 2).forEach((a) => {
    links.push({
      label: `Curtain Cleaning in ${a.name}`,
      href: `/areas/${a.id}`,
      description: `On-site service across ${a.suburbs.slice(0, 4).join(", ")} and surrounding suburbs.`,
    });
  });

  // Add 1 related blog post
  const blog = BLOG_POSTS[0];
  if (blog) {
    links.push({
      label: `Read: ${blog.title}`,
      href: `/blog/${blog.slug}`,
      description: blog.excerpt,
    });
  }

  return links.slice(0, 6);
}
