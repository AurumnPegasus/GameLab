import { withRouter } from 'react-router-dom';

const ScrollToTop = ({ history }) => {
    window.scrollTo(0, 0);
    return null;
}

export default withRouter(ScrollToTop);
