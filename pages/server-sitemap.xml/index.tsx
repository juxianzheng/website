import { getServerSideSitemap } from "next-sitemap";
import { GetServerSideProps } from "next";

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  // NOTE: 可动态从 CMS 等系统生成 URL

  const dataFileNameList = ["blog", "devcon", "news", "usercase", "acasia2021"];
  const langs = ["zh-CN", "en-US"];

  let urls = [];

  for (let name of dataFileNameList) {
    const data = require(`../../data/${name}.json`);
    for (let lang of langs) {
      const list = data[lang];
      if (!list) {
        continue;
      }

      for (let item of list) {
        if (item.path) {
          urls.push(`https://www.apiseven.com${item.path}`);
        } else {
          urls.push(item.url);
        }
      }
    }
  }

  const fields = Array.from(new Set(urls)).map((url) => ({
    loc: url,
    lastmod: new Date().toISOString(),
  }));

  return getServerSideSitemap(ctx, fields);
};

const ServerSitemap = () => <></>;

export default ServerSitemap;
