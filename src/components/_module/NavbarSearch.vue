<template>
  <nav>
    <div class="logoNav">
      <router-link to="/"><img src="@/assets/image/Exhibition.png" alt=""></router-link>
    </div>
    <div class="search">
      <input type="text" placeholder="Search" id="search">
      <label for="search" @click="search"><i class="fa fa-search"></i></label>
    </div>
    <div class="buttonNav">
      <div class="imgprofile">
        <img src="@/assets/image/demo.png" class="profile">
      </div>
      <!-- <img src="@/assets/image/burger.png" class="burger"> -->
      <i class="fa fa-bars" @click="burger"></i>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
  methods: {
    burger() {
      document.querySelector('.side').classList.toggle('sede');
    },
    search() {
      document.querySelector('.search').classList.toggle('search2');
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
    .search{
      z-index: 1;
      input{
        width: 330px;
        border-radius: 40px;
        border: none;
        outline: none;
        color: #C4C4C4;
        font-size: 14px;
        padding: 5px 25px;
      }
      label{
        position: relative;
        right: 30px;
        i{
          color: #C4C4C4;
        }
      }
    }
    .buttonNav{
      position: absolute;
      width: 100%;
      display: flex;
      justify-content: flex-end;
      padding-right: 50px;
      .imgprofile{
        width: 45px;
        height: 45px;
        border-radius: 100%;
        img{
          width: 100%;
          height: 100%;
          border-radius: 100%;
          object-fit: cover;
        }
      }
      .fa-bars{
        font-size: 30px;
        color: white;
        position: relative;
        display: none;
      }
    }
  }
  @media only screen and (max-width: 600px) {
    .logoNav{
      width: 200px !important;
    }
    .navLogin{
      display: none;
    }
    .navSignup{
      display: none;
    }
    .buttonNav{
      padding-right: 20px !important;
      .imgprofile{
        position: relative;
      }
    }
    .fa-bars{
      display: block !important;
      margin: 0 !important;
    }
    .search{
      input{
        display: none;
      }
    }
    .imgprofile{
      display: none;
    }
    .search{
      margin-left: 110px;
      i{
        font-size: 20px;
        color: white !important;
      }
    }
    .search2{
      margin-left: 150px;
    }
  }
</style>
