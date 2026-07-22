import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contacto | UPV MotoE Team',
  description: 'Ponte en contacto con el equipo UPV MotoE. Ya seas un posible patrocinador, estudiante o simplemente un apasionado de las motos eléctricas, ¡habla con nosotros!',
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
