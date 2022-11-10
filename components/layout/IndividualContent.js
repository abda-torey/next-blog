import MainNavigation from "./MainNavigation";
import Footer from "./Footer";
import classes from './IndividualContent.module.css'

function IndividualContent() {
  return (
    <div>
        <div className={classes.grid}>
            <div className={classes.content}>
                Lorem ipsum lorem ipsum
                Lorem ipsum lorem ipsumLorem ipsum lorem ipsum Lorem ipsum lorem ipsum Lorem ipsum lorem ipsum
                Lorem ipsum lorem ipsum Lorem ipsum lorem ipsum Lorem ipsum lorem ipsum Lorem ipsum lorem ipsum Lorem ipsum lorem ipsum
            </div>
            <div className={classes.sideBar}>
            Lorem ipsum lorem ipsum Lorem ipsum lorem ipsum Lorem ipsum lorem ipsum Lorem ipsum lorem ipsum Lorem ipsum lorem ipsum Lorem ipsum lorem ipsum
            </div>

        </div>
      <MainNavigation />
      <Footer />
    </div>
  );
}
export default IndividualContent;
