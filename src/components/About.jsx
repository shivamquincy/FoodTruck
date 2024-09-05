import React from 'react';
import { Box, Grid, Heading, Text, Image, Stack, Button, useBreakpointValue } from '@chakra-ui/react';
import about from "../assets/about.png";

const About = () => {
  // Use a different heading size for small screens
  const headingSize = useBreakpointValue({ base: '2xl', sm: '3xl', md: '4xl' });

  return (
    <Box
      width="100vw" // Full viewport width
      height="100vh" // Full viewport height
      background="linear-gradient(90.07deg, rgba(30, 42, 93, 0.04) 30.91%, rgba(48, 62, 130, 0.04) 64.79%, rgba(60, 80, 157, 0.04) 91.94%)"
      display="flex"
      alignItems="center"
      justifyContent="center"
      mb="5"
    >
      <Grid
        templateColumns={{ base: '1fr', lg: '1fr 1fr' }}
        width="100%"
        height="100%"
        gap={4} // Add gap between columns
      >
        {/* Image Section */}
        <Box
          display={{ base: 'none', lg: 'flex' }} // Hide on smaller screens
          position="relative"
          alignItems="center"
          justifyContent="center"
          height="100%" // Full height of the grid cell
        >
          <Image 
            src={about} 
            alt="About Us Image" 
            height="100%" 
            width="80%" 
            paddingLeft="5"
            paddingRight="5"
            objectFit="cover" // Cover the area while maintaining aspect ratio
          />
        </Box>
        
        {/* Text Section */}
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          padding={{ base: "4", lg: "10rem" }} 
          backgroundColor="linear-gradient(90.07deg, rgba(30, 42, 93, 0.04) 30.91%, rgba(48, 62, 130, 0.04) 64.79%, rgba(60, 80, 157, 0.04) 91.94%)" // Background color for better text readability
          height="100%" 
          textAlign={{ base: 'center', lg: 'left' }} 
        >
          <Stack spacing="4" color="gray.600">
           
            <Heading 
              fontFamily="Poppins" 
              fontSize={{ base: '2xl', sm: '3xl', md: '4xl' }} 
              fontWeight="600"
              lineHeight="27px"
              textAlign={{ base: 'center', lg: 'left' }} 
              color="#0E2368"
            >
              About Us
            </Heading>
            
            {/* Description Text */}
            <Text fontFamily="Open Sans" fontWeight="400" size="15px" lineHeight="27px" color="#444957">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.
            </Text>

            {/* Read More Button */}
            <Box
              display="flex"
              justifyContent={{ base: 'center', lg: 'flex-start' }} // Center the button on small screens, align left on larger screens
              mt="4"
            >
              <Button
                colorScheme="red"
                size="lg"
                borderRadius="full"
                width="200px"
              >
                Read More
              </Button>
            </Box>
          </Stack>
        </Box>
      </Grid>
    </Box>
  );
};

export default About;
