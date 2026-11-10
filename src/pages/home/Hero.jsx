import { useState } from 'react'
import {
  AboutButton,
  ListenNowButton,
  WatchNowButton,
} from '../../components/button'
import Icon from '../../components/Icon'
import { heroSlides } from './content'

const buttonComponents = {
  watchNow: WatchNowButton,
  listenNow: ListenNowButton,
  about: AboutButton,
}

function Hero() {
  const [activeIndex, setActiveIndex] = useState(0)
  const slide = heroSlides[activeIndex]
  const totalSlides = heroSlides.length

  const nextSlide = () => setActiveIndex((index) => (index + 1) % totalSlides)

  return (
    <section
      className="relative flex min-h-[600px] w-full flex-col justify-center overflow-hidden rounded-[20px] bg-surface p-12 max-[900px]:min-h-[560px] max-[640px]:min-h-[520px] max-[640px]:p-6"
      aria-label="Featured slide"
    >
      <img
        className="absolute inset-0 h-full w-full object-cover"
        src={slide.image}
        alt={slide.imageAlt}
        style={{ objectPosition: slide.imagePosition }}
      />

      <div
        className="absolute inset-0 bg-[linear-gradient(90deg,rgba(6,11,18,0.96)_0%,rgba(6,11,18,0.80)_48%,rgba(6,11,18,0)_100%)]"
        aria-hidden="true"
      />
      <div
        className="absolute inset-x-0 bottom-0 h-[200px] bg-[linear-gradient(180deg,rgba(8,10,13,0)_0%,rgba(8,10,13,0.73)_100%)]"
        aria-hidden="true"
      />

      <div className="relative z-10 flex w-full max-w-[620px] flex-col gap-6">
        <div className="flex flex-wrap items-start gap-2">
          {slide.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-[5px] border border-white/25 bg-white/[0.08] px-3 py-1.5 text-xs font-medium text-ink"
            >
              {tag}
            </span>
          ))}
        </div>

        <h1 className="text-[62px] leading-[1.06] font-semibold text-ink max-[900px]:text-5xl max-[640px]:text-4xl">
          {slide.title}
        </h1>

        <p className="max-w-[470px] text-lg leading-[1.6] font-normal text-hero-copy max-[640px]:text-base">
          {slide.description}
        </p>

        <div className="flex flex-wrap items-center gap-3 pt-2">
          {slide.buttons.map((button) => {
            const ButtonComponent = buttonComponents[button.type]

            if (!ButtonComponent) return null

            return (
              <ButtonComponent key={button.label} href={button.href}>
                {button.label}
              </ButtonComponent>
            )
          })}
        </div>
      </div>

      <button
        type="button"
        onClick={nextSlide}
        className="absolute top-1/2 right-8 z-10 flex size-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/30 bg-[#080a0d]/40 text-ink transition-colors hover:bg-[#080a0d]/70 max-[640px]:hidden"
        aria-label="Next slide"
      >
        <Icon name="nav-arrow-right" size={20} />
      </button>

      <div className="absolute right-8 bottom-8 z-10 flex items-center gap-[7px] max-[640px]:right-6 max-[640px]:bottom-6">
        <span className="text-xs font-normal text-ink">
          {String(activeIndex + 1).padStart(2, '0')}
        </span>

        {heroSlides.map((item, index) => (
          <button
            key={item.id}
            type="button"
            onClick={() => setActiveIndex(index)}
            className={
              index === activeIndex
                ? 'h-1.5 w-8 rounded-full bg-brand transition-all'
                : 'size-1.5 rounded-full bg-white/40 transition-all hover:bg-white/70'
            }
            aria-label={`Go to slide ${index + 1}`}
            aria-current={index === activeIndex ? 'true' : undefined}
          />
        ))}

        <span className="text-xs font-normal text-ink-muted">
          {String(totalSlides).padStart(2, '0')}
        </span>
      </div>
    </section>
  )
}

export default Hero
