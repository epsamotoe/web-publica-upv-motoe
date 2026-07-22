import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Nuestra Historia | UPV MotoE Team',
  description: 'Descubre la historia del equipo UPV MotoE de la Universitat Politècnica de València. Nuestro recorrido, logros y evolución en la competición de motos eléctricas.',
}

export default function HistoriaLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
