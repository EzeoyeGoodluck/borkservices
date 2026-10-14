import BorkLogo from './BorkLogo'

// Header and footer logo. Pass `white` on dark backgrounds.
export default function Logo({ height = 44, white = false }) {
  return <BorkLogo height={height} wordmark={white ? '#ffffff' : '#0b1c30'} />
}
