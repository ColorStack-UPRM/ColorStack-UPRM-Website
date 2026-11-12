import type { BoardMember } from '../config/board'
import { useTranslation } from '../i18n/useTranslation'

type BoardMemberCardProps = {
  member: BoardMember
  index: number
}

export default function BoardMemberCard({
  member,
  index,
}: BoardMemberCardProps) {
  const { t } = useTranslation()

  return (
    <li className="min-w-0 overflow-hidden rounded-[28px] border border-forest-deep bg-forest px-3 pt-3 shadow-[0_5px_0_var(--color-forest-deep)] motion-safe:transition-[transform,box-shadow] motion-safe:duration-200 motion-safe:hover:-translate-y-1 motion-safe:hover:shadow-[0_9px_0_var(--color-forest-deep)]">
      <img
        src={member.photo}
        srcSet={`${member.smallPhoto} 400w, ${member.photo} ${member.width}w`}
        sizes="(min-width: 1280px) 260px, (min-width: 1200px) 25vw, (min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
        width={member.width}
        height={member.height}
        style={{ objectPosition: member.photoPosition }}
        alt=""
        loading={index < 4 ? 'eager' : 'lazy'}
        decoding="async"
        className="block aspect-[4/5] h-auto w-full rounded-[18px] border border-forest-deep object-cover"
      />
      <div className="relative -mx-3 mt-3 min-h-[164px] border-t border-forest-deep bg-highlight p-5 wrap-anywhere">
        <span
          aria-hidden="true"
          className="absolute -top-[60px] right-3 grid size-9 place-items-center rounded-full border border-forest-deep bg-accent font-stackworks text-[11px] font-bold tracking-[0.15em] text-chapter-dark"
        >
          {String(index + 1).padStart(2, '0')}
        </span>
        <h3 className="max-w-[20ch] text-[22px] leading-[1.15] font-extrabold tracking-[-0.03em] text-chapter-dark uppercase min-[1200px]:text-xl">
          {member.name}
        </h3>
        <p className="mt-3 border-t border-forest-deep/25 pt-2.5 text-[13px] leading-[1.6] font-medium text-forest-deep">
          {t(member.role)}
        </p>
      </div>
    </li>
  )
}
