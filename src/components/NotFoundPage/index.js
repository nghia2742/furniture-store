import GlobalStyles from '../../GlobalStyles';
import Nav from '../Partials/Nav';
import Footer from '../Partials/Footer';
import './NotFoundPage.css'

function NotFoundPage() {
    return (
        <GlobalStyles>
            <Nav />
            <section class="page_404" style={{
              width: '100vw', height: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center'
            }}>
                <div class="container">
                    <div class="row">
                        <div class="col-sm-12 ">
                            <div class="col-sm-10 col-sm-offset-1  text-center">
                                <div class="four_zero_four_bg">
                                    <h1 class="text-center ">404</h1>
                                </div>

                                <div class="contant_box_404">
                                    <h3 class="h2">Look like you're lost</h3>

                                    <p>
                                        the page you are looking for not
                                        avaible!
                                    </p>

                                    <a href="/furniture-store" class="link_404">
                                        Go to Home
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </GlobalStyles>
    );
}

export default NotFoundPage;
