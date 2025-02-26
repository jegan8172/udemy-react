function Navbar(){
    return(
    <div class="navbar">
      <div class="navbar__s1">
        <h1 class="navbar__s1__title">Udemy</h1>
      </div>

      <div class="navbar__s2">
        <i class="fa-solid fa-magnifying-glass" style={{color: "#000205"}}></i>
        <input
          class="navbar__s2__input"
          placeholder="Search for anything here. Tech.Business.Art..."
        />
      </div>

      <div class="navbar__s3">
        <p>Trending Courses</p>
        <div class="my-learning">
          <p>My Learning</p>
          <div class="my-learning__popup">
            <p>You did not purchase anything yet.</p>
          </div>
        </div>
        <i class="fa-solid fa-cart-shopping" style={{color: "#000000"}}></i>
        <i class="fa-solid fa-bell" style={{color: "#000000"}}></i>
        <i class="fa-solid fa-user" style={{color: "#000000"}}></i>
      </div>
      <div class="navbar__s4">
        <i class="fa-solid fa-bars"></i>
      </div>
    </div>
    );
} export default Navbar