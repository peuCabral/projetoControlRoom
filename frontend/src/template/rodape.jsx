import React from "react";
import TableFooter from '@material-ui/core/TableFooter';
import Typography from '@material-ui/core/Typography';
import {Link} from 'react-router'
import '../css/rodape.css'

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="left">
      <Link className='contato'> 
      " A Situação faz o Homem " - Kingsman o Serviço Secreto </Link>
      {'© Pedro Cabral '}
      {'  '}
      {new Date().getFullYear()}
      {'.'}
      <Link color="black" href="/#/home">
        Control Room
      </Link>
    </Typography>
  );
}



export default props => (
  <div>
      {/* Footer */}
      <footer className='footer'>
          <Typography variant="h6" align="left" gutterBottom>
            {/* Footer */}
          </Typography>
          <Typography variant="subtitle1" align="left" color="textSecondary" component="p">
        Gosto de Doginho
          </Typography>
          <Copyright className='copyright'/>
        </footer>
        {/* End footer */}
  </div>

);
  