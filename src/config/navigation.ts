import type { NavigationItem } from '../components/NavigationLinks'

export const primaryNavigation = [
  { to: '/', label: 'home' },
  { to: '/about', label: 'about' },
  { to: '/what-we-do', label: 'whatWeDo' },
  { to: '/initiatives', label: 'initiatives' },
  { to: '/events', label: 'events' },
  { to: '/sponsors', label: 'sponsors' },
] satisfies NavigationItem[]

export const membershipLink = {
  to: '/become-a-member',
  label: 'membership',
} satisfies NavigationItem
