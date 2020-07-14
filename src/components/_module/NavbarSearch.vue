<template>
  <nav>
    <div class="logoNav">
      <router-link to="/"><img src="@/assets/image/Exhibition.png" alt=""></router-link>
    </div>
    <div class="buttonNav">
      <router-link to="/login"><button class="navLogin">Login</button></router-link>
      <router-link to="/signup"><button class="navSignup">Sign Up</button></router-link>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
};
</script>

<style lang="scss" scoped>
  nav{
    width: 100%;
    height: 60px;
    background: #39A1FF;
    display: flex;
    align-items: center;
    position: fixed;
    z-index: 5;
    .logoNav{
      width: 274px;
      height: 100%;
      position: relative;
      z-index: 1;
      display: flex;
      justify-content: center;
      align-items: center;
      img{
        width: 130px;
        height: 25px;
      }
    }
    .buttonNav{
      position: absolute;
      width: 100%;
      display: flex;
      justify-content: flex-end;
      padding-right: 50px;
      a{
        margin-right: 30px;
      }
      button{
        width: 85px;
        height: 35px;
        background: none;
        border-radius: 6px;
        border: 2px solid white;
        color: white;
        outline: none;
        cursor: pointer;
      }
    }
  }

</style>
