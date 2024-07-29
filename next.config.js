
Script

contentSecurityPolicy: {
  directives: {
    default-src: ["'self'"],
    frame-src: ["https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ2X5prOOhhr9YY9lm18M6ccMEaEvW6SXqUkLSGyd5ZPeWZ_azMZEpImoszopFVTB4UXsnNkDOfy"],
  // swMinify: true,
  },
}

const nextConfig = {
  reactStrictMode: true,
  // swMinify: true,
  async rewrites () {
    return [
      {
        source: '/',
        destination: '/html/index.html',
        destination: '/public/myfile.html',
        destination: '/api/myfile.js',
      },
    ]
  }
}
module.exports = nextConfig
