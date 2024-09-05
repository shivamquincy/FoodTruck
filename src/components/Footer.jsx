import {
    Box,
    Container,
    Flex,
    Image,
    Text,
    VStack,
    HStack,
    List,
    ListItem,
    Link,
    Icon,
    Divider
  } from '@chakra-ui/react';
  import { FaInstagram, FaTwitter, FaFacebook } from 'react-icons/fa';
  import logo from "../assets/gk.png";
  
  const Footer = () => {
    
    const indigoColor = "#0E2368"; // Updated indigo shade
    const textColor = "#0E2368"; // Color for section headings
  
    return (
      <Box as="footer" bg="white" color="gray" py={16} px={8}>
        <Container maxW="container.xl">
          <Flex justify="space-between" wrap="wrap" gap={12}>
            {/* First Column: Image */}
            <Box 
              flexBasis={{ base: '100%', md: 'auto' }} 
              mb={{ base: 6, md: 0 }}
              textAlign={{ base: 'center', md: 'left' }} 
            >
              <Image src={logo} alt="Your Image" width="200px" mx="auto" /> 
            </Box>
  
            {/* Second Column: Contact Us */}
            <Box flexBasis={{ base: '100%', md: 'auto' }} mb={{ base: 6, md: 0 }}>
              <VStack align="start" spacing={6}>
                <Text fontWeight="bold" fontSize="xl" color={textColor}>Contact Us</Text> 
                <Text fontSize="md">
                  Lorem Ipsum Pvt Ltd. 5/1, Magalton Road, Phartosh Gate near YTM Market, XYZ-343434
                </Text>
                <Text fontSize="md">
                  Email: <Link href="mailto:example2020@gmail.com" color={textColor}>example2020@gmail.com</Link> 
                </Text>
                <Text fontSize="md">
                  Phone: <Link href="tel:(904)443-0343" color={textColor}>(904) 443-0343</Link> 
                </Text>
              </VStack>
            </Box>
  
            {/* Third Column: Links */}
            <Box flexBasis={{ base: '100%', md: 'auto' }} mb={{ base: 6, md: 0 }}>
              <VStack align="start" spacing={6}>
                <Text fontWeight="bold" fontSize="xl" color={textColor}>Company</Text> 
                <List spacing={3}>
                  <ListItem><Link href="#" fontSize="md" >About Us</Link> </ListItem>
                  <ListItem><Link href="#" fontSize="md" >Products</Link> </ListItem>
                  <ListItem><Link href="#" fontSize="md" >Career</Link> </ListItem>
                  <ListItem><Link href="#" fontSize="md" >Contact Us</Link> </ListItem>
                </List>
              </VStack>
            </Box>
  
            {/* Fourth Column: Social Links */}
            <Box flexBasis={{ base: '100%', md: 'auto' }} mb={{ base: 6, md: 0 }}>
              <VStack align="center" spacing={{ base: 4, md: 6 }}> 
                <Text fontWeight="bold" fontSize="xl" color={textColor}>Follow Us</Text> 
                <Text fontSize="md" display={{ base: 'block', md: 'none' }} >© 2022 Food Truck Example</Text> 
                <HStack 
                  spacing={6} 
                  justify="center" // Center HStack horizontally
                  mx="auto" // Center HStack horizontally
                  width={{ base: 'fit-content', md: 'auto' }} // Adjust width to fit content on smaller screens
                >
                  <Link href="https://instagram.com" isExternal>
                    <Icon as={FaInstagram} boxSize={8} color={indigoColor} /> 
                  </Link>
                  <Link href="https://twitter.com" isExternal>
                    <Icon as={FaTwitter} boxSize={8} color={indigoColor} /> 
                  </Link>
                  <Link href="https://facebook.com" isExternal>
                    <Icon as={FaFacebook} boxSize={8} color={indigoColor} /> 
                  </Link>
                </HStack>
                <Text fontSize="md" display={{ base: 'none', md: 'block' }} >© 2022 Food Truck Example</Text> 
              </VStack>
            </Box>
          </Flex>
          <Divider my={8} borderColor="gray.300" />
        </Container>
      </Box>
    );
  };
  
  export default Footer;
  