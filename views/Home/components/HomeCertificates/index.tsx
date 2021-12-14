import {
  Heading,
  Box,
  Stack,
  Text,
  useColorModeValue,
  Image,
} from "@chakra-ui/react";
import * as React from "react";
import { NextPage } from "next";
import { TFunction, I18nContext } from "next-i18next";

import { withTranslation } from "../../../../i18n";

type Props = {
  t: TFunction;
};

const App: NextPage<Props, any> = ({ t }) => {
  const {
    i18n: { language },
  } = React.useContext(I18nContext);

  return (
    <>
      <Box
        as="section"
        maxW="7xl"
        mx="auto"
        px={{ base: "6", md: "8" }}
        py={{ base: "12", md: "20" }}
      >
        <Box mb="12" textAlign="center">
          <Heading size="2xl" fontWeight="extrabold" lineHeight="normal">
            {t("home-text32")}
          </Heading>
          <Text
            fontSize="lg"
            mt="4"
            fontWeight="medium"
            color={useColorModeValue("gray.600", "whiteAlpha.700")}
          >
            {t("home-text33")}
          </Text>
        </Box>
        {language === "zh-CN" && (
          <Stack
            spacing="0"
            direction={{ base: "column", md: "row" }}
            justifyContent="space-around"
            alignItems="center"
          >
            <Box textAlign="center" as="a" href="/zh/cert/uos" target="_blank">
              <Image
                src="https://static.apiseven.com/202108/1629864662635-2d20f607-6330-48f8-9acc-aaaed47133a6.png"
                maxH="80px"
                margin="0 auto 10px"
              />
              <Text>统信软件产品互认证明</Text>
            </Box>
            <br />
            <Box
              textAlign="center"
              as="a"
              href="/zh/cert/huawei-stack-8.0"
              target="_blank"
            >
              <Image
                src="https://static.apiseven.com/202108/huawei-compatible.jpeg"
                maxH="80px"
                margin="0 auto 10px"
              />
              <Text>华为云 Stack 8.0（鲲鹏）</Text>
            </Box>
            <br />
            <Box
              textAlign="center"
              as="a"
              href="/zh/cert/huawei-kunpeng"
              target="_blank"
            >
              <Image
                src="https://static.apiseven.com/202108/huawei-compatible.jpeg"
                maxH="80px"
                margin="0 auto 10px"
              />
              <Text>华为云鲲鹏云服务</Text>
            </Box>
            <br />
            <Box
              textAlign="center"
              as="a"
              href="/zh/cert/oscar2021"
              target="_blank"
              w="201px"
            >
              <Image
                src="https://static.apiseven.com/%E5%8F%AF%E4%BF%A1%E4%BA%91.jpeg"
                maxH="80px"
                margin="0 auto 10px"
              />
              <Text>可信开源项目</Text>
            </Box>
            <br />
            <Box
              textAlign="center"
              as="a"
              href="/zh/cert/qilin-NeoCertify"
              target="_blank"
              w="201px"
            >
              <Image
                src="https://static.apiseven.com/202108/1632467693166-c391cf5d-90bf-4e71-b7f0-fae897563476.png"
                maxH="80px"
                margin="0 auto 10px"
              />
              <Text>麒麟软件 NeoCertify 认证</Text>
            </Box>
          </Stack>
        )}
        {language !== "zh-CN" && (
          <Stack
            spacing="8"
            direction={{ base: "column", md: "row" }}
            justifyContent="space-around"
          >
            <Box
              textAlign="center"
              as="a"
              href="https://www.linuxfoundation.org/"
              target="_blank"
            >
              <Image
                src="https://static.apiseven.com/logo-linux-silver-member.png"
                h="100px"
                margin="0 auto"
              />
            </Box>
            <Box
              textAlign="center"
              as="a"
              href="https://tarscloud.org/"
              target="_blank"
            >
              <Image
                src="https://static.apiseven.com/logo-tars-foundation.png"
                h="100px"
                margin="0 auto"
              />
            </Box>
          </Stack>
        )}
      </Box>
    </>
  );
};

App.getInitialProps = async () => ({
  namespacesRequired: ["common", "home"],
});

export default withTranslation("home")(App);
