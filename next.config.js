/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
      domains: ['img.freepik.com', 'a0.muscache.com', 'links.papareact.com'],
    },
    env:{ mapbox_key: 'pk.eyJ1IjoiYWxleDE4MiIsImEiOiJjbGZ3dDJlenMwZmtlM3NvMDE2Ynh3aXYyIn0.hBrLe6QP_0ES0qNwB8GHmw'}
  }
  
  module.exports = nextConfig
