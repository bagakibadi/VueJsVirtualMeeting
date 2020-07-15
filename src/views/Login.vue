<template>
  <div class="contain">
    <div class="navbar">
      <Navbar/>
    </div>
    <div class="container">
      <div class="boxLogin">
        <div class="boxHeader">
          <h1>Sign to your account</h1>
        </div>
        <div class="boxBody">
          <button class="google">
            <span class="logoGoogle"><img src="@/assets/image/google.png" alt=""></span>
            <span class="signGoogle">Sign in with Google</span>
          </button>
          <button class="google sso">
            <span class="logoGoogle logoSSO"><img src="@/assets/image/Vector.png" alt=""></span>
            <span class="signGoogle signSSO">Sign in with SSO</span>
          </button>
          <div class="or-line">
            <span class="line"></span>
            <span class="or">OR</span>
            <span class="line"></span>
          </div>
          <div>
            <div class="emailLogin">
              <span><img src="@/assets/image/mail.png" alt=""></span>
              <input type="email" placeholder="Email">
            </div>
            <div class="emailLogin password">
              <span><img src="@/assets/image/lock.png" alt=""></span>
              <input type="password" placeholder="Password">
            </div>
            <div class="lineBot">
              <span></span>
            </div>
            <button class="signInBut">Sign In</button>
            <div class="already">
              <p>Don't have Account? <router-link to="/signup">Register</router-link></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from '@/components/_module/Navbar.vue';

export default {
  name: 'Login',
  components: {
    Navbar,
  },
};
</script>

<style lang="scss" scoped>
  .already{
    a{
      text-decoration: none;
      color: #3A7ADF;
    }
  }
  .navbar{
    width: 100%;
    height: 60px;
  }
.contain{
  width: 100%;
  height: 100vh;
}
  .container{
    width: 100%;
    height: calc(100% - 60px);
    background: white;
    display: flex;
    align-items: center;
    justify-content: center;
    .boxLogin{
      width: 550px;
      border: 1px solid #C4C4C4;
      border-radius: 6px;
      background: #F3F8FE;
      .boxHeader{
        padding: 25px 25px;
        border-bottom: 0.5px solid #C4C4C4;
        h1{
          font-weight: bolder;
          font-size: 17px;
        }
      }
      .boxBody{
        padding: 20px 30px;
        .google{
          width: 100%;
          outline: none;
          border-radius: 6px;
          background: #3A7ADF;
          border: 1px solid blue;
          display: flex;
          box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.24);;
          .logoGoogle{
            border-top-left-radius: 6px;
            border-bottom-left-radius: 6px;
            padding: 13px;
            background: white;
            img{
              width: 18px;
            }
          }
          .signGoogle{
            width: 100%;
            height: 100%;
            padding: 13px;
            font-weight: bold;
            line-height: 20px;
            color: white;
            font-size: 14px;
            text-align: center;
          }
        }
        .sso{
          margin-top: 20px;
          background: white;
          border: 1px solid #8C8C8C;
          .logoSSO{
            border-right: solid 1px #8C8C8C;
          }
          .signSSO{
            color: black;
          }
        }
      }
      .or-line{
        margin: 24px 0;
        display: flex;
        align-items: center;
        .line{
          display: inline-block;
          width: 50%;
          border: 0.5px solid #C4C4C4;
          border-image: initial;
          box-sizing: inherit;
        }
        .or{
          margin: 0 15px;
          color: #C4C4C4;
        }
      }
    }
    .emailLogin{
      width: 100%;
      position: relative;
      span{
        position: absolute;
        padding: 12px;
      }
      input{
        color: #BABABA;
        width: 100%;
        padding: 12px 0 12px 55px;
        border: 0.5px solid #C4C4C4;
        border-radius: 6px;
        outline: none;
      }
    }
    .password{
      margin: 15px 0;
    }
    .lineBot{
      span{
        display: inline-block;
        // height: 1px;
        width: 100%;
        border: 0.5px solid #C4C4C4;
        border-image: initial;
        box-sizing: inherit;
      }
      margin-bottom: 10px;
    }
    .signInBut{
      margin-top: 10px;
      margin-bottom: 30px;
      color: white;
      font-size: 14px;
      line-height: 18px;
      font-weight: bold;
      width: 100%;
      height: 45px;
      background: #39A1FF;
      border: none;
      border-radius: 6px;
      outline: none;
      box-shadow: 0px 0px 8px 0px rgba(0,0,0,0.25);
    }
  }
  @media only screen and (max-width: 600px){
    .boxLogin{
      width: 95% !important;
    }
  }
</style>
