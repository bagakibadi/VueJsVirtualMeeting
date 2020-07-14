<template>
  <div class="container">
    <div class="navbar">
      <Navbar/>
    </div>
    <section>
      <div class="titleSection">
        <h2>The virtual veneu for all your events</h2>
        <p>Meeting is an online events platform where you can create engaging virtual
           events that connect people around the globe</p>
        <button>Get early access</button>
      </div>
      <div class="imageSection">
        <img src="@/assets/image/backgroundLanding.png" alt="">
      </div>
    </section>
  </div>
</template>

<script>
import Navbar from '@/components/_module/Navbar.vue';

export default {
  name: 'Landing Page',
  components: {
    Navbar,
  },
};
</script>

<style lang="scss" scoped>
  .navbar{
    width: 100%;
    height: 60px;
  }
.container{
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  section{
    width: 100%;
    height: calc(100% - 60px);
    background: #39A1FF;
    display: flex;
    align-items: center;
    border-top: 0.5px solid #ffffff;
    .titleSection{
      width: 40%;
      margin-left: 70px;
      display: flex;
      flex-direction: column;
      color: white;
      h2{
        font-size: 40px;
        line-height: 55px;
        margin-top: -140px;
      }
      p{
        margin-top: 25px;
        font-size: 18px;
        line-height: 27px;
      }
      button{
        cursor: pointer;
        top: 50px;
        position: relative;
        width: 240px;
        height: 50px;
        background: #FFCD1E;
        border: none;
        border-radius: 6px;
        color: white;
        font-size: 18px;
        outline: none;
      }
    }
    .imageSection{
      margin-right: 20px;
      img{
        width: 600px;
        height: 500px;
      }
    }
  }
}
</style>
