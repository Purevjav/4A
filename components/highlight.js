import { Flex, Text, Spacer, Button, Box } from "@chakra-ui/react";
import { FiChevronRight, FiChevronDown } from "react-icons/fi";

export default function Highlight({ number, setHighlight, isHighlight }) {
  return (
    <Flex alignItems="center" my={12} justifyContent="space-between" borderWidth={0} overflowX="auto">
      <Text mr={6} fontFamily="SFProRounded" fontSize="44px" fontWeight={900} color="#424852">
        Онцлох
      </Text>
      <Box
        display={{ base: "none", sm: "block" }}
        textAlign="center"
        bg="#edf2f7"
        fontFamily="SFProRounded"
        fontSize="18px"
        color="#424852"
        w="53px"
        h="26px"
        borderRadius="20px"
      >
        {number}
      </Box>
      <Spacer />
      <Button
        fontFamily="SFProRounded"
        fontSize="18px"
        color="#424852"
        w="118px"
        h="53px"
        borderRadius="20px"
        rightIcon={isHighlight ? <FiChevronDown /> : <FiChevronRight />}
        onClick={() => setHighlight(!isHighlight)}
      >
        Бүгд
      </Button>
    </Flex>
  );
}
