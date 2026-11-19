import { useEffect, useState } from 'react'

const maxDelay = 24 * 60 * 60 * 1000

export default function useNow(changeTimes: readonly number[]) {
  const [now, setNow] = useState(() => Date.now())

  useEffect(() => {
    const refresh = () => setNow(Date.now())
    const next = changeTimes
      .filter((time) => time > now)
      .reduce<number | undefined>(
        (soonest, time) =>
          soonest === undefined || time < soonest ? time : soonest,
        undefined,
      )

    const timer =
      next === undefined
        ? undefined
        : window.setTimeout(refresh, Math.min(next - now, maxDelay))

    const onVisible = () => {
      if (document.visibilityState === 'visible') refresh()
    }
    document.addEventListener('visibilitychange', onVisible)
    window.addEventListener('focus', refresh)

    return () => {
      window.clearTimeout(timer)
      document.removeEventListener('visibilitychange', onVisible)
      window.removeEventListener('focus', refresh)
    }
  }, [changeTimes, now])

  return now
}
