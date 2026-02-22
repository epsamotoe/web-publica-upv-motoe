import { Footer } from "@/components/footer"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export const metadata = {
    title: "Política de Privacidad | UPV MotoE",
    description: "Tratamiento de datos personales de los usuarios del sitio web del equipo UPV MotoE.",
}

export default function PrivacidadPage() {
    return (
        <main className="min-h-screen bg-neutral-950 text-neutral-300 pt-32 pb-16 relative overflow-hidden">
            <div className="absolute inset-0 bg-grid-white/[0.02] z-0 pointer-events-none" />

            <div className="max-w-3xl mx-auto px-6 relative z-10">
                <Link href="/" className="inline-flex items-center text-sm text-gray-500 hover:text-[#00cc88] transition-colors mb-8">
                    <ArrowLeft className="w-4 h-4 mr-2" /> Volver al Inicio
                </Link>

                <h1 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl font-black text-white mb-8 border-b border-white/10 pb-4">
                    POLÍTICA DE PRIVACIDAD
                </h1>

                <div className="space-y-8 text-base/relaxed">
                    <section>
                        <h2 className="text-xl font-bold text-white mb-4">1. Identidad del Tratamiento de Datos</h2>
                        <p>
                            En cumplimiento del Reglamento (UE) 2016/679 del Parlamento Europeo y del Consejo, de 27 de abril de 2016, relativo a la protección de datos e información libre de circulación (RGPD), le informamos de que los datos personales recogidos en este sitio web serán procesados por la estructura administrativa pertinente vinculada al equipo <strong>UPV MotoE</strong> (Universitat Politècnica de València - Campus de Alcoy).
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-white mb-4">2. Finalidad del Tratamiento</h2>
                        <p>
                            Los datos personales (nombre, dirección de correo electrónico, etc.) que decida facilitarnos voluntariamente a través de nuestro <strong>Formulario de Contacto</strong> o solicitudes de asociación de patrocinio (Partners) serán empleados EXCLUSIVAMENTE para los siguientes fines:
                        </p>
                        <ul className="list-disc pl-6 space-y-2 mt-4 text-neutral-400">
                            <li>Responder a las consultas, dudas o peticiones de información enviadas por el usuario.</li>
                            <li>Gestionar solicitudes de integración en el propio equipo universitario.</li>
                            <li>Envío de directrices de colaboración corporativa en caso de solicitar el dossier de "Partner Técnico o Institucional".</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-white mb-4">3. Conservación de los Datos y Cesión a Terceros</h2>
                        <p>
                            UPV MotoE retendrá estos datos personales únicamente durante el tiempo necesario para resolver la consulta planteada. Posteriormente serán bloqueados y posteriormente borrados salvo disposición legal que exija otra cosa.
                        </p>
                        <p className="mt-4 font-bold text-[#00cc88]/90">
                            Bajo ningún concepto UPV MotoE cederá, venderá ni distribuirá base de datos a terceros con fines comerciales. Nuestro espíritu es puramente educativo, técnico y deportivo.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-white mb-4">4. Derechos del Usuario</h2>
                        <p>
                            Cualquier usuario que ponga a nuestra disposición sus datos puede ejercer sus derechos de <strong>acceso, rectificación, cancelación, oposición, limitación del tratamiento y portabilidad</strong> remitiendo su solicitud a nuestro email de contacto (contacto@upvmotoe.com), incluyendo copia del DNI u otro documento análogo en derecho para garantizar el tracto de la respuesta.
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
