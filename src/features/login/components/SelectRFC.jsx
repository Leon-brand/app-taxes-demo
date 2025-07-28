import PropTypes from 'prop-types'
import { useState } from 'react'
import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'

const SelectRFC = ({ onSelect }) => {
  const [selectedRFC, setSelectedRFC] = useState('')
  const [open, setOpen] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')

  const opcionesRFC = [
    'Café Sirena S.A. de C.V. / RFC CSR981223ABC',
    'Logística del Norte S.A. de C.V. / RFC LON940102XYZ',
    'Comercializadora Trébol S.A. de C.V. / RFC CTR850623LMN',
    'Grupo Madero S.A. de C.V. / RFC GMD951212QWE',
    'Refacciones del Bajío S.A. de C.V. / RFC RFB890101ASD',
    'Tecnologías Andinas S.A. de C.V. / RFC TAN780322ZXC',
    'Constructora Tikal S.A. de C.V. / RFC CTK860812FDS',
    'Distribuidora Nopal S.A. de C.V. / RFC DNP900101WER',
    'Helados Azteca S.A. de C.V. / RFC HAZ750505RFG',
    'Farmacia Central S.A. de C.V. / RFC FCE840430MNB',
    'Electrodomésticos Galaxia S.A. de C.V. / RFC EGA720109LKJ',
    'Servicios Zafiro S.A. de C.V. / RFC SZS950101IOP',
    'Alimentos Omega S.A. de C.V. / RFC AOM910615PLM',
    'Panadería La Espiga S.A. de C.V. / RFC PLE890409DSA',
    'Tortillería del Sur S.A. de C.V. / RFC TDS930201ZXA',
    'Maderas del Valle S.A. de C.V. / RFC MDV850922HJK',
    'Aceites Quetzal S.A. de C.V. / RFC AQZ920309UYU',
    'Papelería Prisma S.A. de C.V. / RFC PPR760723MXN',
    'Tintorería Neptuno S.A. de C.V. / RFC TNP800801JHG',
    'Vidrios Monterrey S.A. de C.V. / RFC VDM960521TRE',
    'Hotel Las Palmas S.A. de C.V. / RFC HLP840727OPO',
    'Grupo Delta S.A. de C.V. / RFC GDE830314KJI',
    'Red Soluciones S.A. de C.V. / RFC RSO970913ASD',
    'Transporte Express S.A. de C.V. / RFC TEX911219WSX',
    'Autopartes Jaguar S.A. de C.V. / RFC AJG780715TRE',
    'Asesoría Fiscal MX S.A. de C.V. / RFC AFM991207BVC',
    'Jardinería Florencia S.A. de C.V. / RFC JFL801101JKS',
    'Taller Mecánico Zeus S.A. de C.V. / RFC TMZ740930IOU',
    'Estética Venus S.A. de C.V. / RFC EVS850311HHH',
    'Oficinas y Más S.A. de C.V. / RFC OYM940822LPO',
    'Bicicletas Aztlán S.A. de C.V. / RFC BAZ910408NMB',
    'Audio y Luces S.A. de C.V. / RFC AYL951105CVB',
    'Empaques del Centro S.A. de C.V. / RFC EDC990723KLM',
    'Soluciones Integrales MX S.A. de C.V. / RFC SIM781112QWE',
    'Rosticería El Buen Pollo S.A. de C.V. / RFC RBP930919ZXC',
    'Clínica Santa María S.A. de C.V. / RFC CSM800613XCV',
    'Servicios Industriales MX S.A. de C.V. / RFC SIM981127GHJ',
    'Carpintería La Ceiba S.A. de C.V. / RFC CLC830217DFG',
    'Consultoría Vector S.A. de C.V. / RFC CVE921201ASX',
    'Sastrería Imperial S.A. de C.V. / RFC SIM751204XSA',
    'Panadería Montecristo S.A. de C.V. / RFC PMC900812REW',
    'Uniformes Centenario S.A. de C.V. / RFC UCE860321TGB',
    'Gasolinera Ruta 45 S.A. de C.V. / RFC GRQ990512CVX',
    'Ferretería El Tornillo S.A. de C.V. / RFC FET960403UIO',
    'Repostería La Luna S.A. de C.V. / RFC RLL910215MMM',
    'Pastelería D’Francia S.A. de C.V. / RFC PDF870721QQQ',
    'Autolavado El Rayo S.A. de C.V. / RFC AER921231PPP',
    'Impresiones Grafimax S.A. de C.V. / RFC IGF950130LLL',
    'Zapatería El Paso S.A. de C.V. / RFC ZEP790213TTT',
    'Editorial Los Andes S.A. de C.V. / RFC ELA860502FFF'
  ]

  // Opciones filtradas dinámicamente
  const filteredRFCs = opcionesRFC.filter((rfc) =>
    rfc.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault()
        if (selectedRFC) onSelect(selectedRFC)
      }}
      className="w-full max-w-[400px] min-w-[300px] bg-white rounded-lg shadow-md p-6"
    >
      <h2 className="text-xl text-center font-bold mb-6 text-[#143559]">
        Selecciona tu RFC
      </h2>

      {/* Dropdown*/}
      <div className="relative">
        <div
          className="w-full px-3 py-2 border border-gray-300 rounded bg-[#143559]/10 text-[#143559] cursor-pointer flex justify-between items-center"
          onClick={() => setOpen(!open)}
        >
          <span>{selectedRFC || 'Razón Social / RFC'}</span>
          {open ? <KeyboardArrowUpIcon className="text-[#143559]" /> : <KeyboardArrowDownIcon className="text-[#143559]" />}
        </div>

        {open && (
          <ul className="absolute z-50 w-full  bg-[#143559]/55 text-white rounded-md shadow-lg backdrop-blur-sm max-h-[228px] overflow-y-auto">
            {/* Barra de búsqueda */}
            {opcionesRFC.length > 10 && (
              <li className="p-2 sticky top-0 bg-[#143559]/70 backdrop-blur-md z-10">
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Buscar..."
                  className="w-full px-2 py-1 rounded text-[#123458] bg-white placeholder:text-[#999] text-sm"
                />
              </li>
            )}

            {filteredRFCs.map((rfc) => (
              <li
                key={rfc}
                onClick={() => {
                  setSelectedRFC(rfc)
                  setOpen(false)
                  setSearchTerm('')
                }}
                className="py-1 pl-11 cursor-pointer transition hover:text-[#00B69B] font-semibold text-md"
              >
                {rfc}
              </li>
            ))}

            {filteredRFCs.length === 0 && (
              <li className="p-2 text-sm text-gray-300">Sin resultados</li>
            )}
          </ul>
        )}
      </div>

      <button
        type="submit"
        onClick={() => {onSelect(selectedRFC), localStorage.setItem('rfc', selectedRFC)}}
        className="w-full mt-6 bg-[#143559] hover:bg-[#0077FF] text-white font-bold py-2 rounded-md transition-all duration-300"
      >
        <CheckCircleOutlineOutlinedIcon fontSize="large" className="mr-2" />
        Aceptar
      </button>
    </form>
  )
}

export default SelectRFC

SelectRFC.propTypes = {
  onSelect: PropTypes.func.isRequired,
}
