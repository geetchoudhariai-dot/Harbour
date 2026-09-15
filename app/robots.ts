import type { MetadataRoute } from "next";
import { SITE_URL } from "./lib/seo";

const aiCrawlers = [
  "Googlebot",
  "Google-Extended",
  "Google-CloudVertexBot",
  "GoogleOther",
  "Google-InspectionTool",
  "Bingbot",
  "BingPreview",
  "adidxbot",
  "DuckDuckBot",
  "DuckAssistBot",
  "Applebot",
  "Applebot-Extended",
  "Amazonbot",
  "Slurp",
  "OAI-SearchBot",
  "GPTBot",
  "ChatGPT-User",
  "Claude-SearchBot",
  "ClaudeBot",
  "Claude-User",
  "anthropic-ai",
  "PerplexityBot",
  "Perplexity-User",
  "Grok",
  "xAI",
  "meta-externalagent",
  "FacebookBot",
  "cohere-ai",
  "YouBot",
  "CCBot"
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: ["/", "/llms.txt", "/llms-full.txt", "/sitemap.xml"],
        disallow: ["/api/"]
      },
      {
        userAgent: aiCrawlers,
        allow: ["/", "/llms.txt", "/llms-full.txt", "/sitemap.xml"],
        disallow: ["/api/"]
      }
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL
  };
}
