import type { TranslationKey } from '../i18n/es'

export type BoardMember = {
  id: string
  name: string
  role: TranslationKey
  photo: string
  smallPhoto: string
  width: number
  height: number
  photoPosition: string
}

export const boardMembers = [
  {
    id: 'anthony-torres',
    name: 'Anthony Torres',
    role: 'boardRolePresident',
    photo: '/images/board/anthony-torres.webp',
    smallPhoto: '/images/board/anthony-torres-400.webp',
    width: 800,
    height: 800,
    photoPosition: '50% 35%',
  },
  {
    id: 'normarie-martinez-flores',
    name: 'Normarie Martinez Flores',
    role: 'boardRoleVicePresident',
    photo: '/images/board/normarie-martinez-flores.webp',
    smallPhoto: '/images/board/normarie-martinez-flores-400.webp',
    width: 800,
    height: 800,
    photoPosition: '50% 35%',
  },
  {
    id: 'jovalier-ortiz-ramos',
    name: 'Jovalier Ortiz Ramos',
    role: 'boardRoleSecretary',
    photo: '/images/board/jovalier-ortiz-ramos.webp',
    smallPhoto: '/images/board/jovalier-ortiz-ramos-400.webp',
    width: 560,
    height: 560,
    photoPosition: '50% 35%',
  },
  {
    id: 'josue-c-lopez-irizarry',
    name: 'Josue C. Lopez Irizarry',
    role: 'boardRoleTreasurer',
    photo: '/images/board/josue-c-lopez-irizarry.webp',
    smallPhoto: '/images/board/josue-c-lopez-irizarry-400.webp',
    width: 800,
    height: 800,
    photoPosition: '50% 35%',
  },
  {
    id: 'josean-a-ralat',
    name: 'Josean A. Ralat',
    role: 'boardRoleStackWorksLead',
    photo: '/images/board/josean-a-ralat.webp',
    smallPhoto: '/images/board/josean-a-ralat-400.webp',
    width: 800,
    height: 800,
    photoPosition: '50% 35%',
  },
  {
    id: 'alex-morales-trevisan',
    name: 'Alex Morales Trevisan',
    role: 'boardRoleEventCoordinator',
    photo: '/images/board/alex-morales-trevisan.webp',
    smallPhoto: '/images/board/alex-morales-trevisan-400.webp',
    width: 800,
    height: 800,
    photoPosition: '50% 35%',
  },
  {
    id: 'edwin-j-cruz-martinez',
    name: 'Edwin J. Cruz Martínez',
    role: 'boardRoleFundraiser',
    photo: '/images/board/edwin-j-cruz-martinez.webp',
    smallPhoto: '/images/board/edwin-j-cruz-martinez-400.webp',
    width: 800,
    height: 800,
    photoPosition: '50% 35%',
  },
  {
    id: 'alec-a-rodriguez-velazquez',
    name: 'Alec A. Rodríguez Velázquez',
    role: 'boardRoleFundraiser',
    photo: '/images/board/alec-a-rodriguez-velazquez.webp',
    smallPhoto: '/images/board/alec-a-rodriguez-velazquez-400.webp',
    width: 800,
    height: 800,
    photoPosition: '50% 35%',
  },
  {
    id: 'alondra-soto-feliciano',
    name: 'Alondra Soto Feliciano',
    role: 'boardRoleRepresentative',
    photo: '/images/board/alondra-soto-feliciano.webp',
    smallPhoto: '/images/board/alondra-soto-feliciano-400.webp',
    width: 800,
    height: 800,
    photoPosition: '50% 35%',
  },
  {
    id: 'andrea-p-segarra-felix',
    name: 'Andrea P. Segarra Félix',
    role: 'boardRoleRepresentative',
    photo: '/images/board/andrea-p-segarra-felix.webp',
    smallPhoto: '/images/board/andrea-p-segarra-felix-400.webp',
    width: 800,
    height: 800,
    photoPosition: '50% 35%',
  },
  {
    id: 'daniel-f-munoz-valenzuela',
    name: 'Daniel F. Muñoz Valenzuela',
    role: 'boardRoleRepresentative',
    photo: '/images/board/daniel-f-munoz-valenzuela.webp',
    smallPhoto: '/images/board/daniel-f-munoz-valenzuela-400.webp',
    width: 800,
    height: 800,
    photoPosition: '50% 35%',
  },
  {
    id: 'kevin-s-beltran-pena',
    name: 'Kevin S. Beltrán Peña',
    role: 'boardRoleRepresentative',
    photo: '/images/board/kevin-s-beltran-pena.webp',
    smallPhoto: '/images/board/kevin-s-beltran-pena-400.webp',
    width: 800,
    height: 800,
    photoPosition: '50% 35%',
  },
] satisfies readonly BoardMember[]
