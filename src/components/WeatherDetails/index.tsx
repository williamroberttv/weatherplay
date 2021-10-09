import {
  Flex, Text, Image,
} from '@chakra-ui/react';
import { IoIosWater } from 'react-icons/io';
import { FiWind } from 'react-icons/fi';
import { FaTemperatureHigh, FaTemperatureLow } from 'react-icons/fa';
import { WeatherDetailsProps } from '../../utils/types';
import { capitalizeFirstLetter } from '../../utils/formatData';

export function WeatherDetails({ details }: WeatherDetailsProps) {
  return (
    <Flex m="50px auto" justifyContent="center" w="80%">
      {details.map((detail) => (
        <Flex
          key={detail.weather[0].id}
          height="34rem"
          w="500px"
          borderRadius="20px"
          color="#fff"
          bg="#141414"
          justifyContent="space-between"
          direction="column"
          p="30px"
        >
          <Flex align="center">
            <Text
              bg="#222222"
              p="8px"
              borderRadius="6px"
              fontWeight="700"
              transition="background 0.2s"
              _hover={{ background: '#8067E5' }}
            >
              {detail.name}
            </Text>
          </Flex>
          <Flex
            direction="column"
            align="center"
            w="100%"
            justifyContent="center"
          >
            <Image
              w="180px"
              src={
              `http://openweathermap.org/img/wn/${detail.weather[0].icon}.png`
            }
            />
            <Text>{capitalizeFirstLetter(detail.weather[0].description)}</Text>
          </Flex>
          <Flex justifyContent={['center', 'space-between']} align="center">
            <Flex direction="column" display={['none', 'flex']}>
              <Flex align="center" mb="8px">
                <FaTemperatureHigh size={16} />
                <Text ml="8px">
                  {` ${detail.main.temp_min.toFixed(0)}°`}
                </Text>
              </Flex>

              <Flex align="center" mb="8px">
                <FaTemperatureLow size={16} />
                <Text ml="8px">
                  {` ${detail.main.temp_min.toFixed(0)}°`}
                </Text>
              </Flex>

              <Flex align="center" mb="8px">
                <FiWind size={16} />
                <Text ml="8px">{`${detail.wind.speed} km/h`}</Text>
              </Flex>

              <Flex align="center">
                <IoIosWater size={16} />
                <Text ml="8px">{`${detail.main.humidity} %`}</Text>
              </Flex>

            </Flex>
            <Text
              fontWeight="700"
              fontSize="58px"
            >
              {` ${detail.main.temp.toFixed(0)}°`}

            </Text>
          </Flex>
        </Flex>
      ))}
    </Flex>
  );
}
