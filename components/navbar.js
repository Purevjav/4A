import { Box, Flex, Collapse, Text, IconButton, Button, Stack, useDisclosure, Image } from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { useRouter } from "next/router";

import LogoImage from "../assets/img/navbarLogo.png";

export default function WithSubnavigation() {
  const router = useRouter();
  const { isOpen, onToggle } = useDisclosure();
  return (
    <Box>
      <Flex minH="100px" py={{ base: 2 }} px={{ base: 4, md: 12, "2xl": "15rem" }} borderStyle="solid" align="center">
        <Flex flex={{ base: 1, md: "auto" }} ml={{ base: -2 }} display={{ base: "flex", md: "none" }}>
          <IconButton
            onClick={onToggle}
            icon={isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />}
            variant="ghost"
            aria-label="Toggle Navigation"
          />
        </Flex>
        <Flex flex={{ base: 1 }} justify={{ base: "end", md: "start" }}>
          <Text fontFamily="heading" cursor="pointer" onClick={() => router.push("/")}>
            <Image src={LogoImage?.src} />
          </Text>
        </Flex>
        <Stack
          display={{ base: "none", md: "flex" }}
          flex={{ base: 1, md: 0 }}
          justify="flex-end"
          direction="row"
          spacing={6}
        >
          <Button
            as="a"
            fontSize="20px"
            fontFamily="SfProRounded"
            fontWeight={500}
            color="#424852"
            variant="link"
            href="#"
            onClick={() => router.push("/advise")}
            _focus={{ ring: "0px" }}
          >
            Зөвлөмж
          </Button>
          <Button fontSize="20px" fontFamily="SfProRounded" fontWeight={500} color="#424852" variant="link" href="#">
            <a href="#footerScroll">Холбоо барих</a>
          </Button>
          <Button
            display={{ base: "none", md: "inline-flex" }}
            borderRadius="17px"
            py="5px"
            px="20px"
            h="34px"
            w="128px"
            fontSize="20px"
            fontFamily="SfProRounded"
            fontWeight={500}
            color="white"
            bg="#fa6c51"
            href="#"
          >
            <a
              href="https://play.google.com/store/apps/details?id=mn.app.habido_app"
              className="h-[25px]"
              target="_blank"
              rel="noreferrer"
            >
              Апп татах
            </a>
          </Button>
        </Stack>
      </Flex>
      <Collapse in={isOpen} animateOpacity>
        <Stack flex={{ base: 1, md: 0 }} justify="flex-end" direction="column" spacing={6}>
          <Button
            fontSize="20px"
            fontFamily="SfProRounded"
            fontWeight={500}
            color="#424852"
            variant="link"
            href="#"
            _focus={{ ring: "0px" }}
            onClick={() => router.push("advise")}
          >
            Зөвлөмж
          </Button>
          <Button fontSize="20px" fontFamily="SfProRounded" fontWeight={500} color="#424852" variant="" href="#">
            <a href="#footerScroll">Холбоо барих</a>
          </Button>
          <Button
            alignSelf="center"
            borderRadius="17px"
            py="5px"
            px="20px"
            h="34px"
            w="128px"
            fontSize="20px"
            fontFamily="SfProRounded"
            fontWeight={500}
            color="white"
            bg="#fa6c51"
            href="#"
          >
            <a
              href="https://play.google.com/store/apps/details?id=mn.app.habido_app"
              className="h-[25px]"
              target="_blank"
              rel="noreferrer"
            >
              Апп татах
            </a>
          </Button>
          <Box />
        </Stack>
      </Collapse>
    </Box>
  );
}
