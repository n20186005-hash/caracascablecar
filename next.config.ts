const nextConfig = {
  // OpenNext (@opennextjs/cloudflare) requires the standalone output trace.
  experimental: { cpus: 1 },
  output: "standalone" as const,
};

export default nextConfig;
