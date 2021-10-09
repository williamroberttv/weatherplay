import { Button, Flex, Input } from '@chakra-ui/react';
import { ChangeEvent, useCallback } from 'react';
import { useWeather } from '../../context/weatherContext';
import { SearchProps } from '../../utils/types';

export function Search({ getWeatherByInputValue }: SearchProps) {
  const { handleInputValue } = useWeather();

  const getInputValue = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    handleInputValue(event.currentTarget.value);
  }, [handleInputValue]);

  return (
    <Flex maxWidth="1120px" w="80%" m="20px auto">
      <Input
        variant="filled"
        placeholder="Buscar cidade"
        mr="10px"
        onChange={(event) => getInputValue(event)}
      />
      <Button
        w="150px"
        bg="#8067E5"
        transition="filter 0.2s"
        _hover={{ filter: 'brightness(0.9)' }}
        onClick={getWeatherByInputValue}
      >
        Buscar
      </Button>
    </Flex>
  );
}
