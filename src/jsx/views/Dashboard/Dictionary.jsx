import { Fragment } from "react";
/// Compoents
import PageTitle from "../../layouts/PageTitle";
import CommingSoon from '../../pages/ComingSoon';



const Dictionary = () => {
  return (
    <Fragment>
      <PageTitle activeMenu="Dictionary" motherMenu="Library" />
      <CommingSoon />
    </Fragment >
  );
};

export default Dictionary;
