/* eslint-disable react/destructuring-assignment */
import { chakra, Flex, Icon } from "@chakra-ui/react";

import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

export default function Pagination({ size, current, onChangePag }) {
  const PagButton = (props) => {
    const activeStyle = {
      bg: "#FDC4B9",
      color: "#fa6c51",
    };
    return (
      <chakra.button
        onClick={props.onChangeBtn}
        mx={1}
        px={4}
        py={2}
        borderRadius="10px"
        color="#424852"
        opacity={props.disabled && 0.6}
        _hover={!props.disabled && activeStyle}
        cursor={props.disabled && "not-allowed"}
        {...(props.active && activeStyle)}
        display={
          props.p &&
          !props.active && {
            base: "none",
            sm: "block",
          }
        }
      >
        {props.children}
      </chakra.button>
    );
  };
  return (
    <Flex p={50} w="full" alignItems="center" justifyContent="center">
      <Flex>
        <PagButton onChangeBtn={() => +current !== 1 && onChangePag(current - 1)}>
          <Icon as={IoIosArrowBack} color="#fa6c51" boxSize={4} />
        </PagButton>
        {[...Array(size).keys()].map((item, index) => (
          <PagButton p key={index} onChangeBtn={() => onChangePag(item + 1)} active={+item + 1 === current}>
            {item + 1}
          </PagButton>
        ))}
        <PagButton onChangeBtn={() => +current !== size && onChangePag(current + 1)}>
          <Icon as={IoIosArrowForward} color="#fa6c51" boxSize={4} />
        </PagButton>
      </Flex>
    </Flex>
  );
}
