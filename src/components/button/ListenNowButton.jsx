import Button from './Button'

function ListenNowButton({ children = 'Listen Now', ...props }) {
  return (
    <Button variant="primary" icon="headset" {...props}>
      {children}
    </Button>
  )
}

export default ListenNowButton
