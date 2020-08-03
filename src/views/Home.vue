<template>
  <div>
    <div class="navbar">
      <Navbar/>
    </div>
    <div class="container">
      <div class="side">
        <div class="sidebar">
          <div class="infoProfile" v-bind:class="{clickedd: clicked == 'info'}" @click="info">
            <div class="userProfile">
              <img src="@/assets/image/demo.png" alt="">
            </div>
            <div class="emailUser">
              <h1>Andini Ishmash</h1>
              <p>andini.ishmas@gmail.com</p>
            </div>
          </div>
          <div class="meeting">
            <h1>MEETING</h1>
          </div>
          <div class="createRoom">
            <p>Create a room to start meeting</p>
          </div>
          <div class="modalCreate" v-bind:class="{clickedd: clicked == 'create'}" @click="created">
            <img src="@/assets/image/plus.png" alt="">
            <h1>Create a Room</h1>
          </div>
          <div class="logoutt">
            <i class="fa fa-sign-out"></i>
            <router-link to="/logout">Keluar</router-link>
          </div>
        </div>
      </div>
      <div class="content">
        <div class="fixxed">
          <div class="fixedSub">
            <div class="subMenu">
              <div class="home" v-bind:class="{active: isActive == 'home'}"
               @click="home">Home</div>
              <div class="home" v-bind:class="{active: isActive == 'event'}"
               @click="event">Event</div>
              <div class="home" v-bind:class="{active: isActive == 'prof'}"
               @click="profile">Profile</div>
              <div class="home" v-bind:class="{active: isActive == 'secur'}"
               @click="security">Security</div>
            </div>
          </div>
        </div>
        <Homee v-if="code === 1"/>
        <Event v-if="code === 2"/>
        <Profile v-if="code === 3"/>
        <Security v-if="code === 4"/>
        <Created v-if="code === 5"/>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from '../components/_module/NavbarSearch.vue';
import Event from '../components/_module/Event.vue';
import Profile from '../components/_module/Profile.vue';
import Security from '../components/_module/Security.vue';
import Homee from '../components/_module/Home.vue';
import Created from '../components/_module/CreateRoom.vue';

export default {
  name: 'Home',
  data() {
    return {
      isActive: 'home',
      code: 1,
      clicked: 'info',
    };
  },
  components: {
    Navbar,
    Event,
    Profile,
    Security,
    Homee,
    Created,
  },
  methods: {
    home() {
      this.code = 1;
      this.isActive = 'home';
      this.clicked = 'info';
    },
    event() {
      this.code = 2;
      this.isActive = 'event';
      this.clicked = 'info';
    },
    profile() {
      this.code = 3;
      this.isActive = 'prof';
      this.clicked = 'info';
    },
    security() {
      this.code = 4;
      this.isActive = 'secur';
      this.clicked = 'info';
    },
    created() {
      this.code = 5;
      this.clicked = 'create';
      this.isActive = '';
    },
    info() {
      this.code = 1;
      this.isActive = 'home';
      this.clicked = 'info';
    },
  },
};
</script>

<style lang="scss" scoped>

  .navbar{
    width: 100%;
    height: 60px;
  }
  .active{
    border-bottom: 1.5px solid #39A1FF !important;
    background: whitesmoke;
  }
  .clickedd{
    background: #f3f8fe !important;
    border-left: 4px solid #39A1FF;
    height: auto;
  }
  .container{
    width: 100%;
    display: flex;
    .side{
      position: relative;
      width: 275px;
      height: calc(100vh - 60px);
      .sidebar{
        background: white;
        position: fixed;
        width: 275px;
        height: 100vh;
        display: flex;
        flex-direction: column;
        border-right: 0.5px solid #C4C4C4;
        .infoProfile{
          transition: .3s;
          border-bottom: 0.5px solid #C4C4C4;
          cursor: pointer;
          width: 100%;
          height: 70px;
          background: white;
          display: flex;
          .userProfile{
            display: flex;
            justify-content: center;
            align-items: center;
            width: 80px;
            background: none;
            img{
              border-radius: 50%;
              width: 45px;
              height: 45px;
              object-fit: cover;
            }
          }
          .emailUser{
            display: flex;
            flex-direction: column;
            justify-content: center;
            h1{
              font-size: 16px;
            }
            p{
              color: #8C8C8C;
              font-size: 12px;
            }
          }
        }
        .meeting{
          width: 100%;
          height: 70px;
          background: white;
          padding-top: 20px;
          padding-left: 25px;
        }
        .createRoom{
          width: 100%;
          height: auto;
          background: white;
          padding-top: 20px;
          padding-left: 25px;
          padding-bottom: 20px;
          p{
            font-weight: 600;
          }
        }
        .modalCreate{
          transition: .3s all;
          cursor: pointer;
          width: 100%;
          display: flex;
          align-items: center;
          padding-left: 25px;
          padding-top: 10px;
          padding-bottom: 10px;
          img{
            margin-right: 15px;
          }
        }
        .logoutt{
          cursor: pointer;
          padding: 20px 20px;
          width: 100%;
          height: auto;
          display: none;
          align-items: center;
          i{
            margin-right: 5px;
            font-size: 22px;
          }
          a{
            color: black;
            font-size: 20px;
            font-weight: normal;
            text-decoration: none;
          }
        }
      }
    }
    .content{
      background: white;
      width: calc(100% - 275px);
      height: auto;
      display: flex;
      flex-direction: column;
      position: relative;
      .fixxed{
        width: 100%;
        height: 70px;
        position: relative;
        .fixedSub{
          position: relative;
          width: 100%;
          height: 70px;
          .subMenu{
            position: fixed;
            width: calc(100% - 275px);
            height: 70px;
            background: white;
            display: flex;
            .home{
              // transition: .5s;
              width: calc(100% / 4);
              height: 100%;
              display: flex;
              align-items: center;
              justify-content: center;
              cursor: pointer;
              border-bottom: 0.5px solid #C4C4C4;
              color: #C4C4C4;
            }
            .home:hover{
              border-bottom: 1.5px solid #39A1FF;
              background: whitesmoke;
            }
            // .home:visited {
            //   border-bottom: 1.5px solid red;
            //   background: blue;
            // }
          }
        }
      }
      .cardInfo{
        width: 100%;
        height: auto;
        background: white;
        padding: 30px 35px;
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        .infoCard{
          padding: 35px 15px;
          border-radius: 6px;
          width: 220px;
          margin: 10px 0px;
          background: #F3F8FE;
          display: flex;
          flex-direction: column;
          justify-content: center;
          h1{
            font-size: 27px;
            margin-bottom: 15px;
          }
          p{
            font-size: 13px;
            color: #8C8C8C;
          }
        }
      }
      .subJudul{
        width: 100%;
        padding: 20px 35px;
        background: white;
        h1{
          font-size: 18px;
          font-weight: bold;
        }
      }
      .attended{
        width: 100%;
        padding: 10px 35px;
        margin-bottom: 50px;
        .bgattended{
          width: 100%;
          background: #fff4d0;
          padding: 15px 15px;
          p{
            font-weight: bold;
            font-size: 14px;
          }
        }
      }
    }
  }
  @media only screen and (max-width: 600px){
    .container{
      display: block !important;
    }
    .logoutt{
      display: flex !important;
    }
    .side{
      transition: 1s all;
      z-index: 1;
      left: -275px;
      height: 100vh !important;
      width: 275px !important;
      position: absolute !important;
    }
    .sede{
      left: 0px !important;
    }
    .content{
      width: 100% !important;
    }
    .subMenu{
      width: 100% !important;
    }
  }
</style>
