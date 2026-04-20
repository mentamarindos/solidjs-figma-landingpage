export default function TestPage() {
  return (
    <div style="padding: 2rem; background: #1a1a1a; color: white; min-height: 100vh;">
      <h1 style="font-size: 2rem; font-weight: bold;">Test Page</h1>
      <p style="margin-top: 1rem; color: #ccc;">If you can see this, the routing and rendering for sub-routes is working!</p>
      <div style="margin-top: 2rem; padding: 1rem; border: 1px solid #333; border-radius: 0.5rem;">
        <p>Current Time: {new Date().toLocaleTimeString()}</p>
      </div>
      <a href="/" style="display: inline-block; margin-top: 2rem; color: #4f46e5; text-decoration: underline;">Go back home</a>
    </div>
  );
}
