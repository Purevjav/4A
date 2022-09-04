import { Box, Heading, Text, Stack, Image, Flex, Spacer } from "@chakra-ui/react";
import { AiOutlineClockCircle, AiOutlineEye } from "react-icons/ai";
import { useRouter } from "next/router";
import ReactHtmlParser from "react-html-parser";

export default function blogPostWithImage({ data }) {
  const router = useRouter();
  const isodate = data?.auditLog?.createdAt;
  const date = [];
  let time = "";
  if (isodate !== undefined) {
    date.push(isodate.split("T")[0]);
    date.push(isodate.split("T")[1].split(":", 2).join(":"));
    time = date.join(", ");
  }
  return (
    <Box
      position="relative"
      maxW="450px"
      m="auto"
      h="514px"
      w="full"
      boxShadow="0 8px 24px 0 rgba(0, 0, 0, 0.15);"
      borderRadius="15px"
      p={5}
      overflow="hidden"
      display="flex"
      flexDir="column"
      cursor="pointer"
      onClick={() => router.push(`/news/${data.contentId}`)}
    >
      <Box position="relative">
        <Image overflow="hidden" borderRadius="15px" h="200px" w="full" src={data?.contentPhoto} objectFit="cover" />
        <Box
          py="5px"
          px="10px"
          boxShadow="0 3px 6px 0 rgba(0, 0, 0, 0.16);"
          textAlign="center"
          bg="#ffffff"
          color="#424852"
          fontWeight={500}
          fontSize="15px"
          fontFamily="SFProRounded"
          borderRadius="10px"
          left={3}
          bottom={3}
          position="absolute"
        >
          {data?.tags[0]?.name}
        </Box>
      </Box>
      <Stack mt={6}>
        <Flex>
          <Box mr={2}>
            <AiOutlineClockCircle color="#707070" />
          </Box>
          <Text fontSize="15px" textColor="#707070">
            {data?.readTime} минут уншина
          </Text>
        </Flex>
        <Heading
          className="twoRows"
          color="#424852"
          lineHeight="1.39"
          fontWeight="bold"
          fontSize="18px"
          fontFamily="SFProRounded"
        >
          {data?.title}
        </Heading>
        <Box py={3}>
          <Text
            className="threeRows"
            color="#707070"
            lineHeight="1.67"
            fontWeight="normal"
            fontSize="15px"
            fontFamily="SFProRounded"
          >
            {ReactHtmlParser(data?.text)}
          </Text>
        </Box>
      </Stack>
      <Box mt="auto">
        <Flex fontFamily="SFProRounded" color="#707070" lineHeight="1.67" fontWeight="normal" fontSize="15px">
          <Box p="3px" mr={1}>
            <AiOutlineEye size={19} color="#707070" />
          </Box>
          <Text fontSize="15px" textColor="#707070">
            {data?.view}
          </Text>
          <Spacer />
          <Text>Нийтэлсэн: {time}</Text>
        </Flex>
      </Box>
    </Box>
  );
}
