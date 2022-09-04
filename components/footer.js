/* eslint-disable jsx-a11y/anchor-is-valid */
import { Box, Stack, Text, Image, SimpleGrid, Spacer, Flex, IconButton } from "@chakra-ui/react";
import { AiOutlineMail, AiOutlineInstagram, AiOutlineYoutube } from "react-icons/ai";
import { GoLocation } from "react-icons/go";
import { FiFacebook } from "react-icons/fi";
import { BsTelephone } from "react-icons/bs";

import Logo from "../assets/img/navbarLogo.png";

export default function LargeWithLogoLeft() {
  return (
    <Box
      id="footerScroll"
      width="100%"
      backgroundColor="#f4f6f8"
      minH="100px"
      px={{ base: 4, md: 12, "2xl": "15rem" }}
      borderStyle="solid"
    >
      <SimpleGrid templateColumns={{ sm: "1fr 1fr", md: "1fr 1fr", "2xl": "1fr 1fr" }}>
        <Stack>
          <Flex pt={{ base: "30px", md: " 40px", "2xl": "71px" }} pb={{ base: "19px", md: "25px", "2xl": "39px" }}>
            <Stack width="100%">
              <Box pb="24.3px" margin={{ base: "auto", sm: "revert" }}>
                <Image src={Logo?.src} />
              </Box>

              <Flex textAlign={{ base: "center", sm: "revert" }}>
                <Text
                  fontFamily="SFProRounded"
                  fontSize="20px"
                  width="100%"
                  pb={{ base: "22px", md: "55px", "2xl": "66px" }}
                  textColor="#424852"
                  cursor="context-menu"
                >
                  <strong>
                    Happy <span>&#8226;</span> Habit <span>&#8226;</span> Do
                  </strong>
                </Text>
              </Flex>
            </Stack>
          </Flex>
        </Stack>
        <Flex>
          <Box flex={{ base: 0, md: 1 }} />
          <Stack
            pt={{ base: "15px", sm: "25px", md: "40px", "2xl": "71px" }}
            pb={{ base: "15px", sm: "0px", md: "25px", "2xl": "47px" }}
            marginLeft={{ base: "30px", md: "revert" }}
          >
            <Flex pb="17px">
              <IconButton
                variant="outline"
                colorScheme="white"
                aria-label="call sage"
                fontSize={{ base: "10px", md: "15px", "2xl": "20px" }}
                borderColor="#fa6c51"
                icon={<BsTelephone color="white" />}
                rounded="full"
                backgroundColor="#fa6c51"
                marginRight="10px"
                h={{ base: "25px", md: "30px", "2xl": "40px" }}
                w={{ base: "25px", md: "30px", "2xl": "40px" }}
                maxH={{ base: "25px", md: "30px", "2xl": "40px" }}
                maxW={{ base: "25px", md: "30px", "2xl": "40px" }}
                minH={{ base: "25px", md: "30px", "2xl": "40px" }}
                minW={{ base: "25px", md: "30px", "2xl": "40px" }}
                cursor="context-menu"
              />
              <Text
                href="#"
                fontFamily="SFProRounded"
                fontSize={{ base: "13px", md: "16px", "2xl": "20px" }}
                textColor="#424852"
                height="40px"
                pt="3px"
                cursor="context-menu"
              >
                99999999
              </Text>
            </Flex>
            <Flex pb="17px">
              <IconButton
                variant="outline"
                colorScheme="white"
                aria-label="mail"
                fontSize={{ base: "10px", md: "15px", "2xl": "20px" }}
                borderColor="#fa6c51"
                icon={<AiOutlineMail color="white" />}
                rounded="full"
                backgroundColor="#fa6c51"
                marginRight="10px"
                h={{ base: "25px", md: "30px", "2xl": "40px" }}
                w={{ base: "25px", md: "30px", "2xl": "40px" }}
                maxH={{ base: "25px", md: "30px", "2xl": "40px" }}
                maxW={{ base: "25px", md: "30px", "2xl": "40px" }}
                minH={{ base: "25px", md: "30px", "2xl": "40px" }}
                minW={{ base: "25px", md: "30px", "2xl": "40px" }}
                cursor="context-menu"
              />
              <Text
                href="#"
                fontFamily="SFProRounded"
                fontSize={{ base: "13px", md: "16px", "2xl": "20px" }}
                textColor="#424852"
                height="40px"
                pt="3px"
                cursor="context-menu"
              >
                habido@optimal.mn
              </Text>
            </Flex>
            <Flex>
              <IconButton
                variant="outline"
                borderColor="#fa6c51"
                colorScheme="white"
                aria-label="location"
                fontSize={{ base: "10px", md: "15px", "2xl": "20px" }}
                icon={<GoLocation color="white" />}
                rounded="full"
                h={{ base: "25px", md: "30px", "2xl": "40px" }}
                w={{ base: "25px", md: "30px", "2xl": "40px" }}
                maxH={{ base: "25px", md: "30px", "2xl": "40px" }}
                maxW={{ base: "25px", md: "30px", "2xl": "40px" }}
                minH={{ base: "25px", md: "30px", "2xl": "40px" }}
                minW={{ base: "25px", md: "30px", "2xl": "40px" }}
                backgroundColor="#fa6c51"
                marginRight="10px"
                cursor="context-menu"
              />
              <Text
                href="#"
                fontFamily="SFProRounded"
                fontSize={{ base: "13px", md: "16px", "2xl": "20px" }}
                width={{ base: "120px", md: "150px", "2xl": "226px" }}
                textColor="#424852"
                height="40px"
                pt="3px"
                cursor="context-menu"
              >
                ХУД, 18-р хороо LS Plaza 8 давхар 801 тоот
              </Text>
            </Flex>
          </Stack>
          <Spacer />
          <Stack
            marginRight={{ base: "30px", md: "revert" }}
            pt={{ base: "15px", sm: "25px", md: "40px", "2xl": "71px" }}
            pb={{ base: "15px", sm: "20px", md: "25px", "2xl": "47px" }}
          >
            <Flex pb="17px">
              <IconButton
                variant="outline"
                colorScheme="white"
                aria-label="instagram"
                fontSize={{ base: "10px", md: "15px", "2xl": "20px" }}
                icon={<AiOutlineInstagram color="white" />}
                rounded="full"
                borderColor="#fa6c51"
                backgroundColor="#fa6c51"
                marginRight="10px"
                h={{ base: "25px", md: "30px", "2xl": "40px" }}
                w={{ base: "25px", md: "30px", "2xl": "40px" }}
                maxH={{ base: "25px", md: "30px", "2xl": "40px" }}
                maxW={{ base: "25px", md: "30px", "2xl": "40px" }}
                minH={{ base: "25px", md: "30px", "2xl": "40px" }}
                minW={{ base: "25px", md: "30px", "2xl": "40px" }}
                cursor="context-menu"
              />
              <Text
                href="#"
                fontFamily="SFProRounded"
                fontSize={{ base: "13px", md: "16px", "2xl": "20px" }}
                textColor="#424852"
                height="40px"
                pt="3px"
                cursor="context-menu"
              >
                Follow us on
              </Text>
            </Flex>
            <Flex pb="17px">
              <IconButton
                variant="outline"
                colorScheme="white"
                aria-label="fb"
                borderColor="#fa6c51"
                fontSize={{ base: "10px", md: "15px", "2xl": "20px" }}
                icon={<FiFacebook color="white" />}
                rounded="full"
                backgroundColor="#fa6c51"
                marginRight="10px"
                h={{ base: "25px", md: "30px", "2xl": "40px" }}
                w={{ base: "25px", md: "30px", "2xl": "40px" }}
                maxH={{ base: "25px", md: "30px", "2xl": "40px" }}
                maxW={{ base: "25px", md: "30px", "2xl": "40px" }}
                minH={{ base: "25px", md: "30px", "2xl": "40px" }}
                minW={{ base: "25px", md: "30px", "2xl": "40px" }}
                cursor="context-menu"
              />
              <Text
                href="#"
                fontFamily="SFProRounded"
                fontSize={{ base: "13px", md: "16px", "2xl": "20px" }}
                textColor="#424852"
                height="40px"
                pt="3px"
                cursor="context-menu"
              >
                Like us on
              </Text>
            </Flex>
            <Flex>
              <IconButton
                variant="outline"
                colorScheme="white"
                aria-label="youtube"
                fontSize={{ base: "10px", md: "15px", "2xl": "20px" }}
                borderColor="#fa6c51"
                icon={<AiOutlineYoutube color="white" />}
                rounded="full"
                backgroundColor="#fa6c51"
                marginRight="10px"
                h={{ base: "25px", md: "30px", "2xl": "40px" }}
                w={{ base: "25px", md: "30px", "2xl": "40px" }}
                maxH={{ base: "25px", md: "30px", "2xl": "40px" }}
                maxW={{ base: "25px", md: "30px", "2xl": "40px" }}
                minH={{ base: "25px", md: "30px", "2xl": "40px" }}
                minW={{ base: "25px", md: "30px", "2xl": "40px" }}
                cursor="context-menu"
              />
              <Text
                href="#"
                fontFamily="SFProRounded"
                fontSize={{ base: "13px", md: "16px", "2xl": "20px" }}
                textColor="#424852"
                height="40px"
                pt="3px"
                cursor="context-menu"
              >
                Subscribe us on
              </Text>
            </Flex>
          </Stack>
        </Flex>
        <Stack>
          <Text
            fontFamily="SFProRounded"
            fontSize={{ base: "13px", md: "16px", "2xl": "20px" }}
            textColor="#424852"
            fontWeight="500"
            mt={{ base: "30px", sm: "-50px", md: " -60px", "2xl": "-80px" }}
            width="100%"
            textAlign={{ base: "center", sm: "revert" }}
            cursor="context-menu"
          >
            All rights reserved 2022. Optimal N Max LLC.
          </Text>
          <Text
            textAlign={{ base: "center", sm: "revert" }}
            fontFamily="SFProRounded"
            fontSize={{ base: "13px", md: "16px", "2xl": "20px" }}
            textColor="#424852"
            fontWeight="500"
            cursor="context-menu"
          >
            Powered By{" "}
            <a href="https://tanasoft.mn/" target="_blank" rel="noreferrer">
              <strong>TanaSoft</strong>
            </a>
          </Text>
        </Stack>
      </SimpleGrid>
    </Box>
  );
}
