import { Box, Image, Text, Button } from '@chakra-ui/react';

const Card = ({ image, heading, desc }) => {
  return (
    <Box
      bg="transparent" 
      border="1px solid #ccc"
      borderRadius="md" 
      overflow="hidden" 
      boxShadow="md" 
      padding="7"
    >
      <Image
        src={image}
        alt={heading}
        borderRadius="md" 
        mb="2" 
        objectFit="cover" 
      />
      <Text
        fontSize="xl"
        fontWeight="bold"
        mb="2"
        color="#0E2368" 
        textAlign="left" 
      >
        {heading}
      </Text>
      <Text
        fontSize="md"
        mb="4"
        textAlign="left" 
      >
        {desc}
      </Text>
      <Button
        variant="outline" 
        colorScheme="gray" 
        size="md"
        borderRadius="full"
        _hover={{ bg: 'gray.100' }} 
      >
        Read More
      </Button>
    </Box>
  );
};

export default Card;
