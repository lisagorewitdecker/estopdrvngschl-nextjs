// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import GoogleTagManager from '@magicul/next-google-tag-manager';

type Data = {
  name: string
}
const RootLayout = ({ children }) => (
  <html lang="en">
    <body>
      <GoogleTagManager id="GTM-HY6B7RQQ9N" />
      {children}
    </body>
  </html>
);
export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({ name: 'John Doe' })
}
