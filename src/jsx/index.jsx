import { useState } from 'react'
/// React router dom
import { Switch } from 'react-router-dom'
/// Css
import './chart.css'
import './index.css'
/// Layout
import Footer from './layouts/Footer'
import Nav from './layouts/nav'
/// Scroll To Top
import ScrollToTop from './layouts/ScrollToTop'
/// Pages
import Error400 from './pages/Error400'
import Error403 from './pages/Error403'
import Error404 from './pages/Error404'
import Error500 from './pages/Error500'
import Error503 from './pages/Error503'
import ErrorCors from './pages/ErrorCors'

import LockScreen from './pages/LockScreen'
import Login from './pages/Login'
import Register from './pages/Register'
import './step.css'
/// Administrator
import ECOSystem from "./views/Administrator/ECOSystem"
import ProjectType from "./views/Administrator/ProjectType"
import Question from "./views/Administrator/Question"
import UserProfile from './views/Administrator/UserManagement/UserProfile'
import UserRole from "./views/Administrator/UserManagement/UserRole"
import UserManager from "./views/Administrator/UserManager"
import ProjectManagement from "./views/Administrator/Project/ProjectManagement"
import ProjectManagementAction from "./views/Administrator/Project/ProjectManagementAction"
/// App
import BlockchainKnowledge from "./views/Dashboard/BlockchainKnowledge"
import CardanoKnowledge from "./views/Dashboard/CardanoKnowledge"
import Community from "./views/Dashboard/Community"
import Dictionary from "./views/Dashboard/Dictionary"
import Event from "./views/Dashboard/Event"
import FAQs from "./views/Dashboard/FAQs"
/// Home
import Home from "./views/Dashboard/Home"
import AddCardano from './views/Dashboard/library/Cardano/AddCardano'
/// Cardano Knowledge - Detail
import CardanoDetail from "./views/Dashboard/library/Cardano/CardanoDetail"
import MarketInfo from "./views/Dashboard/MarketInfo"
import Project from "./views/Dashboard/Project"
/// Project
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { AccessPath } from '../store/selectors/AuthSelectors'
import PrivateRoute from './components/routes/PrivateRoute'
import ForgotPassword from './pages/ForgotPassword'
import OTPPassword from './pages/OTPPassword'
import ReviewDetail from './views/Administrator/Review/ReviewDetail'
import AppProfile from './views/AppsMenu/AppProfile/AppProfile'
import BlockchainDetail from './views/Dashboard/library/Cardano/BlockchainDetail'
import ProjectDetail from './views/Dashboard/project/ProjectDetail'
import ProjectReviewList from './views/Dashboard/project/ProjectReviewList'
import SubmitProject from './views/Dashboard/project/SubmitProject'
import AddBlockChain from './views/Dashboard/library/Cardano/AddBlockChain'
import CommunityDetail from './views/Dashboard/Community/CommunityDetail'


const Markup = (props) => {
  let path = window.location.pathname
  path = path.split('/')
  path = path[path.length - 1]
  let pagePath = path.split('-').includes('page')
  const [activeEvent, setActiveEvent] = useState(!path)

  const routes = [
    /// Dashboard
    { url: '', component: Home },
    { url: 'event', component: Event },
    { url: 'faq', component: FAQs },
    { url: 'project', component: Project },
    { url: 'market-info', component: MarketInfo },
    { url: 'dictionary', component: Dictionary },
    { url: 'cardano-knowledge', component: CardanoKnowledge },
    { url: 'blockchain-knowledge', component: BlockchainKnowledge },
    { url: 'community', component: Community },
    { url: 'submit-project', component: SubmitProject },



    /// Administrator
    { url: 'ecosystem', component: ECOSystem },
    { url: 'question', component: Question },
    { url: 'page-register', component: Register },
    { url: 'project-review-list', component: ProjectReviewList },
    { url: 'project-type', component: ProjectType },
    { url: 'project-review-list-action/:proname&:username&:reviewid', component: ReviewDetail },
    { url: 'user-list', component: UserManager },
    { url: 'user-role', component: UserRole },
    { url: 'user-active-profile/:username', component: UserProfile },
    { url: 'project-management', component: ProjectManagement },
    { url: 'project-management-action/:proname', component: ProjectManagementAction },

    /// views
    { url: 'app-profile', component: AppProfile },

    /// pages
    { url: 'page-lock-screen', component: LockScreen },
    { url: 'page-login', component: Login },
    { url: 'page-forgot-password', component: ForgotPassword },
    { url: 'page-otp-password', component: OTPPassword },
    { url: 'page-error-400', component: Error400 },
    { url: 'page-error-403', component: Error403 },
    { url: 'page-error-404', component: Error404 },
    { url: 'page-error-500', component: Error500 },
    { url: 'page-error-503', component: Error503 },
    { url: 'page-error-cors', component: ErrorCors },

    { url: 'ecom-project-detail/:proname', component: ProjectDetail },
    { url: 'community-details/:name', component: CommunityDetail },

    /// Cardano Knowledge - Detail
    { url: 'cardano-knowledge/:name', component: CardanoDetail },
    { url: 'blockchain-knowledge/:name', component: BlockchainDetail },
    { url: 'library/add-new-cardano-knowledge', component: AddCardano },
    { url: 'library/add-new-blockchain-knowledge', component: AddBlockChain },

  ]

  return (
    <>
      <div
        id={`${!pagePath ? 'main-wrapper' : ''}`}
        className={`${!pagePath ? 'show' : 'mh100vh'}`}
      >
        {!pagePath && (
          <Nav
            onClick={() => setActiveEvent(!activeEvent)}
            activeEvent={activeEvent}
            onClick2={() => setActiveEvent(false)}
            onClick3={() => setActiveEvent(true)}
          />
        )}

        <div className={` ${!path && activeEvent ? 'rightside-event' : ''} ${!pagePath ? 'content-body' : ''}`} >
          <div className={`${!pagePath ? 'container-fluid' : ''}`} >
            <Switch>
              {routes.map((data, i) => (
                <PrivateRoute
                  key={i}
                  exact
                  path={`/${data.url}`}
                  AccessPath={props.AccessPath}
                  component={data.component}
                />
              ))}
            </Switch>
          </div>
        </div>
        {!pagePath && <Footer />}
      </div>
      <ScrollToTop />
    </>
  )
}
const mapStateToProps = (state) => {
  return {
    AccessPath: AccessPath(state),
  };
};
export default withRouter(connect(mapStateToProps, null)(Markup));
