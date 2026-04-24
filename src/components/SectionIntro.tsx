interface SectionIntroProps {
  eyebrow: string
  title: string
  description: string
  align?: 'left' | 'center'
}

export default function SectionIntro({
  eyebrow,
  title,
  description,
  align = 'left',
}: SectionIntroProps) {
  return (
    <div className={align === 'center' ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'}>
      <span className="eyebrow">{eyebrow}</span>
      <h2 className="mt-5 text-4xl font-semibold sm:text-5xl">{title}</h2>
      <p className="mt-4 text-base leading-7 text-ink/70 sm:text-lg">{description}</p>
    </div>
  )
}
