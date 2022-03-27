import React from 'react';
import Chart from 'react-apexcharts';
import { Circle, Tag, Image, VStack } from '@chakra-ui/react';

const Product = ({ value, name, desc, logo, color1, color2 }) => {
  return (
    <div
      style={{
        position: 'relative',
        width: '280px',
      }}
    >
      <Chart
        type="radialBar"
        series={[value]}
        options={{
          labels: [name],
          fill: {
            colors: [color1],
            type: 'gradient',
            gradient: {
              gradientToColors: [color2],
              stops: [0, 100],
            },
          },
          chart: {
            background: 'transparent',
            animations: {
              speed: 500,
              dynamicAnimation: {
                speed: 150,
              },
            },
          },
          grid: {
            padding: {
              top: -30,
              bottom: -30,
              left: -30,
              right: -30,
            },
          },
          plotOptions: {
            radialBar: {
              startAngle: -90,
              endAngle: 270,
              hollow: {
                size: '60%',
              },
            },
          },
        }}
        width="280"
      />
      <Circle
        style={{
          background:
            'linear-gradient(135deg, rgba(255,255,255,1) 0%, rgba(211,211,211,1) 100%)',
          position: 'absolute',
          top: 'calc(50% - 1px)',
          left: 'calc(50% + 1px)',
          transform: 'translateX(-50%) translateY(-50%)',
        }}
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
        h="180px"
        w="180px"
      >
        <VStack spacing="6px">
          <Image w="70px" src={logo} alt={name}></Image>
          <Tag
            size="md"
            variant="solid"
            style={{ color: 'grey', background: 'white' }}
          >
            <b>{name}</b>
          </Tag>
          <Tag
            size="sm"
            variant="solid"
            style={{ color: 'grey', background: 'white', fontSize: '10px' }}
          >
            {desc}
          </Tag>
        </VStack>
      </Circle>
    </div>
  );
};

export default Product;
