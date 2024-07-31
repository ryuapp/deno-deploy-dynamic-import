Deno.serve(async (req) => {
  const url = new URL(req.url);
  const mod = await import(`./${url.pathname.slice(1)}`);
  return Response.json(mod);
});
