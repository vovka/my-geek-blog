export default {
  siteName: "My Blog",
  title: "My Blog",
  description: "A blog powered by blog-engine",
  author: "Blog Author",
  basePath: "/",

  analytics: {
    enabled: false,
    environment: "test",
    allowedHosts: ["test.blog.shcherbyna.me"],
    ga4MeasurementId: "",
    clarityProjectId: "",
    consent: {
      required: true,
      storageKey: "blog.analyticsConsent",
      policyVersion: "1",
      privacyPagePath: "/privacy"
    }
  }
};
