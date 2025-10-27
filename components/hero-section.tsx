import React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { BookOpen } from 'lucide-react'
import { cn } from '@/lib/utils'

export default function HeroSection() {
  return (
    <section className="py-40">
      <div className="relative z-10 mx-auto w-full max-w-2xl px-6 lg:px-0">
        <div className="relative">
          <MistKitLogo />
          <h1 className="mt-16 max-w-xl text-balance text-5xl font-medium">
            The Note App
          </h1>

          <p className="text-muted-foreground mb-6 mt-4 text-balance text-xl">
            The Note App is a simple note app that allows you to create and manage your notes.
          </p>

          <div className="flex flex-col items-center gap-2 sm:flex-row">
            <Button
              asChild
              variant="outline"
              className="w-full sm:w-auto border-black text-black dark:text-white hover:bg-black hover:text-white"
            >
              <Link href="/dashboard">
                <span className="whitespace-nowrap">Get Started</span>
              </Link>
            </Button>

            <Button asChild variant="ghost" className="w-full sm:w-auto">
              <Link href="/dashboard">
                <span className="whitespace-nowrap">View Demo</span>
              </Link>
            </Button>
          </div>
        </div>

        {/* Hero Image */}
        <div className="relative -mr-56 mt-8 overflow-hidden px-2 sm:mr-0 sm:mt-12 md:mt-20">
          <div
            aria-hidden
            className="bg-linear-to-b to-background absolute inset-0 z-10 from-transparent from-35%"
          />
          <div className="inset-shadow-2xs ring-background dark:inset-shadow-white/20 bg-background relative mx-auto max-w-6xl overflow-hidden rounded-2xl border p-2 shadow-lg shadow-zinc-950/15 ring-1">
            <Image
              className="bg-background aspect-15/7 relative hidden rounded-2xl dark:block"
              src="/dark1.png"
              alt="app screen"
              width="2700"
              height="1440"
            />
            <Image
              className="z-2 border-border/25 aspect-15/8 relative rounded-2xl border dark:hidden"
              src="/light1.png"
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
      'relative flex size-9 items-center justify-center translate-y-0.5 rounded-[var(--radius)] border border-background bg-gradient-to-b from-yellow-300 to-orange-600 shadow-lg shadow-black/20 ring-1 ring-black/10',
      className
    )}
  >
    <BookOpen className="mask-b-from-25% size-6 fill-white stroke-white drop-shadow-sm" />
    <BookOpen className="absolute inset-0 m-auto size-6 fill-white stroke-white opacity-65 drop-shadow-sm" />
    <div className="absolute inset-2 z-10 m-auto h-[18px] w-px translate-y-px rounded-full bg-black/10" />
  </div>
)
