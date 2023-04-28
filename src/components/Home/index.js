import GlobalStyles from '../../GlobalStyles';
import Nav from '../Partials/Nav';
import Footer from '../Partials/Footer';
import Banner from '../Home/Banner';
import Services from '../Home/Services';
import WCU from '../Home/WCU';
import About from '../Home/About';
import MapChart from '../Home/MapChart';

function Home() {
    return (
        <GlobalStyles>
            <Nav />
            <Banner />
            <Services />
            <WCU />
            <About />
            <MapChart />
            <Footer />
        </GlobalStyles>
    );
}

export default Home;
