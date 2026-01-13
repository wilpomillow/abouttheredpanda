// src/app/page.tsx
"use client"

import ShinyText from "@/components/reactbits/ShinyText"
import GlassSurface from "@/components/reactbits/GlassSurface"
import AnimatedList from "@/components/reactbits/AnimatedList"
import Accordion, { AccordionItem } from "@/components/reactbits/Accordion"
import Tabs from "@/components/reactbits/Tabs"
import Timeline from "@/components/reactbits/Timeline"
import Fireflies from "@/components/Scene/Fireflies"
import RedPandaMark from "@/components/Scene/RedPandaMark"
import ScrollBar from "@/components/ui/ScrollBar"
import TOC from "@/components/ui/TOC"
import { useTiltCard } from "@/components/hooks/useTiltCard"
import { useCountUp } from "@/components/hooks/useCountUp"
import { motion } from "framer-motion"
import Image from "next/image"

const toc = [
  { id: "overview", label: "Overview" },
  { id: "etymology", label: "Etymology" },
  { id: "taxonomy", label: "Taxonomy" },
  { id: "subspecies", label: "Subspecies & species" },
  { id: "phylogeny", label: "Phylogeny" },
  { id: "fossil", label: "Fossil record" },
  { id: "genomics", label: "Genomics" },
  { id: "description", label: "Description" },
  { id: "distribution", label: "Distribution & habitat" },
  { id: "behaviour", label: "Behaviour & ecology" },
  { id: "threats", label: "Threats" },
  { id: "conservation", label: "Conservation" },
  { id: "captivity", label: "In captivity" },
]

export default function Page() {
  useTiltCard()

  const bodyLen = useCountUp(63, { duration: 1100, decimals: 0 })
  const tailLen = useCountUp(47, { duration: 1200, decimals: 0 })
  const lifespan = useCountUp(14, { duration: 900, decimals: 0 })

  return (
    <main className="relative min-h-screen">
      <ScrollBar />

      {/* Static forest background (spotlight removed) */}
      <div className="grain pointer-events-none absolute inset-0 -z-10 [background:radial-gradient(60rem_circle_at_20%_10%,rgba(34,197,94,0.22),transparent_60%),radial-gradient(50rem_circle_at_80%_25%,rgba(163,230,53,0.16),transparent_60%),radial-gradient(70rem_circle_at_35%_95%,rgba(187,247,208,0.10),transparent_60%),linear-gradient(180deg,rgba(2,44,34,0.35),rgba(2,44,34,0.92))]" />
      <div className="pointer-events-none absolute inset-0 -z-10">
        <Fireflies />
      </div>

      <header className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
        <a href="#overview" className="group inline-flex items-center gap-3">
          <div className="h-10 w-10 rounded-2xl bg-emerald-200/10 p-2 shadow-soft backdrop-blur-md ring-1 ring-emerald-200/15">
            <RedPandaMark className="h-full w-full" />
          </div>
          <div className="leading-tight">
            <div className="text-sm text-emerald-100/70">Field Guide</div>
            <div className="text-base font-semibold tracking-tight">
              <ShinyText text="Red Panda" />
            </div>
          </div>
        </a>

        <nav className="hidden items-center gap-6 text-sm text-emerald-50/80 md:flex">
          <a className="hover:text-emerald-50" href="#taxonomy">
            Taxonomy
          </a>
          <a className="hover:text-emerald-50" href="#behaviour">
            Ecology
          </a>
          <a className="hover:text-emerald-50" href="#conservation">
            Conservation
          </a>
          <a className="hover:text-emerald-50" href="#captivity">
            Captivity
          </a>
        </nav>

        <a
          href="#conservation"
          className="rounded-full border border-emerald-200/20 bg-emerald-200/10 px-4 py-2 text-sm font-semibold text-emerald-50 shadow-soft backdrop-blur-md hover:bg-emerald-200/15"
        >
          Protect the canopy
        </a>
      </header>

      <section id="overview" className="mx-auto max-w-6xl px-6 pb-14 pt-8">
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200/15 bg-emerald-950/35 px-3 py-1 text-xs text-emerald-100/80 backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-emerald-300/80" />
              one page • lots of visuals • image slots included
            </div>

            <h1 className="mt-6 text-balance text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
              A lush, interactive guide to the <ShinyText text="red panda" className="font-bold" />.
            </h1>

            <p className="mt-5 max-w-xl text-pretty text-base text-emerald-50/75 sm:text-lg">
              The red panda (<em>Ailurus fulgens</em>) is a small, tree-loving mammal from the eastern Himalayas and
              southwestern China. It’s famous for rust-red fur, a ringed tail, and an energy-saving lifestyle built
              around a low-calorie bamboo diet.
            </p>

            <div className="mt-8 grid max-w-xl grid-cols-3 gap-3">
              <KPI label="Body length" value={`${bodyLen} cm`} hint="avg ~56–63 cm" />
              <KPI label="Tail length" value={`${tailLen} cm`} hint="avg ~37–47 cm" />
              <KPI label="Captive lifespan" value={`${lifespan} yrs`} hint="reported up to ~14" />
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#etymology"
                className="rounded-2xl bg-emerald-200 px-5 py-3 text-sm font-bold text-emerald-950 shadow-glow hover:opacity-95"
              >
                Start the trail
              </a>
              <a
                href="#behaviour"
                className="rounded-2xl border border-emerald-200/20 bg-emerald-950/35 px-5 py-3 text-sm font-semibold text-emerald-50 shadow-soft backdrop-blur-md hover:bg-emerald-950/45"
              >
                Jump to ecology
              </a>
            </div>

            <div className="mt-10">
              <AnimatedList
                items={[
                  <Row key="1" t="Stealth climber" d="Flexible joints and curved claws for confident canopy movement." />,
                  <Row key="2" t="Bamboo-heavy diet" d="Mostly bamboo, with occasional fruit, insects, and eggs." />,
                  <Row key="3" t="Solo spacing" d="Usually solitary; meet mainly to breed." />,
                ]}
              />
            </div>
          </div>

          <div className="relative">
            <motion.div
              data-tilt
              className="tilt"
              initial={{ opacity: 0, y: 18, filter: "blur(12px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.9, ease: [0.2, 0.8, 0.2, 1] }}
            >
              <GlassSurface className="p-6">
                <div className="flex items-start justify-between gap-6">
                  <div>
                    <div className="text-sm text-emerald-100/75">Interactive Lens</div>
                    <div className="mt-1 text-2xl font-bold tracking-tight">Scroll + tilt + micro motion.</div>
                    <p className="mt-2 text-sm text-emerald-50/70">
                      Scroll progress, card tilt, animated lists, accordions and tabs give the page a “living forest”
                      feel — without the spotlight background.
                    </p>
                  </div>

                  <div className="hidden h-12 w-12 rounded-2xl bg-emerald-200/10 p-2 ring-1 ring-emerald-200/15 md:block">
                    <svg viewBox="0 0 24 24" fill="none" className="h-full w-full" aria-hidden="true">
                      <path
                        d="M12 21c4.4 0 8-3.6 8-8 0-5-8-12-8-12S4 8 4 13c0 4.4 3.6 8 8 8Z"
                        className="fill-emerald-200/60"
                      />
                    </svg>
                  </div>
                </div>

                <div className="mt-6 grid grid-cols-3 gap-3">
                  <Mini title="False thumb" desc="Helps grip bamboo + branches." />
                  <Mini title="Tail blanket" desc="Balance + warmth in cold forests." />
                  <Mini title="Twilight" desc="Often active at dawn/dusk." />
                </div>

                <div className="mt-6 rounded-2xl border border-emerald-200/10 bg-emerald-950/35 p-4">
                  <div className="flex items-center justify-between">
                    <div className="text-sm font-semibold">Scroll progress</div>
                    <div className="text-xs text-emerald-100/70">trail completion</div>
                  </div>

                  <div className="mt-3 h-3 w-full overflow-hidden rounded-full bg-emerald-950/70 ring-1 ring-emerald-200/10">
                    <div
                      className="h-full bg-gradient-to-r from-emerald-400/80 via-lime-300/70 to-emerald-200/80"
                      style={{ width: "calc(18% + (var(--scroll-p) * 82%))" }}
                    />
                  </div>

                  <div className="mt-2 text-xs text-emerald-50/60">You’re tracking the guide — the UI is tracking you.</div>
                </div>
              </GlassSurface>
            </motion.div>

            {/* Image slot near the top section */}
            <div className="mt-5">
              <ImageSlot label="Hero photo" hint="A red panda in mossy forest light (wide landscape)" 
              src='https://images.pexels.com/photos/9280183/pexels-photo-9280183.jpeg'/>
            </div>
          </div>
        </div>
      </section>

      {/* Reduced bottom padding here to avoid dead space */}
      <section className="mx-auto grid max-w-6xl gap-8 px-6 pb-8 pt-10 lg:grid-cols-[18rem_1fr]">
        <TOC items={toc} />
        <div className="grid gap-16">
          <TopicEtymology />
          <TopicTaxonomy />
          <TopicSubspecies />
          <TopicPhylogeny />
          <TopicFossils />
          <TopicGenomics />
          <TopicDescription />
          <TopicDistribution />
          <TopicBehaviour />
          <TopicThreats />
          <TopicConservation />
          <TopicCaptivity />
        </div>
      </section>

      {/* Reduced footer padding to remove bottom dead space */}
      <footer className="mx-auto max-w-6xl px-6 pb-8 pt-6 text-sm text-emerald-100/70">
        <div className="flex flex-col items-start justify-between gap-4 border-t border-emerald-200/10 pt-8 sm:flex-row sm:items-center">
          <div>
            <div className="font-semibold text-emerald-50">Red Panda Field Guide</div>
            <div className="text-emerald-100/70">Built for Vercel • heavy greens • image slots ready.</div>
          </div>
          <div className="flex gap-4">
            <a className="hover:text-emerald-50" href="#overview">
              Top
            </a>
            <a className="hover:text-emerald-50" href="#behaviour">
              Ecology
            </a>
            <a className="hover:text-emerald-50" href="#conservation">
              Conservation
            </a>
          </div>
        </div>
      </footer>
    </main>
  )
}

function TopicShell({
  id,
  eyebrow,
  title,
  children,
}: {
  id: string
  eyebrow: string
  title: string
  children: React.ReactNode
}) {
  return (
    <section id={id} className="scroll-mt-24">
      <div className="mb-6">
        <div className="text-xs font-semibold tracking-widest text-emerald-200/70">{eyebrow.toUpperCase()}</div>
        <h2 className="mt-2 text-balance text-3xl font-bold tracking-tight sm:text-4xl">{title}</h2>
      </div>
      {children}
    </section>
  )
}

function KPI({ label, value, hint }: { label: string; value: string; hint: string }) {
  return (
    <div className="rounded-2xl border border-emerald-200/10 bg-emerald-950/40 p-4 shadow-soft backdrop-blur-md">
      <div className="text-xs text-emerald-100/70">{label}</div>
      <div className="mt-1 text-xl font-extrabold">{value}</div>
      <div className="mt-1 text-[11px] text-emerald-50/55">{hint}</div>
    </div>
  )
}

function Row({ t, d }: { t: string; d: string }) {
  return (
    <div>
      <div className="flex items-center justify-between gap-3">
        <div className="text-sm font-semibold text-emerald-50">{t}</div>
        <span className="h-2 w-2 rounded-full bg-emerald-300/70" />
      </div>
      <div className="mt-1 text-sm text-emerald-50/65">{d}</div>
    </div>
  )
}

function Mini({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="rounded-2xl border border-emerald-200/10 bg-emerald-950/35 p-3">
      <div className="text-sm font-semibold">{title}</div>
      <div className="mt-1 text-xs text-emerald-50/65">{desc}</div>
    </div>
  )
}

function TwoCol({ left, right }: { left: React.ReactNode; right: React.ReactNode }) {
  return <div className="grid gap-6 lg:grid-cols-2">{left}{right}</div>
}

function Bullet({ children }: { children: React.ReactNode }) {
  return <li className="leading-relaxed">{children}</li>
}

function ImageSlot({
  label,
  hint,
  src,
  alt,
  className = "",
}: {
  label: string
  hint?: string
  src?: string
  alt?: string
  className?: string
}) {
  return (
    <div
      className={
        "group relative overflow-hidden rounded-3xl border border-emerald-200/10 bg-emerald-950/35 shadow-soft backdrop-blur-md " +
        className
      }
    >
      <div className="absolute inset-0 opacity-60 [background:radial-gradient(35rem_circle_at_20%_20%,rgba(34,197,94,0.16),transparent_60%),radial-gradient(28rem_circle_at_80%_30%,rgba(163,230,53,0.12),transparent_60%)]" />

      <div className="relative p-6">
        <div className="flex items-start justify-between gap-3">
          <div>
            <div className="text-xs font-semibold tracking-widest text-emerald-200/70">IMAGE</div>
            <div className="mt-2 text-lg font-extrabold">{label}</div>
            {hint && <div className="mt-1 text-sm text-emerald-50/65">{hint}</div>}
          </div>

          <span className="rounded-full border border-emerald-200/15 bg-emerald-950/35 px-3 py-1 text-xs text-emerald-100/80">
            {src ? "Loaded" : "Replace me"}
          </span>
        </div>

        <div className="mt-5 overflow-hidden rounded-2xl border border-emerald-200/10 bg-emerald-950/25">
          <div className="relative aspect-[16/10] w-full">
            {src ? (
              <Image
                src={src}
                alt={alt || label}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 45vw"
                priority={false}
              />
            ) : (
              <div className="absolute inset-0 rounded-2xl border border-dashed border-emerald-200/20" />
            )}
          </div>
        </div>

        <div className="mt-3 text-xs text-emerald-50/55">
          {src ? "Using next/image (remote URL)." : "Tip: pass src=\"https://...\""}
        </div>
      </div>
    </div>
  )
}


function TopicEtymology() {
  return (
    <TopicShell
      id="etymology"
      eyebrow="Name origins"
      title="Etymology: why “panda”, and what does Ailurus fulgens mean?"
    >
      <TwoCol
        left={
          <GlassSurface className="p-7">
            <p className="text-sm text-emerald-50/75">
              The word <strong>panda</strong> is often linked to Nepali usage (commonly cited as “ponya”), associated
              with a meaning like “claws” or “ball of the foot”. In English, “panda” originally referred to the red
              panda; qualifiers like “red” or “lesser” were later added to distinguish it from the giant panda.
            </p>

            <div className="mt-4 rounded-2xl border border-emerald-200/10 bg-emerald-950/35 p-4 text-sm text-emerald-50/75">
              <div className="font-semibold">Scientific name breakdown</div>
              <ul className="mt-2 list-disc pl-5">
                <Bullet>
                  <strong>Ailurus</strong> — from Ancient Greek for “cat”.
                </Bullet>
                <Bullet>
                  <strong>fulgens</strong> — Latin for “shining / bright”.
                </Bullet>
              </ul>
            </div>

            <div className="mt-5 flex flex-wrap gap-2">
              <Badge text="name history" />
              <Badge text="language roots" />
              <Badge text="scientific latin" />
            </div>
          </GlassSurface>
        }
        right={
          <div className="grid gap-4">
            <GlassSurface className="p-7">
              <div className="text-sm font-semibold">Trail postcard</div>
              <div className="mt-3 rounded-3xl border border-emerald-200/10 bg-emerald-950/35 p-5">
                <div className="text-xs text-emerald-100/70">ETYMOLOGY</div>
                <div className="mt-1 text-2xl font-extrabold tracking-tight">
                  <ShinyText text="panda" />
                </div>
                <div className="mt-3 text-sm text-emerald-50/70">
                  A name that traveled from mountain languages into global culture — now a conservation icon.
                </div>
                <div className="mt-5 flex items-center gap-3">
                  <div className="h-12 w-12 rounded-2xl bg-emerald-200/10 p-2 ring-1 ring-emerald-200/15">
                    <RedPandaMark className="h-full w-full" />
                  </div>
                  <div className="text-sm text-emerald-50/75">
                    <div className="font-semibold">Ailurus fulgens</div>
                    <div className="text-emerald-100/70">“shining cat” (rough vibe)</div>
                  </div>
                </div>
              </div>
            </GlassSurface>

            <ImageSlot label="Etymology image" hint="Portrait or ‘in the leaves’ close-up" 
            src="https://images.pexels.com/photos/2265247/pexels-photo-2265247.jpeg"
            />
          </div>
        }
      />
    </TopicShell>
  )
}

function TopicTaxonomy() {
  const timeline = [
    { k: "1825", t: "Formal description", d: "Frédéric Cuvier describes and names Ailurus fulgens." },
    { k: "1902", t: "Chinese form described", d: "Oldfield Thomas describes A. f. styani (Chinese red panda form)." },
    { k: "Today", t: "Family Ailuridae", d: "Generally placed in its own family within Carnivora (caniforms)." },
  ]

  return (
    <TopicShell id="taxonomy" eyebrow="Classification" title="Taxonomy: where red pandas sit in Carnivora">
      <TwoCol
        left={
          <GlassSurface className="p-7">
            <div className="text-sm font-semibold">At a glance</div>
            <div className="mt-3 grid gap-3 sm:grid-cols-2">
              <TagCard k="Order" v="Carnivora" />
              <TagCard k="Suborder" v="Caniformia" />
              <TagCard k="Family" v="Ailuridae" />
              <TagCard k="Genus" v="Ailurus" />
            </div>
            <div className="mt-6 text-sm text-emerald-50/75">
              Historically, red pandas were hard to place (people argued “bear-like” vs “raccoon-like”). Modern research
              supports them as a distinct lineage within the dog-like carnivorans.
            </div>
          </GlassSurface>
        }
        right={
          <div className="grid gap-4">
            <GlassSurface className="p-7">
              <div className="text-sm font-semibold">Taxonomy timeline</div>
              <div className="mt-4">
                <Timeline items={timeline} />
              </div>
            </GlassSurface>

            <ImageSlot label="Taxonomy graphic" hint="Silhouette/diagram: red panda vs bear vs raccoon" 
            src="https://images.pexels.com/photos/145985/pexels-photo-145985.jpeg"/>
          </div>
        }
      />
    </TopicShell>
  )
}

function TopicSubspecies() {
  const tabs = [
    {
      id: "classic",
      label: "Traditional view",
      content: (
        <div className="text-sm text-emerald-50/75">
          Traditionally, one species (<em>Ailurus fulgens</em>) with two subspecies: Himalayan (<em>A. f. fulgens</em>)
          and Chinese (<em>A. f. styani</em>).
        </div>
      ),
    },
    {
      id: "genomic",
      label: "Genomic evidence",
      content: (
        <div className="text-sm text-emerald-50/75">
          Population genomics (notably work published around 2020) found two deeply separated lineages and proposed
          treating them as two species in some frameworks; major river barriers likely shape boundaries.
        </div>
      ),
    },
    {
      id: "field",
      label: "Field differences",
      content: (
        <div className="grid gap-3 sm:grid-cols-2">
          <Callout title="Himalayan form" text="Straighter profile; lighter forehead; ochre-tipped hairs on back/rump." />
          <Callout title="Chinese form" text="More curved forehead; darker coat; stronger contrast in tail rings." />
        </div>
      ),
    },
  ]

  return (
    <TopicShell id="subspecies" eyebrow="Variation" title="Subspecies and species: Himalayan vs Chinese red pandas">
      <TwoCol
        left={
          <GlassSurface className="p-7">
            <div className="text-sm font-semibold">Interactive notes</div>
            <div className="mt-4">
              <Tabs tabs={tabs} />
            </div>
            <div className="mt-5 text-xs text-emerald-100/70">
              Different authorities may still use “two subspecies” vs “two species” language depending on adoption.
            </div>
          </GlassSurface>
        }
        right={
          <div className="grid gap-4">
            <GlassSurface className="p-7">
              <div className="text-sm font-semibold">Quick comparison</div>
              <div className="mt-4 grid gap-3">
                <Compare a="Himalayan" b="Chinese" />
              </div>
            </GlassSurface>

            <ImageSlot label="Subspecies comparison" hint="Side-by-side portraits or coat/tail detail shots" 
            src="https://images.pexels.com/photos/148182/pexels-photo-148182.jpeg"/>
          </div>
        }
      />
    </TopicShell>
  )
}

function TopicPhylogeny() {
  const items: AccordionItem[] = [
    {
      id: "placement",
      title: "Phylogenetic placement",
      subtitle: "Not a bear. Not a raccoon. A distinct caniform lineage.",
      chips: ["Musteloid neighborhood", "Distinct family Ailuridae"],
      content: (
        <div className="grid gap-3">
          <p>
            Multiple analyses reject the idea that red pandas are closest to bears or raccoons. Evidence generally places
            them among the musteloid branch of caniform carnivorans, but as their own distinct family (Ailuridae).
          </p>
          <div className="rounded-2xl border border-emerald-200/10 bg-emerald-950/35 p-4">
            <div className="text-sm font-semibold">Takeaway</div>
            <div className="mt-1 text-sm text-emerald-50/70">
              Red pandas represent a unique evolutionary lineage — losing them is losing an entire branch.
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "false-thumb",
      title: "The “false thumb” story",
      subtitle: "A wrist-bone adaptation shared with some fossil relatives.",
      chips: ["arboreal locomotion", "bamboo grip"],
      content: (
        <p>
          Fossil relatives show a similar extra “thumb-like” structure, suggesting it first helped with climbing, later
          becoming useful for handling bamboo.
        </p>
      ),
    },
  ]

  return (
    <TopicShell id="phylogeny" eyebrow="Evolutionary relationships" title="Phylogeny: the family tree debate (and where it landed)">
      <div className="grid gap-4 lg:grid-cols-[1fr_0.95fr]">
        <GlassSurface className="p-7">
          <Accordion items={items} />
        </GlassSurface>

        <ImageSlot
          label="Phylogeny visual"
          hint="A simple branching diagram or ‘musteloid neighborhood’ illustration"
          src="https://images.pexels.com/photos/724647/pexels-photo-724647.jpeg"
          className="lg:sticky lg:top-6"
        />
      </div>
    </TopicShell>
  )
}

function TopicFossils() {
  const items: AccordionItem[] = [
    {
      id: "ailurids",
      title: "Early ailurids (family history)",
      subtitle: "Ailuridae likely originated in Eurasia; early forms were more generalist.",
      chips: ["Oligocene/Miocene", "Eurasia"],
      content: (
        <p>
          Fossil evidence suggests early ailurids existed in Eurasia; some were more generalist omnivores/carnivores.
          Over time, the lineage leading to modern red pandas became more specialized.
        </p>
      ),
    },
    {
      id: "parailurus",
      title: "Parailurus (extinct “red panda” relatives)",
      subtitle: "Pliocene records include extinct relatives discussed as red panda kin.",
      chips: ["Pliocene", "Parailurus"],
      content: (
        <p>
          The extinct genus <em>Parailurus</em> is often discussed as a red panda relative, with fossils reported from
          Pliocene deposits in parts of Europe and beyond, suggesting a broader historical range for the lineage.
        </p>
      ),
    },
  ]

  return (
    <TopicShell id="fossil" eyebrow="Deep time" title="Fossil record: ancient cousins and the road to bamboo specialization">
      <TwoCol
        left={
          <GlassSurface className="p-7">
            <Accordion items={items} />
          </GlassSurface>
        }
        right={
          <div className="grid gap-4">
            <GlassSurface className="p-7">
              <div className="text-sm font-semibold">Fossil vignette</div>
              <div className="mt-3 rounded-3xl border border-emerald-200/10 bg-emerald-950/35 p-5">
                <div className="text-xs text-emerald-100/70">FOSSIL NOTE</div>
                <div className="mt-1 text-lg font-bold">A broader past</div>
                <div className="mt-2 text-sm text-emerald-50/70">
                  Some extinct relatives appear to have been larger than today’s red panda — hinting at a wider set of
                  ecological roles over time.
                </div>
                <div className="mt-5 h-12 w-full rounded-2xl bg-gradient-to-r from-emerald-400/15 via-lime-300/10 to-emerald-200/15" />
              </div>
            </GlassSurface>

            <ImageSlot label="Fossil image" hint="Fossil/illustration: Parailurus or ailurid timeline"
            src='https://images.pexels.com/photos/148806/pexels-photo-148806.jpeg' 
            />
          </div>
        }
      />
    </TopicShell>
  )
}

function TopicGenomics() {
  const tabs = [
    {
      id: "genome",
      label: "Genome sequencing",
      content: (
        <div className="grid gap-3 text-sm text-emerald-50/75">
          <p>
            Genome sequencing and comparative genomics help clarify how bamboo specialization evolved independently in
            red pandas and giant pandas (convergent evolution from carnivoran ancestors).
          </p>
          <p className="text-emerald-50/70">
            Genomics supports lineage identification, detects gene flow across geography, and informs conservation
            planning and breeding programs.
          </p>
        </div>
      ),
    },
    {
      id: "two",
      label: "Two lineages",
      content: (
        <div className="text-sm text-emerald-50/75">
          Population genomics supports two deeply diverged groups, guiding region-specific conservation priorities and
          how managers interpret species boundaries.
        </div>
      ),
    },
    {
      id: "bamboo",
      label: "Bamboo convergence",
      content: (
        <div className="grid gap-3">
          <Callout title="Convergent evolution" text="Giant and red pandas independently adapted to bamboo diets." />
          <Callout title="Pseudothumb" text="Both lineages have a thumb-like adaptation aiding bamboo handling." />
        </div>
      ),
    },
  ]

  return (
    <TopicShell id="genomics" eyebrow="DNA & adaptation" title="Genomics: bamboo evolution, lineages, and conservation insight">
      <TwoCol
        left={
          <GlassSurface className="p-7">
            <Tabs tabs={tabs} />
          </GlassSurface>
        }
        right={<ImageSlot label="Genomics image" hint="DNA / lab / conservation genetics style photo or graphic" 
        src = "https://images.pexels.com/photos/145952/pexels-photo-145952.jpeg" />}
      />
    </TopicShell>
  )
}

function TopicDescription() {
  return (
    <TopicShell id="description" eyebrow="What they’re like" title="Description: built for climbing, built for cold">
      <TwoCol
        left={
          <GlassSurface className="p-7">
            <div className="text-sm font-semibold">Signature traits</div>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              <Trait title="Dense coat" text="Insulation for cool mountain forests." />
              <Trait title="Ringed tail" text="Balance + warmth in cold weather." />
              <Trait title="Curved claws" text="Secure movement on bark and branches." />
              <Trait title="False thumb" text="A wrist bone used like a thumb for gripping." />
            </div>
          </GlassSurface>
        }
        right={
          <div className="grid gap-4">
            <GlassSurface className="p-7">
              <div className="text-sm font-semibold">Portrait card</div>
              <div className="mt-4 overflow-hidden rounded-3xl border border-emerald-200/10 bg-emerald-950/35 p-6">
                <div className="flex items-start justify-between">
                  <div>
                    <div className="text-xs text-emerald-100/70">SPECIES</div>
                    <div className="mt-1 text-2xl font-extrabold tracking-tight">
                      <ShinyText text="Ailurus fulgens" />
                    </div>
                    <div className="mt-2 text-sm text-emerald-50/70">
                      Rust-red fur, mask-like face markings, and a long, ringed tail — optimized for canopy life.
                    </div>
                  </div>
                </div>

                <div className="mt-5 grid gap-3 sm:grid-cols-3">
                  <div className="rounded-2xl border border-emerald-200/10 bg-emerald-950/35 p-3 text-xs text-emerald-50/70">
                    <div className="font-semibold text-emerald-50">Locomotion</div>
                    <div className="mt-1">Arboreal climbing + careful descents</div>
                  </div>
                  <div className="rounded-2xl border border-emerald-200/10 bg-emerald-950/35 p-3 text-xs text-emerald-50/70">
                    <div className="font-semibold text-emerald-50">Thermal</div>
                    <div className="mt-1">Coat + tail help in cold, damp forests</div>
                  </div>
                  <div className="rounded-2xl border border-emerald-200/10 bg-emerald-950/35 p-3 text-xs text-emerald-50/70">
                    <div className="font-semibold text-emerald-50">Diet</div>
                    <div className="mt-1">Mostly bamboo = energy thrift</div>
                  </div>
                </div>
              </div>
            </GlassSurface>

            <ImageSlot label="Description image" hint="Close-up face mask + tail rings detail shot"
            src = 'https://images.pexels.com/photos/146077/pexels-photo-146077.jpeg' />
          </div>
        }
      />
    </TopicShell>
  )
}

function TopicDistribution() {
  return (
    <TopicShell id="distribution" eyebrow="Where to find them" title="Distribution and habitat: Himalayas to SW China">
      <TwoCol
        left={
          <GlassSurface className="p-7">
            <div className="text-sm font-semibold">Range (broadly)</div>
            <p className="mt-2 text-sm text-emerald-50/75">
              Red pandas are native to the <strong>eastern Himalayas</strong> and <strong>southwestern China</strong>.
              They rely on temperate forests with bamboo understory, and tend to prefer cooler, humid climates.
            </p>

            <div className="mt-5 rounded-2xl border border-emerald-200/10 bg-emerald-950/35 p-4">
              <div className="text-sm font-semibold">Habitat checklist</div>
              <ul className="mt-2 list-disc pl-5 text-sm text-emerald-50/70">
                <Bullet>Temperate forest canopy + understory bamboo</Bullet>
                <Bullet>Cooler, humid microclimates</Bullet>
                <Bullet>Tree hollows / dense cover for resting and denning</Bullet>
                <Bullet>Connected corridors (fragmentation is costly)</Bullet>
              </ul>
            </div>
          </GlassSurface>
        }
        right={
          <div className="grid gap-4">
            <GlassSurface className="p-7">
              <div className="text-sm font-semibold">Canopy layers (stylized)</div>
              <div className="mt-4 rounded-3xl border border-emerald-200/10 bg-emerald-950/35 p-5">
                <Layer label="Upper canopy" note="resting + scanning" pct={82} />
                <div className="h-3" />
                <Layer label="Mid canopy" note="travel routes" pct={61} />
                <div className="h-3" />
                <Layer label="Understory" note="bamboo feeding" pct={90} />
                <div className="h-3" />
                <Layer label="Forest floor" note="rarely used" pct={24} />
              </div>
            </GlassSurface>

            <ImageSlot label="Range map" hint="Map with Eastern Himalayas + SW China highlighted" 
            src ='https://images.pexels.com/photos/9280181/pexels-photo-9280181.jpeg'/>
          </div>
        }
      />
    </TopicShell>
  )
}

function TopicBehaviour() {
  const items: AccordionItem[] = [
    {
      id: "spacing",
      title: "Social spacing",
      subtitle: "Mostly solitary; overlap via scent, not hugs.",
      chips: ["solitary", "territorial marking"],
      content: (
        <p>
          Red pandas generally keep distance from each other and maintain home ranges using scent marking. Encounters are
          more common during breeding periods.
        </p>
      ),
    },
    {
      id: "diet",
      title: "Diet and feeding",
      subtitle: "Bamboo-heavy diet with opportunistic extras.",
      chips: ["bamboo", "low calories", "energy conservation"],
      content: (
        <div className="grid gap-3">
          <p>
            Despite being carnivorans, red pandas eat mostly bamboo. Because bamboo is low in calories, they conserve
            energy by resting a lot and moving efficiently.
          </p>
          <div className="grid gap-3 sm:grid-cols-2">
            <Callout title="Main" text="Bamboo leaves and shoots" />
            <Callout title="Also" text="Fruit, insects, eggs (opportunistic)" />
          </div>
        </div>
      ),
    },
    {
      id: "comm",
      title: "Communication",
      subtitle: "Scent marking + soft vocalizations.",
      chips: ["scent glands", "chirps", "marking"],
      content: (
        <p>
          Communication often relies on scent marks (urine, gland secretions) and vocalizations like chirps or squeaks,
          especially around breeding or territorial contexts.
        </p>
      ),
    },
    {
      id: "repro",
      title: "Reproduction and parenting",
      subtitle: "Seasonal breeding; mothers prepare dens.",
      chips: ["seasonal breeding", "dens", "maternal care"],
      content: (
        <div className="grid gap-3">
          <p>
            Red pandas are seasonal breeders: mating often occurs in winter, with births later in spring/summer. Mothers
            prepare dens (tree hollows or sheltered sites) and provide intensive care to cubs.
          </p>
          <div className="rounded-2xl border border-emerald-200/10 bg-emerald-950/35 p-4 text-sm text-emerald-50/70">
            Cubs are dependent early on, and mothers may move them between den sites for safety.
          </div>
        </div>
      ),
    },
    {
      id: "mortality",
      title: "Mortality and diseases",
      subtitle: "Predation, parasites, and infectious disease risks (esp. in captivity).",
      chips: ["parasites", "infectious disease", "CDV risk"],
      content: (
        <div className="grid gap-3">
          <p>
            In the wild, predation and parasites contribute to mortality. In captive populations, infectious diseases
            can be a major concern; canine distemper virus (CDV) has been reported as a significant cause of death in
            some ex-situ groups.
          </p>
          <div className="grid gap-3 sm:grid-cols-2">
            <Callout title="Wild pressures" text="Predators + parasites + habitat stress" />
            <Callout title="Captive focus" text="Preventative veterinary care + biosecurity" />
          </div>
        </div>
      ),
    },
  ]

  return (
    <TopicShell id="behaviour" eyebrow="Life in the canopy" title="Behaviour and ecology: solo climbers with bamboo routines">
      <GlassSurface className="p-7">
        <div className="grid gap-4 lg:grid-cols-[1fr_0.9fr]">
          <Accordion items={items} />
          <div className="grid gap-4 lg:sticky lg:top-6">
            <ImageSlot label="Behaviour image" hint="Climbing / feeding bamboo / curled sleeping pose" src = 'https://images.pexels.com/photos/34136627/pexels-photo-34136627.jpeg'/>
            <ImageSlot label="Communication image" hint="Scent marking / face close-up / habitat context"  src = 'https://images.pexels.com/photos/30990826/pexels-photo-30990826.jpeg'/>
          </div>
        </div>
      </GlassSurface>
    </TopicShell>
  )
}

function TopicThreats() {
  return (
    <TopicShell id="threats" eyebrow="Pressure" title="Threats: habitat fragmentation, trapping, and disturbance">
      <TwoCol
        left={
          <GlassSurface className="p-7">
            <div className="text-sm font-semibold">Primary threats</div>
            <div className="mt-4 grid gap-3">
              <Threat title="Habitat loss + fragmentation" text="Deforestation, development, and reduced safe corridors." />
              <Threat title="Poaching + accidental trapping" text="Traps set for other wildlife can also kill red pandas." />
              <Threat title="Disturbance" text="Roads, livestock pressure, and dog presence increase risk." />
            </div>
          </GlassSurface>
        }
        right={
          <div className="grid gap-4">
            <GlassSurface className="p-7">
              <div className="text-sm font-semibold">Fragmentation visual</div>
              <div className="mt-4 rounded-3xl border border-emerald-200/10 bg-emerald-950/35 p-5">
                <BridgeRow label="Connected forest" broken={false} />
                <div className="h-3" />
                <BridgeRow label="Fragmented forest" broken={true} />
                <div className="mt-4 text-xs text-emerald-50/60">
                  Breaking corridors increases travel cost (bad for an animal living on low-calorie bamboo).
                </div>
              </div>
            </GlassSurface>

            <ImageSlot label="Threats image" hint="Fragmented forest / human edge / corridor illustration" 
            src='https://images.pexels.com/photos/30318559/pexels-photo-30318559.jpeg'/>
          </div>
        }
      />
    </TopicShell>
  )
}

function TopicConservation() {
  const tabs = [
    {
      id: "status",
      label: "Status",
      content: (
        <div className="grid gap-3 text-sm text-emerald-50/75">
          <p>
            The red panda is listed as <strong>Endangered</strong> on the IUCN Red List, and is protected in range
            countries. It is also listed under CITES Appendix I.
          </p>
          <div className="rounded-2xl border border-emerald-200/10 bg-emerald-950/35 p-4">
            <div className="text-sm font-semibold">Conservation focus</div>
            <ul className="mt-2 list-disc pl-5 text-sm text-emerald-50/70">
              <Bullet>Protect forest + bamboo understory</Bullet>
              <Bullet>Maintain connected habitat corridors</Bullet>
              <Bullet>Reduce trapping and dog-related risks</Bullet>
              <Bullet>Support community-based stewardship</Bullet>
            </ul>
          </div>
        </div>
      ),
    },
    {
      id: "community",
      label: "Community programs",
      content: (
        <div className="text-sm text-emerald-50/75">
          Community-based conservation in parts of Nepal, Bhutan, and India includes forest stewardship, awareness, and
          mitigation of local threats (including dog presence and accidental trapping).
        </div>
      ),
    },
    {
      id: "science",
      label: "Science tools",
      content: (
        <div className="grid gap-3">
          <Callout title="Genomics" text="Clarifies lineages and supports region-specific planning." />
          <Callout title="Monitoring" text="Camera traps, genetic scat analysis, and habitat mapping track trends." />
        </div>
      ),
    },
  ]

  return (
    <TopicShell id="conservation" eyebrow="Protection" title="Conservation: keeping the canopy connected">
      <TwoCol
        left={
          <GlassSurface className="p-7">
            <Tabs tabs={tabs} />
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="#overview"
                className="rounded-2xl bg-emerald-200 px-5 py-3 text-sm font-bold text-emerald-950 shadow-glow hover:opacity-95"
              >
                Back to top
              </a>
              <a
                href="#captivity"
                className="rounded-2xl border border-emerald-200/20 bg-emerald-950/35 px-5 py-3 text-sm font-semibold text-emerald-50 shadow-soft backdrop-blur-md hover:bg-emerald-950/45"
              >
                Continue to captivity
              </a>
            </div>
          </GlassSurface>
        }
        right={<ImageSlot label="Conservation image" hint="Ranger/community program, forest restoration, or signage" 
        src="https://images.pexels.com/photos/148132/pexels-photo-148132.jpeg"/>}
      />
    </TopicShell>
  )
}

function TopicCaptivity() {
  return (
    <TopicShell id="captivity" eyebrow="Ex-situ" title="In captivity: breeding programs, health, and seasonality">
      <TwoCol
        left={
          <GlassSurface className="p-7">
            <div className="text-sm font-semibold">What captivity helps with</div>
            <div className="mt-4">
              <AnimatedList
                stagger={0.06}
                items={[
                  <Row key="1" t="Insurance populations" d="Managed breeding can support species survival strategies." />,
                  <Row key="2" t="Education" d="Zoos help people care about forest ecosystems." />,
                  <Row key="3" t="Research" d="Nutrition, disease prevention, and reproduction benefit." />,
                ]}
              />
            </div>

            <div className="mt-6 rounded-2xl border border-emerald-200/10 bg-emerald-950/35 p-4 text-sm text-emerald-50/70">
              Captive management emphasizes enrichment, appropriate diet, and preventative veterinary care to reduce
              stress and disease vulnerability.
            </div>
          </GlassSurface>
        }
        right={
          <div className="grid gap-4">
            <GlassSurface className="p-7">
              <div className="text-sm font-semibold">Health highlights</div>
              <div className="mt-4 grid gap-3">
                <Callout title="Infectious disease" text="Ex-situ populations can be vulnerable; prevention is critical." />
                <Callout title="Canine distemper risk" text="CDV has been documented as a major cause of death in some settings." />
                <Callout title="Husbandry" text="Diet quality, enrichment, and low-stress enclosures matter." />
              </div>
            </GlassSurface>

            <ImageSlot label="Captivity image" hint="Enrichment setup / calm enclosure / zoo education moment" 
            src='https://images.pexels.com/photos/26799463/pexels-photo-26799463.jpeg'/>
          </div>
        }
      />
    </TopicShell>
  )
}

function TagCard({ k, v }: { k: string; v: string }) {
  return (
    <div className="rounded-2xl border border-emerald-200/10 bg-emerald-950/35 p-4">
      <div className="text-xs text-emerald-100/70">{k}</div>
      <div className="mt-1 text-base font-bold">{v}</div>
    </div>
  )
}

function Callout({ title, text }: { title: string; text: string }) {
  return (
    <div className="rounded-3xl border border-emerald-200/10 bg-emerald-950/35 p-5 shadow-soft backdrop-blur-md">
      <div className="text-sm font-semibold">{title}</div>
      <div className="mt-1 text-sm text-emerald-50/70">{text}</div>
      <div className="mt-4 h-10 w-full rounded-2xl bg-gradient-to-r from-emerald-400/15 via-lime-300/10 to-emerald-200/15" />
    </div>
  )
}

function Compare({ a, b }: { a: string; b: string }) {
  return (
    <div className="rounded-3xl border border-emerald-200/10 bg-emerald-950/35 p-6">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <div className="text-xs text-emerald-100/70">{a}</div>
          <div className="mt-2 grid gap-2 text-sm text-emerald-50/75">
            <span className="rounded-2xl border border-emerald-200/10 bg-emerald-950/35 px-3 py-2">Lighter facial tones</span>
            <span className="rounded-2xl border border-emerald-200/10 bg-emerald-950/35 px-3 py-2">Straighter profile</span>
          </div>
        </div>
        <div>
          <div className="text-xs text-emerald-100/70">{b}</div>
          <div className="mt-2 grid gap-2 text-sm text-emerald-50/75">
            <span className="rounded-2xl border border-emerald-200/10 bg-emerald-950/35 px-3 py-2">Darker coat</span>
            <span className="rounded-2xl border border-emerald-200/10 bg-emerald-950/35 px-3 py-2">Higher contrast tail rings</span>
          </div>
        </div>
      </div>
    </div>
  )
}

function Trait({ title, text }: { title: string; text: string }) {
  return (
    <div className="rounded-3xl border border-emerald-200/10 bg-emerald-950/35 p-5 shadow-soft backdrop-blur-md">
      <div className="text-sm font-semibold">{title}</div>
      <div className="mt-1 text-sm text-emerald-50/70">{text}</div>
    </div>
  )
}

function Badge({ text }: { text: string }) {
  return (
    <span className="inline-flex items-center justify-center rounded-full border border-emerald-200/12 bg-emerald-950/30 px-3 py-1 text-xs text-emerald-100/80">
      {text}
    </span>
  )
}

function Layer({ label, note, pct }: { label: string; note: string; pct: number }) {
  return (
    <div className="rounded-2xl border border-emerald-200/10 bg-emerald-950/35 p-4">
      <div className="flex items-center justify-between gap-3">
        <div>
          <div className="text-sm font-semibold">{label}</div>
          <div className="mt-1 text-xs text-emerald-50/65">{note}</div>
        </div>
        <div className="w-28">
          <div className="h-2 w-full overflow-hidden rounded-full bg-emerald-950/70 ring-1 ring-emerald-200/10">
            <div className="h-full bg-emerald-300/70" style={{ width: `${pct}%` }} />
          </div>
          <div className="mt-2 text-right text-[10px] text-emerald-100/60">{pct}%</div>
        </div>
      </div>
    </div>
  )
}

function Threat({ title, text }: { title: string; text: string }) {
  return (
    <div className="rounded-3xl border border-emerald-200/10 bg-emerald-950/35 p-5">
      <div className="text-sm font-semibold">{title}</div>
      <div className="mt-1 text-sm text-emerald-50/70">{text}</div>
    </div>
  )
}

function BridgeRow({ label, broken }: { label: string; broken: boolean }) {
  return (
    <div className="grid items-center gap-3 sm:grid-cols-[10rem_1fr]">
      <div className="text-xs text-emerald-100/70">{label}</div>
      <div className="flex items-center gap-2">
        <Dot />
        <span className={`h-1 flex-1 rounded-full ${broken ? "bg-emerald-200/10" : "bg-emerald-200/35"}`} />
        {broken && <span className="h-1 w-8 rounded-full bg-emerald-200/10" />}
        <Dot />
        <span className={`h-1 flex-1 rounded-full ${broken ? "bg-emerald-200/10" : "bg-emerald-200/35"}`} />
        <Dot />
      </div>
    </div>
  )
}

function Dot() {
  return <span className="h-3 w-3 rounded-full bg-emerald-200/45 ring-1 ring-emerald-200/20" />
}
