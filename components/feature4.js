import { chakra, Box, Flex, Image, Button } from "@chakra-ui/react";
import { AiFillAndroid } from "react-icons/ai";
import { SiApple, SiHuawei } from "react-icons/si";

import HeroImage from "../assets/img/feature4.png";

export default function Feature4() {
  return (
    <Flex h="100vh" bg="#f4f6f8" flexDir={{ base: "column-reverse", md: "row" }}>
      <Flex
        direction="column"
        alignItems="center"
        justifyContent="space-around"
        pl={{ base: 4, md: 12, "2xl": "15rem" }}
      >
        <Box />
        <Box>
          <chakra.h1
            fontFamily="SFProRounded"
            mb={6}
            fontWeight={300}
            fontSize={{ base: "4xl", md: "4xl", lg: "55px" }}
            lineHeight="normal"
          >
            <span className="text-[#fa6c51]"> Яг одоо аппликейшнаа татаарай</span> <br />
          </chakra.h1>
          <Flex mb={5} flexDir={{ base: "column", md: "row" }} pr={{ base: 4, sm: "revert" }}>
            <Button
              borderRadius={13}
              m={1}
              onClick={() => window?.open("https://apps.apple.com/mn/app/habido/id1579996644")}
            >
              <Box color="gray.400" margin={1}>
                <SiApple size={22} />
              </Box>{" "}
              App Store
            </Button>
            <Button
              borderRadius={13}
              m={1}
              onClick={() => window?.open("https://play.google.com/store/apps/details?id=mn.app.habido_app")}
            >
              <Box color="green.400" margin={1}>
                <AiFillAndroid size={25} />
              </Box>{" "}
              Google Play
            </Button>
            <Button
              borderRadius={13}
              m={1}
              onClick={() => window?.open("https://appgallery.huawei.com/app/C105058515")}
            >
              <Box color="red.600" margin={1}>
                <SiHuawei size={25} />
              </Box>{" "}
              AppGallery
            </Button>
          </Flex>
        </Box>
      </Flex>
      <Box>
        <Image src={HeroImage?.src} alt="holding phone" fit="scale-down" w="full" h={{ md: "full" }} loading="lazy" />
      </Box>
    </Flex>
  );
}
