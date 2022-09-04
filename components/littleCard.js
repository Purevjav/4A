import { Box, HStack, Image, Text } from "@chakra-ui/react";

export default function LittleCard({ data }) {
  return (
    <HStack
      className="transition duration-150 ease-in-out shadow-xl rounded-[15px] hover:scale-125 "
      w="160px"
      h="60px"
      bg="white"
    >
      <Box pr={2} pl={4}>
        <Image src={data.img} />
      </Box>
      <Box>
        <Text pr="2px" lineHeight="normal" fontWeight={500} fontFamily="SFProRounded" fontSize="13px">
          {data.title}
        </Text>
      </Box>
    </HStack>
  );
}
