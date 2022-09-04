import { chakra, Box, Flex, Text, Button, Image } from "@chakra-ui/react";
import useSWR from "swr";
import { useRouter } from "next/router";
import ReactHtmlParser from "react-html-parser";

const fetcher = (url) => fetch(url).then((result) => result.json());

export default function News() {
  const router = useRouter();
  const { id } = router.query;
  const { data: contentData, error } = useSWR(`http://app.habido.mn/web/content/${id}`, fetcher);
  const isodate = contentData?.auditLog?.createdAt;
  const date = [];
  let time = "";
  if (isodate !== undefined) {
    date.push(isodate.split("T")[0]);
    date.push(isodate.split("T")[1].split(":", 2).join(":"));
    time = date.join(", ");
  }
  if (error) return <div>failed to load</div>;
  if (!contentData) return <div>loading...</div>;
  return (
    <Box>
      <Flex minH="100px" py={{ base: 0 }} px={{ base: 4, md: 12, "2xl": "15rem" }} borderStyle="solid" align="center">
        <Box marginTop={{ base: "20px", md: "50px", "2xl": "125px" }}>
          <chakra.h1
            mb="10px"
            fontFamily="SFProRounded"
            fontSize={{ md: "18px" }}
            lineHeight={1.39}
            textColor="#707070"
            fontWeight={500}
            textAlign={{ md: "left" }}
          >
            Нийтэлсэн: {time} | {contentData?.readTime} минут уншина
          </chakra.h1>
          <chakra.h1
            mb="30px"
            fontFamily="SFProRounded"
            fontSize="44px"
            lineHeight={1}
            textColor="#424852"
            fontWeight={500}
            textAlign={{ md: "left" }}
          >
            {contentData.title}
          </chakra.h1>
        </Box>
      </Flex>
      <Flex minH="100px" py={{ base: 0 }} px={{ base: 4, md: 12, "2xl": "15rem" }} borderStyle="solid" align="center">
        <Box position="relative" width="100%">
          <Image src={contentData?.contentPhoto} alt="photo" borderRadius="20px" style={{ width: "100%" }} />
          <Button
            backgroundColor="#ffffff"
            textColor="#424852"
            fontFamily="SFProRounded"
            fontSize={{ base: "10px", sm: "12px", md: "15px", "2xl": "18px" }}
            borderRadius="10px"
            position="absolute"
            left={{ base: "15px", sm: "20px", md: "25px", "2xl": "41px" }}
            top={{ base: "15px", sm: "20px", md: "25px", "2xl": "31px" }}
            z-index="-1"
            height="auto"
            width="auto"
            padding="10px"
            cursor="auto"
            _focus={{ ring: "0px" }}
          >
            {contentData?.tags[0]?.name}
          </Button>
        </Box>
      </Flex>
      <Box>
        <Text
          minH="100px"
          py={{ base: 0 }}
          px={{ base: 4, md: 12, "2xl": "30rem" }}
          borderStyle="solid"
          align="center"
          fontFamily="SFProRounded"
          fontSize={{ md: "18px" }}
          lineHeight={1.39}
          textColor="#424852"
          fontWeight={500}
          textAlign={{ md: "left" }}
          margin="50px 0px 30px"
        >
          {ReactHtmlParser(contentData?.text)}
        </Text>
      </Box>
    </Box>
  );
}
