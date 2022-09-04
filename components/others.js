import { Flex, Text, Box, Spacer } from "@chakra-ui/react";

export default function Others({ size, name }) {
  return (
    <Flex my={12} alignItems="center" justifyContent="space-between" borderWidth={0} overflowX="auto">
      <Text mr={6} fontFamily="SFProRounded" fontSize="44px" fontWeight={900} color="#424852">
        {name === "" ? "Бусад" : name}
      </Text>
      <Box
        textAlign="center"
        bg="#edf2f7"
        fontFamily="SFProRounded"
        fontSize="18px"
        color="#424852"
        w="53px"
        h="26px"
        borderRadius="20px"
      >
        {size}
      </Box>
      <Spacer />
    </Flex>
  );
}
