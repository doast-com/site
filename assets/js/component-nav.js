class Header extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <nav>            
		<div id="header-wrapper">
			<header id="header" class="container">

				<!-- Logo -->
					<div id="logo">
						<a href="index.html"><img src="images/doast_logo.png" alt="DOAST""></a>
					</div>

				<!-- Nav -->
					<nav id="nav">
						<ul>
							<li><a target="_blank" href="docs/doast-from-2004-till-now.pdf">From 2004 till now</a></li>
							<li><a target="_blank" href="docs/doast-future.pdf">Future</a></li>

							<li>
								<a href="#">Testimonials</a>
								<ul>
									<li><a href="testimonials-family-1.html">Family 1</a></li>
									<li><a href="testimonials-family-2.html">Family 2</a></li>
									<li><a href="testimonials-family-3.html">Family 3</a></li>
									<li><a href="testimonials-family-4.html">Family 4</a></li>
									<li><a href="testimonials-family-5.html">Family 5</a></li>
								</ul>
							</li>
							<li><a href="references.html">References</a></li>
							<li><a href="videos.html">Videos</a></li>
							<li><a href="helpus.html">Help Us</a></li>
						</ul>
					</nav>

			</header>
		</div>        
      </nav>
    `;
  }
}
class Footer extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `    
      <footer> 
			<div id="footer-wrapper">
				<footer id="footer" class="container">
					<div  class="row">
						<div class="col-12">

							<!-- Contact -->
								<section class="widget contact last">
									<h3>Contact Us</h3>
									
									<p>
									<b>DOAST Integrated Therapy Centre for Autism</b><br />
									Z Block 249, 1st Street<br />
									10th Main Road<br />
									Anna Nagar West<br />
									Chennai, Tamil Nadu-600040, India<br />
									+91 44 42172828 / 44 42103636 / 44 42026688</br>
									+91 8056060606</br>
									doast1910@gmail.com
									</p>
									
									<ul>
										<li><a target="_blank" href="https://www.facebook.com/autismbioindia/" class="icon brands fa-facebook-f"><span class="label">Facebook</span></a></li>
										<li><a target="_blank" href="https://www.youtube.com/channel/UCGu79W2uv8PuNijg1kapW0A" class="icon brands fa-youtube"><span class="label">You Tube</span></a></li>
									</ul>
								</section>

						</div>
					</div>
					<div class="row">
						<div class="col-12">
							<div id="copyright">
								<ul class="menu">
									<li>&copy; DOAST</li><li><a href="disclaimer.html">Disclaimer</a></li>
								</ul>
							</div>
						</div>
					</div>
				</footer>				
			</div>	  
      </footer>     
    `;
  }
}

customElements.define('main-header', Header);
customElements.define('main-footer', Footer);