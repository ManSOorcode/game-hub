import React from "react";
import GameCardContainer from "../GameCardContainer";
import {
  Card,
  CardBody,
  HStack,
  Skeleton,
  SkeletonCircle,
  SkeletonText,
  Stack,
} from "@chakra-ui/react";

const GenresCardSkeleton = () => {
  return (
    <GameCardContainer>
      <Card>
        <HStack>
          <SkeletonCircle size="10" />
          <CardBody>
            <Skeleton height={1} />
          </CardBody>
        </HStack>
      </Card>
    </GameCardContainer>
  );
};

export default GenresCardSkeleton;
