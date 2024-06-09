// Components
import InnerBanner from "../components/InnerBanner/InnerBanner";
import styles from "../components/InBoundMarketing/InBoundMarketing.module.css"
import { CaseStudyTab } from "../components/InBoundMarketing/CaseStudyTab";

const CaseStudies = () => {
  const heading1 = ['O', 'U', 'R'];
  const heading2 = ['C', 'A', 'S', 'E'];
  const heading3 = ['S', 'T', 'U', 'D', 'I', 'E', 'S'];
  return (
    <>
      {/* Banner */}
      <InnerBanner heading1={heading1} heading2={heading2} heading3={heading3} />
      {/* Case Studies */}
      <section className={styles.case_studies}>
        <div className="container">
          <h2>INBOUND MARKETING</h2>
        </div>
        <div className={styles.tab_content}>
          <div className="container">
            <CaseStudyTab />
          </div>
        </div>
      </section>
    </>
  );
};

export default CaseStudies;
