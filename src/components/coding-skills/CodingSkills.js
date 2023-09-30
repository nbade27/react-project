

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import GitRepos from './git-repos'

export default function CodingSkills() {

return(
    <>
        <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center"><b>Usage</b></TableCell>
            <TableCell align="center"><b>URL</b></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {GitRepos.map((row) => (
            <TableRow
              key={row.Usage}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell align="center" component="th" scope="row">
                {row.Usage}
              </TableCell>
              <TableCell align="center"><a href={row.URL}  target="blank">{row.URL}</a></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    
    </>)
}