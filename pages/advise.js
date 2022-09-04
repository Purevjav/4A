import { useState } from "react";
import { Box, SimpleGrid } from "@chakra-ui/react";
import useSWR from "swr";

import PageHeader from "../components/pageHeader";
import Highlight from "../components/highlight";
import BigCard from "../components/bigCard";
import Others from "../components/others";
import Pagination from "../components/pagination";

const fetcher = (url) => fetch(url).then((result) => result.json());

export default function Advise() {
  const [pag, setPag] = useState(1);
  const [name, setName] = useState("");
  const [isHighlight, setHighlight] = useState(false);
  const [searchText, setSearchText] = useState("");
  const { data: highlightData, error } = useSWR("http://app.habido.mn/web/highlighted-contents", fetcher);
  const { data: contents } = useSWR(
    `http://app.habido.mn/web/contents?SearchText=${searchText}&Name=${name}&Pid=${pag}&Psize=6`,
    fetcher
  );
  const { data: tags } = useSWR("http://app.habido.mn/web/content/tags", fetcher);

  if (error) return <div>failed to load</div>;
  if (!highlightData) return <div>loading...</div>;

  return (
    <Box px={{ base: 4, md: 12, "2xl": "15rem" }}>
      <PageHeader setName={setName} setSearchText={setSearchText} tags={tags} />
      {searchText === "" && name === "" ? (
        <>
          <Highlight isHighlight={isHighlight} setHighlight={setHighlight} number={highlightData.length} />
          <SimpleGrid spacing={10} columns={{ base: 1, md: 2, xl: 3 }}>
            {isHighlight
              ? highlightData.map((item, index) => <BigCard key={index} data={item} />)
              : highlightData.slice(0, 3).map((item, index) => <BigCard key={index} data={item} />)}
          </SimpleGrid>
        </>
      ) : null}
      <Others name={name} size={contents?.rowCount} />
      <SimpleGrid spacing={10} columns={{ base: 1, md: 2, xl: 3 }}>
        {contents?.results.map((item, index) => (
          <BigCard key={index} data={item} />
        ))}
      </SimpleGrid>
      <Pagination onChangePag={setPag} current={pag} size={contents?.pageCount} />
    </Box>
  );
}
