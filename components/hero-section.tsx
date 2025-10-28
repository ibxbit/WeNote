import React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { BookOpen } from 'lucide-react'
import { cn } from '@/lib/utils'

export default function HeroSection() {
  return (
    <section className="py-40">
      <div className="relative z-10 mx-auto w-full px-6 lg:px-0">
        <div className="relative text-center">
          <h1 className="mt-16 text-6xl font-extrabold sm:text-7xl md:text-8xl">
            Meet Your Dream
            <div className="mt-4 flex items-center justify-center gap-6">
              <span>Note</span>
              <MistKitLogo />
              <span>Taker</span>
            </div>
          </h1>

          <p className="text-muted-foreground mb-6 mt-6 text-balance text-lg sm:text-xl">
            Uplink manages follow-ups, scheduling, and tasks
            <br className="hidden sm:inline" />
            throughout your day not just meetings.
          </p>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              asChild
              variant="default"
              className="w-full sm:w-auto bg-black text-white hover:bg-black/90 dark:bg-white dark:text-black dark:hover:bg-white/90 px-8 py-6"
            >
              <Link href="/dashboard">
                <span className="whitespace-nowrap">Book a Call</span>
              </Link>
            </Button>

            <Button
              asChild
              variant="outline"
              className="w-full sm:w-auto px-8 py-6 border-transparent bg-neutral-100 hover:bg-neutral-200 dark:bg-neutral-800 dark:hover:bg-neutral-700"
            >
              <Link href="/dashboard">
                <span className="whitespace-nowrap">Explore More</span>
              </Link>
            </Button>
          </div>
        </div>

        {/* Hero Image */}
        <div className="relative mx-auto mt-8 max-w-6xl overflow-hidden px-2 sm:mt-12 md:mt-20">
          <div
            aria-hidden
            className="bg-linear-to-b to-background absolute inset-0 z-10 from-transparent from-35%"
          />
          <div className="inset-shadow-2xs ring-background dark:inset-shadow-white/20 bg-background relative mx-auto max-w-6xl overflow-hidden rounded-2xl border p-2 shadow-lg shadow-zinc-950/15 ring-1">
            <Image
              className="bg-background aspect-15/7 relative hidden rounded-2xl dark:block"
              src="/hiL.png"
              alt="app screen"
              width="2700"
              height="1440"
            />
            <Image
              className="z-2 border-border/25 aspect-15/8 relative rounded-2xl border dark:hidden"
              src="/hiD.png"
              alt="app screen"
              width="2700"
              height="1440"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

const MistKitLogo = ({ className }: { className?: string }) => (
  <div
    aria-hidden
    className={cn(
      'relative flex size-16 items-center justify-center rounded-xl border border-background bg-zinc-800 shadow-xl shadow-black/20 ring-1 ring-black/10 dark:bg-black rotate-12',
      className
    )}
  >
    <span className='text-3xl' role="img" aria-label="Note Taker Icon">
      🗃️
    </span>
  </div>
)