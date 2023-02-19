import { Link } from "@remix-run/react";
import { Box, Container, Flex } from "@chakra-ui/react";

export function TopBar() {
  return (
    <Box bg="black" w="100%" p={2}>
      <Container
        as={Flex}
        color="white"
        justifyContent="space-between"
        fontSize="xs"
        size={{
          lg: "lg",
        }}
      >
        <Flex gap="1.5rem">
          <Flex as={Link} to="#" alignItems="center" gap="0.5rem">
            <img src="/ico-small-phone.svg" width={24} height="24" alt="" /> +38
            (050) 12 34 567
          </Flex>

          <Flex
            as={Link}
            display={{ base: "none", sm: "flex" }}
            to="#"
            alignItems="center"
            gap="0.5rem"
          >
            <img src="/ico-small-location.svg" width={24} height="24" alt="" />{" "}
            Ukraine, Kyiv,Khreshchatyk 1
          </Flex>

          <Flex
            as={Link}
            display={{ base: "none", sm: "flex" }}
            to="#"
            alignItems="center"
            gap="0.5rem"
          >
            <img src="/ico-small-clock.svg" width={24} height="24" alt="" /> All
            week 24/7
          </Flex>
        </Flex>

        <Flex gap="1rem">
          <Link to="#">
            <img src="/ico-small-fb.svg" width={24} height="24" alt="" />
          </Link>
          <Link to="#">
            <img src="/ico-small-tw.svg" width={24} height="24" alt="" />
          </Link>
          <Link to="#">
            <img src="/ico-small-ig.svg" width={24} height="24" alt="" />
          </Link>
          <Link to="#">
            <img src="/ico-small-pin.svg" width={24} height="24" alt="" />
          </Link>
        </Flex>
      </Container>
    </Box>
  );
}