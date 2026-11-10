import Icon from '../Icon'

const actions = [
  { icon: 'thumbs-up', label: 'Like' },
  { icon: 'chat-bubble', label: 'Comment' },
  { icon: 'share-ios', label: 'Share' },
]

function Facebook({ post }) {
  return (
    <article className="group flex h-full flex-col gap-3 rounded-xl border-[0.5px] border-[#292c30] bg-[#111315] p-4">
      <header className="flex items-center justify-between">
        <div className="flex items-center gap-1.5 text-[#6ba7ff]">
          <Icon name="facebook" size={15} />
          <span className="text-xs font-semibold">{post.platform}</span>
        </div>
        <button
          type="button"
          aria-label={`More options for ${post.platform} post`}
          className="text-icon transition-colors hover:text-ink"
        >
          <Icon name="more-horiz" size={18} />
        </button>
      </header>

      <div className="flex items-center justify-between">
        <span className="text-[13px] font-semibold text-white">
          {post.author}
        </span>
        <span className="text-[11px] text-[#787f89]">{post.time}</span>
      </div>

      <div className="flex flex-col gap-2">
        <h3 className="text-[15px] leading-snug font-medium text-white">
          {post.title}
        </h3>
        <p className="line-clamp-3 text-[13px] leading-[1.5] text-[#b1b5bc]">
          {post.description}
        </p>
      </div>

      <div className="relative h-[200px] overflow-hidden rounded-md bg-[#2a3442] max-[1100px]:h-[230px] max-[640px]:h-[200px]">
        <img
          src={post.image}
          alt=""
          className="absolute inset-0 h-full w-full object-cover opacity-80 transition-transform duration-300 group-hover:scale-[1.03]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/5 to-black/30" />

        <div className="relative p-3">
          <span className="text-[9px] font-semibold tracking-[0.06em] text-[#cdd3db]/60">
            {post.mediaLabel}
          </span>
        </div>
      </div>

      <div className="mt-auto flex flex-col gap-2.5">
        <div className="flex items-center justify-between text-[11px] text-[#787f89]">
          <span className="flex items-center gap-1.5">
            <span className="flex size-4 items-center justify-center rounded-full bg-[#1877f2] text-white">
              <Icon name="thumbs-up" size={10} />
            </span>
            {post.reactions}
          </span>
          <span>
            {post.comments} comments · {post.shares} shares
          </span>
        </div>

        <div className="flex items-center justify-between border-t border-[#292c30] pt-2.5 text-[#b1b5bc]">
          {actions.map((action) => (
            <button
              key={action.label}
              type="button"
              aria-label={`${action.label} this post`}
              className="flex items-center gap-1 text-[11px] transition-colors hover:text-ink"
            >
              <Icon name={action.icon} size={16} />
              {action.label}
            </button>
          ))}
        </div>
      </div>
    </article>
  )
}

export default Facebook
