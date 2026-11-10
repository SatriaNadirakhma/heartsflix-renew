import Icon from '../Icon'

const mediaActions = [
  { icon: 'heart', label: 'Like' },
  { icon: 'chat-bubble', label: 'Comment' },
  { icon: 'share-ios', label: 'Share' },
]

function TikTok({ post }) {
  return (
    <article className="group flex h-full flex-col gap-3 rounded-xl border-[0.5px] border-[#292c30] bg-[#111315] p-4">
      <header className="flex items-center justify-between">
        <div className="flex items-center gap-1.5 text-[#9fcbcb]">
          <Icon name="tiktok" size={15} />
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
        <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-black/35" />

        <div className="relative flex h-full flex-col justify-between p-3">
          <div className="flex items-center justify-between">
            <span className="text-[9px] font-semibold tracking-[0.06em] text-[#cdd3db]/60">
              {post.mediaLabel}
            </span>
            <span className="text-[10px] font-medium text-white">
              {post.mediaMeta}
            </span>
          </div>

          <button
            type="button"
            aria-label="Play video"
            className="absolute top-1/2 left-1/2 flex size-9 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-black/45 text-white backdrop-blur-sm transition-colors hover:bg-black/65"
          >
            <Icon name="play-solid" size={15} />
          </button>

          <div className="flex items-end justify-between">
            <span className="flex items-center gap-1.5 text-[10px] font-medium text-white">
              <Icon name="play" size={13} />
              Play video
            </span>

            <div className="flex flex-col items-center gap-2.5 text-white">
              {mediaActions.map((action) => (
                <button
                  key={action.label}
                  type="button"
                  aria-label={`${action.label} this video`}
                  className="flex flex-col items-center gap-0.5 transition-opacity hover:opacity-70"
                >
                  <Icon name={action.icon} size={16} />
                  <span className="text-[8px]">{action.label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-1.5">
        <h3 className="text-sm font-medium text-white">{post.title}</h3>
        <p className="line-clamp-2 text-xs leading-[1.45] text-[#b1b5bc]">
          {post.description}
        </p>
      </div>
    </article>
  )
}

export default TikTok
