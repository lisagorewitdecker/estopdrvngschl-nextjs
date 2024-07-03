import { headers } from 'next/headers'
import Script from 'next/script'
import { EU_COUNTRY_CODES } from '@/lib/constants' // list of EU country codes in ISO 3166-1 format

export default function Analytics() {
  const countryCode = headers().get('x-vercel-ip-country') || 'US'

  if (EU_COUNTRY_CODES.includes(countryCode)) {
    return null
  }

  return (
    <Script src="https://www.googletagmanager.com/gtag/js?id=GTM-M2RDL48P" />
  )
}
