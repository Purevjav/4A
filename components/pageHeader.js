import { Flex, Box, InputGroup, InputLeftElement, Input, Text, Spacer, IconButton } from "@chakra-ui/react";
import Select from "react-select";
import { AiOutlineSearch } from "react-icons/ai";
import { FiFilter } from "react-icons/fi";

export default function PageHeader({ tags, setSearchText, setName }) {
  const items = tags?.map((tag) => ({
    value: tag.name,
    label: tag.name,
  }));
  items?.unshift({ value: "", label: "Ангилах" });

  return (
    <Flex alignItems="center" justifyContent="space-between" borderWidth={0}>
      <Text mr={12} fontFamily="SFProRounded" fontSize="55px" fontWeight={900} color="#424852">
        Зөвлөмж
      </Text>
      <InputGroup w="454px" display={{ base: "none", lg: "block" }} ml="auto">
        <InputLeftElement mx={2} style={{ height: "100%" }} pointerEvents="none">
          <AiOutlineSearch size={30} />
        </InputLeftElement>
        <Input
          fontSize="18px"
          className="input-lg"
          border="solid 3px"
          borderRadius="15px"
          h="53px"
          placeholder="Хайлт..."
          onChange={(e) => setSearchText(e.target.value)}
        />
      </InputGroup>
      <Spacer />
      <Select
        display={{ base: "none", sm: "block" }}
        components={{
          IndicatorSeparator: () => null,
        }}
        styles={{
          control: (base, state) => ({
            ...base,
            boxShadow: "none",
            height: "53px",
            width: "200px",
            borderRadius: "20px",
            border: state.isFocused ? "solid 3px #ff614d" : "solid 3px #E2E8F0",
            backgroundColor: "#ffffff",
            "&:hover": {
              border: "solid 3px #ff614d",
            },
            fontSize: "18px",
            fontFamily: "SFProRounded",
          }),
          menu: (base) => ({
            ...base,
            borderRadius: "15px",
            borderWidth: "3px",
            border: "solid 3px #f4f6f8",
            backgroundColor: "#f4f6f8",
            fontSize: "18px",
            fontFamily: "SFProRounded",
          }),
        }}
        options={items}
        placeholder="Ангилах"
        onChange={(e) => setName(e.value)}
      />
      <Box display={{ base: "none", xl: "block" }}>
        <IconButton ml="6" h="53px" w="53px" borderRadius={30} icon={<FiFilter size={20} />} />
      </Box>
    </Flex>
  );
}
