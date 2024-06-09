// Components
import InnerBanner from "../components/InnerBanner/InnerBanner";
import { InBoundMarketing } from "../components/InBoundMarketing/InBoundMarketing";
import { Suspense } from 'react';

const CaseStudies = () => {
  const heading1 = ['O', 'U', 'R'];
  const heading2 = ['P', 'o', 'r', 't', 'f', 'o', 'l', 'i', 'o'];
  return (
    <>
      {/* Banner */}
      <InnerBanner heading1={heading1} heading2={heading2} />
      {/* Case Studies */}
      <Suspense>
      <InBoundMarketing/>
      </Suspense>
    </>
  );
};

export default CaseStudies;
