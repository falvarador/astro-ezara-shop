import { Grid, GridItem, Show, Text } from "@chakra-ui/react";

type Props = {
  title: string;
  content: string;
  icon: string;
};

export function AdvantageItem({ title, content, icon }: Props) {
  return (
    <Grid
      gridTemplateColumns={{
        base: "1fr",
        sm: "40px 1fr",
      }}
      alignItems="center"
      justifyItems="center"
      gap={{
        base: "1rem",
        sm: "0.5rem",
      }}
    >
      <GridItem>
        <img src={icon} width={40} height={40} alt={title} />
      </GridItem>
      <GridItem>
        <Text textTransform="uppercase" fontSize="xs" fontWeight="bold">
          {title}
        </Text>
        <Show above="sm">
          <Text fontSize="xs">{content}</Text>
        </Show>
      </GridItem>
    </Grid>
  );
}
