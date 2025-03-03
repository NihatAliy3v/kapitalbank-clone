import { Link } from "react-router-dom";
import {
  FaFacebook,
  FaLinkedin,
  FaInstagram,
  FaYoutube,
  FaTelegram,
  FaPhone,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const navigation = [
  {
    title: "Kapital Bank",
    items: [
      { name: "Bank haqqında", url: "/" },
      { name: "İnsan resursları", url: "/" },
      { name: "Xidmət şəbəkəsi", url: "/" },
      { name: "Birbank", url: "/" },
      { name: "Xəbərlər", url: "/" },
      { name: "Təklif və şikayətlər", url: "/" },
    ],
  },
  {
    title: "Məhsullar",
    items: [
      { name: "Kartlar", url: "/" },
      { name: "Kreditlər", url: "/" },
      { name: "Depozitlər", url: "/" },
      { name: "Sığorta", url: "/" },
      { name: "Pul köçürmələri", url: "/" },
      { name: "Fərdi bankçılıq", url: "/" },
      { name: "Onlayn xidmətlər", url: "/" },
    ],
  },
  {
    title: "Çevik keçidlər",
    items: [
      { name: "Birbank kartı sifariş et", url: "/" },
      { name: "Kredit sifariş et", url: "/" },
      { name: "Debet kart sifariş et", url: "/" },
    ],
  },
  {
    title: "Digər",
    items: [
      { name: "Onlayn növbə", url: "/" },
      { name: "Tariflər və məlumatlar", url: "/" },
      { name: "Infokiosk", url: "/" },
      { name: "Bloqlar", url: "/" },
      { name: "Kiberhücumlardan necə qorunmalı?", url: "/" },
    ],
  },
];

const Footer = () => {
  return (
    <footer className="bg-footerColor text-white text-sm pt-[35px] pb-[24px]">
      <div className="container ">
        <div className="flex justify-between">
          {navigation.map((nav, index) => (
            <div key={index} className="px-[15px] w-1/4">
              <p className="mb-[10px] font-semibold">{nav.title}</p>
              <ul>
                {nav.items.map((item, index) => (
                  <li key={index} className="mb-[10px]">
                    <Link to={item.url}>{item.name}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div className="px-[15px] w-1/4 flex flex-col items-center ">
            <p className="text-center  font-semibold mb-6">
              Birbank tətbiqini yükləmək üçün QR-kodu oxudun.
            </p>
            <img
              src="https://www.kapitalbank.az/assets/static/img/qr-code.svg"
              alt="qr"
            />
            <div className="mt-6 flex flex-col gap-y-4">
              <Link
                className="bg-white py-2 px-2.5 text-sm text-textPrimaryColor flex items-center gap-x-2 rounded-md"
                to="/"
              >
                <div>
                  <img
                    src="https://www.kapitalbank.az/assets/static/img/play-store.svg"
                    alt="play market"
                  />
                </div>
                <div className="flex flex-col justify-center">
                  <p className="font-semibold leading-4">Google Play</p>
                  <p className="leading-4">Mobil tətbiqi yüklə</p>
                </div>
              </Link>
              <Link
                className="bg-white py-2 px-2.5 text-sm text-textPrimaryColor flex items-center gap-x-2 rounded-md"
                to="/"
              >
                <div>
                  <img
                    src="https://www.kapitalbank.az/assets/static/img/app-store.svg"
                    alt="app store"
                  />
                </div>
                <div className="flex flex-col justify-center">
                  <p className="font-semibold leading-4">App Store</p>
                  <p className="leading-4">Mobil tətbiqi yüklə</p>
                </div>
              </Link>
            </div>
          </div>
        </div>
        <div>
          <ul className="flex gap-x-8 mt-10 pb-5 text-xl items-center">
            <li>
              <Link
                className="flex py-1 px-2 items-center gap-x-2 border border-red-600 rounded-md"
                to="/"
              >
                <FaPhone color="red" />
                <span className="font-semibold text-lg">196</span>
              </Link>
            </li>
            <li>
              <Link to="/">
                <FaFacebook />
              </Link>
            </li>
            <li>
              <Link to="/">
                <FaLinkedin />
              </Link>
            </li>
            <li>
              <Link to="/">
                <FaXTwitter />
              </Link>
            </li>
            <li>
              <Link to="/">
                <FaInstagram />
              </Link>
            </li>
            <li>
              <Link to="/">
                <FaYoutube />
              </Link>
            </li>
            <li>
              <Link to="/">
                <FaTelegram />
              </Link>
            </li>
          </ul>
        </div>
        <div className="border-t border-[#4d4d4d] mt-9 pt-6">
          <div className="flex justify-between">
            <p className="w-[41.66%] pr-[15px] flex items-center">
              © 2025 «Kapital Bank» ASC. Bütün hüquqlar qorunur.
            </p>
            <div className="w-[58.33%] pl-[15px] flex justify-end">
              <ul className="flex gap-x-7 items-center">
                <li>
                  <Link to="/" className="flex h-[30px]">
                    <img
                      className="h-full"
                      src="https://www.kapitalbank.az/assets/static/img/content/elements/png/93817465.png"
                      alt="egov"
                    />
                  </Link>
                </li>
                <li>
                  <Link to="/" className="flex h-[60px]">
                    <img
                      className="h-full"
                      src="https://www.kapitalbank.az/assets/static/img/content/elements/png/aesf-logo.png"
                      alt="sigorta"
                    />
                  </Link>
                </li>
                <li>
                  <Link to="/" className="flex h-[24px]">
                    <img
                      className="h-full"
                      src="https://www.kapitalbank.az/assets/static/img/content/elements/png/info.png"
                      alt="infobank"
                    />
                  </Link>
                </li>
                <li>
                  <Link to="/" className="flex h-[24px]">
                    <img
                      className="h-full"
                      src="https://www.kapitalbank.az/assets/static/img/content/elements/png/msp.png"
                      alt="maliyye"
                    />
                  </Link>
                </li>
                <li>
                  <Link to="/" className="flex h-[20px]">
                    <img
                      className="h-full"
                      src="https://www.kapitalbank.az/assets/static/img/content/elements/svg/esghub-white.svg"
                      alt="esghub"
                    />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-1/2 pr-[15px] mt-6">
            <p className="text-[13px]">
              “Kapital Bank” ASC (Bakı şəh., Nəsimi r-nu, Neftçilər pr. 153) 05
              noyabr 2018-ci il tarixli 244 nömrəli Bank Lisenziyası əsasında
              fəaliyyət göstərir.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
