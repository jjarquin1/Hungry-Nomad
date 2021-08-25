const profileCard = () =>{
    return(
        
        <div className="wrapper">
	<div className="top-icons">
		<i className="fas fa-long-arrow-alt-left"></i>
		<i className="fas fa-ellipsis-v"></i>
		<i class="far fa-heart"></i>
	</div>
	
	<div className="profile">
		<img src="https://images.unsplash.com/photo-1484186139897-d5fc6b908812?ixlib=rb-0.3.5&s=9358d797b2e1370884aa51b0ab94f706&auto=format&fit=crop&w=200&q=80%20500w" class="thumbnail">
		<div className="check"><i class="fas fa-check"></i></div>
		<h3 className="name">Beverly Little</h3>
		<p className="title">Javascript Developer</p>
		<p className="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque aliquam aliquid porro!</p>
		<button type="button" class="btn">Hire Me</button>
	</div>
	
	<div className="social-icons">
		<div className="icon">
			<a href="/"><i class="fab fa-dribbble"></i></a>
			<h4>12.8k</h4>
			<p>Followers</p>
		</div>
		
		<div className="icon">
			<a href="#"><i class="fab fa-behance"></i></a>
			<h4>12.8k</h4>
			<p>Followers</p>
		</div>
		
		<div className="icon">
			<a href="#"><i class="fab fa-twitter"></i></a>
			<h4>12.8k</h4>
			<p>Followers</p>
		</div>
	</div>
</div>
    )
}