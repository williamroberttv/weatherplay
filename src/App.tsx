import { ChakraProvider } from '@chakra-ui/react';
import { WeatherProvider } from './context/weatherContext';
import { Routes } from './routes';
import theme from './styles/global';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <WeatherProvider>
        <Routes />
      </WeatherProvider>
    </ChakraProvider>
  );
}

export default App;
