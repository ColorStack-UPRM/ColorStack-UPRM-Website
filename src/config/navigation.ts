import type { TranslationKey } from '../i18n/es'

export type NavigationItem = {
  to: string
  label: TranslationKey
}

type HomeSection = {
  id: string
  label: TranslationKey
  available: boolean
}

export const homeSections = [
  { id: 'about', label: 'about', available: false },
  { id: 'what-we-do', label: 'whatWeDo', available: true },
  { id: 'initiatives', label: 'initiatives', available: false },
  { id: 'events', label: 'events', available: false },
] satisfies HomeSection[]

export const primaryNavigation = [
  { to: '/', label: 'home' },
  ...homeSections
    .filter((section) => section.available)
    .map(({ id, label }) => ({ to: `/#${id}`, label })),
  { to: '/sponsors', label: 'sponsors' },
] satisfies NavigationItem[]

export const membershipLink = {
  to: '/become-a-member',
  label: 'membership',
} satisfies NavigationItem
