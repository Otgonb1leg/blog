export const Footer = ()=>{
    return (
        <div class="flex flex-row container mx-auto justify-items-center grid-cols-3">
        <div class="basis-1/3"><article>
        <h3 class="text-balance ...">About</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
        <h4>Email : info@jstemplate.net</h4>
        <h5>Phone : 880 123 456 789</h5>
        </article>
</div>
  <div class="basis-1/3">
            <menu className="grid justify-center">
            <a>Home</a>
            <a>blog</a>
            <a>Contact</a>
            </menu>
  </div>
  <div class="basis-1/3 flex flex-row size-4 space-x-4 justify-center ">
  <img src="facebook.png"></img>
  <img src="twitter.png"></img>
  <img src="instagram.png"></img>
  <img src="linkedin.png"></img>
  
  
  </div>
</div>


    )
}