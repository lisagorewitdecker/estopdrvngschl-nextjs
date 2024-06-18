export default async function handler(req, res) {
  const { body } = req;
  return res.send(`${body}`);
}
