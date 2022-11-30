import client from "@sanity/client";

export default client({
  projectId: "wpifpufn",
  dataset: "production",
  useCdn: true,
  apiVersion: "2021-08-05",
});
