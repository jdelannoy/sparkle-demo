const fetchConfig = {
  authorHost: window.NEXT_PUBLIC_AUTHOR_HOST, 
  // publishHost: "",
  fallbackHost: "https://publish-p81252-e700817.adobeaemcloud.com",
  endpoint: "graphql/execute.json/sample-wknd-app/homepage",
  noAuthorTimestamp: false,
};

const searchParams = new URLSearchParams(window.location.search);

const author = searchParams.get("authorHost");
if (author) {
  const authorUrl = new URL(author);
  fetchConfig.authorHost = `${authorUrl.protocol}//${authorUrl.host}`;
}

const noAuthorTimestampParam = searchParams.get("noAuthorTimestamp")
if (noAuthorTimestampParam?.toLowerCase() === "true") {
  fetchConfig.noAuthorTimestamp = true
}

const publish = searchParams.get("publishHost");
if (publish) {
  const publishUrl = new URL(publish);
  fetchConfig.publishHost = `${publishUrl.protocol}//${publishUrl.host}`;
}

let endpoint = searchParams.get("endpoint");
if (endpoint) {
  if (endpoint.endsWith("/")) {
    endpoint = endpoint.slice(0, -1);
  }
  fetchConfig.endpoint = endpoint;
}

export default fetchConfig;
