import classes from "./MainContent.module.css";
import Image from "next/image";
function MainContent() {
  const backImg =
    "https://images1-focus-opensocial.googleusercontent.com/gadgets/proxy?container=focus&resize_w=1500&url=https://codetheweb.blog/assets/img/posts/html-syntax/cover.jpg";
  return (
    <div className={classes.grid}>
      <div className={classes.mainContent}>
        <div className={classes.container}>
          <div className={classes.col1}>
            <div className={classes.card}>
              <img
                className={classes.cardImg}
                src="https://picsum.photos/200/150/?random
"
              />
              <div className={classes.cardBlock}>
                <h4>Tawshif Ahsan Khan</h4>

                <div className={classes.cardText}>
                  Tawshif is a web designer living in Bangladesh.
                </div>
              </div>
              <div className={classes.cardFooter}>
                <small>Last updated 3 mins ago</small>
                <button className="btn btn-secondary  btn-sm">more..</button>
              </div>
            </div>
          </div>
          <div className={classes.col1}>
            <div className={classes.card}>
              <img
                className={classes.cardImg}
                src="https://picsum.photos/200/150/?random
"
              />
              <div className={classes.cardBlock}>
                <h4>Tawshif Ahsan Khan</h4>

                <div className={classes.cardText}>
                  Tawshif is a web designer living in Bangladesh.
                </div>
              </div>
              <div className={classes.cardFooter}>
                <small>Last updated 3 mins ago</small>
                <button className="btn btn-secondary  btn-sm">more..</button>
              </div>
            </div>
          </div>

          <div className={classes.col3}>
            <div className={classes.card}>
              <img
                className={classes.cardImg}
                src="https://picsum.photos/200/150/?random
"
              />
              <div className={classes.cardBlock}>
                <h4>Tawshif Ahsan Khan</h4>

                <div className={classes.cardText}>
                  Tawshif is a web designer living in Bangladesh.
                </div>
              </div>
              <div className={classes.cardFooter}>
                <small>Last updated 3 mins ago</small>
                <button className="btn btn-secondary  btn-sm">more..</button>
              </div>
            </div>
          </div>
          <div className={classes.col1}>
            <div className={classes.card}>
              <img
                className={classes.cardImg}
                src="https://picsum.photos/200/150/?random
"
              />
              <div className={classes.cardBlock}>
                <h4>Tawshif Ahsan Khan</h4>

                <div className={classes.cardText}>
                  Tawshif is a web designer living in Bangladesh.
                </div>
              </div>
              <div className={classes.cardFooter}>
                <small>Last updated 3 mins ago</small>
                <button className="btn btn-secondary  btn-sm">more..</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={classes.divider}></div>
      <div className={classes.sideBar}>
        <div className={classes.card}>
          <img
            className={classes.cardImg}
            src="https://picsum.photos/200/150/?random
"
          />
          <div className={classes.cardBlock}>
            <h4>Tawshif Ahsan Khan</h4>

            <div className={classes.cardText}>
              Tawshif is a web designer living in Bangladesh. Tawshif is a web
              designer living in Bangladesh. Tawshif is a web designer living in
              Bangladesh. Tawshif is a web designer living in Bangladesh.
              Tawshif is a web designer living in Bangladesh. Tawshif is a web
              designer living in Bangladesh. Tawshif is a web designer living in
              Bangladesh. Tawshif is a web designer living in Bangladesh.
              Tawshif is a web designer living in Bangladesh.
            </div>
          </div>
          <div className={classes.cardFooter}>
            <small>Last updated 3 mins ago</small>
            <button className="btn btn-secondary  btn-sm">more..</button>
          </div>
        </div>
      </div>
      {/* <div className={classes.footer}>
        <h2>testing</h2>
      </div> */}
    </div>
  );
}
export default MainContent;
