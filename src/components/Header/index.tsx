import { Button, Flex, Text } from '@chakra-ui/react';
import { BiNavigation } from 'react-icons/bi';

type HeaderProps = {
  getCoords: () => void;
}

export function Header({ getCoords }: HeaderProps) {
  return (
    <Flex
      p="0 2rem"
      align="center"
      borderBottom="1px solid #29292e"
    >
      <Flex
        maxWidth="1120px"
        m="20px auto"
        w="100%"
        align="center"
        justifyContent="space-between"
        direction={['column', 'row']}
      >
        <Text fontSize="28px">
          WeatherPlay
        </Text>
        <Flex height="5rem" align="center">
          <Button
            fontSize="16px"
            mr="16px"
            bg="transparent"
            transition="background 0.2s"
            _hover={{ bg: '#8067E5' }}
          >
            Home
          </Button>
          <Button
            fontSize="16px"
            bg="transparent"
            transition="background 0.2s"
            _hover={{ bg: '#8067E5' }}
          >
            Playlist
          </Button>
        </Flex>
        <Button
          bg="#8067E5"
          onClick={getCoords}
          transition="filter 0.2s"
          _hover={{ filter: 'brightness(0.9)' }}
        >
          <Text mr="8px">Localização</Text>
          <BiNavigation size={20} />
        </Button>
      </Flex>
    </Flex>
  );
}
