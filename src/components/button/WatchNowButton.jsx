import Button from './Button'

function WatchNowButton({ children = 'Watch Now', ...props }) {
  return (
    <Button variant="primary" icon="play-solid" {...props}>
      {children}
    </Button>
  )
}

export default WatchNowButton
