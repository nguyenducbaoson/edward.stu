const socialImgs = [
  {
    name: "insta",
    imgPath: "/images/insta.png",
    link: "https://www.instagram.com/_nguyenducbaoson/"
  },
  {
    name: "fb",
    imgPath: "/images/fb.png",
    link: "https://www.facebook.com/nguyenducbaoson"
  },
  {
    name: "x",
    imgPath: "/images/x.png",
    link: "https://www.instagram.com/_nguyenducbaoson/"
  },
  {
    name: "linkedin",
    imgPath: "/images/linkedin.png",
    link: "https://www.linkedin.com/in/bao-son-nguyen-duc-b72b9135b/"
  },
];

type SocialImg = {
  imgPath: string;
  link: string;
};

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="flex flex-col justify-center">
          <p>Terms & Conditions</p>
        </div>
        <div className="socials">
          {socialImgs.map((socialImg: SocialImg, index: number) => (
            <div key={index} className="icon">
              <a href={socialImg.link} target="_blank" rel="noopener noreferrer">
                <img src={socialImg.imgPath} alt="social icon" />
              </a>
            </div>
          ))}
        </div>
        <div className="flex flex-col justify-center">
          <p className="text-center md:text-end">
            © {new Date().getFullYear()} Nguyen Duc Bao Son. All rights reserved.
          </p>
        </div>
      </div>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam dolor voluptas ducimus sunt quas, est vel at ut error adipisci obcaecati et veritatis quos qui aliquid saepe labore voluptatem modi.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam dolor voluptas ducimus sunt quas, est vel at ut error adipisci obcaecati et veritatis quos qui aliquid saepe labore voluptatem modi.</p>

      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam dolor voluptas ducimus sunt quas, est vel at ut error adipisci obcaecati et veritatis quos qui aliquid saepe labore voluptatem modi.</p>

      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam dolor voluptas ducimus sunt quas, est vel at ut error adipisci obcaecati et veritatis quos qui aliquid saepe labore voluptatem modi.</p>

      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam dolor voluptas ducimus sunt quas, est vel at ut error adipisci obcaecati et veritatis quos qui aliquid saepe labore voluptatem modi.</p>

      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam dolor voluptas ducimus sunt quas, est vel at ut error adipisci obcaecati et veritatis quos qui aliquid saepe labore voluptatem modi.</p>

      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam dolor voluptas ducimus sunt quas, est vel at ut error adipisci obcaecati et veritatis quos qui aliquid saepe labore voluptatem modi.</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam dolor voluptas ducimus sunt quas, est vel at ut error adipisci obcaecati et veritatis quos qui aliquid saepe labore voluptatem modi.</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam dolor voluptas ducimus sunt quas, est vel at ut error adipisci obcaecati et veritatis quos qui aliquid saepe labore voluptatem modi.</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam dolor voluptas ducimus sunt quas, est vel at ut error adipisci obcaecati et veritatis quos qui aliquid saepe labore voluptatem modi.</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam dolor voluptas ducimus sunt quas, est vel at ut error adipisci obcaecati et veritatis quos qui aliquid saepe labore voluptatem modi.</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam dolor voluptas ducimus sunt quas, est vel at ut error adipisci obcaecati et veritatis quos qui aliquid saepe labore voluptatem modi.</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam dolor voluptas ducimus sunt quas, est vel at ut error adipisci obcaecati et veritatis quos qui aliquid saepe labore voluptatem modi.</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam dolor voluptas ducimus sunt quas, est vel at ut error adipisci obcaecati et veritatis quos qui aliquid saepe labore voluptatem modi.</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam dolor voluptas ducimus sunt quas, est vel at ut error adipisci obcaecati et veritatis quos qui aliquid saepe labore voluptatem modi.</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam dolor voluptas ducimus sunt quas, est vel at ut error adipisci obcaecati et veritatis quos qui aliquid saepe labore voluptatem modi.</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam dolor voluptas ducimus sunt quas, est vel at ut error adipisci obcaecati et veritatis quos qui aliquid saepe labore voluptatem modi.</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam dolor voluptas ducimus sunt quas, est vel at ut error adipisci obcaecati et veritatis quos qui aliquid saepe labore voluptatem modi.</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam dolor voluptas ducimus sunt quas, est vel at ut error adipisci obcaecati et veritatis quos qui aliquid saepe labore voluptatem modi.</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam dolor voluptas ducimus sunt quas, est vel at ut error adipisci obcaecati et veritatis quos qui aliquid saepe labore voluptatem modi.</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam dolor voluptas ducimus sunt quas, est vel at ut error adipisci obcaecati et veritatis quos qui aliquid saepe labore voluptatem modi.</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam dolor voluptas ducimus sunt quas, est vel at ut error adipisci obcaecati et veritatis quos qui aliquid saepe labore voluptatem modi.</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam dolor voluptas ducimus sunt quas, est vel at ut error adipisci obcaecati et veritatis quos qui aliquid saepe labore voluptatem modi.</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam dolor voluptas ducimus sunt quas, est vel at ut error adipisci obcaecati et veritatis quos qui aliquid saepe labore voluptatem modi.</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam dolor voluptas ducimus sunt quas, est vel at ut error adipisci obcaecati et veritatis quos qui aliquid saepe labore voluptatem modi.</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam dolor voluptas ducimus sunt quas, est vel at ut error adipisci obcaecati et veritatis quos qui aliquid saepe labore voluptatem modi.</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam dolor voluptas ducimus sunt quas, est vel at ut error adipisci obcaecati et veritatis quos qui aliquid saepe labore voluptatem modi.</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam dolor voluptas ducimus sunt quas, est vel at ut error adipisci obcaecati et veritatis quos qui aliquid saepe labore voluptatem modi.</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam dolor voluptas ducimus sunt quas, est vel at ut error adipisci obcaecati et veritatis quos qui aliquid saepe labore voluptatem modi.</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam dolor voluptas ducimus sunt quas, est vel at ut error adipisci obcaecati et veritatis quos qui aliquid saepe labore voluptatem modi.</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam dolor voluptas ducimus sunt quas, est vel at ut error adipisci obcaecati et veritatis quos qui aliquid saepe labore voluptatem modi.</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam dolor voluptas ducimus sunt quas, est vel at ut error adipisci obcaecati et veritatis quos qui aliquid saepe labore voluptatem modi.</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam dolor voluptas ducimus sunt quas, est vel at ut error adipisci obcaecati et veritatis quos qui aliquid saepe labore voluptatem modi.</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam dolor voluptas ducimus sunt quas, est vel at ut error adipisci obcaecati et veritatis quos qui aliquid saepe labore voluptatem modi.</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam dolor voluptas ducimus sunt quas, est vel at ut error adipisci obcaecati et veritatis quos qui aliquid saepe labore voluptatem modi.</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam dolor voluptas ducimus sunt quas, est vel at ut error adipisci obcaecati et veritatis quos qui aliquid saepe labore voluptatem modi.</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam dolor voluptas ducimus sunt quas, est vel at ut error adipisci obcaecati et veritatis quos qui aliquid saepe labore voluptatem modi.</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam dolor voluptas ducimus sunt quas, est vel at ut error adipisci obcaecati et veritatis quos qui aliquid saepe labore voluptatem modi.</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam dolor voluptas ducimus sunt quas, est vel at ut error adipisci obcaecati et veritatis quos qui aliquid saepe labore voluptatem modi.</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam dolor voluptas ducimus sunt quas, est vel at ut error adipisci obcaecati et veritatis quos qui aliquid saepe labore voluptatem modi.</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam dolor voluptas ducimus sunt quas, est vel at ut error adipisci obcaecati et veritatis quos qui aliquid saepe labore voluptatem modi.</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam dolor voluptas ducimus sunt quas, est vel at ut error adipisci obcaecati et veritatis quos qui aliquid saepe labore voluptatem modi.</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam dolor voluptas ducimus sunt quas, est vel at ut error adipisci obcaecati et veritatis quos qui aliquid saepe labore voluptatem modi.</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam dolor voluptas ducimus sunt quas, est vel at ut error adipisci obcaecati et veritatis quos qui aliquid saepe labore voluptatem modi.</p>

    </footer>
  );
};

export default Footer;
