export default async function handler(req, res) {
  const { html } = req;
  return res.send(`Hello ${html.name}, you just parsed the request html!`);
}
