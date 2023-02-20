import { StarIcon } from "@chakra-ui/icons";
import { AspectRatio, Box, Flex, Skeleton, Text } from "@chakra-ui/react";

export function ProductCardSkeleton() {
  return (
    <Skeleton>
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
            src=""
            alt=""
            style={{
              objectFit: "contain",
            }}
          />
        </AspectRatio>
        <Text noOfLines={2} color={"gray.500"} marginBottom="0.75rem"></Text>
        <Flex alignItems={"center"} justifyContent="space-between">
          <Text fontWeight={"bold"}>$ 0.00</Text>
          <Flex>
            <StarIcon color={"orange"} />
            <StarIcon color={"orange"} />
            <StarIcon color={"orange"} />
            <StarIcon color={"orange"} />
            <StarIcon color={"gray.300"} />
          </Flex>
        </Flex>
      </Box>
    </Skeleton>
  );
}
