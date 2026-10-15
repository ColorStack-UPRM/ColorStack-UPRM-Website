# Section navigation

`src/config/navigation.ts` defines the homepage sections and their availability.
The anchors are `/#about`, `/#what-we-do`, `/#initiatives`, and `/#events`.

Until a section is ready, its header and footer links stay hidden and its old
route (for example, `/about`) redirects to `/` with history replacement.
Sponsors and Become a Member remain standalone pages.

To release a section:

1. Render its content in Home with the matching ID and `tabIndex={-1}` on its `h2`.
2. Set `available: true` in `homeSections`.

Navigation links and old-route redirects will then use that section's anchor.
`ScrollToAnchor` focuses the heading and leaves space for a sticky or fixed header.
Active links follow the URL's pathname and hash, not the scroll position.
