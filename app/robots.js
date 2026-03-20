export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/client-portal"],
      },
    ],
    sitemap: "https://babin.lawyer/sitemap.xml",
  };
}
