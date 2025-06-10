import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
const IvaTable = () => {

  const rows = [
    { tasa: '16%', valor: '$999.00', iva: '$160.00' },
    { tasa: '8%', valor: '$999.00', iva: '$80.00' },
    { tasa: '0%', valor: '$999.00', iva: '$0.00' },
    { tasa: 'Exento', valor: '$999.00', iva: '$0.00' },
  ]

  return (
    <TableContainer  className="mb-4">
      <Table>
        <TableHead>
          <TableRow>
            <TableCell sx={{ color: '#143559', fontWeight: 'bold' }}>Tasa</TableCell>
            <TableCell sx={{ color: '#143559', fontWeight: 'bold' }}>Valor de Actos</TableCell>
            <TableCell sx={{ color: '#143559', fontWeight: 'bold' }}>IVA</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, idx) => (
            <TableRow
              key={idx}
              className={idx % 2 === 0 ? 'bg-white' : 'bg-gray-100'}
            >
              <TableCell>{row.tasa}</TableCell>
              <TableCell>{row.valor}</TableCell>
              <TableCell>{row.iva}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default IvaTable
