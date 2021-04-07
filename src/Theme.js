import { createMuiTheme } from '@material-ui/core/styles';

export const Theme = createMuiTheme({
  palette: {
    primary: {
      // light: será calculada com base em palette.primary.main,
      light: '#8661B6', //roxo claro
      main: '#5F4582', //roxo médio
      dark: '#3E0C79', //roxo escuro
      constrastText: '#F5F3FC', //cinza claro
      // contrastText: será calculada para contrastar com palette.primary.main
    },
    secondary: {
      light: '#F5F3FC', //cinza claro
      main: '#4A4A4A', //cinza
      dark: '#000000', //preto
      cancel: '#ff6b6b' // vermelho pastel
    },
    // Usado por `getContrastText()` para maximizar o contraste entre
    // o plano de fundo e o texto.
    contrastThreshold: 3,
    // Usado pelas funções abaixo para mudança de uma cor de luminância por aproximadamente
    // dois índices dentro de sua paleta tonal.
    // Por exemplo, mude de Red 500 para Red 300 ou Red 700.
    tonalOffset: 0.2,
  },
});