import { Box, Flex, Button, Image, Text, Grid } from '@chakra-ui/react';
import gkImage from '../assets/gk.png'; 
import kndImage from '../assets/knd.png'; 
import vectorImage from '../assets/Vector.png'; 

const Hero = () => {
  return (
    <Box
      position="relative"
      overflow="hidden"
      mb="10rem"
    >
      {/* Grid Layout for Main Content */}
      <Grid
        templateColumns={{ base: '1fr', md: '1fr 1fr' }} 
        templateRows={{ base: '1fr 1fr', md: '1fr' }} 
        height="100vh"
        gap={{ base: '0', md: '4' }} 
        position="relative"
      >
        {/* First Row (Pizza Image) */}
        <Box
          gridColumn={{ base: '1 / -1', md: '2 / 3' }} // Full width on small screens, second column on larger screens
          gridRow={{ base: '1 / 2', md: '1 / 2' }} // First row on small screens, first row on larger screens
          position="relative"
          overflow="hidden" // Ensure overflow is hidden as  to avoid cutoff
        >
          {/* Pizza Image */}
          <Image
            src={kndImage}
            alt="Pizza Image"
            width="100%"
            height="100%"
            objectFit="cover"
            borderBottomLeftRadius={{ base: '10rem', md: '20rem' }} // Adjust radius for different screen sizes
            zIndex={2}
          />
          
          {/* Red Vector PNG */}
          <Image
            src={vectorImage}
            alt="Red Vector"
            position="absolute"
            top="0"
            left="0"
            width="100vw" 
            height="100vh" 
            objectFit="cover"
            zIndex={1} 
            pointerEvents="none" 
          />

          {/* Get in Touch Button */}
          <Button
            colorScheme="gray"
            variant="outline"
            borderRadius="full"
            _hover={{ bg: 'black' }}
            position="absolute"
            top="4rem"
            right="4rem"
            textColor="white"
            zIndex={3}
          >
            Get in Touch
          </Button>
        </Box>

        {/* Second Row (Text and Button) */}
        <Box
          gridColumn={{ base: '1 / -1', md: '1 / 2' }} 
          gridRow={{ base: '2 / 3', md: '1 / 2' }} 
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems={{ base: 'center', md: 'flex-start' }}
          padding="4rem"
          backgroundColor="white"
          position="relative"
          zIndex={2}
        >
          {/* Icon */}
          <Image
            src={gkImage}
            alt="Food Truck Icon"
            boxSize="90px"
            position="absolute"
            top="3rem"
            left="4rem"
            zIndex={3}
            display={{ base: 'none', md: 'block' }} // Hide icon on smaller screens
          />
          
          {/* Text and Button */}
          <Flex
            direction="column"
            align={{ base: 'center', md: 'flex-start' }}
            textAlign={{ base: 'center', md: 'left' }}
            marginTop={{ base: '0', md: '-3rem' }}
            padding="2rem"
            width={{ base: '90%', md: '60%' }}
          >
            <Text
              fontFamily="Source Sans Pro"
              fontSize={{ base: '32px', md: '62px' }}
              fontWeight="700"
              lineHeight={{ base: '36px', md: '69px' }}
              color="#0E2368"
              mb="1rem"
              mt="4rem"
              width={{ base: '100%', md: '120%' }}
            >
              Discover the <span style={{color:"#D32F2F"}}>Best</span> Food and Drinks
            </Text>
            <Text
              fontFamily="Open Sans"
              fontSize={{ base: '14px', md: '16.44px' }}
              fontWeight="400"
              lineHeight={{ base: '20px', md: '27.41px' }}
              color="#444957"
              mb="2rem"
              colorScheme='#444957'
            >
              Naturally made Healthcare Products for the better care & support of your body.
            </Text>
            <Button
              colorScheme="red"
              size="md"
              borderRadius="full"
              width="190px"
              height="63px"
              padding="14px 34px"
              fontFamily="Open Sans"
              fontSize="18px"
              fontWeight="700"
              lineHeight="36px"
              letterSpacing="0.01em"
              textAlign="left"
              backgroundColor="#D32F2F"
              color="white"
              _hover={{ bg: '#B71C1C' }}
            >
              <Text 
                fontFamily="Open Sans" 
                fontWeight="700" 
                fontSize="18px" 
                lineHeight="36px" 
                letterSpacing="0.01em"
              >
                Explore Now!
              </Text>
            </Button>
          </Flex>
        </Box>
      </Grid>
    </Box>
  );
};

export default Hero;
