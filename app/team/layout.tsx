import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'El Equipo | UPV MotoE Team',
  description: 'Conoce al UPV MotoE, el equipo oficial de competición de motos eléctricas de la UPV. Descubre quiénes forman nuestro equipo y nuestra pasión por la innovación en MotoStudent.',
}

export default function TeamLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
