import Button from './Button'

function AboutButton({ children = 'About', ...props }) {
  return (
    <Button variant="secondary" icon="info-circle" {...props}>
      {children}
    </Button>
  )
}

export default AboutButton
