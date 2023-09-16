import React from "react";
import {
  FaWindows,
  FaPlaystation,
  FaAndroid,
  FaLinux,
  FaApple,
  FaXbox,
} from "react-icons/fa";

import { IconType } from "react-icons";

import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import { Platform } from "../hook/useGames";
import { HStack, Icon, Text, useColorMode } from "@chakra-ui/react";

interface Props {
  platforms: Platform[];
}

const PlatformIconList = ({ platforms }: Props) => {
  const { toggleColorMode, colorMode } = useColorMode();
  const iconMap: { [key: string]: IconType } = {
    //name: PlayStation
    //slug: playstation

    pc: FaWindows,
    xbox: FaXbox,
    apple: FaApple,
    playstation: FaPlaystation,
    linux: FaLinux,
    android: FaAndroid,
    nintendo: SiNintendo,
    ios: MdPhoneIphone,
    web: BsGlobe,
  };
  /* marginY={1} theme.space margin will calculate on this bases like value 1
  default value in chakra 4px*/
  return (
    <>
      <HStack marginY={1}>
        {" "}
        {platforms.map((platform) => (
          <Icon
            as={iconMap[platform.slug]}
            color={colorMode === "dark" ? "teal.400" : "green.700"}
          />
        ))}
      </HStack>
    </>
  );
};

export default PlatformIconList;
