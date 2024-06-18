export default async function handler(req, res) {
  const { html } = req;
  return res.send(`${html}`);
}
