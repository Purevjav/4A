import { Box, SimpleGrid, Text } from "@chakra-ui/react";

import LittleCard from "./littleCard";

export default function Habit({ data }) {
  return (
    <Box>
      <Text my={6} fontFamily="SFProRounded" textColor="#424852" fontSize="16px" fontWeight={900} lineHeight="normal">
        {data?.title}
      </Text>
      <SimpleGrid spacingY={4} columns={2} justifyItems={{ base: "center", sm: "revert" }}>
        {data?.content.map((item, index) => (
          <LittleCard key={index} data={item} />
        ))}
      </SimpleGrid>
    </Box>
  );
}
