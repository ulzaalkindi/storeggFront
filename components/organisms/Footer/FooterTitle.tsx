import React from 'react'

interface FooterTitleProps {
  title: string
}
export default function FooterTitle(props: FooterTitleProps) {
  const { title } = props
  return <p className="text-lg fw-semibold color-palette-1 mb-12">{title}</p>
}
