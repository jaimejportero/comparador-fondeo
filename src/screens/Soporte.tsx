import { useState } from "react";

export default function PaginaContacto() {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [enviado, setEnviado] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const datos = { nombre, email, mensaje };

    try {
      const res = await fetch("https://formsubmit.co/ajax/jaimejportero@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(datos),
      });

      if (res.ok) {
        setEnviado(true);
        setNombre("");
        setEmail("");
        setMensaje("");
      }
    } catch (err) {
      console.error("Error al enviar mensaje", err);
    }
  };

  return (
    <div className="min-h-screen bg-gray-950 text-white p-6">
      <div className="max-w-2xl mx-auto bg-gray-900 p-8 rounded-xl shadow-xl border border-gray-700">
        <h1 className="text-3xl font-bold text-teal-400 mb-4 text-center">
          📩 Contacto y Soporte Técnico
        </h1>
        <p className="text-gray-300 text-base mb-6 text-center">
          ¿Tienes alguna duda sobre las herramientas de simulación, calculadoras de trading o el funcionamiento de la web? Aquí puedes ponerte en contacto directamente conmigo.
        </p>

        {!enviado ? (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block mb-1 text-gray-300">Nombre</label>
              <input
                type="text"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                required
                className="w-full bg-gray-800 border border-gray-600 rounded p-2 text-white"
              />
            </div>
            <div>
              <label className="block mb-1 text-gray-300">Correo electrónico</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full bg-gray-800 border border-gray-600 rounded p-2 text-white"
              />
            </div>
            <div>
              <label className="block mb-1 text-gray-300">Mensaje</label>
              <textarea
                value={mensaje}
                onChange={(e) => setMensaje(e.target.value)}
                required
                rows={5}
                className="w-full bg-gray-800 border border-gray-600 rounded p-2 text-white"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-teal-500 hover:bg-teal-600 text-white px-4 py-2 rounded w-full font-semibold"
            >
              Enviar mensaje
            </button>
          </form>
        ) : (
          <p className="text-green-400 text-center text-lg font-semibold">
            ✅ ¡Mensaje enviado correctamente! Te responderé pronto.
          </p>
        )}

        {/* Contenido adicional para SEO y AdSense */}
        <div className="mt-10 text-gray-300 text-base space-y-5">
          <h2 className="text-xl font-bold text-white">❓ Preguntas frecuentes</h2>

          <div>
            <strong>¿Cuánto tiempo tardas en responder?</strong>
            <p>Normalmente en menos de 24 horas laborables. Si es urgente, puedes indicar “urgente” en el mensaje.</p>
          </div>

          <div>
            <strong>¿Puedo sugerir una nueva herramienta o funcionalidad?</strong>
            <p>¡Por supuesto! Todas las sugerencias son bienvenidas. Este proyecto evoluciona gracias a las ideas de los usuarios.</p>
          </div>

          <div>
            <strong>¿Dónde puedo encontrar información legal?</strong>
            <p>En el pie de página tienes enlaces a la Política de Privacidad, Aviso Legal y Política de Cookies.</p>
          </div>

          <div>
            <strong>¿Qué ocurre con mis datos personales?</strong>
            <p>Tu correo y mensaje se usan solo para responderte. No se almacenan en ninguna base de datos y se eliminan tras la respuesta.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
