/* eslint-disable react/button-has-type */
import { chakra, Box, Flex, SimpleGrid, Image } from "@chakra-ui/react";

import HeroImage from "../assets/img/heroImage.png";

export default function App() {
  return (
    <SimpleGrid
      columns={{ base: 1, md: 2 }}
      spacing={0}
      h="50%"
      bg="#f4f6f8"
      overflow="hidden"
      _after={{
        opacity: 0.25,
        pos: "absolute",
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        zIndex: -1,
        content: '" "',
      }}
    >
      <Flex
        direction="column"
        alignItems="start"
        justifyContent="center"
        pl={{ base: 4, md: 12, "2xl": "15rem" }}
        pb={{ base: 0, "2xl": 24 }}
        pt={{ base: 8, "2xl": 24 }}
      >
        <chakra.h1
          fontFamily="SFProRounded"
          mb={6}
          fontWeight={300}
          fontSize={{ base: "4xl", md: "4xl", lg: "55px" }}
          lineHeight="normal"
        >
          <span className="text-[#fa6c51]"> Яг одоо аппликейшнаа </span> <br /> татаад {"  "}
          <span className="text-[#fa6c51]">
            амьдралын <br /> чанараа дээшлүүл
          </span>
        </chakra.h1>
      </Flex>
      <Box display="flex">
        <Image src={HeroImage?.src} alt="holding phone" fit="scale-down" w="full" h="full" loading="lazy" />
      </Box>
    </SimpleGrid>
  );
}
