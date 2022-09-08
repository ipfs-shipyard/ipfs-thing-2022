import { Section } from './layout.js'

export default function Teams({ config }) {
  const teams = (config.devent.teams) || []
  return (
  <Section title="Participating Teams">
    <div className="container max-w-8xl mx-auto flex flex-wrap gap-20 justify-center items-center align-middle">
      {teams.map((s, i) => (
        <a href={s[1]} target="_blank" alt={s[0]} className="basis-52 h-[100px] inline-block align-middle" key={i}>
          <img src={s[2]} className="object-contain object-center h-full"/>
        </a>
      ))}
    </div>
  </Section>
  )
}
