import React from 'react';
import {Link} from 'react-router-dom'
import '../css/styles.css'

class Home extends React.Component {

    render() {
        return (
            <div>
                {/*</div><!--NAVBAR-->*/}
                <nav class="navbar navbar-expand-lg fixed-top bg-primary-color" id="navbar">
                    <div class="container py-3">
                        <a href="#" class="navbar-brand">
                            <img src="assets/img/Imagens/car-icon.png" alt="Imovi" />
                            <span>LUXCAR</span>
                        </a>
                        <button
                            class="navbar toggler"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#navbar-items"
                            aria-controls="navbar-items"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <i class="bi bi-list"></i>
                        </button>
                        <div class="collapse navbar-collapse" id="navbar-items">
                            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                                <li class="nav-item">
                                    <Link to="/client-create" class="nav-link active">CLIENTE</Link>
                                </li>
                                <li class="nav-item">
                                     <Link to="/reservation" class="nav-link active">RESERVAS</Link>
                                </li>
                                <li class="nav-item">
                                    <Link to="/login" class="nav-link active">LOGIN</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <div class="container" id="slider-container">

                    <div class="carousel slide" id="slider" data-bs-ride="carousel">
                        <div class="carosel-indicators">
                            <button
                                type="button"
                                class="active"
                                data-bs-target="#slider"
                                data-bs-slider-to="0"
                                aria-current="true"
                                aria-label="Slide 1"
                            ></button>
                            <button
                                type="button"
                                data-bs-target="#slider"
                                data-bs-slider-to="1"
                                aria-label="Slide 2"
                            ></button>
                            <button
                                type="button"
                                data-bs-target="#slider"
                                data-bs-slider-to="2"
                                aria-label="Slide 3"
                            ></button>
                        </div>
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <img src="assets/img/Imagens/Imagens-de-carros/Carro1.jpg" alt="Carro1" class="d-block w-100" />
                                <div class="carousel-caption">
                                    <h5>Carros Luxuosos</h5>
                                    <a href="#" class="btn btn-dark">Conheça nossas facilidades</a>
                                </div>
                            </div>
                            <div class="carousel-item">
                                <img src="assets/img/Imagens/Imagens-de-carros/Carro2.jpg" alt="Carro2" class="d-block w-100" />
                                <div class="carousel-caption">
                                    <h5>Carros para quem ama aventuras</h5>
                                    <a href="#" class="btn btn-dark">Conheça nossas facilidades</a>
                                </div>
                            </div>
                            <div class="carousel-item">
                                <img src="assets/img/Imagens/Imagens-de-carros/Carro3.jpeg" alt="Carro3" class="d-block w-100" />
                                <div class="carousel-caption">
                                    <h5>Carros para quem tem o prazer de viver bem</h5>
                                    <a href="#" class="btn btn-dark">Conheça nossas facilidades</a>
                                </div>
                            </div>
                            <div class="carousel-item">
                                <img src="assets/img/Imagens/Imagens-de-carros/Carro4.jpg" alt="Carro4" class="d-block w-100" />
                                <div class="carousel-caption">
                                    <h5>Carros para todos os gostos</h5>
                                    <a href="#" class="btn btn-dark">Conheça nossas facilidades</a>
                                </div>
                            </div>
                        </div>
                        <button
                            class="carousel-control-prev"
                            type="button"
                            data-bs-target="#slider"
                            data-bs-Slide="prev"
                        >
                            <i class="bi bi-chevron-compact-left"></i>
                            <span class="visually hidden">Previous</span>
                        </button>

                        <button
                            class="carousel-control-next"
                            type="button"
                            data-bs-target="#slider"
                            data-bs-Slide="next"
                        >
                            <i class="bi bi-chevron-compact-right"></i>
                            <span class="visually hidden">Next</span>
                        </button>
                    </div>


                </div>
                <div class="col-12 col-md-10 offset-md-1" id="mini-banners">
                    <div class="row">
                        <div class="col-12 col-md-4">
                            <div class="card text-center">
                                <i class="bi bi-box primary-color"></i>
                                <div class="card-body">
                                    <h5 class="card-title primary-color">Dirija o veículo dos seus sonhos</h5>
                                    <p class="card-text secondar-color">Lorem ipsum dolor sit, amet
                                        consectetur adipisicing elit. Eaque nam enim dicta et rem vitae
                                        repellendus, facere, ipsa a laboriosam eos repudiandae atque
                                        voluptate ducimus perspiciatis error? Ea, nisi cumque!
                                    </p>
                                    <a href="#" class="btn btn-dark">Saber mais</a>
                                </div>
                            </div>
                        </div> <div class="col-12 col-md-4">
                            <div class="card text-center">
                                <i class="bi bi-layers primary-color"></i>
                                <div class="card-body">
                                    <h5 class="card-title primary-color">Os melhores de cada categoria</h5>
                                    <p class="card-text secondar-color">Lorem ipsum dolor sit, amet
                                        consectetur adipisicing elit. Eaque nam enim dicta et rem vitae
                                        repellendus, facere, ipsa a laboriosam eos repudiandae atque
                                        voluptate ducimus perspiciatis error? Ea, nisi cumque!
                                    </p>
                                    <a href="#" class="btn btn-dark">Saber mais</a>
                                </div>
                            </div>
                        </div> <div class="col-12 col-md-4">
                            <div class="card text-center">
                                <i class="bi bi-lightning-charge primary-color"></i>
                                <div class="card-body">
                                    <h5 class="card-title primary-color">Conheça nossas novidades</h5>
                                    <p class="card-text secondar-color">Lorem ipsum dolor sit, amet
                                        consectetur adipisicing elit. Eaque nam enim dicta et rem vitae
                                        repellendus, facere, ipsa a laboriosam eos repudiandae atque
                                        voluptate ducimus perspiciatis error? Ea, nisi cumque!
                                    </p>
                                    <a href="#" class="btn btn-dark">Saber mais</a>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <div class="container" id="features-conainer">
                    <div class="col-12">
                        <h2 class="title primary-color">Nossos veículos</h2>
                        <p class="subtitle secondary-color">
                            Conheça o nosso plantel
                        </p>
                    </div>
                    <div class="col-12" id="featured-images">
                        <div class="row g-4">
                            <div class="col-12 col-md-4">
                                <img src="assets/img/Imagens/Imagens-de-carros/Carro5.jpg" alt="Projeto 1" class="img.fluid" />
                                <div class="banner content">
                                    <p class="secondary-color">SUV</p>
                                </div>
                            </div>


                            <div class="col-12 col-md-4">
                                <img src="assets/img/Imagens/Imagens-de-carros/Carro6.jpg" alt="Projeto 2" class="img.fluid" />
                                <div class="banner content">
                                    <p class="secondary-color">SUV</p>
                                </div>
                            </div>

                            <div class="col-12 col-md-4">
                                <img src="assets/img/Imagens/Imagens-de-carros/Carro7.jpg" alt="Projeto 3" class="img.fluid" />
                                <div class="banner content">
                                    <p class="secondary-color">Esportivo de Luxo</p>
                                </div>
                            </div>

                            <div class="col-12 col-md-4">
                                <img src="assets/img/Imagens/Imagens-de-carros/Carro8.jpg" alt="Projeto 4" class="img.fluid" />
                                <div class="banner content">
                                    <p class="secondary-color">Hatch</p>
                                </div>
                            </div>

                            <div class="col-12 col-md-4">
                                <img src="assets/img/Imagens/Imagens-de-carros/Carro9.jpg" alt="Projeto 5" class="img.fluid" />
                                <div class="banner content">
                                    <p class="secondary-color">Esportivo de Luxo</p>
                                </div>
                            </div>

                            <div class="col-12 col-md-4">
                                <img src="assets/img/Imagens/Imagens-de-carros/Carro10.jpg" alt="Projeto 6" class="img.fluid" />
                                <div class="banner content">
                                    <p class="secondary-color">SUV</p>
                                </div>
                            </div>
                            <div class="col-12 col-md-4">
                                <img src="assets/img/Imagens/Imagens-de-carros/Carro11.jpg" alt="Projeto 1" class="img.fluid" />
                                <div class="banner content">
                                    <p class="secondary-color">SUV</p>
                                </div>
                            </div>
                            <div class="col-12 col-md-4">
                                <img src="assets/img/Imagens/Imagens-de-carros/Carro12.jpg" alt="Projeto 2" class="img.fluid" />
                                <div class="banner content">
                                    <p class="secondary-color">Esportivo</p>
                                </div>
                            </div>
                            <div class="col-12 col-md-4">
                                <img src="assets/img/Imagens/Imagens-de-carros/Carro13.jpg" alt="Projeto 3" class="img.fluid" />
                                <div class="banner content">
                                    <p class="secondary-color">Esportivo Clássico</p>
                                </div>
                            </div>
                            <div class="col-12 col-md-4">
                                <img src="assets/img/Imagens/Imagens-de-carros/Carro15.jpg" alt="Projeto 5" class="img.fluid" />
                                <div class="banner content">
                                    <p class="secondary-color">Esportivo de Luxo</p>
                                </div>
                            </div>
                            <div class="col-12 col-md-4">
                                <img src="assets/img/Imagens/Imagens-de-carros/Carro16.jpg" alt="Projeto 6" class="img.fluid" />
                                <div class="banner content">
                                    <p class="secondary-color">SUV</p>
                                </div>
                            </div>
                            <div class="col-12 col-md-4">
                                <img src="assets/img/Imagens/Imagens-de-carros/Carro17.jpg" alt="Projeto 1" class="img.fluid" />
                                <div class="banner content">
                                    <p class="secondary-color">Inovadores</p>
                                </div>
                            </div>
                            <div class="col-12 col-md-4">
                                <img src="assets/img/Imagens/Imagens-de-carros/Carro18.jpg" alt="Projeto 2" class="img.fluid" />
                                <div class="banner content">
                                    <p class="secondary-color">Esportivo de Luxo</p>
                                </div>
                            </div>
                            <div class="col-12 col-md-4">
                                <img src="assets/img/Imagens/Imagens-de-carros/Carro19.jpg" alt="Projeto 3" class="img.fluid" />
                                <div class="banner content">
                                    <p class="secondary-color">Esportivo de Luxo</p>
                                </div>
                            </div>
                            <div class="col-12 col-md-4">
                                <img src="assets/img/Imagens/Imagens-de-carros/Carro20.jpg" alt="Projeto 4" class="img.fluid" />
                                <div class="banner content">
                                    <p class="secondary-color">SUV</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="container" id="info-container">
                    <div class="col-12">
                        <h2 class="title primary-color">Nossa trajetória</h2>
                        <p class="subtitle secondary-color">
                            Não alugamos carros - realizamos sonhos
                        </p>
                    </div>
                    <div class="col-12">
                        <div class="row">
                            <div class="col-12 col-md-5">
                                <img src="assets/img/Imagens/infobanner.jpg"
                                    alt="Informações da Empresa"
                                    class="img.fluid" />
                            </div>
                            <div class="col-12 col-md-7 bg-secondary-color" id="info-content">
                                <div class="row">
                                    <div class="col-10">
                                        <h2 class="title secondary-color2">Estes dados fazem a diferença</h2>
                                        <p class="subtitle secondary-color2">
                                            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                                            Alias rerum consequatur laborum recusandae velit quod minima
                                            vitae suscipit quo. Illum asperiores aliquam porro cupiditate
                                            dolore nostrum ducimus reprehenderit mollitia sed.
                                        </p>
                                    </div>
                                    <div class="col-12" id="info-number">
                                        <div class="row">
                                            <div class="col-4">
                                                <h3 class="secondary-color2">18</h3>
                                                <p class="secondary-color2">Anos conduzindo sonhos</p>
                                            </div>
                                            <div class="col-4">
                                                <h3 class="secondary-color2">12</h3>
                                                <p class="secondary-color2">Prêmios Top-of-Mind</p>
                                            </div>
                                            <div class="col-4">
                                                <h3 class="secondary-color2">+10.000</h3>
                                                <p class="secondary-color2">Clientes satisfeitos</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-12">
                                        <a href="#" class="btn btn-dark">Saber Mais</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <footer class="container-fluid bg-dark-color" id="footer">
                    <div class="container">
                        <div class="row">
                            <div class="col-12" id="footer-top">
                                <div class="row justify-content-between">
                                    <div class="col-4"><h2>LuxCar</h2></div>
                                    <div class="col-4" id="social-icons">
                                        <i class="bi bi-facebook"></i>
                                        <i class="bi bi-instagram"></i>
                                        <i class="bi bi-youtube"></i>
                                        <i class="bi bi-twitter"></i>
                                    </div>
                                </div>
                            </div>
                            <div class="col-12" id="footer-details">
                                <div class="row">
                                    <div class="col12 colmd4" id="newscontainer">
                                        <h4>Fique por dentro das novidades.</h4>
                                        <p class="secondary-color">Inscreva-se para saber em primeira mão</p>
                                        <form>
                                            <div class="mb-3">
                                                <input type="email" class="form-control" placeholder="Digite seu email" />
                                            </div>
                                            <button class="btn btn-dark" type="submit">Inscrever</button>
                                        </form>
                                    </div>
                                    <div class="col-12 col-md-4" id="contact-container">
                                        <h4>Contato</h4>
                                        <p class="secondary-color">(71)3343-5622</p>
                                        <p class="secondary-col">contato@luxcar.com.br</p>
                                    </div>
                                    <div class="col-12 col-md-4" id="links-container">
                                        <div class="row">
                                            <h4>Você pode está procurando por:</h4>
                                            <div class="col-6">
                                                <ul class="list-unstyled">
                                                    <li><a href="" class="secondary-color">Novidades</a></li>
                                                    <li><a href="" class="secondary-color">Clássicos</a></li>
                                                    <li><a href="" class="secondary-color">Vendas</a></li>
                                                </ul>
                                            </div>
                                            <div class="col-6">
                                                <ul class="list-unstyled">
                                                    <li><a href="" class="secondary-color">Oportunidades</a></li>
                                                    <li><a href="" class="secondary-color">Tendências</a></li>
                                                    <li><a href="" class="secondary-color">Curiosidades</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-12" id="footer-bootton"></div>
                        </div>
                    </div>
                </footer>

            </div>

        );
    }

}

export default Home;
