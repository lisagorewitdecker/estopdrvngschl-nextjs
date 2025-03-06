'use client'

import { useEffect, useState } from "react";

export default function Page({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const [slug, setSlug] = useState<string | null>(null)

  useEffect(() => {
    params.then((data) => setSlug(data.slug))
  }, [params])

  if (!slug) {
    return <div>Loading...</div>
  }
  return <div>Slug: {slug}</div>
}
