import { Footer } from "@/components/footer"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export const metadata = {
    title: "Aviso Legal | UPV MotoE",
    description: "Información legal y condiciones de uso del sitio web del equipo UPV MotoE.",
}

export default function AvisoLegalPage() {
    return (
        <main className="min-h-screen bg-neutral-950 text-neutral-300 pt-32 pb-16 relative overflow-hidden">
            {/* Background Layer */}
            <div className="absolute inset-0 bg-grid-white/[0.02] z-0 pointer-events-none" />

            <div className="max-w-3xl mx-auto px-6 relative z-10">
                <Link href="/" className="inline-flex items-center text-sm text-gray-500 hover:text-[#00cc88] transition-colors mb-8">
                    <ArrowLeft className="w-4 h-4 mr-2" /> Volver al Inicio
                </Link>

                <h1 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl font-black text-white mb-8 border-b border-white/10 pb-4">
                    AVISO LEGAL
                </h1>

                <div className="space-y-8 text-base/relaxed">
                    <section>
                        <h2 className="text-xl font-bold text-white mb-4">1. Datos Identificativos</h2>
                        <p className="mb-4">
                            En cumplimiento con el deber de información recogido en el artículo 10 de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y del Comercio Electrónico (LSSICE), a continuación se reflejan los siguientes datos generales del titular del sitio web:
                        </p>
                        <ul className="list-disc pl-6 space-y-2 text-neutral-400">
                            <li><strong>Titular:</strong> UPV MotoE (Proyecto de Generación Espontánea)</li>
                            <li><strong>Entidad Matriz:</strong> Universitat Politècnica de València - Campus de Alcoy</li>
                            <li><strong>Dirección:</strong> Pabellón Deportivo Georgina Blanes. C/ Alarcón, 1, 03801 Alcoy (Alicante)</li>
                            <li><strong>Email de contacto:</strong> contacto@upvmotoe.com</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-white mb-4">2. Usuarios</h2>
                        <p>
                            El acceso y/o uso de este portal atribuye la condición de USUARIO, que acepta, desde dicho acceso y/o uso, las Condiciones Generales de Uso aquí reflejadas.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-white mb-4">3. Propiedad Intelectual e Industrial</h2>
                        <p>
                            UPV MotoE, por sí o como cesionaria, es titular de todos los derechos de propiedad intelectual e industrial de su página web, así como de los elementos contenidos en la misma (a título enunciativo: imágenes, sonido, audio, vídeo, software o textos; marcas o logotipos, combinaciones de colores, estructura y diseño, etc.).
                        </p>
                        <p className="mt-4">
                            Cualquier uso no autorizado previamente por UPV MotoE será considerado un incumplimiento grave de los derechos de propiedad intelectual o industrial del autor. Quedan expresamente prohibidas la reproducción, adaptación, y la distribución pública técnica de todo o parte de los contenidos de esta página web, con fines comerciales, en cualquier soporte y por cualquier medio técnico, sin la autorización expresa del equipo directivo.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-white mb-4">4. Exclusión de Garantías y Responsabilidad</h2>
                        <p>
                            UPV MotoE no se hace responsable, en ningún caso, de los daños y perjuicios de cualquier naturaleza que pudieran ocasionar, a título enunciativo: errores u omisiones en los contenidos, falta de disponibilidad del portal o la transmisión de virus o programas maliciosos o lesivos en los contenidos, a pesar de haber adoptado todas las medidas tecnológicas necesarias para evitarlo.
                        </p>
                    </section>
                </div>
            </div>

            {/* Footer separator padding space */}
            <div className="mt-32 border-t border-white/5 pt-12">
                <Footer />
            </div>
        </main>
    )
}
