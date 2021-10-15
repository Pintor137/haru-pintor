import {ThemeProvider} from '@material-ui/core/styles'
import theme from '../temaConfig'
import Contenedor from './Contenedor';



function TemaGlobal() {
  return (

    <ThemeProvider theme={theme}>
        <Contenedor/>
    </ThemeProvider>
  );
}

export default TemaGlobal;

