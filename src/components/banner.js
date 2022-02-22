const Banner = {
    render() {
        return /* html */ `
        <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
        <ol class="carousel-indicators">
          <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img class="d-block w-100" src="image/nike-banner.jpg" alt="" width="1450px" alt="First slide">
          </div>
          <div class="carousel-item">
            <img class="d-block w-100" src="image/poster-giay-just-do-it.jpg" alt="" width="1450px" alt="Second slide">
          </div>
          <div class="carousel-item">
            <img class="d-blockw-100 " src="image/9_banner_nike.jpg" alt="" width="1450px" alt="Third slide">
          </div>
        </div>
        <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
        
      </div>`;
    },
};
export default Banner;
