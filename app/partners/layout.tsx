import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Patrocinadores y Partners | UPV MotoE Team',
  description: 'Conoce a los patrocinadores y partners que hacen posible el proyecto UPV MotoE. Únete a nuestro equipo de competición de motos eléctricas y apoya la innovación.',
}

export default function PartnersLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
