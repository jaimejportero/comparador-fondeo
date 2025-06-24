import { useState } from "react";

export default function PaginaContacto() {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [enviado, setEnviado] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const datos = {
      nombre,
      email,
      mensaje,
    };

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
        <h1 className="text-3xl font-bold text-teal-400 mb-6 text-center">📩 Contacto / Soporte</h1>
        <p className="mb-6 text-gray-400 text-center">
          ¿Tienes dudas, sugerencias o necesitas ayuda? Escríbeme a través del formulario y recibirás respuesta lo antes posible.
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
          <p className="text-green-400 text-center text-lg font-semibold">✅ ¡Mensaje enviado correctamente!</p>
        )}
      </div>
    </div>
  );
}
