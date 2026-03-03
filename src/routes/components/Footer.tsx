import PokerBotLogo from "@icons/logoIconSquare.svg?react";
import InstagramLogo from "@icons/instagram.svg?react";
import EmailLogo from "@icons/email.svg?react";
import GithubLogo from "@icons/github.svg?react";
import { Link } from "react-router";

export const Footer = () => {
  return (
    <footer className="footer sm:footer-horizontal bg-base-200 text-base-content p-10 ">
      <aside className="w-full h-full flex items-center justify-center">
        <PokerBotLogo className="w-[80px] h-[80px]" />
        <h3>Pokerbot</h3>
      </aside>
      <nav>
        <h6 className="footer-title">Get in touch</h6>
        <a
          target="_blank"
          href="https://www.instagram.com/pokerbotitu/"
          className="link link-hover"
        >
          <InstagramLogo className="fill-base-content w-[24px] h-[24px] inline m-2 box-content" />
          Instagram
        </a>
        <a href="mailto:gtak@itu.dk" className="link link-hover">
          <EmailLogo className="fill-base-content w-[24px] h-[24px] inline m-2 box-content" />
          gtak@itu.dk
        </a>
        <a
          target="_blank"
          href="https://github.com/poker-bot-battles"
          className="link link-hover"
        >
          <GithubLogo className="*:fill-base-content w-[24px] h-[24px] inline m-2 box-content" />
          Github
        </a>
      </nav>
      <nav>
        <h6 className="footer-title">Pages</h6>
        <Link className="link link-hover" to="/">
          Home
        </Link>
        <Link className="link link-hover" to="/documentation">
          Documentation
        </Link>
        <Link className="link link-hover" to="/get-started">
          Get Started
        </Link>
        <Link className="link link-hover" to="/sign-up">
          Sign Up
        </Link>
        <Link className="link link-hover" to="/submit">
          Submit Code
        </Link>
      </nav>
    </footer>
  );
};
