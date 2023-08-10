import React from "react";
import styles from "./style";

const App = () => (
  <div className="bg-primary w-full overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>NavBar</div>
    </div>

    <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxdwidth}`}>Hero</div>
    </div>
    <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
      <div className={`${styles.boxwidth}`}>
        Stats Buisness Billing CardDeal Testimonials CLients CTA footer
      </div>
    </div>
  </div>
);

export default App;
