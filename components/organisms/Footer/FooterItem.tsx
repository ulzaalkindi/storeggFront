import Link from 'next/link'

interface FooterItemProps {
  href?: string
  text: string
}

export default function FooterItem(props: Partial<FooterItemProps>) {
  const { href = '#', text } = props
  return (
    <li className="mb-6">
      <Link href={href}>
        <a className="text-lg color-palette-1 text-decoration-none">{text}</a>
      </Link>
    </li>
  )
}
