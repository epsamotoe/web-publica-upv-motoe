import { Footer } from "@/components/footer"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export const metadata = {
    title: "Política de Cookies | UPV MotoE",
    description: "Explicación sobre el uso de cookies y rastreadores en la interfaz del equipo UPV MotoE.",
}

export default function CookiesPage() {
    return (
        <main className="min-h-screen bg-neutral-950 text-neutral-300 pt-32 pb-16 relative overflow-hidden">
            <div className="absolute inset-0 bg-grid-white/[0.02] z-0 pointer-events-none" />

            <div className="max-w-3xl mx-auto px-6 relative z-10">
                <Link href="/" className="inline-flex items-center text-sm text-gray-500 hover:text-[#00cc88] transition-colors mb-8">
                    <ArrowLeft className="w-4 h-4 mr-2" /> Volver al Inicio
                </Link>

                <h1 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl font-black text-white mb-8 border-b border-white/10 pb-4">
                    POLÍTICA DE COOKIES
                </h1>

                <div className="space-y-8 text-base/relaxed">
                    <section>
                        <h2 className="text-xl font-bold text-white mb-4">¿Qué son las cookies?</h2>
                        <p>
                            Una cookie es un pequeño fichero de texto que se descarga en su navegador al acceder a determinadas páginas web. Permiten a una página web, entre otras cosas, almacenar y recuperar información sobre los hábitos de navegación de un usuario o de su equipo y, dependiendo de la información vital para la interfaz que contengan y de la forma en que utilice su equipo, pueden utilizarse para reconocer al usuario o preservar personalizaciones entre sesiones.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-white mb-4">¿Qué tipos de Cookies utiliza UPV MotoE?</h2>
                        <p className="mb-4">
                            La página web del proyecto asume un enfoque de impacto minimalista. Actualmente procesamos de manera local:
                        </p>

                        <div className="space-y-4">
                            <div className="border border-white/10 rounded-md p-4 bg-white/[0.02]">
                                <h3 className="font-bold text-[#00cc88] mb-2">Cookies Técnicas / Funcionales (Locales)</h3>
                                <p className="text-sm">
                                    Son las memorias requeridas para recordar que se han disuelto elementos flotantes de confirmación, así como el idioma seleccionado a nivel global (gracias a <code>i18n</code>). Estos indicadores, como <code>motoe_cookies_accepted</code> o <code>locale</code>, persisten en el cliente sin requerir seguimiento hacia un servidor base de datos y no conllevan cesión a externos.
                                </p>
                            </div>

                            <div className="border border-white/10 rounded-md p-4 bg-white/[0.02]">
                                <h3 className="font-bold text-[#00cc88] mb-2">Cookies Analíticas</h3>
                                <p className="text-sm">
                                    Registros generados por las dependencias de despliegue nativo (Vercel Analytics o similar) enfocadas a contar visitas globales y páginas de error netas, actuando bajo su propia estructura automatizada y agregada sin ligarse directamente a IP ni nombres con trazabilidad penal individualizada de visitantes.
                                </p>
                            </div>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-white mb-4">Revocación y eliminación de cookies</h2>
                        <p>
                            Usted puede permitir, bloquear o eliminar las cookies instaladas en su equipo mediante la configuración de las opciones del navegador web instalado en su ordenador o dispositivo móvil. En el caso en que las bloquee, es posible que ciertos servicios que necesitan su uso fundamental (como el ajuste de idioma transnacional) queden deshabilitados.
                        </p>
                    </section>
                </div>
            </div>

            <div className="mt-32 border-t border-white/5 pt-12">
                <Footer />
            </div>
        </main>
    )
}
