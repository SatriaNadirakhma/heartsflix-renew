import Icon from '../../components/Icon'
import Facebook from '../../components/social-media/Facebook'
import Instagram from '../../components/social-media/Instagram'
import TikTok from '../../components/social-media/TikTok'
import Weverse from '../../components/social-media/Weverse'
import X from '../../components/social-media/X'
import { socialMediaUpdates } from './content'

const templates = {
  facebook: Facebook,
  instagram: Instagram,
  tiktok: TikTok,
  x: X,
  weverse: Weverse,
}

function SocialMedia() {
  return (
    <section
      id="social-media"
      className="-mx-14 flex flex-col gap-7 bg-surface px-14 py-12 max-[1100px]:-mx-8 max-[1100px]:px-8 max-[640px]:-mx-5 max-[640px]:px-5"
      aria-labelledby="social-media-title"
    >
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <span
            className="h-6 w-[3px] rounded-[2px] bg-brand"
            aria-hidden="true"
          />
          <h2
            id="social-media-title"
            className="text-[30px] font-semibold text-ink max-[640px]:text-2xl"
          >
            Social Media Update
          </h2>
        </div>

        <a
          href="#social-media"
          className="group flex shrink-0 items-center gap-[18px] text-sm font-medium whitespace-nowrap text-ink-muted transition-colors hover:text-ink"
        >
          View all
          <span className="flex size-[34px] items-center justify-center rounded-full border border-line transition-colors group-hover:border-line-strong group-hover:bg-surface">
            <Icon name="nav-arrow-right" size={16} />
          </span>
        </a>
      </div>

      <div className="grid grid-cols-5 items-stretch gap-5 max-[1280px]:grid-cols-3 max-[900px]:grid-cols-2 max-[640px]:grid-cols-1">
        {socialMediaUpdates.map((post) => {
          const Template = templates[post.id]

          if (!Template) return null

          return <Template key={post.id} post={post} />
        })}
      </div>
    </section>
  )
}

export default SocialMedia
