import PropTypes from 'prop-types'

import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
const TabRetenidoContent = ({ retenidoContentData, totalOperaciones, totalIVARetenido }) => {

  return (
    <TableContainer  className="my-4">
      <Table sx={{
        '& .MuiTableCell-root': {
          padding: '6px 10px',
          borderBottom: 'none',
          color: '#143559',
        }
      }}>
        <TableHead sx={{ borderBottom: '1px solid #ffffff' }}>
          <TableRow>
            <TableCell sx={{ color: '#143559', fontWeight: 'bold' }}>Regimen</TableCell>
            <TableCell sx={{ color: '#143559', fontWeight: 'bold' }}>No. de operaciones</TableCell>
            <TableCell sx={{ color: '#143559', fontWeight: 'bold' }}>Cuota o Tasa Retenida</TableCell>
            <TableCell sx={{ color: '#143559', fontWeight: 'bold' }}>Monto de IVA Retenido</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {retenidoContentData.map((row, idx) => (
            <TableRow
              key={idx}
              className={idx % 2 === 0 ? 'bg-gray-100' : 'bg-white'}
            >
              <TableCell>{row.regimen}</TableCell>
              <TableCell>{row.operaciones}</TableCell>
              <TableCell>{row.tasa}</TableCell>
              <TableCell>{row.monto}</TableCell>
            </TableRow>
          ))}

        </TableBody>
      </Table>
      {/* Recuadro Total */}
      <div className="bg-[#CFE5FF] h-[48px] flex justify-between items-center rounded-lg px-4 mt-6 shadow-lg
                    font-bold w-full">
        <h3 className="font-bold text-md">Total</h3>
        <h3 className="font-bold text-md ml-16">${totalOperaciones}</h3>
        <h3 className="font-bold text-md mr-20">${totalIVARetenido}</h3>
      </div>
    </TableContainer>
  )
}

export default TabRetenidoContent

TabRetenidoContent.propTypes = {
  retenidoContentData: PropTypes.object,
  totalOperaciones: PropTypes.number,
  totalIVARetenido: PropTypes.number
}
