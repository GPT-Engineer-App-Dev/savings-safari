import { Box, Container, Heading, VStack, Text, SimpleGrid, GridItem, Image } from "@chakra-ui/react";

const Index = () => {
  return (
    <Container maxW="container.xl" py={8}>
      <VStack spacing={8} align="stretch">
        <Heading as="h1" size="2xl" textAlign="center">
          Financial Times
        </Heading>

        <Box>
          <Heading as="h2" size="lg" mb={4}>
            Headlines
          </Heading>
          <SimpleGrid columns={{ sm: 1, md: 2 }} spacing={8}>
            <GridItem>
              <Box borderWidth="1px" borderRadius="lg" overflow="hidden" p={4}>
                <Heading as="h3" size="md" mb={2}>
                  Headline 1
                </Heading>
                <Text>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.
                </Text>
              </Box>
            </GridItem>
            <GridItem>
              <Box borderWidth="1px" borderRadius="lg" overflow="hidden" p={4}>
                <Heading as="h3" size="md" mb={2}>
                  Headline 2
                </Heading>
                <Text>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.
                </Text>
              </Box>
            </GridItem>
          </SimpleGrid>
        </Box>

        <Box>
          <Heading as="h2" size="lg" mb={4}>
            Market Data
          </Heading>
          <SimpleGrid columns={{ sm: 1, md: 3 }} spacing={8}>
            <GridItem>
              <Box borderWidth="1px" borderRadius="lg" overflow="hidden" p={4}>
                <Heading as="h3" size="md" mb={2}>
                  Market 1
                </Heading>
                <Text>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.
                </Text>
              </Box>
            </GridItem>
            <GridItem>
              <Box borderWidth="1px" borderRadius="lg" overflow="hidden" p={4}>
                <Heading as="h3" size="md" mb={2}>
                  Market 2
                </Heading>
                <Text>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.
                </Text>
              </Box>
            </GridItem>
            <GridItem>
              <Box borderWidth="1px" borderRadius="lg" overflow="hidden" p={4}>
                <Heading as="h3" size="md" mb={2}>
                  Market 3
                </Heading>
                <Text>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.
                </Text>
              </Box>
            </GridItem>
          </SimpleGrid>
        </Box>

        <Box>
          <Heading as="h2" size="lg" mb={4}>
            Featured Articles
          </Heading>
          <SimpleGrid columns={{ sm: 1, md: 2 }} spacing={8}>
            <GridItem>
              <Box borderWidth="1px" borderRadius="lg" overflow="hidden" p={4}>
                <Image src="https://via.placeholder.com/400x200" alt="Article 1" mb={4} />
                <Heading as="h3" size="md" mb={2}>
                  Article 1
                </Heading>
                <Text>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.
                </Text>
              </Box>
            </GridItem>
            <GridItem>
              <Box borderWidth="1px" borderRadius="lg" overflow="hidden" p={4}>
                <Image src="https://via.placeholder.com/400x200" alt="Article 2" mb={4} />
                <Heading as="h3" size="md" mb={2}>
                  Article 2
                </Heading>
                <Text>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.
                </Text>
              </Box>
            </GridItem>
          </SimpleGrid>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;