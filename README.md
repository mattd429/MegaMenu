# mega-menu
A mega menu is a drop down that is triggered by hovering over a link or defined area. This dropdown usually shows all options in one main, mega-panel and oftentimes groups related topics into categories. In this article, [Solodev](https://www.solodev.com/) will show you how to add a mega menu to your website.

## Tutorial

For detailed instructions, view Solodev's [How to Add a Mega Menu to your Website](https://www.solodev.com/blog/web-design/how-to-add-a-mega-menu-to-your-website.stml) article.

## Demo

Try out a working example on [JSFiddle](https://jsfiddle.net/solodev/urLn1L4u/).

## HTML

The mega menu has the following basic HTML markup.

```
<!DOCTYPE html>
<html>
<head>
	<title></title>
	<!-- Ajaxify Cart Plugin ================================================== -->
	<link href="css/ajaxify.scss.css" media="all" rel="stylesheet" type="text/css">
	<!-- Font Awesome css ================================================== -->
	<link href="css/font-awesome.min.css" media="all" rel="stylesheet" type="text/css">
	<!-- Animate css ================================================== -->
	<link href="css/megamenu.css" media="all" rel="stylesheet" type="text/css">
	<link href="css/bootstrap.min.css" media="all" rel="stylesheet" type="text/css">
	<link href="css/animated.css" media="all" rel="stylesheet" type="text/css">
	<link href="css/flexslider.css" media="all" rel="stylesheet" type="text/css">
	<link href="css/sponser-style.css" media="all" rel="stylesheet" type="text/css">
	<!-- Owl Carousel css ================================================== -->
	<link href="css/owl-carousel.css" media="all" rel="stylesheet" type="text/css">
	<!-- Magnific Popup core CSS file ================================================== -->
	<link href="css/magnific-popup.css" media="all" rel="stylesheet" type="text/css">
	  <!-- CSS ================================================== -->
	<link href="css/timber.scss.css" media="all" rel="stylesheet" type="text/css">
	<link href="css/font-awesome-icons.css" media="all" rel="stylesheet" type="text/css">
	<link href="css/hup.css" media="all" rel="stylesheet" type="text/css">
	<script>
	var Shopify = Shopify || {};
	 Shopify.shop = "green-roads-world-2.myshopify.com";
	 Shopify.theme = {"name":"Clean up 21-12-2017","id":412123156,"theme_store_id":null,"role":"main"};
	 Shopify.theme.handle = "null";
	 Shopify.theme.style = {"id":null,"handle":null};
	</script>
</head>
<body>
<link href="css/bold-upsell.css" media="all" rel="stylesheet" type="text/css">
	<link href="css/bold-upsell-custom.css" media="all" rel="stylesheet" type="text/css">
	<script src="js/ro.js" type="text/javascript">
	</script>
  <!-- jQuery ================================================== -->

	<script src="jquery/jquery-v2.1.0.js" type="text/javascript">
	</script>

  <!-- Custom thumbnails since Shopify do not offer this feature  ================================================== -->

	<script src="js/hup.js" type="text/javascript">
	</script>
  <div class="navbar-affixed-top" data-offset-top="" data-spy="">
		<div class="navbar navbar-default yamm" id="navbar" role="navigation">
			<div class="container-header container">
				<div class="navbar-collapse collapse" id="navigation">
					<ul class="nav navbar-nav">
						<li class="dropdown active Home">
							<a class="dropdown-toggle" href="/">Home</a>
						</li>
						<li class="dropdown use-yamm yamm-fw" id="product-menu-hup3">
							<a class="dropdown-toggle" data-delay="200" href="/pages/learn-about-cbd">Learn<b class="caret"></b></a>
							<ul class="dropdown-menu category-main-menu learn_menu">
								<li class="green-location cbd-compare learn-menu-more">
									<div class="yamm-content tabs-style-iconbox">
										<ul>
											<li class="re-menu">
												<a class="icon-upload" href="/pages/green-roads-cbdprocessing"><span class="icon-for"><img alt="How our CBD is made" class="sbdflexbox-overlay sbdmask-c" src=""> <img alt="How our CBD is made" class="sbdflexbox-overlay sbdmask-d" src=""></span> <span>How our CBD is made</span></a>
											</li>
											<li class="re-menu">
												<a class="icon-upload" href="https://www.greenroadsworld.com/pages/company-highlights"><span class="icon-for"><img alt="Company Highlights" class="sbdflexbox-overlay sbdmask-c" src=""> <img alt="Company Highlights" class="sbdflexbox-overlay sbdmask-d" src=""></span> <span>Company Highlights</span></a>
											</li>
											<li class="re-menu">
												<a class="icon-upload" href="/pages/cannabiniod-system"><span class="icon-for"><img alt="Your Cannabinoid system" class="sbdflexbox-overlay sbdmask-c" src=""> <img alt="Your Cannabinoid system" class="sbdflexbox-overlay sbdmask-d" src=""></span> <span>Your Cannabinoid system</span></a>
											</li>
											<li class="re-menu">
												<a class="icon-upload" href="https://www.facebook.com/pg/GreenRoadsWorldHQ/reviews/?ref=page_internal" target="_blank"><span class="icon-for"><img alt="Share Your Story" class="sbdflexbox-overlay sbdmask-c" src=""> <img alt="Share Your Story" class="sbdflexbox-overlay sbdmask-d" src=""></span> <span>Share Your Story</span></a>
											</li>
											<li class="re-menu">
												<a class="icon-upload" href="/pages/locations"><span class="icon-for"><img alt="State Legalities" class="sbdflexbox-overlay sbdmask-c" src=""> <img alt="State Legalities" class="sbdflexbox-overlay sbdmask-d" src=""></span> <span>State Legalities</span></a>
											</li>
											<li class="re-menu">
												<a class="icon-upload" href="/pages/faqs"><span class="icon-for"><img alt="FAQ" class="sbdflexbox-overlay sbdmask-c" src=""> <img alt="FAQ" class="sbdflexbox-overlay sbdmask-d" src=""></span> <span>FAQ</span></a>
											</li>
											<li class="re-menu">
												<a class="icon-upload" href="/pages/product-table"><span class="icon-for"><img alt="Compare Products" class="sbdflexbox-overlay sbdmask-c" src=""> <img alt="Compare Products" class="sbdflexbox-overlay sbdmask-d" src=""></span> <span>Compare Products</span></a>
											</li>
											<li class="re-menu">
												<a class="icon-upload" href="/pages/lab-tests"><span class="icon-for"><img alt="Lab Sheets" class="sbdflexbox-overlay sbdmask-c" src=""> <img alt="Lab Sheets" class="sbdflexbox-overlay sbdmask-d" src=""></span> <span>Lab Sheets</span></a>
											</li>
										</ul>
									</div>
								</li>
							</ul>
						</li>
						<li class="dropdown use-yamm yamm-fw" id="product-menu-hup">
							<a class="dropdown-toggle" data-delay="200" href="/collections/all">Shop Now<b class="caret"></b></a>
							<ul class="dropdown-menu category-main-menu">
								<li class="green-location cbd-compare">
									<div class="yamm-content">
										<div class="row">
											<div class="clearboth clearfix titliese tabs-style-iconbox col-mg-mn">
												<ul class="category cbd-now">
													<li class="use-yamm yamm-fw semuopen headmenu">
														<a class="icon-oil icon-upload" href="javascript:void(0)"><span class="icon-for"><img alt="CBD oil" class="sbdflexbox-overlay sbdmask-c" src=""> <img alt="CBD oil" class="sbdflexbox-overlay sbdmask-d" src=""></span> <span>CBD oils</span></a>
														<div class="dropdown-menu category-open">
															<div class="col-sm-6 col-cl-it hmmp overflow-scroll">
																<div class="col-sm-6 hmmp visible-hmmp intros">
																	<div class="grid-item-wrapper acct-menu animated wow bounceIn swing">
																		<div class="product-grid-item">
																			<div class="product-grid-image">
																				<div class="product-grid-image--centered">
																					<a href="javascript:void(0)"><img alt="CBD OIL" class="product-pic" src=""></a>
																				</div>
																			</div>
																			<p class="list-title"><a href="javascript:void(0)">100MG</a></p>
																			<div class="tfc-product-redirect">
																				<a class="tfc_productarrow" href="/products/cbd-oil-100-mg"><img class="hup_starting" src=""> <img class="hup_hover" src=""></a>
																			</div>
																		</div>
																	</div>
																	<div class="product-menu-info">
																		<div class="visible-product-cbd media">
																			<div class="cbd-img">
																				<a href="/products/cbd-oil-100-mg"><img alt="cbd-product" src=""></a>
																			</div>
																			<div class="cbd-name">
																				<p class="list-title"><a href="/products/cbd-oil-100-mg">100MG</a></p>
																				<div class="product-item--price">
																					<span class="h1 medium--left"><span class="money"><span class="money">$26.99</span></span></span>
																				</div>
																				<div class="description">
																					<p>Buy CBD Oil- 100MG from Green Roads World. Chose from a variety of flavors, including sweet and neutral. High quality Bottles for sale. Inquire today! Order now and get FREE Shipping on orders over $75 and discounts on select packages.</p>
																				</div>
																				<div class="flip">
																					<form action="/cart/add" class="add-to-cart-form" enctype="multipart/form-data" id="addToCartForm-19432566151" method="post" name="addToCartForm-19432566151">
																						<select class="product-variants" id="productSelect" name="id">
																							<option selected="selected" value="19432566151">
																								100MG - $26.99 USD
																							</option>
																							<option value="37932854730">
																								250MG - $45.99 USD
																							</option>
																							<option value="37932909770">
																								350MG - $64.99 USD
																							</option>
																							<option value="37936919498">
																								550MG - $84.99 USD
																							</option>
																							<option value="37938467530">
																								1000MG - $159.99 USD
																							</option>
																							<option value="37938614730">
																								1500MG - $209.99 USD
																							</option>
																						</select> <button class="btn add-to-cart not-active" id="addToCart-19432566151" name="add" type="submit"><span>Add to cart</span></button> <a class="menu-more-item-btn btn" href="/products/cbd-oil-100-mg">MORE DETAILS</a> <span class="variant-quantity" id="variantQuantity-19432566151"></span>
																					</form>
																				</div>
																			</div>
																		</div>
																	</div>
																</div>
																<div class="col-sm-6 hmmp visible-hmmp">
																	<div class="grid-item-wrapper acct-menu animated wow bounceIn swing">
																		<div class="product-grid-item">
																			<div class="product-grid-image">
																				<div class="product-grid-image--centered">
																					<a href="javascript:void(0)"><img alt="CBD OIL" class="product-pic" src=""></a>
																				</div>
																			</div>
																			<p class="list-title"><a href="javascript:void(0)">250MG</a></p>
																			<div class="tfc-product-redirect">
																				<a class="tfc_productarrow" href="/products/250-mg-cbd-oil"><img class="hup_starting" src=""> <img class="hup_hover" src=""></a>
																			</div>
																		</div>
																	</div>
																	<div class="product-menu-info">
																		<div class="visible-product-cbd media">
																			<div class="cbd-img">
																				<a href="/products/250-mg-cbd-oil"><img alt="cbd-product" src=""></a>
																			</div>
																			<div class="cbd-name">
																				<p class="list-title"><a href="/products/250-mg-cbd-oil">250MG</a></p>
																				<div class="product-item--price">
																					<span class="h1 medium--left"><span class="money"><span class="money">$45.99</span></span></span>
																				</div>
																				<div class="description">
																					<p>Purchase online. CBD Oil 250 MG- high quality infused E Liquid Bottles. Our products offer natural Cannabidiol oil that is 99% pure crystalline isolate. Order now and get FREE Shipping on orders over $75 and discounts on select packages.</p>
																				</div>
																				<div class="flip">
																					<form action="/cart/add" class="add-to-cart-form" enctype="multipart/form-data" id="addToCartForm-22022563591" method="post" name="addToCartForm-22022563591">
																						<select class="product-variants" id="productSelect" name="id">
																							<option selected="selected" value="22022563591">
																								250MG - $45.99 USD
																							</option>
																							<option value="37942880970">
																								100MG - $26.99 USD
																							</option>
																							<option value="37945101194">
																								350MG - $64.99 USD
																							</option>
																							<option value="37945164810">
																								550MG - $84.99 USD
																							</option>
																							<option value="37945229194">
																								1000MG - $159.99 USD
																							</option>
																							<option value="37945299978">
																								1500MG - $209.99 USD
																							</option>
																						</select> <button class="btn add-to-cart not-active" id="addToCart-22022563591" name="add" type="submit"><span>Add to cart</span></button> <a class="menu-more-item-btn btn" href="/products/250-mg-cbd-oil">MORE DETAILS</a> <span class="variant-quantity" id="variantQuantity-22022563591"></span>
																					</form>
																				</div>
																			</div>
																		</div>
																	</div>
																</div>
																<div class="col-sm-6 hmmp visible-hmmp">
																	<div class="grid-item-wrapper acct-menu animated wow bounceIn swing">
																		<div class="product-grid-item">
																			<div class="product-grid-image">
																				<div class="product-grid-image--centered">
																					<a href="javascript:void(0)"><img alt="CBD OIL" class="product-pic" src=""></a>
																				</div>
																			</div>
																			<p class="list-title"><a href="javascript:void(0)">350MG</a></p>
																			<div class="tfc-product-redirect">
																				<a class="tfc_productarrow" href="/products/350-mg-cbd-oil"><img class="hup_starting" src="#"> <img class="hup_hover" src="#"></a>
																			</div>
																		</div>
																	</div>
																	<div class="product-menu-info">
																		<div class="visible-product-cbd media">
																			<div class="cbd-img">
																				<a href="/products/350-mg-cbd-oil"><img alt="cbd-product" src="#"></a>
																			</div>
																			<div class="cbd-name">
																				<p class="list-title"><a href="/products/350-mg-cbd-oil">350MG</a></p>
																				<div class="product-item--price">
																					<span class="h1 medium--left"><span class="money"><span class="money">$64.99</span></span></span>
																				</div>
																				<div class="description">
																					<p>Purchase online. CBD Oil 350 MG. Our most popular product. Green Roads offers natural Cannabidiol oil that is 99% pure crystalline isolate. Order now and get FREE Shipping on orders over $75 and discounts on select packages.</p>
																				</div>
																				<div class="flip">
																					<form action="/cart/add" class="add-to-cart-form" enctype="multipart/form-data" id="addToCartForm-19432565959" method="post" name="addToCartForm-19432565959">
																						<select class="product-variants" id="productSelect" name="id">
																							<option selected="selected" value="19432565959">
																								350MG - $64.99 USD
																							</option>
																							<option value="38229638026">
																								100MG - $26.99 USD
																							</option>
																							<option value="38229659082">
																								250MG - $45.99 USD
																							</option>
																							<option value="38229712458">
																								550MG - $84.99 USD
																							</option>
																							<option value="38229738250">
																								1000MG - $159.99 USD
																							</option>
																							<option value="38229761098">
																								1500MG - $209.99 USD
																							</option>
																						</select> <button class="btn add-to-cart not-active" id="addToCart-19432565959" name="add" type="submit"><span>Add to cart</span></button> <a class="menu-more-item-btn btn" href="/products/350-mg-cbd-oil">MORE DETAILS</a> <span class="variant-quantity" id="variantQuantity-19432565959"></span>
																					</form>
																				</div>
																			</div>
																		</div>
																	</div>
																</div>
																<div class="col-sm-6 hmmp visible-hmmp">
																	<div class="grid-item-wrapper acct-menu animated wow bounceIn swing">
																		<div class="product-grid-item">
																			<div class="product-grid-image">
																				<div class="product-grid-image--centered">
																					<a href="javascript:void(0)"><img alt="CBD OIL" class="product-pic" src=""></a>
																				</div>
																			</div>
																			<p class="list-title"><a href="javascript:void(0)">550MG</a></p>
																			<div class="tfc-product-redirect">
																				<a class="tfc_productarrow" href="/products/550-mg-cbd-oil"><img class="hup_starting" src=""> <img class="hup_hover" src=""></a>
																			</div>
																		</div>
																	</div>
																	<div class="product-menu-info">
																		<div class="visible-product-cbd media">
																			<div class="cbd-img">
																				<a href="/products/550-mg-cbd-oil"><img alt="cbd-product" src=""></a>
																			</div>
																			<div class="cbd-name">
																				<p class="list-title"><a href="/products/550-mg-cbd-oil">550MG</a></p>
																				<div class="product-item--price">
																					<span class="h1 medium--left"><span class="money"><span class="money">$84.99</span></span></span>
																				</div>
																				<div class="description">
																					<p>CBD Oil 550 MG: our most popular product. Green Roads offers natural Cannabidiol oil that is 99% pure crystalline isolate.Order now and get FREE Shipping on orders over $75 and discounts on select packages.</p>
																				</div>
																				<div class="flip">
																					<form action="/cart/add" class="add-to-cart-form" enctype="multipart/form-data" id="addToCartForm-19432565767" method="post" name="addToCartForm-19432565767">
																						<select class="product-variants" id="productSelect" name="id">
																							<option selected="selected" value="19432565767">
																								550MG - $84.99 USD
																							</option>
																							<option value="38229866634">
																								100MG - $26.99 USD
																							</option>
																							<option value="38229903242">
																								250MG - $45.99 USD
																							</option>
																							<option value="38229926410">
																								350MG - $64.99 USD
																							</option>
																							<option value="38229970570">
																								1000MG - $159.99 USD
																							</option>
																							<option value="38229987914">
																								1500MG - $209.99 USD
																							</option>
																						</select> <button class="btn add-to-cart not-active" id="addToCart-19432565767" name="add" type="submit"><span>Add to cart</span></button> <a class="menu-more-item-btn btn" href="/products/550-mg-cbd-oil">MORE DETAILS</a> <span class="variant-quantity" id="variantQuantity-19432565767"></span>
																					</form>
																				</div>
																			</div>
																		</div>
																	</div>
																</div>
																<div class="col-sm-6 hmmp visible-hmmp">
																	<div class="grid-item-wrapper acct-menu animated wow bounceIn swing">
																		<div class="product-grid-item">
																			<div class="product-grid-image">
																				<div class="product-grid-image--centered">
																					<a href="javascript:void(0)"><img alt="CBD OIL" class="product-pic" src=""></a>
																				</div>
																			</div>
																			<p class="list-title"><a href="javascript:void(0)">1000MG</a></p>
																			<div class="tfc-product-redirect">
																				<a class="tfc_productarrow" href="/products/1000-mg-cbd-oil"><img class="hup_starting" src=""> <img class="hup_hover" src=""></a>
																			</div>
																		</div>
																	</div>
																	<div class="product-menu-info">
																		<div class="visible-product-cbd media">
																			<div class="cbd-img">
																				<a href="/products/1000-mg-cbd-oil"><img alt="cbd-product" src=""></a>
																			</div>
																			<div class="cbd-name">
																				<p class="list-title"><a href="/products/1000-mg-cbd-oil">1000MG</a></p>
																				<div class="product-item--price">
																					<span class="h1 medium--left"><span class="money"><span class="money">$162.99</span></span></span>
																				</div>
																				<div class="description">
																					<p>Buy CBD Oil 1000 MG from Green Roads World. Made by licensed&nbsp;pharmacists in Florida! Chose from a variety of flavors, including sweet and neutral. Order now and get FREE Shipping on orders over $75 and discounts on select packages. Inquire today!</p>
																				</div>
																				<div class="flip">
																					<form action="/cart/add" class="add-to-cart-form" enctype="multipart/form-data" id="addToCartForm-20605490503" method="post" name="addToCartForm-20605490503">
																						<select class="product-variants" id="productSelect" name="id">
																							<option selected="selected" value="20605490503">
																								1000MG - $162.99 USD
																							</option>
																							<option value="37940230666">
																								100MG - $26.99 USD
																							</option>
																							<option value="37940326922">
																								250MG - $45.99 USD
																							</option>
																							<option value="37940767306">
																								350MG - $64.99 USD
																							</option>
																							<option value="37940991626">
																								550MG - $84.99 USD
																							</option>
																							<option value="37941175178">
																								1500MG - $209.99 USD
																							</option>
																						</select> <button class="btn add-to-cart not-active" id="addToCart-20605490503" name="add" type="submit"><span>Add to cart</span></button> <a class="menu-more-item-btn btn" href="/products/1000-mg-cbd-oil">MORE DETAILS</a> <span class="variant-quantity" id="variantQuantity-20605490503"></span>
																					</form>
																				</div>
																			</div>
																		</div>
																	</div>
																</div>
																<div class="col-sm-6 hmmp visible-hmmp">
																	<div class="grid-item-wrapper acct-menu animated wow bounceIn swing">
																		<div class="product-grid-item">
																			<div class="product-grid-image">
																				<div class="product-grid-image--centered">
																					<a href="javascript:void(0)"><img alt="CBD OIL" class="product-pic" src=""></a>
																				</div>
																			</div>
																			<p class="list-title"><a href="javascript:void(0)">1500MG</a></p>
																			<div class="tfc-product-redirect">
																				<a class="tfc_productarrow" href="/products/1500-mg-cbd-oil"><img class="hup_starting" src=""> <img class="hup_hover" src=""></a>
																			</div>
																		</div>
																	</div>
																	<div class="product-menu-info">
																		<div class="visible-product-cbd media">
																			<div class="cbd-img">
																				<a href="/products/1500-mg-cbd-oil"><img alt="cbd-product" src=""></a>
																			</div>
																			<div class="cbd-name">
																				<p class="list-title"><a href="/products/1500-mg-cbd-oil">1500MG</a></p>
																				<div class="product-item--price">
																					<span class="h1 medium--left"><span class="money"><span class="money">$209.99</span></span></span>
																				</div>
																				<div class="description">
																					<p>Purchase online! CBD Oil 1500 MG from Green Roads World. Our products offer natural Cannabidiol oil that is 99% pure crystalline isolate. Order now and get FREE Shipping on orders over $75 and discounts on select packages.</p>
																				</div>
																				<div class="flip">
																					<form action="/cart/add" class="add-to-cart-form" enctype="multipart/form-data" id="addToCartForm-24150754375" method="post" name="addToCartForm-24150754375">
																						<select class="product-variants" id="productSelect" name="id">
																							<option selected="selected" value="24150754375">
																								1500MG - $209.99 USD
																							</option>
																							<option value="37941671818">
																								100MG - $26.99 USD
																							</option>
																							<option value="37941813322">
																								250MG - $45.99 USD
																							</option>
																							<option value="37941910090">
																								350MG - $64.99 USD
																							</option>
																							<option value="37942134666">
																								550MG - $84.99 USD
																							</option>
																							<option value="37942386954">
																								1000MG - $159.99 USD
																							</option>
																						</select> <button class="btn add-to-cart not-active" id="addToCart-24150754375" name="add" type="submit"><span>Add to cart</span></button> <a class="menu-more-item-btn btn" href="/products/1500-mg-cbd-oil">MORE DETAILS</a> <span class="variant-quantity" id="variantQuantity-24150754375"></span>
																					</form>
																				</div>
																			</div>
																		</div>
																	</div>
																</div>
															</div>
															<div class="col-sm-6 col-cl-it navigation-blog"></div>
														</div>
													</li>
													<li class="use-yamm yamm-fw semuopen">
														<a class="icon-oil icon-upload" href="javascript:void(0)"><span class="icon-for"><img alt="CBD Syrups" class="sbdflexbox-overlay sbdmask-c" src=""> <img alt="CBD Syrups" class="sbdflexbox-overlay sbdmask-d" src=""></span> <span>CBD Syrups</span></a>
														<div class="dropdown-menu category-open">
															<div class="col-sm-6 col-cl-it hmmp overflow-scroll">
																<div class="col-sm-6 hmmp visible-hmmp intros">
																	<div class="grid-item-wrapper acct-menu animated wow bounceIn swing">
																		<div class="product-grid-item">
																			<div class="product-grid-image">
																				<div class="product-grid-image--centered">
																					<a href="javascript:void(0)"><img alt="CBD SOOTHE SYRUP" class="product-pic" src=""></a>
																				</div>
																			</div>
																			<p class="list-title"><a href="javascript:void(0)">CBD NIGHTTIME SYRUP (GRAPE - PM) (SLEEP)</a></p>
																			<div class="tfc-product-redirect">
																				<a class="tfc_productarrow" href="/products/cbd-reem-pm"><img class="hup_starting" src=""> <img class="hup_hover" src=""></a>
																			</div>
																		</div>
																	</div>
																	<div class="product-menu-info">
																		<div class="visible-product-cbd media">
																			<div class="cbd-img">
																				<a href="/products/cbd-reem-pm"><img alt="cbd-product" src=""></a>
																			</div>
																			<div class="cbd-name">
																				<p class="list-title"><a href="/products/cbd-reem-pm">CBD NIGHTTIME SYRUP (GRAPE - PM) (SLEEP)</a></p>
																				<div class="product-item--price">
																					<span class="h1 medium--left"><span class="money"><span class="money">$39.99</span></span></span>
																				</div>
																				<div class="description">
																					<p></p>
																				</div>
																				<div class="flip">
																					<form action="/cart/add" class="add-to-cart-form" enctype="multipart/form-data" id="addToCartForm-24150215559" method="post" name="addToCartForm-24150215559">
																						<select class="product-variants" id="productSelect" name="id">
																							<option selected="selected" value="24150215559">
																								Grape - $39.99 USD
																							</option>
																							<option value="50519262740">
																								Mango - $39.99 USD
																							</option>
																							<option value="50632201748">
																								Strawberry - $39.99 USD
																							</option>
																						</select> <button class="btn add-to-cart not-active" id="addToCart-24150215559" name="add" type="submit"><span>Add to cart</span></button> <a class="menu-more-item-btn btn" href="/products/cbd-reem-pm">MORE DETAILS</a> <span class="variant-quantity" id="variantQuantity-24150215559"></span>
																					</form>
																				</div>
																			</div>
																		</div>
																	</div>
																</div>
																<div class="col-sm-6 hmmp visible-hmmp">
																	<div class="grid-item-wrapper acct-menu animated wow bounceIn swing">
																		<div class="product-grid-item">
																			<div class="product-grid-image">
																				<div class="product-grid-image--centered">
																					<a href="javascript:void(0)"><img alt="CBD SOOTHE SYRUP" class="product-pic" src=""></a>
																				</div>
																			</div>
																			<p class="list-title"><a href="javascript:void(0)">CBD NIGHTTIME SYRUP (Mango- PM) (SLEEP)</a></p>
																			<div class="tfc-product-redirect">
																				<a class="tfc_productarrow" href="/products/cbd-soothe-syrup-mango"><img class="hup_starting" src=""> <img class="hup_hover" src="4"></a>
																			</div>
																		</div>
																	</div>
																	<div class="product-menu-info">
																		<div class="visible-product-cbd media">
																			<div class="cbd-img">
																				<a href="/products/cbd-soothe-syrup-mango"><img alt="cbd-product" src=""></a>
																			</div>
																			<div class="cbd-name">
																				<p class="list-title"><a href="/products/cbd-soothe-syrup-mango">CBD NIGHTTIME SYRUP (Mango- PM) (SLEEP)</a></p>
																				<div class="product-item--price">
																					<span class="h1 medium--left"><span class="money"><span class="money">$39.99</span></span></span>
																				</div>
																				<div class="description">
																					<p></p>
																				</div>
																				<div class="flip">
																					<form action="/cart/add" class="add-to-cart-form" enctype="multipart/form-data" id="addToCartForm-50519552852" method="post" name="addToCartForm-50519552852">
																						<select class="product-variants" id="productSelect" name="id">
																							<option selected="selected" value="50519552852">
																								Mango - $39.99 USD
																							</option>
																							<option value="50519552788">
																								Grape - $39.99 USD
																							</option>
																							<option value="50632383444">
																								Strawberry - $39.99 USD
																							</option>
																						</select> <button class="btn add-to-cart not-active" id="addToCart-50519552852" name="add" type="submit"><span>Add to cart</span></button> <a class="menu-more-item-btn btn" href="/products/cbd-soothe-syrup-mango">MORE DETAILS</a> <span class="variant-quantity" id="variantQuantity-50519552852"></span>
																					</form>
																				</div>
																			</div>
																		</div>
																	</div>
																</div>
																<div class="col-sm-6 hmmp visible-hmmp">
																	<div class="grid-item-wrapper acct-menu animated wow bounceIn swing">
																		<div class="product-grid-item">
																			<div class="product-grid-image">
																				<div class="product-grid-image--centered">
																					<a href="javascript:void(0)"><img alt="CBD SOOTHE SYRUP" class="product-pic" src=""></a>
																				</div>
																			</div>
																			<p class="list-title"><a href="javascript:void(0)">CBD NIGHTTIME SYRUP (Strawberry- PM) (SLEEP)</a></p>
																			<div class="tfc-product-redirect">
																				<a class="tfc_productarrow" href="/products/cbd-soothe-syrup-strawberry"><img class="hup_starting" src=""> <img class="hup_hover" src=""></a>
																			</div>
																		</div>
																	</div>
																	<div class="product-menu-info">
																		<div class="visible-product-cbd media">
																			<div class="cbd-img">
																				<a href="/products/cbd-soothe-syrup-strawberry"><img alt="cbd-product" src=""></a>
																			</div>
																			<div class="cbd-name">
																				<p class="list-title"><a href="/products/cbd-soothe-syrup-strawberry">CBD NIGHTTIME SYRUP (Strawberry- PM) (SLEEP)</a></p>
																				<div class="product-item--price">
																					<span class="h1 medium--left"><span class="money"><span class="money">$39.99</span></span></span>
																				</div>
																				<div class="description">
																					<p></p>
																				</div>
																				<div class="flip">
																					<form action="/cart/add" class="add-to-cart-form" enctype="multipart/form-data" id="addToCartForm-50632459476" method="post" name="addToCartForm-50632459476">
																						<select class="product-variants" id="productSelect" name="id">
																							<option selected="selected" value="50632459476">
																								Strawberry - $39.99 USD
																							</option>
																							<option value="50632459156">
																								Mango - $39.99 USD
																							</option>
																							<option value="50632459348">
																								Grape - $39.99 USD
																							</option>
																						</select> <button class="btn add-to-cart not-active" id="addToCart-50632459476" name="add" type="submit"><span>Add to cart</span></button> <a class="menu-more-item-btn btn" href="/products/cbd-soothe-syrup-strawberry">MORE DETAILS</a> <span class="variant-quantity" id="variantQuantity-50632459476"></span>
																					</form>
																				</div>
																			</div>
																		</div>
																	</div>
																</div>
															</div>
															<div class="col-sm-6 col-cl-it navigation-blog"></div>
														</div>
													</li>
													<li class="use-yamm yamm-fw semuopen">
														<a class="icon-oil icon-upload" href="javascript:void(0)"><span class="icon-for"><img alt="CBD Edibles" class="sbdflexbox-overlay sbdmask-c" src=""> <img alt="CBD Edibles" class="sbdflexbox-overlay sbdmask-d" src=""></span> <span>CBD Edibles</span></a>
														<div class="dropdown-menu category-open">
															<div class="col-sm-6 col-cl-it hmmp overflow-scroll">
																<div class="col-sm-6 hmmp visible-hmmp intros">
																	<div class="grid-item-wrapper acct-menu animated wow bounceIn swing">
																		<div class="product-grid-item">
																			<div class="product-grid-image">
																				<div class="product-grid-image--centered">
																					<a href="javascript:void(0)"><img alt="CBD Sourz Froggies" class="product-pic" src=""></a>
																				</div>
																			</div>
																			<p class="list-title"><a href="javascript:void(0)">CBD Sourz Froggies</a></p>
																			<div class="tfc-product-redirect">
																				<a class="tfc_productarrow" href="/products/cbd-sour-froggies"><img class="hup_starting" src=""> <img class="hup_hover" src=""></a>
																			</div>
																		</div>
																	</div>
																	<div class="product-menu-info">
																		<div class="visible-product-cbd media">
																			<div class="cbd-img">
																				<a href="/products/cbd-sour-froggies"><img alt="cbd-product" src=""></a>
																			</div>
																			<div class="cbd-name">
																				<p class="list-title"><a href="/products/cbd-sour-froggies">CBD Sourz Froggies</a></p>
																				<div class="product-item--price">
																					<span class="h1 medium--left"><span class="money"><span class="money">$21.99</span></span></span>
																				</div>
																				<div class="description">
																					<p></p>
																				</div>
																				<div class="flip">
																					<form action="/cart/add" class="add-to-cart-form" enctype="multipart/form-data" id="addToCartForm-34960622090" method="post" name="addToCartForm-34960622090">
																						<select class="product-variants" id="productSelect" name="id">
																							<option selected="selected" value="34960622090">
																								100MG (4x25MG) - $21.99 USD
																							</option>
																						</select> <button class="btn add-to-cart not-active" id="addToCart-34960622090" name="add" type="submit"><span>Add to cart</span></button> <a class="menu-more-item-btn btn" href="/products/cbd-sour-froggies">MORE DETAILS</a> <span class="variant-quantity" id="variantQuantity-34960622090"></span>
																					</form>
																				</div>
																			</div>
																		</div>
																	</div>
																</div>
																<div class="col-sm-6 hmmp visible-hmmp">
																	<div class="grid-item-wrapper acct-menu animated wow bounceIn swing">
																		<div class="product-grid-item">
																			<div class="product-grid-image">
																				<div class="product-grid-image--centered">
																					<a href="javascript:void(0)"><img alt="CBD Froggies" class="product-pic" src=""></a>
																				</div>
																			</div>
																			<p class="list-title"><a href="javascript:void(0)">CBD Froggies 100mg</a></p>
																			<div class="tfc-product-redirect">
																				<a class="tfc_productarrow" href="/products/cbd-frog-gummies"><img class="hup_starting" src=""> <img class="hup_hover" src=""></a>
																			</div>
																		</div>
																	</div>
																	<div class="product-menu-info">
																		<div class="visible-product-cbd media">
																			<div class="cbd-img">
																				<a href="/products/cbd-frog-gummies"><img alt="cbd-product" src=""></a>
																			</div>
																			<div class="cbd-name">
																				<p class="list-title"><a href="/products/cbd-frog-gummies">CBD Froggies 100mg</a></p>
																				<div class="product-item--price">
																					<span class="h1 medium--left"><span class="money"><span class="money">$19.99</span></span></span>
																				</div>
																				<div class="description">
																					<p>Enjoy our new CBD edibles - CBD Frog Gummies by Green Roads World. Buy now from online store. Order now and get FREE Shipping on orders over $75 and discounts on select packages.</p>
																				</div>
																				<div class="flip">
																					<form action="/cart/add" class="add-to-cart-form" enctype="multipart/form-data" id="addToCartForm-29685233927" method="post" name="addToCartForm-29685233927">
																						<select class="product-variants" id="productSelect" name="id">
																							<option selected="selected" value="29685233927">
																								100MG - $19.99 USD
																							</option>
																							<option value="30989558410">
																								200MG - $31.99 USD
																							</option>
																							<option value="51327932116">
																								300MG - $49.99 USD
																							</option>
																							<option value="46864409236">
																								1000 (10 Packages - 4 Gummy Frogs Per Pack) - $154.99 USD
																							</option>
																						</select> <button class="btn add-to-cart not-active" id="addToCart-29685233927" name="add" type="submit"><span>Add to cart</span></button> <a class="menu-more-item-btn btn" href="/products/cbd-frog-gummies">MORE DETAILS</a> <span class="variant-quantity" id="variantQuantity-29685233927"></span>
																					</form>
																				</div>
																			</div>
																		</div>
																	</div>
																</div>
																<div class="col-sm-6 hmmp visible-hmmp">
																	<div class="grid-item-wrapper acct-menu animated wow bounceIn swing">
																		<div class="product-grid-item">
																			<div class="product-grid-image">
																				<div class="product-grid-image--centered">
																					<a href="javascript:void(0)"><img alt="CBD Gummy Bears" class="product-pic" src=""></a>
																				</div>
																			</div>
																			<p class="list-title"><a href="javascript:void(0)">CBD Gummy Bears</a></p>
																			<div class="tfc-product-redirect">
																				<a class="tfc_productarrow" href="/products/cbd-gummy-bears"><img class="hup_starting" src=""> <img class="hup_hover" src=""></a>
																			</div>
																		</div>
																	</div>
																	<div class="product-menu-info">
																		<div class="visible-product-cbd media">
																			<div class="cbd-img">
																				<a href="/products/cbd-gummy-bears"><img alt="cbd-product" src=""></a>
																			</div>
																			<div class="cbd-name">
																				<p class="list-title"><a href="/products/cbd-gummy-bears">CBD Gummy Bears</a></p>
																				<div class="product-item--price">
																					<span class="h1 medium--left"><span class="money"><span class="money">$54.99</span></span></span>
																				</div>
																				<div class="description">
																					<p></p>
																				</div>
																				<div class="flip">
																					<form action="/cart/add" class="add-to-cart-form" enctype="multipart/form-data" id="addToCartForm-40440229588" method="post" name="addToCartForm-40440229588">
																						<select class="product-variants" id="productSelect" name="id">
																							<option selected="selected" value="40440229588">
																								Gummy Bears - $54.99 USD
																							</option>
																						</select> <button class="btn add-to-cart not-active" id="addToCart-40440229588" name="add" type="submit"><span>Add to cart</span></button> <a class="menu-more-item-btn btn" href="/products/cbd-gummy-bears">MORE DETAILS</a> <span class="variant-quantity" id="variantQuantity-40440229588"></span>
																					</form>
																				</div>
																			</div>
																		</div>
																	</div>
																</div>
																<div class="col-sm-6 hmmp visible-hmmp">
																	<div class="grid-item-wrapper acct-menu animated wow bounceIn swing">
																		<div class="product-grid-item">
																			<div class="product-grid-image">
																				<div class="product-grid-image--centered">
																					<a href="javascript:void(0)"><img alt="CBD Gummie Block" class="product-pic" src=""></a>
																				</div>
																			</div>
																			<p class="list-title"><a href="javascript:void(0)">CBD Gummie Blocks</a></p>
																			<div class="tfc-product-redirect">
																				<a class="tfc_productarrow" href="/products/cbd-gummies-lego-block-5-pack"><img class="hup_starting" src=""> <img class="hup_hover" src=""></a>
																			</div>
																		</div>
																	</div>
																	<div class="product-menu-info">
																		<div class="visible-product-cbd media">
																			<div class="cbd-img">
																				<a href="/products/cbd-gummies-lego-block-5-pack"><img alt="cbd-product" src=""></a>
																			</div>
																			<div class="cbd-name">
																				<p class="list-title"><a href="/products/cbd-gummies-lego-block-5-pack">CBD Gummie Blocks</a></p>
																				<div class="product-item--price">
																					<span class="h1 medium--left"><span class="money"><span class="money">$17.99</span></span></span>
																				</div>
																				<div class="description">
																					<p>Visit Green Roads World today for sweet CBD gummies. Order online to Order now and get FREE Shipping on orders over $75 and discounts on select packages. Compounded by Licensed Pharmacists.</p>
																				</div>
																				<div class="flip">
																					<form action="/cart/add" class="add-to-cart-form" enctype="multipart/form-data" id="addToCartForm-20163554183" method="post" name="addToCartForm-20163554183">
																						<select class="product-variants" id="productSelect" name="id">
																							<option selected="selected" value="20163554183">
																								Gummie Blocks - $17.99 USD
																							</option>
																						</select> <button class="btn add-to-cart not-active" id="addToCart-20163554183" name="add" type="submit"><span>Add to cart</span></button> <a class="menu-more-item-btn btn" href="/products/cbd-gummies-lego-block-5-pack">MORE DETAILS</a> <span class="variant-quantity" id="variantQuantity-20163554183"></span>
																					</form>
																				</div>
																			</div>
																		</div>
																	</div>
																</div>
																<div class="col-sm-6 hmmp visible-hmmp">
																	<div class="grid-item-wrapper acct-menu animated wow bounceIn swing">
																		<div class="product-grid-item">
																			<div class="product-grid-image">
																				<div class="product-grid-image--centered">
																					<a href="javascript:void(0)"><img alt="CBD Froggies" class="product-pic" src=""></a>
																				</div>
																			</div>
																			<p class="list-title"><a href="javascript:void(0)">CBD Froggies 200mg High Strength</a></p>
																			<div class="tfc-product-redirect">
																				<a class="tfc_productarrow" href="/products/cbd-froggies-200mg-max-strength"><img class="hup_starting" src=""> <img class="hup_hover" src=""></a>
																			</div>
																		</div>
																	</div>
																	<div class="product-menu-info">
																		<div class="visible-product-cbd media">
																			<div class="cbd-img">
																				<a href="/products/cbd-froggies-200mg-max-strength"><img alt="cbd-product" src=""></a>
																			</div>
																			<div class="cbd-name">
																				<p class="list-title"><a href="/products/cbd-froggies-200mg-max-strength">CBD Froggies 200mg High Strength</a></p>
																				<div class="product-item--price">
																					<span class="h1 medium--left"><span class="money"><span class="money">$31.99</span></span></span>
																				</div>
																				<div class="description">
																					<p>Enjoy our new CBD edibles - CBD Frog Gummies by Green Roads World. Buy now from online store, and get FREE Shipping on orders over $75 and discounts on select packages.</p>
																				</div>
																				<div class="flip">
																					<form action="/cart/add" class="add-to-cart-form" enctype="multipart/form-data" id="addToCartForm-37201462090" method="post" name="addToCartForm-37201462090">
																						<select class="product-variants" id="productSelect" name="id">
																							<option selected="selected" value="37201462090">
																								200MG (4x50MG) - $31.99 USD
																							</option>
																							<option value="37201462218">
																								200MG (4x50MG) (Bundle Price) - $31.99 USD
																							</option>
																							<option value="46551927892">
																								100MG (4x25MG) - $19.99 USD
																							</option>
																						</select> <button class="btn add-to-cart not-active" id="addToCart-37201462090" name="add" type="submit"><span>Add to cart</span></button> <a class="menu-more-item-btn btn" href="/products/cbd-froggies-200mg-max-strength">MORE DETAILS</a> <span class="variant-quantity" id="variantQuantity-37201462090"></span>
																					</form>
																				</div>
																			</div>
																		</div>
																	</div>
																</div>
																<div class="col-sm-6 hmmp visible-hmmp">
																	<div class="grid-item-wrapper acct-menu animated wow bounceIn swing">
																		<div class="product-grid-item">
																			<div class="product-grid-image">
																				<div class="product-grid-image--centered">
																					<a href="javascript:void(0)"><img alt="CBD Gummie-Men" class="product-pic" src="//cdn.shopify.com/s/files/1/1250/8949/products/cbd-chewing_bar-gummy-men_medium.png?v=1503552063"></a>
																				</div>
																			</div>
																			<p class="list-title"><a href="javascript:void(0)">CBD Gummie-Men</a></p>
																			<div class="tfc-product-redirect">
																				<a class="tfc_productarrow" href="/products/cbd-gummies-lego-men"><img class="hup_starting" src=""> <img class="hup_hover" src=""></a>
																			</div>
																		</div>
																	</div>
																	<div class="product-menu-info">
																		<div class="visible-product-cbd media">
																			<div class="cbd-img">
																				<a href="/products/cbd-gummies-lego-men"><img alt="cbd-product" src=""></a>
																			</div>
																			<div class="cbd-name">
																				<p class="list-title"><a href="/products/cbd-gummies-lego-men">CBD Gummie-Men</a></p>
																				<div class="product-item--price">
																					<span class="h1 medium--left"><span class="money"><span class="money">$17.99</span></span></span>
																				</div>
																				<div class="description">
																					<p>Sweet, delicious, and very relaxing. Inquire today for sweet CBD Gummies. Order now and get FREE Shipping on orders over $75 and discounts on select packages. Compounded by Licensed Pharmacists.</p>
																				</div>
																				<div class="flip">
																					<form action="/cart/add" class="add-to-cart-form" enctype="multipart/form-data" id="addToCartForm-20163612487" method="post" name="addToCartForm-20163612487">
																						<select class="product-variants" id="productSelect" name="id">
																							<option selected="selected" value="20163612487">
																								Gummie Men - $17.99 USD
																							</option>
																							<option value="46864373588">
																								10 Packages (20 Piece) Gummy Men - $154.99 USD
																							</option>
																						</select> <button class="btn add-to-cart not-active" id="addToCart-20163612487" name="add" type="submit"><span>Add to cart</span></button> <a class="menu-more-item-btn btn" href="/products/cbd-gummies-lego-men">MORE DETAILS</a> <span class="variant-quantity" id="variantQuantity-20163612487"></span>
																					</form>
																				</div>
																			</div>
																		</div>
																	</div>
																</div>
																<div class="col-sm-6 hmmp visible-hmmp">
																	<div class="grid-item-wrapper acct-menu animated wow bounceIn swing">
																		<div class="product-grid-item">
																			<div class="product-grid-image">
																				<div class="product-grid-image--centered">
																					<a href="javascript:void(0)"><img alt="Assorted CBD Lollypops Pack" class="product-pic" src=""></a>
																				</div>
																			</div>
																			<p class="list-title"><a href="javascript:void(0)">Assorted CBD Lollypops</a></p>
																			<div class="tfc-product-redirect">
																				<a class="tfc_productarrow" href="/products/cbd-lollipop"><img class="hup_starting" src=""> <img class="hup_hover" src=""></a>
																			</div>
																		</div>
																	</div>
																	<div class="product-menu-info">
																		<div class="visible-product-cbd media">
																			<div class="cbd-img">
																				<a href="/products/cbd-lollipop"><img alt="cbd-product" src=""></a>
																			</div>
																			<div class="cbd-name">
																				<p class="list-title"><a href="/products/cbd-lollipop">Assorted CBD Lollypops</a></p>
																				<div class="product-item--price">
																					<span class="h1 medium--left"><span class="money"><span class="money">$64.99</span></span></span>
																				</div>
																				<div class="description">
																					<p></p>
																				</div>
																				<div class="flip">
																					<form action="/cart/add" class="add-to-cart-form" enctype="multipart/form-data" id="addToCartForm-50514715540" method="post" name="addToCartForm-50514715540">
																						<select class="product-variants" id="productSelect" name="id">
																							<option selected="selected" value="50514715540">
																								Assorted - $64.99 USD
																							</option>
																						</select> <button class="btn add-to-cart not-active" id="addToCart-50514715540" name="add" type="submit"><span>Add to cart</span></button> <a class="menu-more-item-btn btn" href="/products/cbd-lollipop">MORE DETAILS</a> <span class="variant-quantity" id="variantQuantity-50514715540"></span>
																					</form>
																				</div>
																			</div>
																		</div>
																	</div>
																</div>
																<div class="col-sm-6 hmmp visible-hmmp">
																	<div class="grid-item-wrapper acct-menu animated wow bounceIn swing">
																		<div class="product-grid-item">
																			<div class="product-grid-image">
																				<div class="product-grid-image--centered">
																					<a href="javascript:void(0)"><img alt="CBD Candies (5 pack)" class="product-pic" src=""></a>
																				</div>
																			</div>
																			<p class="list-title"><a href="javascript:void(0)">CBD Candy (15 Pieces)</a></p>
																			<div class="tfc-product-redirect">
																				<a class="tfc_productarrow" href="/products/cbd-hard-candy-5-pack"><img class="hup_starting" src=""> <img class="hup_hover" src=""></a>
																			</div>
																		</div>
																	</div>
																	<div class="product-menu-info">
																		<div class="visible-product-cbd media">
																			<div class="cbd-img">
																				<a href="/products/cbd-hard-candy-5-pack"><img alt="cbd-product" src=""></a>
																			</div>
																			<div class="cbd-name">
																				<p class="list-title"><a href="/products/cbd-hard-candy-5-pack">CBD Candy (15 Pieces)</a></p>
																				<div class="product-item--price">
																					<span class="h1 medium--left"><span class="money"><span class="money">$49.99</span></span></span>
																				</div>
																				<div class="description">
																					<p></p>
																				</div>
																				<div class="flip">
																					<form action="/cart/add" class="add-to-cart-form" enctype="multipart/form-data" id="addToCartForm-20161889863" method="post" name="addToCartForm-20161889863">
																						<select class="product-variants" id="productSelect" name="id">
																							<option selected="selected" value="20161889863">
																								CBD Candies - $49.99 USD
																							</option>
																						</select> <button class="btn add-to-cart not-active" id="addToCart-20161889863" name="add" type="submit"><span>Add to cart</span></button> <a class="menu-more-item-btn btn" href="/products/cbd-hard-candy-5-pack">MORE DETAILS</a> <span class="variant-quantity" id="variantQuantity-20161889863"></span>
																					</form>
																				</div>
																			</div>
																		</div>
																	</div>
																</div>
																<div class="col-sm-6 hmmp visible-hmmp">
																	<div class="grid-item-wrapper acct-menu animated wow bounceIn swing">
																		<div class="product-grid-item">
																			<div class="product-grid-image">
																				<div class="product-grid-image--centered">
																					<a href="javascript:void(0)"><img alt="CBD Froggies" class="product-pic" src=""></a>
																				</div>
																			</div>
																			<p class="list-title"><a href="javascript:void(0)">CBD Froggies 300mg Max Strength</a></p>
																			<div class="tfc-product-redirect">
																				<a class="tfc_productarrow" href="/products/cbd-froggies-300mg"><img class="hup_starting" src=""> <img class="hup_hover" src=""></a>
																			</div>
																		</div>
																	</div>
																	<div class="product-menu-info">
																		<div class="visible-product-cbd media">
																			<div class="cbd-img">
																				<a href="/products/cbd-froggies-300mg"><img alt="cbd-product" src=""></a>
																			</div>
																			<div class="cbd-name">
																				<p class="list-title"><a href="/products/cbd-froggies-300mg">CBD Froggies 300mg Max Strength</a></p>
																				<div class="product-item--price">
																					<span class="h1 medium--left"><span class="money"><span class="money">$49.99</span></span></span>
																				</div>
																				<div class="description">
																					<p>Enjoy our new CBD edibles - CBD Frog Gummies by Green Roads World. Buy now from online store, and get FREE Shipping on orders over $75 and discounts on select packages.</p>
																				</div>
																				<div class="flip">
																					<form action="/cart/add" class="add-to-cart-form" enctype="multipart/form-data" id="addToCartForm-50514104468" method="post" name="addToCartForm-50514104468">
																						<select class="product-variants" id="productSelect" name="id">
																							<option selected="selected" value="50514104468">
																								300MG (3x100MG) - $49.99 USD
																							</option>
																							<option value="50400757972">
																								200MG (4x50MG) - $31.99 USD
																							</option>
																							<option value="50400758036">
																								200MG (4x50MG) (Bundle price) - $31.99 USD
																							</option>
																							<option value="50400758100">
																								100MG (4x25MG) - $19.99 USD
																							</option>
																						</select> <button class="btn add-to-cart not-active" id="addToCart-50514104468" name="add" type="submit"><span>Add to cart</span></button> <a class="menu-more-item-btn btn" href="/products/cbd-froggies-300mg">MORE DETAILS</a> <span class="variant-quantity" id="variantQuantity-50514104468"></span>
																					</form>
																				</div>
																			</div>
																		</div>
																	</div>
																</div>
																<div class="col-sm-6 hmmp visible-hmmp">
																	<div class="grid-item-wrapper acct-menu animated wow bounceIn swing">
																		<div class="product-grid-item">
																			<div class="product-grid-image">
																				<div class="product-grid-image--centered">
																					<a href="javascript:void(0)"><img alt="CBD FRUIT SNACKS" class="product-pic" src=""></a>
																				</div>
																			</div>
																			<p class="list-title"><a href="javascript:void(0)">CBD Fruit Snacks</a></p>
																			<div class="tfc-product-redirect">
																				<a class="tfc_productarrow" href="/products/cbd-fruit-snacks"><img class="hup_starting" src=""> <img class="hup_hover" src=""></a>
																			</div>
																		</div>
																	</div>
																	<div class="product-menu-info">
																		<div class="visible-product-cbd media">
																			<div class="cbd-img">
																				<a href="/products/cbd-fruit-snacks"><img alt="cbd-product" src=""></a>
																			</div>
																			<div class="cbd-name">
																				<p class="list-title"><a href="/products/cbd-fruit-snacks">CBD Fruit Snacks</a></p>
																				<div class="product-item--price">
																					<span class="h1 medium--left"><span class="money"><span class="money">$39.99</span></span></span>
																				</div>
																				<div class="description">
																					<p></p>
																				</div>
																				<div class="flip">
																					<form action="/cart/add" class="add-to-cart-form" enctype="multipart/form-data" id="addToCartForm-40201270356" method="post" name="addToCartForm-40201270356">
																						<select class="product-variants" id="productSelect" name="id">
																							<option selected="selected" value="40201270356">
																								200 Mg - $39.99 USD
																							</option>
																						</select> <button class="btn add-to-cart not-active" id="addToCart-40201270356" name="add" type="submit"><span>Add to cart</span></button> <a class="menu-more-item-btn btn" href="/products/cbd-fruit-snacks">MORE DETAILS</a> <span class="variant-quantity" id="variantQuantity-40201270356"></span>
																					</form>
																				</div>
																			</div>
																		</div>
																	</div>
																</div>
																<div class="col-sm-6 hmmp visible-hmmp">
																	<div class="grid-item-wrapper acct-menu animated wow bounceIn swing">
																		<div class="product-grid-item">
																			<div class="product-grid-image">
																				<div class="product-grid-image--centered">
																					<a href="javascript:void(0)"><img alt="Fruit And Hemp" class="product-pic" src=""></a>
																				</div>
																			</div>
																			<p class="list-title"><a href="javascript:void(0)">Fruit and Hemp</a></p>
																			<div class="tfc-product-redirect">
																				<a class="tfc_productarrow" href="/products/fruit-and-hemp"><img class="hup_starting" src=""> <img class="hup_hover" src=""></a>
																			</div>
																		</div>
																	</div>
																	<div class="product-menu-info">
																		<div class="visible-product-cbd media">
																			<div class="cbd-img">
																				<a href="/products/fruit-and-hemp"><img alt="cbd-product" src=""></a>
																			</div>
																			<div class="cbd-name">
																				<p class="list-title"><a href="/products/fruit-and-hemp">Fruit and Hemp</a></p>
																				<div class="product-item--price">
																					<span class="h1 medium--left"><span class="money"><span class="money">$19.99</span></span></span>
																				</div>
																				<div class="description">
																					<p></p>
																				</div>
																				<div class="flip">
																					<form action="/cart/add" class="add-to-cart-form" enctype="multipart/form-data" id="addToCartForm-339677085716" method="post" name="addToCartForm-339677085716">
																						<select class="product-variants" id="productSelect" name="id">
																							<option selected="selected" value="339677085716">
																								Fruit And Hemp - $19.99 USD
																							</option>
																						</select> <button class="btn add-to-cart not-active" id="addToCart-339677085716" name="add" type="submit"><span>Add to cart</span></button> <a class="menu-more-item-btn btn" href="/products/fruit-and-hemp">MORE DETAILS</a> <span class="variant-quantity" id="variantQuantity-339677085716"></span>
																					</form>
																				</div>
																			</div>
																		</div>
																	</div>
																</div>
															</div>
															<div class="col-sm-6 col-cl-it navigation-blog"></div>
														</div>
													</li>
													<li class="use-yamm yamm-fw semuopen">
														<a class="icon-oil icon-upload" href="javascript:void(0)"><span class="icon-for"><img alt="CBD Daily Dose" class="sbdflexbox-overlay sbdmask-c" src=""> <img alt="CBD Daily Dose" class="sbdflexbox-overlay sbdmask-d" src=""></span> <span>CBD Daily Dose</span></a>
														<div class="dropdown-menu category-open">
															<div class="col-sm-6 col-cl-it hmmp overflow-scroll">
																<div class="col-sm-6 hmmp visible-hmmp intros">
																	<div class="grid-item-wrapper acct-menu animated wow bounceIn swing">
																		<div class="product-grid-item">
																			<div class="product-grid-image">
																				<div class="product-grid-image--centered">
																					<a href="javascript:void(0)"><img alt="Daily Dose 1500mg Formula" class="product-pic" src=""></a>
																				</div>
																			</div>
																			<p class="list-title"><a href="javascript:void(0)">Daily Dose 1500mg Formula</a></p>
																			<div class="tfc-product-redirect">
																				<a class="tfc_productarrow" href="/products/daily-dose-1500mg"><img class="hup_starting" src=""> <img class="hup_hover" src=""></a>
																			</div>
																		</div>
																	</div>
																	<div class="product-menu-info">
																		<div class="visible-product-cbd media">
																			<div class="cbd-img">
																				<a href="/products/daily-dose-1500mg"><img alt="cbd-product" src=""></a>
																			</div>
																			<div class="cbd-name">
																				<p class="list-title"><a href="/products/daily-dose-1500mg">Daily Dose 1500mg Formula</a></p>
																				<div class="product-item--price">
																					<span class="h1 medium--left"><span class="money"><span class="money">$13.99</span></span></span>
																				</div>
																				<div class="description">
																					<p></p>
																				</div>
																				<div class="flip">
																					<form action="/cart/add" class="add-to-cart-form" enctype="multipart/form-data" id="addToCartForm-768779780116" method="post" name="addToCartForm-768779780116">
																						<select class="product-variants" id="productSelect" name="id">
																							<option selected="selected" value="768779780116">
																								1500MG - $13.99 USD
																							</option>
																						</select> <button class="btn add-to-cart not-active" id="addToCart-768779780116" name="add" type="submit"><span>Add to cart</span></button> <a class="menu-more-item-btn btn" href="/products/daily-dose-1500mg">MORE DETAILS</a> <span class="variant-quantity" id="variantQuantity-768779780116"></span>
																					</form>
																				</div>
																			</div>
																		</div>
																	</div>
																</div>
																<div class="col-sm-6 hmmp visible-hmmp">
																	<div class="grid-item-wrapper acct-menu animated wow bounceIn swing">
																		<div class="product-grid-item">
																			<div class="product-grid-image">
																				<div class="product-grid-image--centered">
																					<a href="javascript:void(0)"><img alt="Daily Dose 1000mg Formula" class="product-pic" src=""></a>
																				</div>
																			</div>
																			<p class="list-title"><a href="javascript:void(0)">Daily Dose 1000mg Formula</a></p>
																			<div class="tfc-product-redirect">
																				<a class="tfc_productarrow" href="/products/daily-dose-1000mg-cbd-oil"><img class="hup_starting" src=""> <img class="hup_hover" src=""></a>
																			</div>
																		</div>
																	</div>
																	<div class="product-menu-info">
																		<div class="visible-product-cbd media">
																			<div class="cbd-img">
																				<a href="/products/daily-dose-1000mg-cbd-oil"><img alt="cbd-product" src=""></a>
																			</div>
																			<div class="cbd-name">
																				<p class="list-title"><a href="/products/daily-dose-1000mg-cbd-oil">Daily Dose 1000mg Formula</a></p>
																				<div class="product-item--price">
																					<span class="h1 medium--left"><span class="money"><span class="money">$11.99</span></span></span>
																				</div>
																				<div class="description">
																					<p></p>
																				</div>
																				<div class="flip">
																					<form action="/cart/add" class="add-to-cart-form" enctype="multipart/form-data" id="addToCartForm-768748650516" method="post" name="addToCartForm-768748650516">
																						<select class="product-variants" id="productSelect" name="id">
																							<option selected="selected" value="768748650516">
																								1000MG - $11.99 USD
																							</option>
																						</select> <button class="btn add-to-cart not-active" id="addToCart-768748650516" name="add" type="submit"><span>Add to cart</span></button> <a class="menu-more-item-btn btn" href="/products/daily-dose-1000mg-cbd-oil">MORE DETAILS</a> <span class="variant-quantity" id="variantQuantity-768748650516"></span>
																					</form>
																				</div>
																			</div>
																		</div>
																	</div>
																</div>
																<div class="col-sm-6 hmmp visible-hmmp">
																	<div class="grid-item-wrapper acct-menu animated wow bounceIn swing">
																		<div class="product-grid-item">
																			<div class="product-grid-image">
																				<div class="product-grid-image--centered">
																					<a href="javascript:void(0)"><img alt="Daily Dose 350mg Formula" class="product-pic" src="//cdn.shopify.com/s/files/1/1250/8949/products/350_MG_Daily_Dosage_of_CBD_Oil_medium.jpg?v=1517571818"></a>
																				</div>
																			</div>
																			<p class="list-title"><a href="javascript:void(0)">Daily Dose 350mg Formula</a></p>
																			<div class="tfc-product-redirect">
																				<a class="tfc_productarrow" href="/products/daily-dose-350mg"><img class="hup_starting" src=""> <img class="hup_hover" src=""></a>
																			</div>
																		</div>
																	</div>
																	<div class="product-menu-info">
																		<div class="visible-product-cbd media">
																			<div class="cbd-img">
																				<a href="/products/daily-dose-350mg"><img alt="cbd-product" src=""></a>
																			</div>
																			<div class="cbd-name">
																				<p class="list-title"><a href="/products/daily-dose-350mg">Daily Dose 350mg Formula</a></p>
																				<div class="product-item--price">
																					<span class="h1 medium--left"><span class="money"><span class="money">$8.99</span></span></span>
																				</div>
																				<div class="description">
																					<p></p>
																				</div>
																				<div class="flip">
																					<form action="/cart/add" class="add-to-cart-form" enctype="multipart/form-data" id="addToCartForm-768646905876" method="post" name="addToCartForm-768646905876">
																						<select class="product-variants" id="productSelect" name="id">
																							<option selected="selected" value="768646905876">
																								350MG - $8.99 USD
																							</option>
																						</select> <button class="btn add-to-cart not-active" id="addToCart-768646905876" name="add" type="submit"><span>Add to cart</span></button> <a class="menu-more-item-btn btn" href="/products/daily-dose-350mg">MORE DETAILS</a> <span class="variant-quantity" id="variantQuantity-768646905876"></span>
																					</form>
																				</div>
																			</div>
																		</div>
																	</div>
																</div>
																<div class="col-sm-6 hmmp visible-hmmp">
																	<div class="grid-item-wrapper acct-menu animated wow bounceIn swing">
																		<div class="product-grid-item">
																			<div class="product-grid-image">
																				<div class="product-grid-image--centered">
																					<a href="javascript:void(0)"><img alt="Daily Dose Strawberry AK CBD Terps" class="product-pic" src=""></a>
																				</div>
																			</div>
																			<p class="list-title"><a href="javascript:void(0)">Daily Dose Strawberry AK CBD Terps</a></p>
																			<div class="tfc-product-redirect">
																				<a class="tfc_productarrow" href="/products/daily-dose-strawberry-ak-terpenes"><img class="hup_starting" src=""> <img class="hup_hover" src=""></a>
																			</div>
																		</div>
																	</div>
																	<div class="product-menu-info">
																		<div class="visible-product-cbd media">
																			<div class="cbd-img">
																				<a href="/products/daily-dose-strawberry-ak-terpenes"><img alt="cbd-product" src=""></a>
																			</div>
																			<div class="cbd-name">
																				<p class="list-title"><a href="/products/daily-dose-strawberry-ak-terpenes">Daily Dose Strawberry AK CBD Terps</a></p>
																				<div class="product-item--price">
																					<span class="h1 medium--left"><span class="money"><span class="money">$8.99</span></span></span>
																				</div>
																				<div class="description">
																					<p></p>
																				</div>
																				<div class="flip">
																					<form action="/cart/add" class="add-to-cart-form" enctype="multipart/form-data" id="addToCartForm-768923893780" method="post" name="addToCartForm-768923893780">
																						<select class="product-variants" id="productSelect" name="id">
																							<option selected="selected" value="768923893780">
																								Strawberry - $8.99 USD
																							</option>
																						</select> <button class="btn add-to-cart not-active" id="addToCart-768923893780" name="add" type="submit"><span>Add to cart</span></button> <a class="menu-more-item-btn btn" href="/products/daily-dose-strawberry-ak-terpenes">MORE DETAILS</a> <span class="variant-quantity" id="variantQuantity-768923893780"></span>
																					</form>
																				</div>
																			</div>
																		</div>
																	</div>
																</div>
																<div class="col-sm-6 hmmp visible-hmmp">
																	<div class="grid-item-wrapper acct-menu animated wow bounceIn swing">
																		<div class="product-grid-item">
																			<div class="product-grid-image">
																				<div class="product-grid-image--centered">
																					<a href="javascript:void(0)"><img alt="Daily Dose Pineapple Express CBD Terps" class="product-pic" src="//cdn.shopify.com/s/files/1/1250/8949/products/Daily_Dose_of_CBD_Terps_medium.jpg?v=1517571090"></a>
																				</div>
																			</div>
																			<p class="list-title"><a href="javascript:void(0)">Daily Dose Pineapple Express CBD Terps</a></p>
																			<div class="tfc-product-redirect">
																				<a class="tfc_productarrow" href="/products/daily-dose-pineapple-cbd-terps"><img class="hup_starting" src=""> <img class="hup_hover" src=""></a>
																			</div>
																		</div>
																	</div>
																	<div class="product-menu-info">
																		<div class="visible-product-cbd media">
																			<div class="cbd-img">
																				<a href="/products/daily-dose-pineapple-cbd-terps"><img alt="cbd-product" src=""></a>
																			</div>
																			<div class="cbd-name">
																				<p class="list-title"><a href="/products/daily-dose-pineapple-cbd-terps">Daily Dose Pineapple Express CBD Terps</a></p>
																				<div class="product-item--price">
																					<span class="h1 medium--left"><span class="money"><span class="money">$8.99</span></span></span>
																				</div>
																				<div class="description">
																					<p></p>
																				</div>
																				<div class="flip">
																					<form action="/cart/add" class="add-to-cart-form" enctype="multipart/form-data" id="addToCartForm-768965738516" method="post" name="addToCartForm-768965738516">
																						<select class="product-variants" id="productSelect" name="id">
																							<option selected="selected" value="768965738516">
																								Pineapple - $8.99 USD
																							</option>
																						</select> <button class="btn add-to-cart not-active" id="addToCart-768965738516" name="add" type="submit"><span>Add to cart</span></button> <a class="menu-more-item-btn btn" href="/products/daily-dose-pineapple-cbd-terps">MORE DETAILS</a> <span class="variant-quantity" id="variantQuantity-768965738516"></span>
																					</form>
																				</div>
																			</div>
																		</div>
																	</div>
																</div>
																<div class="col-sm-6 hmmp visible-hmmp">
																	<div class="grid-item-wrapper acct-menu animated wow bounceIn swing">
																		<div class="product-grid-item">
																			<div class="product-grid-image">
																				<div class="product-grid-image--centered">
																					<a href="javascript:void(0)"><img alt="Daily Dose Blueberry OG CBD Terps" class="product-pic" src="//cdn.shopify.com/s/files/1/1250/8949/products/Blueberry_OG_CBD_Terpenes_medium.jpg?v=1517573577"></a>
																				</div>
																			</div>
																			<p class="list-title"><a href="javascript:void(0)">Daily Dose Blueberry OG CBD Terps</a></p>
																			<div class="tfc-product-redirect">
																				<a class="tfc_productarrow" href="/products/daily-dose-og-blueberry-terpenes"><img class="hup_starting" src=""> <img class="hup_hover" src=""></a>
																			</div>
																		</div>
																	</div>
																	<div class="product-menu-info">
																		<div class="visible-product-cbd media">
																			<div class="cbd-img">
																				<a href="/products/daily-dose-og-blueberry-terpenes"><img alt="cbd-product" src=""></a>
																			</div>
																			<div class="cbd-name">
																				<p class="list-title"><a href="/products/daily-dose-og-blueberry-terpenes">Daily Dose Blueberry OG CBD Terps</a></p>
																				<div class="product-item--price">
																					<span class="h1 medium--left"><span class="money"><span class="money">$8.99</span></span></span>
																				</div>
																				<div class="description">
																					<p></p>
																				</div>
																				<div class="flip">
																					<form action="/cart/add" class="add-to-cart-form" enctype="multipart/form-data" id="addToCartForm-768887193620" method="post" name="addToCartForm-768887193620">
																						<select class="product-variants" id="productSelect" name="id">
																							<option selected="selected" value="768887193620">
																								Blueberry OG - $8.99 USD
																							</option>
																						</select> <button class="btn add-to-cart not-active" id="addToCart-768887193620" name="add" type="submit"><span>Add to cart</span></button> <a class="menu-more-item-btn btn" href="/products/daily-dose-og-blueberry-terpenes">MORE DETAILS</a> <span class="variant-quantity" id="variantQuantity-768887193620"></span>
																					</form>
																				</div>
																			</div>
																		</div>
																	</div>
																</div>
															</div>
															<div class="col-sm-6 col-cl-it navigation-blog"></div>
														</div>
													</li>
													<li class="use-yamm yamm-fw semuopen">
														<a class="icon-oil icon-upload" href="javascript:void(0)"><span class="icon-for"><img alt="CBD Bundles" class="sbdflexbox-overlay sbdmask-c" src=""> <img alt="CBD Bundles" class="sbdflexbox-overlay sbdmask-d" src=""></span> <span>CBD Bundles</span></a>
														<div class="dropdown-menu category-open">
															<div class="col-sm-6 col-cl-it hmmp overflow-scroll">
																<div class="col-sm-6 hmmp visible-hmmp intros">
																	<div class="grid-item-wrapper acct-menu animated wow bounceIn swing">
																		<div class="product-grid-item">
																			<div class="product-grid-image">
																				<div class="product-grid-image--centered">
																					<a href="javascript:void(0)"><img alt="Relax Box" class="product-pic" src=""></a>
																				</div>
																			</div>
																			<p class="list-title"><a href="javascript:void(0)">Relax Box</a></p>
																			<div class="tfc-product-redirect">
																				<a class="tfc_productarrow" href="/products/relax-box"><img class="hup_starting" src=""> <img class="hup_hover" src=""></a>
																			</div>
																		</div>
																	</div>
																	<div class="product-menu-info">
																		<div class="visible-product-cbd media">
																			<div class="cbd-img">
																				<a href="/products/relax-box"><img alt="cbd-product" src=""></a>
																			</div>
																			<div class="cbd-name">
																				<p class="list-title"><a href="/products/relax-box">Relax Box</a></p>
																				<div class="product-item--price">
																					<span class="h1 medium--left"><span class="money"><span class="money">$107.99</span></span></span>
																				</div>
																				<div class="description">
																					<p><a href="http://snip.ly/nfhgh">Green Roads CBD Oil&nbsp;</a></p>
																				</div>
																				<div class="flip">
																					<form action="/cart/add" class="add-to-cart-form" enctype="multipart/form-data" id="addToCartForm-37768675018" method="post" name="addToCartForm-37768675018">
																						<select class="product-variants" id="productSelect" name="id">
																							<option disabled="disabled">
																								RELAX BOX - Sold Out
																							</option>
																						</select> <button class="btn add-to-cart not-active" id="addToCart-37768675018" name="add" type="submit"><span>Add to cart</span></button> <a class="menu-more-item-btn btn" href="/products/relax-box">MORE DETAILS</a> <span class="variant-quantity" id="variantQuantity-37768675018"></span>
																					</form>
																				</div>
																			</div>
																		</div>
																	</div>
																</div>
																<div class="col-sm-6 hmmp visible-hmmp">
																	<div class="grid-item-wrapper acct-menu animated wow bounceIn swing">
																		<div class="product-grid-item">
																			<div class="product-grid-image">
																				<div class="product-grid-image--centered">
																					<a href="javascript:void(0)"><img alt="Relief Box" class="product-pic" src=""></a>
																				</div>
																			</div>
																			<p class="list-title"><a href="javascript:void(0)">Relief Box</a></p>
																			<div class="tfc-product-redirect">
																				<a class="tfc_productarrow" href="/products/relief-box"><img class="hup_starting" src=""> <img class="hup_hover" src=""></a>
																			</div>
																		</div>
																	</div>
																	<div class="product-menu-info">
																		<div class="visible-product-cbd media">
																			<div class="cbd-img">
																				<a href="/products/relief-box"><img alt="cbd-product" src=""></a>
																			</div>
																			<div class="cbd-name">
																				<p class="list-title"><a href="/products/relief-box">Relief Box</a></p>
																				<div class="product-item--price">
																					<span class="h1 medium--left"><span class="money"><span class="money">$99.00</span></span></span>
																				</div>
																				<div class="description">
																					<p><a href="http://snip.ly/nfhgh">Green Roads CBD Oil&nbsp;</a></p>
																				</div>
																				<div class="flip">
																					<form action="/cart/add" class="add-to-cart-form" enctype="multipart/form-data" id="addToCartForm-36627189770" method="post" name="addToCartForm-36627189770">
																						<select class="product-variants" id="productSelect" name="id">
																							<option selected="selected" value="36627189770">
																								RELIEF BOX - $99.00 USD
																							</option>
																						</select> <button class="btn add-to-cart not-active" id="addToCart-36627189770" name="add" type="submit"><span>Add to cart</span></button> <a class="menu-more-item-btn btn" href="/products/relief-box">MORE DETAILS</a> <span class="variant-quantity" id="variantQuantity-36627189770"></span>
																					</form>
																				</div>
																			</div>
																		</div>
																	</div>
																</div>
																<div class="col-sm-6 hmmp visible-hmmp">
																	<div class="grid-item-wrapper acct-menu animated wow bounceIn swing">
																		<div class="product-grid-item">
																			<div class="product-grid-image">
																				<div class="product-grid-image--centered">
																					<a href="javascript:void(0)"><img alt="Sweet Tooth Box" class="product-pic" src=""></a>
																				</div>
																			</div>
																			<p class="list-title"><a href="javascript:void(0)">Sweet Tooth Box</a></p>
																			<div class="tfc-product-redirect">
																				<a class="tfc_productarrow" href="/products/sweet-tooth-box"><img class="hup_starting" src=""> <img class="hup_hover" src=""></a>
																			</div>
																		</div>
																	</div>
																	<div class="product-menu-info">
																		<div class="visible-product-cbd media">
																			<div class="cbd-img">
																				<a href="/products/sweet-tooth-box"><img alt="cbd-product" src=""></a>
																			</div>
																			<div class="cbd-name">
																				<p class="list-title"><a href="/products/sweet-tooth-box">Sweet Tooth Box</a></p>
																				<div class="product-item--price">
																					<span class="h1 medium--left"><span class="money"><span class="money">$59.99</span></span></span>
																				</div>
																				<div class="description">
																					<p><a href="http://snip.ly/nfhgh">Green Roads CBD Oil&nbsp;</a></p>
																				</div>
																				<div class="flip">
																					<form action="/cart/add" class="add-to-cart-form" enctype="multipart/form-data" id="addToCartForm-39366300298" method="post" name="addToCartForm-39366300298">
																						<select class="product-variants" id="productSelect" name="id">
																							<option selected="selected" value="39366300298">
																								Sweet Tooth box - $59.99 USD
																							</option>
																						</select> <button class="btn add-to-cart not-active" id="addToCart-39366300298" name="add" type="submit"><span>Add to cart</span></button> <a class="menu-more-item-btn btn" href="/products/sweet-tooth-box">MORE DETAILS</a> <span class="variant-quantity" id="variantQuantity-39366300298"></span>
																					</form>
																				</div>
																			</div>
																		</div>
																	</div>
																</div>
															</div>
															<div class="col-sm-6 col-cl-it navigation-blog"></div>
														</div>
													</li>
													<li class="use-yamm yamm-fw semuopen">
														<a class="icon-oil icon-upload" href="javascript:%20void(0)"><span class="icon-for"><img alt="CBD For Pets" class="sbdflexbox-overlay sbdmask-c" src=""> <img alt="CBD For Pets" class="sbdflexbox-overlay sbdmask-d" src="4"></span> <span>CBD For Pets</span></a>
														<div class="dropdown-menu category-open">
															<div class="col-sm-6 col-cl-it hmmp overflow-scroll">
																<div class="col-sm-12 hmmp visible-hmmp intros">
																	<div class="grid-item-wrapper acct-menu animated wow bounceIn swing">
																		<div class="product-grid-item">
																			<div class="product-grid-image">
																				<div class="product-grid-image--centered">
																					<a href="javascript:void(0)"><img alt="KingKalmCBD (Canine/Feline Formula)" class="product-pic" src="//cdn.shopify.com/s/files/1/1250/8949/products/cbd-oil-for-pets-florida-king-kalm-75mg_medium.jpg?v=1503494688"></a>
																				</div>
																			</div>
																			<p class="list-title"><a href="javascript:void(0)">KingKalmCBD (Canine/Feline Formula)</a></p>
																			<div class="tfc-product-redirect">
																				<a class="tfc_productarrow" href="/products/kingkalmcbd-canine-feline-formula"><img class="hup_starting" src=""> <img class="hup_hover" src=""></a>
																			</div>
																		</div>
																	</div>
																	<div class="product-menu-info">
																		<div class="visible-product-cbd media">
																			<div class="cbd-img">
																				<a href="/products/kingkalmcbd-canine-feline-formula"><img alt="cbd-product" src=""></a>
																			</div>
																			<div class="cbd-name">
																				<p class="list-title"><a href="/products/kingkalmcbd-canine-feline-formula">KingKalmCBD (Canine/Feline Formula)</a></p>
																				<div class="product-item--price">
																					<span class="h1 medium--left"><span class="money"><span class="money">$39.99</span></span></span>
																				</div>
																				<div class="description">
																					<p><a href="http://snip.ly/nfhgh">Green Roads CBD Oil&nbsp;</a></p>
																				</div>
																				<div class="flip">
																					<form action="/cart/add" class="add-to-cart-form" enctype="multipart/form-data" id="addToCartForm-32912664394" method="post" name="addToCartForm-32912664394">
																						<select class="product-variants" id="productSelect" name="id">
																							<option selected="selected" value="32912664394">
																								Regular Strength - $39.99 USD
																							</option>
																							<option value="42196613460">
																								Extra Strength - $59.99 USD
																							</option>
																							<option value="46675391508">
																								Pro Strength - $89.99 USD
																							</option>
																						</select> <button class="btn add-to-cart not-active" id="addToCart-32912664394" name="add" type="submit"><span>Add to cart</span></button> <a class="menu-more-item-btn btn" href="/products/kingkalmcbd-canine-feline-formula">MORE DETAILS</a> <span class="variant-quantity" id="variantQuantity-32912664394"></span>
																					</form>
																				</div>
																			</div>
																		</div>
																	</div>
																</div>
															</div>
															<div class="col-sm-6 col-cl-it navigation-blog"></div>
														</div>
													</li>
													<li class="use-yamm yamm-fw semuopen">
														<a class="icon-oil icon-upload" href="javascript:%20void(0)"><span class="icon-for"><img alt="CBD Terpenes" class="sbdflexbox-overlay sbdmask-c" src=""> <img alt="CBD Terpenes" class="sbdflexbox-overlay sbdmask-d" src=""></span> <span>CBD Terpenes</span></a>
														<div class="dropdown-menu category-open">
															<div class="col-sm-6 col-cl-it hmmp overflow-scroll">
																<div class="col-sm-6 hmmp visible-hmmp intros">
																	<div class="grid-item-wrapper acct-menu animated wow bounceIn swing">
																		<div class="product-grid-item">
																			<div class="product-grid-image">
																				<div class="product-grid-image--centered">
																					<a href="javascript:void(0)"><img alt="CBD Terpenes Oil" class="product-pic" src="//cdn.shopify.com/s/files/1/1250/8949/products/cbd-extract-terps-blueberry_medium.jpg?v=1503481341"></a>
																				</div>
																			</div>
																			<p class="list-title"><a href="javascript:void(0)">Blueberry OG Terpenes Oil</a></p>
																			<div class="tfc-product-redirect">
																				<a class="tfc_productarrow" href="/products/100-mg-cbd-terpenes"><img class="hup_starting" src=""> <img class="hup_hover" src="4"></a>
																			</div>
																		</div>
																	</div>
																	<div class="product-menu-info">
																		<div class="visible-product-cbd media">
																			<div class="cbd-img">
																				<a href="/products/100-mg-cbd-terpenes"><img alt="cbd-product" src=""></a>
																			</div>
																			<div class="cbd-name">
																				<p class="list-title"><a href="/products/100-mg-cbd-terpenes">Blueberry OG Terpenes Oil</a></p>
																				<div class="product-item--price">
																					<span class="h1 medium--left"><span class="money"><span class="money">$37.99</span></span></span>
																				</div>
																				<div class="description">
																					<p>CBD Terpenes available today. Citrus flavor that is made by licensed&nbsp;pharmacists. Order now and get FREE Shipping on orders over $75 and discounts on select packages.</p>
																				</div>
																				<div class="flip">
																					<form action="/cart/add" class="add-to-cart-form" enctype="multipart/form-data" id="addToCartForm-19432566343" method="post" name="addToCartForm-19432566343">
																						<select class="product-variants" id="productSelect" name="id">
																							<option selected="selected" value="19432566343">
																								Blueberry OG - $37.99 USD
																							</option>
																							<option value="35646149770">
																								Sour Diesel - $37.99 USD
																							</option>
																							<option value="35646149834">
																								Pineapple Express - $37.99 USD
																							</option>
																							<option value="35646149898">
																								Original Terpenes - $37.99 USD
																							</option>
																							<option value="49733352724">
																								Strawberry AK - $37.99 USD
																							</option>
																						</select> <button class="btn add-to-cart not-active" id="addToCart-19432566343" name="add" type="submit"><span>Add to cart</span></button> <a class="menu-more-item-btn btn" href="/products/100-mg-cbd-terpenes">MORE DETAILS</a> <span class="variant-quantity" id="variantQuantity-19432566343"></span>
																					</form>
																				</div>
																			</div>
																		</div>
																	</div>
																</div>
																<div class="col-sm-6 hmmp visible-hmmp">
																	<div class="grid-item-wrapper acct-menu animated wow bounceIn swing">
																		<div class="product-grid-item">
																			<div class="product-grid-image">
																				<div class="product-grid-image--centered">
																					<a href="javascript:void(0)"><img alt="CBD Terpenes Oil" class="product-pic" src=""></a>
																				</div>
																			</div>
																			<p class="list-title"><a href="javascript:void(0)">Pineapple Express Terpenes Oil</a></p>
																			<div class="tfc-product-redirect">
																				<a class="tfc_productarrow" href="/products/pineapple-express-terpenes-oil"><img class="hup_starting" src=""> <img class="hup_hover" src=""></a>
																			</div>
																		</div>
																	</div>
																	<div class="product-menu-info">
																		<div class="visible-product-cbd media">
																			<div class="cbd-img">
																				<a href="/products/pineapple-express-terpenes-oil"><img alt="cbd-product" src=""></a>
																			</div>
																			<div class="cbd-name">
																				<p class="list-title"><a href="/products/pineapple-express-terpenes-oil">Pineapple Express Terpenes Oil</a></p>
																				<div class="product-item--price">
																					<span class="h1 medium--left"><span class="money"><span class="money">$37.99</span></span></span>
																				</div>
																				<div class="description">
																					<p>CBD Terpenes available today. Citrus flavor that is made by licensed&nbsp;pharmacists. Order now and get FREE Shipping on orders over $75 and discounts on select packages.</p>
																				</div>
																				<div class="flip">
																					<form action="/cart/add" class="add-to-cart-form" enctype="multipart/form-data" id="addToCartForm-35646227146" method="post" name="addToCartForm-35646227146">
																						<select class="product-variants" id="productSelect" name="id">
																							<option selected="selected" value="35646227146">
																								Pineapple Express - $37.99 USD
																							</option>
																							<option value="35646227018">
																								Blueberry OG - $37.99 USD
																							</option>
																							<option value="35646227082">
																								Sour Diesel - $37.99 USD
																							</option>
																							<option value="35646227210">
																								Original Terpenes - $37.99 USD
																							</option>
																							<option value="46423112404">
																								Strawberry AK - $37.99 USD
																							</option>
																						</select> <button class="btn add-to-cart not-active" id="addToCart-35646227146" name="add" type="submit"><span>Add to cart</span></button> <a class="menu-more-item-btn btn" href="/products/pineapple-express-terpenes-oil">MORE DETAILS</a> <span class="variant-quantity" id="variantQuantity-35646227146"></span>
																					</form>
																				</div>
																			</div>
																		</div>
																	</div>
																</div>
																<div class="col-sm-6 hmmp visible-hmmp">
																	<div class="grid-item-wrapper acct-menu animated wow bounceIn swing">
																		<div class="product-grid-item">
																			<div class="product-grid-image">
																				<div class="product-grid-image--centered">
																					<a href="javascript:void(0)"><img alt="CBD Terpenes Oil" class="product-pic" src="//cdn.shopify.com/s/files/1/1250/8949/products/cbd-terps-for-skin-sourdiesel_medium.jpg?v=1503485100"></a>
																				</div>
																			</div>
																			<p class="list-title"><a href="javascript:void(0)">Sour Diesel Terpenes Oil</a></p>
																			<div class="tfc-product-redirect">
																				<a class="tfc_productarrow" href="/products/sour-diesel-terpenes-oil"><img class="hup_starting" src=""> <img class="hup_hover" src=""></a>
																			</div>
																		</div>
																	</div>
																	<div class="product-menu-info">
																		<div class="visible-product-cbd media">
																			<div class="cbd-img">
																				<a href="/products/sour-diesel-terpenes-oil"><img alt="cbd-product" src=""></a>
																			</div>
																			<div class="cbd-name">
																				<p class="list-title"><a href="/products/sour-diesel-terpenes-oil">Sour Diesel Terpenes Oil</a></p>
																				<div class="product-item--price">
																					<span class="h1 medium--left"><span class="money"><span class="money">$37.99</span></span></span>
																				</div>
																				<div class="description">
																					<p>CBD Terpenes available today. Citrus flavor that is made by licensed&nbsp;pharmacists. Order now and get FREE Shipping on orders over $75 and discounts on select packages.</p>
																				</div>
																				<div class="flip">
																					<form action="/cart/add" class="add-to-cart-form" enctype="multipart/form-data" id="addToCartForm-35646259978" method="post" name="addToCartForm-35646259978">
																						<select class="product-variants" id="productSelect" name="id">
																							<option selected="selected" value="35646259978">
																								Sour Diesel - $37.99 USD
																							</option>
																							<option value="35646259850">
																								Pineapple Express - $37.99 USD
																							</option>
																							<option value="35646259914">
																								Blueberry OG - $37.99 USD
																							</option>
																							<option value="35646260042">
																								Original Terpenes - $37.99 USD
																							</option>
																							<option value="49733414740">
																								Strawberry AK - $37.99 USD
																							</option>
																						</select> <button class="btn add-to-cart not-active" id="addToCart-35646259978" name="add" type="submit"><span>Add to cart</span></button> <a class="menu-more-item-btn btn" href="/products/sour-diesel-terpenes-oil">MORE DETAILS</a> <span class="variant-quantity" id="variantQuantity-35646259978"></span>
																					</form>
																				</div>
																			</div>
																		</div>
																	</div>
																</div>
																<div class="col-sm-6 hmmp visible-hmmp">
																	<div class="grid-item-wrapper acct-menu animated wow bounceIn swing">
																		<div class="product-grid-item">
																			<div class="product-grid-image">
																				<div class="product-grid-image--centered">
																					<a href="javascript:void(0)"><img alt="CBD Terpenes Oil" class="product-pic" src=""></a>
																				</div>
																			</div>
																			<p class="list-title"><a href="javascript:void(0)">Original Terpenes Oil</a></p>
																			<div class="tfc-product-redirect">
																				<a class="tfc_productarrow" href="/products/original-terpenes-oil"><img class="hup_starting" src=""> <img class="hup_hover" src=""></a>
																			</div>
																		</div>
																	</div>
																	<div class="product-menu-info">
																		<div class="visible-product-cbd media">
																			<div class="cbd-img">
																				<a href="/products/original-terpenes-oil"><img alt="cbd-product" src=""></a>
																			</div>
																			<div class="cbd-name">
																				<p class="list-title"><a href="/products/original-terpenes-oil">Original Terpenes Oil</a></p>
																				<div class="product-item--price">
																					<span class="h1 medium--left"><span class="money"><span class="money">$37.99</span></span></span>
																				</div>
																				<div class="description">
																					<p>CBD Terpenes available today. Citrus flavor that is made by licensed&nbsp;pharmacists. Order now and get FREE Shipping on orders over $75 and discounts on select packages.</p>
																				</div>
																				<div class="flip">
																					<form action="/cart/add" class="add-to-cart-form" enctype="multipart/form-data" id="addToCartForm-35646320650" method="post" name="addToCartForm-35646320650">
																						<select class="product-variants" id="productSelect" name="id">
																							<option selected="selected" value="35646320650">
																								Original Terpenes - $37.99 USD
																							</option>
																							<option value="35646320458">
																								Sour Diesel - $37.99 USD
																							</option>
																							<option value="35646320522">
																								Pineapple Express - $37.99 USD
																							</option>
																							<option value="35646320586">
																								Blueberry OG - $37.99 USD
																							</option>
																							<option value="46350167700">
																								Stawberry AK - $37.99 USD
																							</option>
																						</select> <button class="btn add-to-cart not-active" id="addToCart-35646320650" name="add" type="submit"><span>Add to cart</span></button> <a class="menu-more-item-btn btn" href="/products/original-terpenes-oil">MORE DETAILS</a> <span class="variant-quantity" id="variantQuantity-35646320650"></span>
																					</form>
																				</div>
																			</div>
																		</div>
																	</div>
																</div>
																<div class="col-sm-6 hmmp visible-hmmp">
																	<div class="grid-item-wrapper acct-menu animated wow bounceIn swing">
																		<div class="product-grid-item">
																			<div class="product-grid-image">
																				<div class="product-grid-image--centered">
																					<a href="javascript:void(0)"><img alt="CBD Terpenes Oil" class="product-pic" src=""></a>
																				</div>
																			</div>
																			<p class="list-title"><a href="javascript:void(0)">Strawberry AK Terpenes Oil</a></p>
																			<div class="tfc-product-redirect">
																				<a class="tfc_productarrow" href="/products/cbd-terpenes-oil"><img class="hup_starting" src=""> <img class="hup_hover" src=""></a>
																			</div>
																		</div>
																	</div>
																	<div class="product-menu-info">
																		<div class="visible-product-cbd media">
																			<div class="cbd-img">
																				<a href="/products/cbd-terpenes-oil"><img alt="cbd-product" src=""></a>
																			</div>
																			<div class="cbd-name">
																				<p class="list-title"><a href="/products/cbd-terpenes-oil">Strawberry AK Terpenes Oil</a></p>
																				<div class="product-item--price">
																					<span class="h1 medium--left"><span class="money"><span class="money">$39.99</span></span></span>
																				</div>
																				<div class="description">
																					<p>CBD Terpenes available today. Sweet flavor that is made by licensed&nbsp;pharmacists. Order now and get FREE Shipping on orders over $75 and discounts on select packages.</p>
																				</div>
																				<div class="flip">
																					<form action="/cart/add" class="add-to-cart-form" enctype="multipart/form-data" id="addToCartForm-45833859540" method="post" name="addToCartForm-45833859540">
																						<select class="product-variants" id="productSelect" name="id">
																							<option selected="selected" value="45833859540">
																								Strawberry AK - $39.99 USD
																							</option>
																							<option value="45833754068">
																								Original Terpenes - $39.99 USD
																							</option>
																							<option value="45833754132">
																								Sour Diesel - $39.99 USD
																							</option>
																							<option value="45833754196">
																								Pineapple Express - $39.99 USD
																							</option>
																							<option value="45833754260">
																								Blueberry OG - $39.99 USD
																							</option>
																						</select> <button class="btn add-to-cart not-active" id="addToCart-45833859540" name="add" type="submit"><span>Add to cart</span></button> <a class="menu-more-item-btn btn" href="/products/cbd-terpenes-oil">MORE DETAILS</a> <span class="variant-quantity" id="variantQuantity-45833859540"></span>
																					</form>
																				</div>
																			</div>
																		</div>
																	</div>
																</div>
															</div>
															<div class="col-sm-6 col-cl-it navigation-blog"></div>
														</div>
													</li>
													<li class="use-yamm yamm-fw semuopen">
														<a class="icon-oil icon-upload" href="javascript:%20void(0)"><span class="icon-for"><img alt="CBD Capsules" class="sbdflexbox-overlay sbdmask-c" src=""> <img alt="CBD Capsules" class="sbdflexbox-overlay sbdmask-d" src=""></span> <span>CBD Capsules</span></a>
														<div class="dropdown-menu category-open">
															<div class="col-sm-6 col-cl-it hmmp overflow-scroll">
																<div class="col-sm-6 hmmp visible-hmmp intros">
																	<div class="grid-item-wrapper acct-menu animated wow bounceIn swing">
																		<div class="product-grid-item">
																			<div class="product-grid-image">
																				<div class="product-grid-image--centered">
																					<a href="javascript:void(0)"><img alt="CBD Capsules" class="product-pic" src=""></a>
																				</div>
																			</div>
																			<p class="list-title"><a href="javascript:void(0)">CBD Capsules</a></p>
																			<div class="tfc-product-redirect">
																				<a class="tfc_productarrow" href="/products/cbd-capsules"><img class="hup_starting" src=""> <img class="hup_hover" src=""></a>
																			</div>
																		</div>
																	</div>
																	<div class="product-menu-info">
																		<div class="visible-product-cbd media">
																			<div class="cbd-img">
																				<a href="/products/cbd-capsules"><img alt="cbd-product" src=""></a>
																			</div>
																			<div class="cbd-name">
																				<p class="list-title"><a href="/products/cbd-capsules">CBD Capsules</a></p>
																				<div class="product-item--price">
																					<span class="h1 medium--left"><span class="money"><span class="money">$19.99</span></span></span>
																				</div>
																				<div class="description">
																					<p>CBD Hemp Oil Capsules for sale by Green Roads World. Cannabidiol pills are derived from industrial hemp. Order now and get FREE Shipping on orders over $75 and discounts on select packages.</p>
																				</div>
																				<div class="flip">
																					<form action="/cart/add" class="add-to-cart-form" enctype="multipart/form-data" id="addToCartForm-29026178311" method="post" name="addToCartForm-29026178311">
																						<select class="product-variants" id="productSelect" name="id">
																							<option selected="selected" value="29026178311">
																								Bag - $19.99 USD
																							</option>
																							<option value="40200330644">
																								Bottle - $54.99 USD
																							</option>
																						</select> <button class="btn add-to-cart not-active" id="addToCart-29026178311" name="add" type="submit"><span>Add to cart</span></button> <a class="menu-more-item-btn btn" href="/products/cbd-capsules">MORE DETAILS</a> <span class="variant-quantity" id="variantQuantity-29026178311"></span>
																					</form>
																				</div>
																			</div>
																		</div>
																	</div>
																</div>
																<div class="col-sm-6 hmmp visible-hmmp">
																	<div class="grid-item-wrapper acct-menu animated wow bounceIn swing">
																		<div class="product-grid-item">
																			<div class="product-grid-image">
																				<div class="product-grid-image--centered">
																					<a href="javascript:void(0)"><img alt="CBD Capsules" class="product-pic" src=""></a>
																				</div>
																			</div>
																			<p class="list-title"><a href="javascript:void(0)">CBD Capsules Bottle</a></p>
																			<div class="tfc-product-redirect">
																				<a class="tfc_productarrow" href="/products/cbd-capsules-bottles"><img class="hup_starting" src=""> <img class="hup_hover" src=""></a>
																			</div>
																		</div>
																	</div>
																	<div class="product-menu-info">
																		<div class="visible-product-cbd media">
																			<div class="cbd-img">
																				<a href="/products/cbd-capsules-bottles"><img alt="cbd-product" src=""></a>
																			</div>
																			<div class="cbd-name">
																				<p class="list-title"><a href="/products/cbd-capsules-bottles">CBD Capsules Bottle</a></p>
																				<div class="product-item--price">
																					<span class="h1 medium--left"><span class="money"><span class="money">$54.99</span></span></span>
																				</div>
																				<div class="description">
																					<p>CBD Hemp Oil Capsules for sale by Green Roads World. Cannabidiol pills are derived from industrial hemp. Order now and get FREE Shipping on orders over $75 and discounts on select packages.</p>
																				</div>
																				<div class="flip">
																					<form action="/cart/add" class="add-to-cart-form" enctype="multipart/form-data" id="addToCartForm-40359972884" method="post" name="addToCartForm-40359972884">
																						<select class="product-variants" id="productSelect" name="id">
																							<option selected="selected" value="40359972884">
																								Bottle - $54.99 USD
																							</option>
																							<option value="40359972948">
																								Bag - $17.99 USD
																							</option>
																						</select> <button class="btn add-to-cart not-active" id="addToCart-40359972884" name="add" type="submit"><span>Add to cart</span></button> <a class="menu-more-item-btn btn" href="/products/cbd-capsules-bottles">MORE DETAILS</a> <span class="variant-quantity" id="variantQuantity-40359972884"></span>
																					</form>
																				</div>
																			</div>
																		</div>
																	</div>
																</div>
															</div>
															<div class="col-sm-6 col-cl-it navigation-blog"></div>
														</div>
													</li>
													<li class="use-yamm yamm-fw semuopen tfcmegamneu">
														<a class="icon-oil icon-upload" href="javascript:%20void(0)"><span class="icon-for"><img alt="CBD Pain Cream" class="sbdflexbox-overlay sbdmask-c" src=""> <img alt="CBD Pain Cream" class="sbdflexbox-overlay sbdmask-d" src=""></span> <span>CBD Pain Cream</span></a>
														<div class="dropdown-menu category-open">
															<div class="col-sm-6 col-cl-it hmmp overflow-scroll">
																<div class="col-sm-12 hmmp visible-hmmp intros">
																	<div class="grid-item-wrapper acct-menu animated wow bounceIn swing">
																		<div class="product-grid-item">
																			<div class="product-grid-image">
																				<div class="product-grid-image--centered">
																					<a href="javascript:void(0)"><img alt="CBD Pain Cream" class="product-pic" src=""></a>
																				</div>
																			</div>
																			<p class="list-title"><a href="javascript:void(0)">Pain Cream</a></p>
																			<div class="tfc-product-redirect">
																				<a class="tfc_productarrow" href="/products/cbd-pain-be-gone-cream"><img class="hup_starting" src=""> <img class="hup_hover" src=""></a>
																			</div>
																		</div>
																	</div>
																	<div class="product-menu-info">
																		<div class="visible-product-cbd media">
																			<div class="cbd-img">
																				<a href="/products/cbd-pain-be-gone-cream"><img alt="cbd-product" src=""></a>
																			</div>
																			<div class="cbd-name">
																				<p class="list-title"><a href="/products/cbd-pain-be-gone-cream">Pain Cream</a></p>
																				<div class="product-item--price">
																					<span class="h1 medium--left"><span class="money"><span class="money">$40.00</span></span></span>
																				</div>
																				<div class="description">
																					<p>Do you have inflammation pain in your body? Don’t worry, Green Roads Anti-inflammatory/pain relief cream can help. Order now and get FREE Shipping on orders over $75 and discounts on select packages.</p>
																				</div>
																				<div class="flip">
																					<form action="/cart/add" class="add-to-cart-form" enctype="multipart/form-data" id="addToCartForm-20147555207" method="post" name="addToCartForm-20147555207">
																						<select class="product-variants" id="productSelect" name="id">
																							<option selected="selected" value="20147555207">
																								Pain Cream - $40.00 USD
																							</option>
																						</select> <button class="btn add-to-cart not-active" id="addToCart-20147555207" name="add" type="submit"><span>Add to cart</span></button> <a class="menu-more-item-btn btn" href="/products/cbd-pain-be-gone-cream">MORE DETAILS</a> <span class="variant-quantity" id="variantQuantity-20147555207"></span>
																					</form>
																				</div>
																			</div>
																		</div>
																	</div>
																</div>
															</div>
															<div class="col-sm-6 col-cl-it navigation-blog"></div>
														</div>
													</li>
												</ul>
											</div>
										</div>
									</div>
								</li>
							</ul>
						</li>
						<li class="dropdown Track My Order">
							<a class="dropdown-toggle" href="/pages/trackmyorder">Track My Order</a>
						</li>
						<li class="dropdown use-yamm yamm-fw" id="product-menu-hupnews">
							<a class="dropdown-toggle" data-delay="200" href="/blogs/news">What Is CBD<b class="caret"></b></a>
							<div class="dropdown-menu blog-menu category-main-menu">
								<div class="span12 media review_slider clearfix">
									<div class="flex-blog-main flex-review clearfix">
										<div class="blog-menu-title review-caresoul hover13 clearfix">
											<ul>
												<li>
													<div class="grid-media-half media span12">
														<div class="home-blog-image hover13">
															<a href="/blogs/news/update-over-6k-in-new-donations-raised-for-6-year-old-battling-brain-tumor-up-to-10k-will-be-matched-by-cbd-company">
															<figure class="img">
																<img alt="Over $6K in new donations raised for our E.J. #TeamEJ" src="">
																<div class="blogs-zone">
																	<p class="blog-date"><time class="date">22 Feb</time></p>
																	<p class="comments-count"><i class="fa fa-comments-o"></i>0</p>
																</div>
															</figure></a>
														</div>
														<div class="green-post-description">
															<div class="menu-info-blog">
																<h4><a href="/blogs/news/update-over-6k-in-new-donations-raised-for-6-year-old-battling-brain-tumor-up-to-10k-will-be-matched-by-cbd-company">Over $6K in new donations raised for our E...</a></h4>
															</div>
														</div>
													</div>
												</li>
												<li>
													<div class="grid-media-half media span12">
														<div class="home-blog-image hover13">
															<a href="/blogs/news/rising-pro-boxing-star-finds-benefits-behind-using-cbd-products">
															<figure class="img">
																<img alt="Rising Pro Boxing Star Finds Benefits Behind Using CBD Products" src="">
																<div class="blogs-zone">
																	<p class="blog-date"><time class="date">09 Feb</time></p>
																	<p class="comments-count"><i class="fa fa-comments-o"></i>0</p><span class="blog-tags">Green-Roads</span>
																</div>
															</figure></a>
														</div>
														<div class="green-post-description">
															<div class="menu-info-blog">
																<h4><a href="/blogs/news/rising-pro-boxing-star-finds-benefits-behind-using-cbd-products">Rising Pro Boxing Star Finds Benefits Behi...</a></h4>
															</div>
														</div>
													</div>
												</li>
												<li>
													<div class="grid-media-half media span12">
														<div class="home-blog-image hover13">
															<a href="/blogs/news/six-year-old-ninja-warrior-battling-deadly-brain-tumor-cbd-company-to-match-donations">
															<figure class="img">
																<img alt="Six-year-old ‘ninja warrior’ battling deadly brain tumor, CBD company to match donations" src="">
																<div class="blogs-zone">
																	<p class="blog-date"><time class="date">31 Jan</time></p>
																	<p class="comments-count"><i class="fa fa-comments-o"></i>0</p><span class="blog-tags">cbd oil for brain tumor</span>
																</div>
															</figure></a>
														</div>
														<div class="green-post-description">
															<div class="menu-info-blog">
																<h4><a href="/blogs/news/six-year-old-ninja-warrior-battling-deadly-brain-tumor-cbd-company-to-match-donations">Six-year-old ‘ninja warrior’ battling dead...</a></h4>
															</div>
														</div>
													</div>
												</li>
											</ul>
											<div class="view-more blog-btn text-center">
												<a class="btn" href="/blogs/news">VIEW MORE</a>
											</div>
										</div>
									</div>
								</div>
							</div>
						</li>
						<li class="dropdown use-yamm yamm-fw" id="product-menu-hup4">
							<a class="dropdown-toggle" data-delay="200" href="/pages/contact-us">Contact <b class="caret"></b></a>
							<ul class="dropdown-menu category-main-menu contact-map learn_menu">
								<li class="green-location cbd-compare learn-menu-more hup_cnto">
									<div class="yamm-content tabs-style-iconbox">
										<div class="green-road-contact sp-map container">
											<div class="row">
												<div class="col-md-5 col-sm-12 col-xs-12">
													<div class="cell-info-detail green-day">
														<h2 class="title">Contact information</h2>
														<ul class="contact-detail green-day">
															<li class="green-day">
																<div class="addresh">
																	<a href="https://goo.gl/e4cS9Q"><i class="fa fa-home"></i>
																	<p>5150 SW 48th Way Davie, FL 33314 USA</p></a>
																</div>
															</li>
															<li class="green-day">
																<div class="cell-info">
																	<a href="tel:8635897479"><i class="fa fa-phone"></i>
																	<p>(863) 589 7479</p></a>
																</div>
															</li>
															<li class="green-day">
																<div class="email-info">
																	<i class="fa fa-envelope"></i>
																	<p class="addresh-view"><a href="mailto:support@greenroadsworld.com">support@greenroadsworld.com</a></p>
																</div>
															</li>
														</ul>
														<div class="gr_whl_btn">
															<a class="o-button width" href="https://greenroadswholesale.com/" target="_blank"><span class="o-button_label">Contact For Wholesale</span></a>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</li>
							</ul>
						</li>
					</ul>
				</div>
			</div>

```

## CSS

All required CSS is in mega-menu.css

## External Includes

This tutorial contains the following third party resources.

```
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
<link rel="stylesheet" href="mega-menu.css">
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
```
