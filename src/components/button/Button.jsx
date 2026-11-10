import Icon from '../Icon'

const variants = {
  primary:
    'bg-brand px-[22px] font-semibold text-brand-ink hover:bg-brand-hover',
  secondary:
    'border border-white/40 bg-[#0a1119]/40 px-5 font-medium text-ink hover:bg-white/10',
}

function Button({ variant = 'primary', icon, href = '#', className = '', children, ...props }) {
  const variantClass = variants[variant] ?? variants.primary

  return (
    <a
      href={href}
      className={`inline-flex h-[52px] items-center gap-2.5 rounded-lg text-base transition-colors ${variantClass} ${className}`}
      {...props}
    >
      {icon && <Icon name={icon} size={24} className={variant === 'secondary' ? 'text-icon' : ''} />}
      <span>{children}</span>
    </a>
  )
}

export default Button
