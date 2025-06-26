export default function AvisoLegal() {
  return (
    <div className="bg-gray-900 w-full text-white px-4 sm:px-6 py-10">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-teal-400">Aviso Legal</h1>

        <h2 className="text-xl font-semibold mt-6 mb-2">Titular del sitio</h2>
        <p className="mb-4">
          Este sitio es gestionado por un particular con fines informativos.<br />
          Nombre comercial: <strong>FundedTools</strong><br />
          Contacto: comparadorfondeo@gmail.com
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">Condiciones de uso</h2>
        <p className="mb-4">
          El acceso y uso de este sitio implica la aceptación de las condiciones expuestas. El usuario se compromete a utilizarlo de forma legal y responsable.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">Propiedad intelectual</h2>
        <p className="mb-4">
          El contenido, diseño, textos y herramientas son propiedad del titular, salvo que se indique lo contrario. No se permite su reproducción sin autorización.
        </p>
      </div>
    </div>
  );
}
