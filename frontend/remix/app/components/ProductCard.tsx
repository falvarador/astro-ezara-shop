import { StarIcon } from "@chakra-ui/icons";
import { AspectRatio, Flex, Box, Text } from "@chakra-ui/react";
import type { Product } from "~/models";

export function ProductCard({ image, title, price, rating }: Product) {
  return (
    <Box
      width={"100%"}
      border="solid 1px"
      borderColor={"gray.200"}
      padding={"1rem"}
    >
      <AspectRatio
        position="relative"
        ratio={1}
        maxWidth="100%"
        marginBottom={"1rem"}
      >
        <img
          src={image}
          alt=""
          style={{
            objectFit: "contain",
          }}
        />
      </AspectRatio>
      <Text noOfLines={2} color={"gray.500"} marginBottom="0.75rem">
        {title}
      </Text>
      <Flex alignItems={"center"} justifyContent="space-between">
        <Text fontWeight={"bold"}>$ {price}</Text>
        <Flex>
          <StarIcon color={"orange"} />
          <StarIcon color={"orange"} />
          <StarIcon color={"orange"} />
          <StarIcon color={"orange"} />
          <StarIcon color={"gray.300"} />
        </Flex>
      </Flex>
    </Box>
  );
}
