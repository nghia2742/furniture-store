import GlobalStyles from '../../GlobalStyles';
import Nav from '../Partials/Nav';
import Footer from '../Partials/Footer';
import MapChart from '../Home/MapChart';

function Location() {
  return (
    <GlobalStyles>
            <Nav />
            <MapChart/>
            <Footer />
        </GlobalStyles>
  )
}

export default Location