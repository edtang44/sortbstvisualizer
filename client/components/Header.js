import React from 'react';
import { Link } from 'react-router-dom';
import { useSpring, animated } from 'react-spring'
import '../stylesheets/style.css';
import { VStack, Flex, Center, Button } from '@chakra-ui/react';
import { Text } from '@chakra-ui/core';

const Header = () => {
  const props = useSpring({opacity: 1, from: {opacity: 0}, config: { duration: 1500 }})
  return (
    <>
      <VStack marginTop="25vh" w="100%" h="100px" spacing="75px">
      <animated.div style={props}>
      <Center>
        <img className="logo" src="https://i.ibb.co/7nzFfyW/visutreesortlogofinal.png" alt="" />
      </Center>
      <Text as="i" fontSize="30px">visualizing binary tree traversals and sorting algorithms through animation</Text>
      </animated.div>
      <Flex w="100%" h="100px"/>
      <Flex direction={['column', 'column', 'row', 'row']} justify="center">
        <Button colorScheme="blue" size="lg" variant="outline" spacing="6" as={Link} to="/bst">
          Binary Tree Traversal
        </Button>   
        <Button colorScheme="blue" size="lg" variant="outline" spacing="6" as={Link} to="/sort">
          Sorting Algorithms
        </Button>   
      </Flex>
      </VStack>
    </>
  );
}
 
export default Header;