import type { NavigationItem } from '../components/NavigationLinks'

export const primaryNavigation = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/what-we-do', label: 'What We Do' },
  { to: '/initiatives', label: 'Initiatives' },
  { to: '/events', label: 'Events' },
  { to: '/sponsors', label: 'Sponsors' },
] satisfies NavigationItem[]

export const membershipLink = {
  to: '/become-a-member',
  label: 'Become a Member',
} satisfies NavigationItem
