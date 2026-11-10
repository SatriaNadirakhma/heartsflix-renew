import album from 'iconoir/icons/regular/album.svg?raw'
import arrowDown from 'iconoir/icons/regular/arrow-down.svg?raw'
import arrowUp from 'iconoir/icons/regular/arrow-up.svg?raw'
import bell from 'iconoir/icons/regular/bell.svg?raw'
import bookmark from 'iconoir/icons/regular/bookmark.svg?raw'
import chatBubble from 'iconoir/icons/regular/chat-bubble.svg?raw'
import discord from 'iconoir/icons/regular/discord.svg?raw'
import graphUp from 'iconoir/icons/regular/graph-up.svg?raw'
import headset from 'iconoir/icons/regular/headset.svg?raw'
import heart from 'iconoir/icons/regular/heart.svg?raw'
import infoCircle from 'iconoir/icons/regular/info-circle.svg?raw'
import instagram from 'iconoir/icons/regular/instagram.svg?raw'
import moreHoriz from 'iconoir/icons/regular/more-horiz.svg?raw'
import navArrowRight from 'iconoir/icons/regular/nav-arrow-right.svg?raw'
import play from 'iconoir/icons/regular/play.svg?raw'
import playSolid from 'iconoir/icons/solid/play.svg?raw'
import repeat from 'iconoir/icons/regular/repeat.svg?raw'
import search from 'iconoir/icons/regular/search.svg?raw'
import shareIos from 'iconoir/icons/regular/share-ios.svg?raw'
import tiktok from 'iconoir/icons/regular/tiktok.svg?raw'
import user from 'iconoir/icons/regular/user.svg?raw'
import x from 'iconoir/icons/regular/x.svg?raw'
import youtube from 'iconoir/icons/regular/youtube.svg?raw'

const icons = {
  album,
  'arrow-down': arrowDown,
  'arrow-up': arrowUp,
  bell,
  bookmark,
  'chat-bubble': chatBubble,
  discord,
  'graph-up': graphUp,
  headset,
  heart,
  'info-circle': infoCircle,
  instagram,
  'more-horiz': moreHoriz,
  'nav-arrow-right': navArrowRight,
  play,
  'play-solid': playSolid,
  repeat,
  search,
  'share-ios': shareIos,
  tiktok,
  user,
  x,
  youtube,
}

function Icon({ name, size = 24, className = '', label }) {
  const svg = icons[name]

  if (!svg) return null

  return (
    <span
      className={`inline-flex shrink-0 [&>svg]:block [&>svg]:h-full [&>svg]:w-full${className ? ` ${className}` : ''}`}
      style={{ width: `${size}px`, height: `${size}px` }}
      role={label ? 'img' : undefined}
      aria-label={label}
      aria-hidden={label ? undefined : true}
      dangerouslySetInnerHTML={{ __html: svg }}
    />
  )
}

export default Icon
