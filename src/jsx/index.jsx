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
import ProjectManagement from "./views/Administrator/Project/ProjectManagement"
import ProjectManagementAction from "./views/Administrator/Project/ProjectManagementAction"
import ProjectType from "./views/Administrator/ProjectType"
import Question from "./views/Administrator/Question"
import UserProfile from './views/Administrator/UserManagement/UserProfile'
import UserRole from "./views/Administrator/UserManagement/UserRole"
import UserManager from "./views/Administrator/UserManager"
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
import OwnerReviewed from './views/AppsMenu/AppProfile/Profile/Review/OwnerReviewed'
import CatalystKnowledge from './views/Dashboard/CatalystKnowledge'
import CommunityDetail from './views/Dashboard/Community/CommunityDetail'
import Ecosystem from './views/Dashboard/Ecosystem'
import AddNews from './views/Dashboard/events/news/AddNews'
import NewsDetail from './views/Dashboard/events/news/NewsDetail'
import Library from './views/Dashboard/Library'
import AddLibrary from './views/Dashboard/library/AddLibrary'
import BlockchainDetail from './views/Dashboard/library/Blockchain/BlockchainDetail'
import AddBlockChain from './views/Dashboard/library/Cardano/AddBlockChain'
import CatalystDetail from './views/Dashboard/library/Catalyst/CatalystDetail'
import LibraryManagement from './views/Dashboard/library/LibraryManagement'
import PostLibraryLang from './views/Dashboard/library/PostLibraryLang'
import News from './views/Dashboard/News'
import ProjectDetail from './views/Dashboard/project/ProjectDetail'
import ProjectReviewList from './views/Dashboard/project/ProjectReviewList'
import SubmitProject from './views/Dashboard/project/SubmitProject'
import ProjectByType from './views/Dashboard/ProjectByType'
import FileManagement from './views/Dashboard/FileManagement'
import FileDetails from './views/Dashboard/FileDetails'
import CoinPage from './views/Dashboard/market/CoinPage'


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
    { url: 'catalyst-knowledge', component: CatalystKnowledge },
    { url: 'community', component: Community },
    { url: 'submit-project', component: SubmitProject },
    { url: 'library', component: Library },
    { url: 'file-management', component: FileManagement },



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
    { url: 'library-management', component: LibraryManagement },
    { url: 'post-library-language/:name&:language', component: PostLibraryLang },

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
    { url: 'owner-project-review-detail/:reviewid&:username', component: OwnerReviewed },

    { url: 'community-details/:name', component: CommunityDetail },

    /// Library - Detail
    { url: 'cardano-knowledge/:name', component: CardanoDetail },
    { url: 'blockchain-knowledge/:name', component: BlockchainDetail },
    { url: 'catalyst-knowledge/:name', component: CatalystDetail },
    { url: 'library/add-new-cardano-knowledge', component: AddCardano },
    { url: 'library/add-new-blockchain-knowledge', component: AddBlockChain },
    { url: 'library/post-library', component: AddLibrary },


    /// Project
    { url: 'project/ecosystem/:ecocode', component: Ecosystem },
    { url: 'project/protype/:protypecd', component: ProjectByType },

    /// Events
    { url: 'event/news', component: News },
    { url: 'event/news/details/:name', component: NewsDetail },
    { url: 'event/news/addnews', component: AddNews },

    /// Market info
    { url: 'market-info/coins/:id', component: CoinPage },


    /// Files
    { url: 'file-management/:name', component: FileDetails },

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
