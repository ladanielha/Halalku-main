import { Link } from "@inertiajs/react";
import g from "/resources/images/HALALKU(V2).png";

const Footer = () => {
  return (
    <footer className="footer p-10 bg-primary text-white">
      <div className="w-full flex items-center justify-center bg-primary">
        <div className="md:w-2/3 w-full px-4 text-white flex flex-col">
          <div className="flex flex-col">
            <div className="flex mt-24 mb-12 flex-row justify-between items-center">
              <div>
                <img src={g} alt="Halalku Logo" />
              </div>
              <div className="hidden md:block flex flex-row space-x-8">
                <Link className="cursor-pointer text-white hover:text-white uppercase" href={route("aboutus")} as="button">About Us</Link>
                <a className="cursor-pointer text-white hover:text-white uppercase">Services</a>
                <a className="cursor-pointer text-white hover-text-white uppercase">Why Us</a>
                <Link className="cursor-pointer text-white hover:text-white uppercase" href={route("meetus")} as="button">Meet Us</Link>
              </div>
              <div className="hidden md:flex flex flex-row space-x-8 items-center">
                <a href="#">
                  <svg width="6" height="12" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3.898 12V6.535H5.675l.265-2.139H3.898V3.033c0-.617.166-1.039 1.020-1.039H6V.085c-.527-.058-.835-.086-1.365-.086-1.570 0-2.648.995-2.648 2.821V4.391H0V6.531h1.769V12H3.898z" fill="#fff" />
                  </svg>
                </a>
                <a href="#">
                  <svg width="12" height="13" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.995 2.913c-.817.001-1.601.324-2.178.901C3.238 4.392 2.913 5.177 2.913 5.995c0 .817.324 1.602.904 2.18.577.578 1.361.902 2.178.903.818 0 1.602-.324 2.18-.902.578-.578.902-1.363.902-2.18 0-.818-.324-1.603-.902-2.18C7.597 3.237 6.813 2.913 5.995 2.913zm0 4.082c-.531 0-.94-.211-1.315-.586-.374-.375-.586-.785-.586-1.316 0-.53.212-.941.586-1.316.375-.375.784-.587 1.315-.587.531 0 .942.212 1.316.587.375.375.587.785.587 1.316 0 .531-.212.942-.587 1.316a1.869 1.869 0 01-1.316.586zm0 3.777c-.531 0-.94-.211-1.315-.587-.374-.374-.586-.785-.586-1.316 0-.531.212-.942.586-1.316.375-.375.784-.586 1.315-.586.531 0 .942.211 1.316.586.375.374.587.785.587 1.316 0 .531-.212.941-.587 1.316a1.869 1.869 0 01-1.316.587zm6.197-9.695c-.154-.398-.390-.760-.698-1.040-.308-.280-.682-.464-1.109-.536-.421-.073-1.407-.086-2.884-.086-2.683 0-4.579.071-5.986.219-.571.089-.998.296-1.317.615-.34.34-.567.808-.652 1.329-.149 1.403-.224 3.299-.224 5.982 0 2.682.075 4.577.224 5.98.085.52.313.987.652 1.328.319.319.747.526 1.318.615 1.407.147 3.303.221 5.986.221 2.682 0 4.578-.074 5.985-.221.571-.089.998-.296 1.318-.615.339-.341.566-.808.651-1.328.150-1.403.225-3.299.225-5.982 0-2.683-.075-4.579-.225-5.982-.085-.521-.312-.988-.651-1.329zm-1.135 6.688H8.462v3.364H5.202V5.898h3.261v3.364zm-1.631-8.687c-.301-.301-.537-.663-.692-1.061-.154-.398-.232-.864-.232-1.396 0-.531.078-.997.232-1.396.155-.398.391-.76.692-1.06.301-.301.663-.537 1.061-.692.398-.154.863-.232 1.396-.232.532 0 .997.078 1.396.232.398.155.76.391 1.06.692.301.301.537.663.692 1.061.154.398.232.864.232 1.396 0 .532-.078.997-.232 1.396a1.864 1.864 0 01-.692 1.061c-.301.301-.663.537-1.061.692a1.862 1.862 0 01-1.396.232c-.533 0-.998-.078-1.396-.232a1.87 1.87 0 01-.691-.692z" fill="#fff" />
                  </svg>
                </a>
                <a href="https://www.youtube.com/channel/UCjtCbnkIaiCJgj13sEZ9iqw">
                  <svg width="13" height="9" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.7355 1.415C12.6616 1.14357 12.517 0.896024 12.3162 0.697014C12.1154 0.498004 11.8654 0.354468 11.5911 0.280692C10.5739 0.00450089 6.5045 4.87928e-06 6.5045 4.87928e-06C6.5045 4.87928e-06 2.43578 -0.00449139 1.41795 0.259496C1.14379 0.336667 0.894302 0.482233 0.693428 0.68222C0.492554 0.882207 0.347041 1.1299 0.270859 1.40152C0.00259923 2.40737 9.51671e-07 4.49358 9.51671e-07 4.49358C9.51671e-07 4.49358 -0.0025972 6.59006 0.263714 7.58564C0.413109 8.13609 0.851549 8.57094 1.40885 8.71931C2.43643 8.9955 6.49476 9 6.49476 9C6.49476 9 10.5641 9.00449 11.5813 8.74115C11.8557 8.6675 12.106 8.52429 12.3073 8.32569C12.5086 8.12709 12.6539 7.87996 12.729 7.60876C12.998 6.60355 12.9999 4.51798 12.9999 4.51798C12.9999 4.51798 13.0129 2.42086 12.7355 1.415ZM5.20282 6.42628L5.20607 2.57244L8.58823 4.50257L5.20282 6.42628Z" fill="#fff" />
                  </svg>
                </a>
              </div>
            </div>
            <hr className="border-white border" />
            <p className="w-full text-center my-12 text-white">Copyright © 2023 Halalku Team</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
