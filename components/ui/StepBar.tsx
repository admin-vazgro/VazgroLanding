interface Props { steps: string[]; current: number }
export default function StepBar({ steps, current }: Props) {
  return (
    <div className="flex items-center gap-0 mb-8">
      {steps.map((s, i) => (
        <div key={i} className="flex items-center gap-0 flex-1">
          <div className="flex items-center gap-2.5 flex-shrink-0">
            <div className={`w-7 h-7 rounded-full flex items-center justify-center text-[12px] font-bold border-[1.5px] transition-all
              ${i < current ? 'bg-[var(--sage)] text-white border-[var(--sage)]' 
                : i === current ? 'bg-[var(--ink)] text-[var(--cream)] border-[var(--ink)]' 
                : 'bg-white text-[var(--muted)] border-[var(--rule)]'}`}>
              {i < current ? '✓' : i + 1}
            </div>
            <span className={`text-[12px] font-semibold hidden sm:block ${i === current ? 'text-[var(--ink)]' : 'text-[var(--muted)]'}`}>{s}</span>
          </div>
          {i < steps.length - 1 && (
            <div className="flex-1 h-px mx-3 bg-[var(--rule)]"><div className={`h-full bg-[var(--sage)] transition-all ${i < current ? 'w-full' : 'w-0'}`} /></div>
          )}
        </div>
      ))}
    </div>
  )
}
