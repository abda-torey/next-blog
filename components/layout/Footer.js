import classes from  './Footer.module.css';
import * as Icon from 'react-bootstrap-icons';

function Footer() {
  return (
    <div className={classes.container}>
      <div className="bg-dark text-center text-white">
        <div className="container p-4 pb-0">
          <section className="mb-4">
            <a
              className="btn btn-outline-light btn-floating m-1"
              href="#!"
              role="button"
            >
              <Icon.Facebook />
            </a>

            <a
              className="btn btn-outline-light btn-floating m-1"
              href="#!"
              role="button"
            >
              <Icon.Twitter />
            </a>

            <a
              className="btn btn-outline-light btn-floating m-1"
              href="#!"
              role="button"
            >
              <Icon.Google />
            </a>

            <a
              className="btn btn-outline-light btn-floating m-1"
              href="#!"
              role="button"
            >
              <Icon.Instagram />
            </a>

            <a
              className="btn btn-outline-light btn-floating m-1"
              href="#!"
              role="button"
            >
              <Icon.Linkedin />
            </a>

            <a
              className="btn btn-outline-light btn-floating m-1"
              href="#!"
              role="button"
            >
              <Icon.Github />
            </a>
          </section>
        </div>

        <div
          className="text-center p-3"
          id = "copyright"
          
        >
          © 2020 Copyright:
          <a className="text-white" href="https://mdbootstrap.com/">
            MDBootstrap.com
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
