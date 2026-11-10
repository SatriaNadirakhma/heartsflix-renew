import wallpaper from '../../assets/wallpaper.jpg'

export const categories = [
  { id: 'all', label: 'All' },
  { id: 'trending', label: 'Trending Now!' },
  { id: 'social-media', label: 'Social Media Update' },
  { id: 'behind-the-scenes', label: 'Behind The Scenes' },
  { id: 'vlogs', label: 'Vlogs' },
  { id: 'performances', label: 'Performances' },
]

export const trendingItems = [
  {
    id: 'sonoma-themes',
    title: 'The New Themes of MacOS Sonoma',
    category: 'Wallpaper',
    image: wallpaper,
    href: '#trending-sonoma-themes',
  },
  {
    id: 'sonoma-gradient',
    title: 'A Closer Look at the Sonoma Gradient',
    category: 'Wallpaper',
    image: wallpaper,
    href: '#trending-sonoma-gradient',
  },
  {
    id: 'behind-the-lens',
    title: 'Behind the Lens: Shooting the New Wallpaper',
    category: 'Behind The Scenes',
    image: wallpaper,
    href: '#trending-behind-the-lens',
  },
  {
    id: 'sonoma-ambience',
    title: 'Sonoma Ambience: The Making of the Score',
    category: 'Music',
    image: wallpaper,
    href: '#trending-sonoma-ambience',
  },
]

export const socialMediaUpdates = [
  {
    id: 'instagram',
    platform: 'Instagram',
    author: 'Bias 01',
    time: '2h ago',
    mediaLabel: 'PHOTO CAROUSEL',
    mediaMeta: '1 / 3',
    title: 'A little behind the scenes.',
    description: 'Small moments from a long studio day.',
    image: wallpaper,
  },
  {
    id: 'tiktok',
    platform: 'TikTok',
    author: 'Bias 01',
    time: '3h ago',
    mediaLabel: 'SHORT VIDEO',
    mediaMeta: '0:24',
    title: 'One more take.',
    description: 'A quick moment from the practice room.',
    image: wallpaper,
  },
  {
    id: 'x',
    platform: 'X',
    author: 'Bias 01',
    time: '4h ago',
    mediaLabel: 'ATTACHED PHOTO',
    title: 'A little reminder for today',
    description:
      'Some days are for moving forward. Some are for taking a breath. Both count. Hope you find a little time for yourself today.',
    image: wallpaper,
  },
  {
    id: 'weverse',
    platform: 'Weverse',
    author: 'Bias 01',
    time: '5h ago',
    mediaLabel: 'COMMUNITY PHOTO',
    title: 'A moment to check in',
    description: 'A quiet evening and a warm cup of tea. How was your day?',
    image: wallpaper,
  },
]

export const heroSlides = [
  {
    id: 'sonoma-wallpaper',
    image: wallpaper,
    imageAlt: 'The MacOS Sonoma wallpaper',
    imagePosition: 'center',
    tags: ['Music', 'Wallpaper'],
    title: 'The MacOS Sonoma Wallpaper',
    description:
      'Meet the beautiful, magneficent, and the image of the new MacOS 15 Sonoma.',
    buttons: [
      { type: 'watchNow', label: 'Watch Now', href: '#watch-now' },
      { type: 'about', label: 'About Wallpaper', href: '#about-wallpaper' },
    ],
  },
  {
    id: 'midnight-sessions',
    image: wallpaper,
    imageAlt: 'Midnight Sessions playlist wallpaper',
    imagePosition: 'center 35%',
    tags: ['Music', 'Playlist'],
    title: 'Midnight Sessions, Vol. 01',
    description:
      'A late-night collection of soft melodies and slow rhythms, curated for the quiet hours.',
    buttons: [
      { type: 'listenNow', label: 'Listen Now', href: '#listen-now' },
      { type: 'about', label: 'About Playlist', href: '#about-playlist' },
    ],
  },
]
