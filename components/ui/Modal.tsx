'use client'
import { useEffect } from 'react'

interface Props {
  onClose: () => void
  title: string
  subtitle?: string
  children: React.ReactNode
  maxWidth?: string
}

export default function Modal({ onClose, title, subtitle, children, maxWidth = 'max-w-[560px]' }: Props) {
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', handler)
    return () => { document.body.style.overflow = ''; window.removeEventListener('keydown', handler) }
  }, [onClose])

  return (
    <div className="fixed inset-0 z-[500] flex items-center justify-center p-6 bg-[rgba(14,13,9,0.55)]"
      onClick={e => { if (e.target === e.currentTarget) onClose() }}>
      <div className={`bg-white border border-[var(--rule)] rounded-[10px] p-12 w-full ${maxWidth} relative max-h-[90vh] overflow-y-auto`}>
        <button onClick={onClose}
          className="absolute top-4 right-4 w-7 h-7 rounded-[4px] bg-[var(--cream2)] border border-[var(--rule)] text-[var(--muted)] flex items-center justify-center text-[14px] hover:bg-[var(--ink)] hover:text-[var(--cream)] transition-all">
          ✕
        </button>
        {title && (
          <div className="mb-6">
            <h3 className="text-[22px] font-bold tracking-[-0.02em] mb-1">{title}</h3>
            {subtitle && <p className="text-[14px] text-[var(--muted)]">{subtitle}</p>}
          </div>
        )}
        {children}
      </div>
    </div>
  )
}
