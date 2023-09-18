


	
	const throttleFunction=(func, delay)=>{
	let prev = 0;
	return (...args) => {
		let now = new Date().getTime();
        
		if(now - prev> delay){
		prev = now;
		return func(...args);
		}
	}
	}
    
let rect = document.querySelector("#rect");
	rect.addEventListener("mousemove", throttleFunction((details)=>{
	let div = document.createElement("div")
    div.classList.add("throttle")
    
    div.style.left = details.clientX + "px"
    div.style.top = details.clientY + "px"

    let img = document.createElement("img")
    img.setAttribute("src","https://images.unsplash.com/photo-1636622433525-127afdf3662d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1932&q=80")
    div.appendChild(img)
    document.body.appendChild(div)
    
    gsap.to(img,{
        y:"0" ,
        ease: Power1 ,
        duration:1.2
    })
    gsap.to(img,{
        y : "100%", 
         delay:.8,
        ease: Power4
      
    })
    setTimeout(()=>{
     div.remove()
    },2000)
	}, 500));


