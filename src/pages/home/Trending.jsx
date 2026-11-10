import Icon from '../../components/Icon'
import { trendingItems } from './content'

function Trending() {
  const [featured, ...items] = trendingItems

  return (
    <section
      id="trending"
      className="flex flex-col gap-7 pt-12 pb-16 max-[640px]:pt-8 max-[640px]:pb-12"
      aria-labelledby="trending-title"
    >
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <span className="h-6 w-[3px] rounded-[2px] bg-brand" aria-hidden="true" />
          <h2
            id="trending-title"
            className="text-[30px] font-semibold text-ink max-[640px]:text-2xl"
          >
            Trending Now!
          </h2>
        </div>

        <a
          href="#trending"
          className="group flex items-center gap-[18px] text-sm font-medium text-ink-muted transition-colors hover:text-ink"
        >
          View all
          <span className="flex size-[34px] items-center justify-center rounded-full border border-line transition-colors group-hover:border-line-strong group-hover:bg-surface">
            <Icon name="nav-arrow-right" size={16} />
          </span>
        </a>
      </div>

      <div className="flex items-start gap-8 max-[1000px]:flex-col">
        <a
          href={featured.href}
          className="group flex w-[628px] flex-none flex-col gap-[18px] max-[1200px]:w-[55%] max-[1000px]:w-full"
        >
          <div className="h-[270px] w-full overflow-hidden rounded-xl bg-surface max-[640px]:h-[200px]">
            <img
              src={featured.image}
              alt={featured.title}
              className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
            />
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="text-[28px] leading-[1.35] font-semibold text-ink max-[640px]:text-[22px]">
              {featured.title}
            </h3>
            <p className="text-[15px] leading-[1.5] font-normal text-ink-muted">
              {featured.category}
            </p>
          </div>
        </a>

        <div className="flex min-w-0 flex-1 flex-col gap-[18px] max-[1000px]:w-full">
          {items.map((item) => (
            <a
              key={item.id}
              href={item.href}
              className="group flex items-center gap-[22px] border-b border-line pb-[18px] max-[640px]:gap-4"
            >
              <div className="h-[98px] w-[184px] flex-none overflow-hidden rounded-xl bg-surface max-[640px]:h-[72px] max-[640px]:w-[112px]">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                />
              </div>

              <div className="flex min-w-0 flex-1 flex-col gap-2">
                <h3 className="text-xl leading-[1.35] font-semibold text-ink max-[640px]:text-base">
                  {item.title}
                </h3>
                <p className="text-[15px] leading-[1.5] font-normal text-ink-muted max-[640px]:text-sm">
                  {item.category}
                </p>
              </div>

              <span className="flex size-8 flex-none items-center justify-center rounded-full bg-surface text-ink transition-colors group-hover:bg-surface-hover max-[640px]:hidden">
                <Icon name="nav-arrow-right" size={16} />
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Trending
