/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  async rewrites() {
    return [
      { source: "/Reasoning/Stage4Activity/:activityId", destination: "/Reasoning/Activity/:activityId" },
      { source: "/Reasoning/Stage5Activity/:activityId", destination: "/Reasoning/Activity/:activityId" },
      { source: "/Reasoning/Stage6Activity/:activityId", destination: "/Reasoning/Activity/:activityId" },
    ];
  },
}

module.exports = nextConfig
