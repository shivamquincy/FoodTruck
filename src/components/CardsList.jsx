import React, { useState } from 'react';
import { Box, Button, Text, Flex, useBreakpointValue } from '@chakra-ui/react';
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';
import { motion } from 'framer-motion';
import Card from './Card';
import C1 from "../assets/card1.png";
import C2 from "../assets/card2.png";
import C3 from "../assets/card3.png";
import C4 from "../assets/card4.png";
import C5 from "../assets/card5.png";
import C6 from "../assets/card6.png";

// Sample data for the cards
const data = [
  { id: 1, image: C1, heading: 'Grilled Tomatoes at Home', desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard..." },
  { id: 2, image: C2, heading: 'Snacks for Travel', desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard..." },
  { id: 3, image: C3, heading: 'Post-workout Recipes', desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard..." },
  { id: 4, image: C4, heading: 'How To Grill Corn', desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard..." },
  { id: 5, image: C5, heading: 'Crunchwrap Supreme', desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard..." },
  { id: 6, image: C6, heading: 'Broccoli Cheese Soup', desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard..." },
];

const CardsSwiper = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    if (currentIndex + 3 < data.length) {
      setCurrentIndex(currentIndex + 3);
    }
  };

  const handlePrev = () => {
    if (currentIndex - 3 >= 0) {
      setCurrentIndex(currentIndex - 3);
    }
  };

  const pageIndicator = Math.floor(currentIndex / 3) + 1;

  const isMobile = useBreakpointValue({ base: true, md: false });

  return (
    <Box p="4" maxW="1200px" mx="auto" mt="8" mb="20">
      {/* Title */}
      <Text
        fontSize="56px"
        fontWeight="600"
        mb="20"
        color="#0E2368"
        textAlign="left"
        lineHeight="42px"
        letterSpacing="4%"
        ml="4" 
        
      >
        Latest Articles
      </Text>

      {/* Swiper Container */}
      <Flex 
        justify="center" 
        align="center" 
        mb="4"
        overflowX={isMobile ? "auto" : "hidden"}
        flexDirection={isMobile ? "column" : "row"}
        p={isMobile ? "0 2rem" : "0"} 
      >
        <Flex 
          flexDirection={isMobile ? "column" : "row"} 
          w="full"
          justify="center" 
          overflowX={isMobile ? "auto" : "hidden"}
          gap={isMobile ? 4 : 10} 
        >
          {data.slice(currentIndex, currentIndex + 3).map(item => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: isMobile ? 0 : -50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: isMobile ? 0 : 50 }}
              transition={{ duration: 0.5 }}
              style={{ 
                flex: '0 0 auto', 
                width: isMobile ? '90%' : '300px', // Adjusted width for mobile screens
                margin: isMobile ? '0 auto' : '0 10px' // Centered cards on mobile
              }}
            >
              <Card
                image={item.image}
                heading={item.heading}
                desc={item.desc}
              />
            </motion.div>
          ))}
        </Flex>
      </Flex>

      {/* Bottom Navigation */}
      <Flex justify="center" align="center" mt="6">
        <Button
          onClick={handlePrev}
          isDisabled={currentIndex === 0}
          mr="4"
          bg="transparent"
          border="1px solid"
          borderColor="#0E2368" 
          padding="2"
          borderRadius="md"
        >
          <ChevronLeftIcon w={6} h={6} color="#0E2368" />
        </Button>
        <Text fontWeight="bold" color="#0E2368">
          {pageIndicator} / {Math.ceil(data.length / 3)}
        </Text>
        <Button
          onClick={handleNext}
          isDisabled={currentIndex + 3 >= data.length}
          ml="4"
          bg="transparent"
          border="1px solid"
          borderColor="#0E2368" // Indigo color
          padding="2"
          borderRadius="md"
        >
          <ChevronRightIcon w={6} h={6} color="#0E2368" />
        </Button>
      </Flex>
    </Box>
  );
};

export default CardsSwiper;
