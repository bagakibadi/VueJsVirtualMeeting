<template>
  <nav>
    <div class="logoNav">
      <router-link to="/"><img src="@/assets/image/Exhibition.png" alt=""></router-link>
    </div>
    <div class="buttonNav">
      <div class="hide">
        <div class="btnlogin">
          <router-link to="/login"><button class="navLogin">Login</button></router-link>
        </div>
        <div class="btnsign">
          <router-link to="/signup"><button class="navSignup">Sign Up</button></router-link>
        </div>
      </div>
      <label for="burger">
        <i class="fa fa-bars" @click="burger"></i>
      </label>
      <input type="checkbox" id="burger">
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
  methods: {
    burger() {
      document.querySelector('.hide').classList.toggle('seek');
      document.querySelector('nav').classList.toggle('naver');
      document.querySelector('.blur').classList.toggle('index2');
    },
  },
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
    transition: 1s all;
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
      .hide{
        display: flex;
        transition: 1s all;
      }
      .burger{
        width: 35px;
        height: 35px;
        position: relative;
        display: none;
      }
      .fa-bars{
        display: none;
      }
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
  #burger{
    display: none;
  }
  @media only screen and (max-width: 600px) {
    .naver{
      background: #086cc4;
    }
    .btnlogin{
      display: flex;
      justify-content: center;
      align-items: center;
      position: absolute;
      top: 45px;
      width: 100%;
      background: #086cc4;
      height: 45px;
      border-bottom: 1px solid #79a3c7;
      border-top: 1px solid #79a3c7;
      a{
        margin: 0 !important;
        button{
          border: none;
          color: white;
        }
      }
    }
    .btnsign{
      width: 100%;
      background: #086cc4;
      position: absolute;
      top: 90px;
      height: 45px;
      display: flex;
      justify-content: center;
      align-items: center;
      border-bottom: 1px solid #79a3c7;
      a{
        margin: 0 !important;
        button{
          border: none;
          color: white;
        }
      }
    }
    .buttonNav{
      padding-right: 0 !important;
      .hide{
        width: 100%;
      }
    }
    .hide{
      right: -480px !important;
      position: absolute;
    }
    .seek{
      right: 0 !important;
    }
    .burger{
      display: block !important;
      margin: 0 !important;
      margin-right: 20px !important;
    }
    .fa-bars{
      font-size: 30px;
      color: white;
      position: relative;
      // display: none;
      display: block !important;
      margin-right: 15px;
    }
  }
</style>
