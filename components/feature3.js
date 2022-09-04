import { Box, SimpleGrid, Text, Image } from "@chakra-ui/react";

import Habit from "./habit";
import Feature3Image from "../assets/img/feature3Image.png";
import translateImg from "../assets/icons/translate.svg";
import book from "../assets/icons/book.svg";
import chair from "../assets/icons/chair.svg";
import stair from "../assets/icons/stairs.svg";
import running from "../assets/icons/running.svg";
import bike from "../assets/icons/bike.svg";
import swimming from "../assets/icons/swim.svg";
import mountain from "../assets/icons/mountain.svg";
import dancing from "../assets/icons/circle.svg";
import abs from "../assets/icons/abs.svg";
import phone from "../assets/icons/phone.svg";
import couple from "../assets/icons/couple.svg";
import fatherson from "../assets/icons/father.svg";
import clock from "../assets/icons/clock.svg";
import jump from "../assets/icons/jumping.svg";
import sitting from "../assets/icons/sit.svg";
import thinking from "../assets/icons/thinkg2.svg";
import thinkingre from "../assets/icons/think.svg";
import talk from "../assets/icons/talk.svg";
import tree from "../assets/icons/tree.svg";
import painting from "../assets/icons/painting.svg";
import suncloud from "../assets/icons/suncloud.svg";
import clock2 from "../assets/icons/clock2.svg";
import calendar from "../assets/icons/calendar.svg";
import brain from "../assets/icons/brain.svg";
import pig from "../assets/icons/pig.svg";
import wallet from "../assets/icons/wallet.svg";
import bottle from "../assets/icons/bottle.svg";
import bed from "../assets/icons/bed.svg";
import peer from "../assets/icons/peer.svg";
import brocli from "../assets/icons/broccoli.svg";
import ham from "../assets/icons/ham.svg";
import vodka from "../assets/icons/vodka.svg";
import food from "../assets/icons/food.svg";
import face from "../assets/icons/face.svg";

const habit1 = [
  {
    title: "Хувийн хөгжил",
    content: [
      {
        title: "Хэл сурах",
        img: translateImg?.src,
      },
      {
        title: "Ном унших",
        img: book?.src,
      },
      {
        title: "Бүтээлч зүйл хийх",
        img: translateImg?.src,
      },
      {
        title: "Эмх цэгцтэй байх",
        img: chair?.src,
      },
    ],
  },
  {
    title: "Гэр бүл",
    content: [
      {
        title: "Аав ээжтэй ярих",
        img: phone?.src,
      },
      {
        title: "Хосын болзоо",
        img: couple?.src,
      },
      {
        title: "Хүүхэдтэйгээ тоглох",
        img: fatherson?.src,
      },
      {
        title: "Талархлын цаг",
        img: clock?.src,
      },
    ],
  },
  {
    title: "Сэтгэл зүй",
    content: [
      {
        title: "Бясалгал",
        img: jump?.src,
      },
      {
        title: "Амьсгалын дасгал",
        img: sitting?.src,
      },
      {
        title: "Өдрийн эргэцүүлэл",
        img: thinking?.src,
      },
      {
        title: "Байгалд зугаалах",
        img: tree?.src,
      },
      {
        title: "Бодлоо цэгцлэх",
        img: thinkingre?.src,
      },
      {
        title: "Мэдрэмж тэмдэглэл",
        img: talk?.src,
      },
    ],
  },
  {
    title: "Бүтээмж",
    content: [
      {
        title: "Ажлын орчин цэгцлэх",
        img: painting?.src,
      },
      {
        title: "Ажлын өдрөө дүгнэх",
        img: suncloud?.src,
      },
      {
        title: "7 хоногоо дүгнэх",
        img: clock2?.src,
      },
      {
        title: "Сараа дүгнэх",
        img: calendar?.src,
      },
      {
        title: "Гүн төвлөрөх",
        img: brain?.src,
      },
    ],
  },
];

const habit2 = [
  {
    title: "Хөдөлгөөн",
    content: [
      {
        title: "Явган алхах",
        img: stair?.src,
      },
      {
        title: "Богино гүйлт",
        img: running?.src,
      },
      {
        title: "Дугуй унах",
        img: bike?.src,
      },
      {
        title: "Усанд сэлэх",
        img: swimming?.src,
      },
      {
        title: "Ууланд алхах",
        img: mountain?.src,
      },
      {
        title: "Бүжиглэх",
        img: dancing?.src,
      },
      {
        title: "Дасгал хийх",
        img: abs?.src,
      },
    ],
  },
  {
    title: "Санхүү",
    content: [
      {
        title: "Хуримтлал үүсгэх",
        img: pig?.src,
      },
      {
        title: "Зардал бүртгэх",
        img: wallet?.src,
      },
    ],
  },
  {
    title: "Эрүүл мэнд",
    content: [
      {
        title: "Ус уух",
        img: bottle?.src,
      },
      {
        title: "Унтаж амрах",
        img: bed?.src,
      },
      {
        title: "Эрүүл өглөөний цай",
        img: peer?.src,
      },
      {
        title: "Эрүүл өдрийн хоол",
        img: brocli?.src,
      },
      {
        title: "Эрүүл оройн хоол",
        img: ham?.src,
      },
      {
        title: "Муу зуршилаас салах",
        img: vodka?.src,
      },
      {
        title: "Мацаг барих",
        img: food?.src,
      },
      {
        title: "Арьсаа арчлах",
        img: face?.src,
      },
    ],
  },
];

export default function Feature3() {
  return (
    <Box pt="58px" pl={{ base: 4, md: 12, "2xl": "15rem" }}>
      <Text
        w={{ base: "auto", md: "520px", "2xl": "522px" }}
        lineHeight="normal"
        fontWeight={300}
        fontSize={{ base: "4xl", md: "4xl", lg: "55px" }}
        fontFamily="SFProRounded"
        mb={12}
        textColor="#fa6c51"
      >
        <span className="text-[#424852]">7 бүлгийн </span> 35 дадлаас <span className="text-[#424852]"> сонгон </span>
        хэрэгжүүлэх боломж
      </Text>
      <SimpleGrid columns={{ base: 1, xl: 2 }}>
        <Box paddingRight={{ base: 4, sm: "revert" }} mb="3">
          <SimpleGrid columns={{ base: 1, sm: 2, xl: 2 }}>
            <Box>
              {habit1.map((item, index) => (
                <Habit key={index} data={item} />
              ))}
            </Box>
            <Box>
              {habit2.map((item, index) => (
                <Habit key={index} data={item} />
              ))}
            </Box>
          </SimpleGrid>
        </Box>
        <Box display="flex">
          <Image src={Feature3Image?.src} />
        </Box>
      </SimpleGrid>
    </Box>
  );
}
