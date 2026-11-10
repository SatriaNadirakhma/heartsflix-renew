import Icon from '../Icon'

function Instagram({ post }) {
  return (
    <article className="group flex h-full flex-col gap-3 rounded-xl border-[0.5px] border-[#292c30] bg-[#111315] p-4">
      <header className="flex items-center justify-between">
        <div className="flex items-center gap-1.5 text-[#cca9be]">
          <Icon name="instagram" size={15} />
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

      <div className="relative h-[200px] overflow-hidden rounded-md bg-[#253645] max-[1100px]:h-[230px] max-[640px]:h-[200px]">
        <img
          src={post.image}
          alt=""
          className="absolute inset-0 h-full w-full object-cover opacity-80 transition-transform duration-300 group-hover:scale-[1.03]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-black/35" />

        <div className="relative flex h-full flex-col justify-between p-3">
          <div className="flex items-center justify-between">
            <span className="text-[9px] font-semibold tracking-[0.06em] text-[#cdd3db]/60">
              {post.mediaLabel}
            </span>
            <span className="text-[10px] font-medium text-white">
              {post.mediaMeta}
            </span>
          </div>

          <div className="flex items-center justify-center gap-1.5">
            {[0, 1, 2].map((dot) => (
              <span
                key={dot}
                className={`size-1.5 rounded-full ${
                  dot === 0 ? 'bg-white' : 'bg-white/35'
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-1.5">
        <h3 className="text-sm font-medium text-white">{post.title}</h3>
        <p className="line-clamp-2 text-xs leading-[1.45] text-[#b1b5bc]">
          {post.description}
        </p>
      </div>

      <div className="mt-auto flex items-center gap-4 pt-1 text-icon">
        <button
          type="button"
          aria-label="Like this post"
          className="transition-colors hover:text-ink"
        >
          <Icon name="heart" size={17} />
        </button>
        <button
          type="button"
          aria-label="Comment on this post"
          className="transition-colors hover:text-ink"
        >
          <Icon name="chat-bubble" size={17} />
        </button>
        <button
          type="button"
          aria-label="Share this post"
          className="transition-colors hover:text-ink"
        >
          <Icon name="share-ios" size={17} />
        </button>
        <button
          type="button"
          aria-label="Save this post"
          className="ml-auto transition-colors hover:text-ink"
        >
          <Icon name="bookmark" size={17} />
        </button>
      </div>
    </article>
  )
}

export default Instagram
