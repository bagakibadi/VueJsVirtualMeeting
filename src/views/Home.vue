<template>
  <div>
    <div class="navbar">
      <Navbar/>
    </div>
    <div class="container">
      <div class="side">
        <div class="sidebar">
          <div class="infoProfile">
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
          <div class="modalCreate" @click="created">
            <img src="@/assets/image/plus.png" alt="">
            <h1>Create a Room</h1>
          </div>
        </div>
      </div>
      <div class="content">
        <div class="fixxed">
          <div class="fixedSub">
            <div class="subMenu">
              <div class="home" @click="home">Home</div>
              <div class="home" @click="event">Event</div>
              <div class="home" @click="profile">Profile</div>
              <div class="home" @click="security">Security</div>
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
import Navbar from '../components/_module/Navbar.vue';
import Event from '../components/_module/Event.vue';
import Profile from '../components/_module/Profile.vue';
import Security from '../components/_module/Security.vue';
import Homee from '../components/_module/Home.vue';
import Created from '../components/_module/CreateRoom.vue';

export default {
  name: 'Home',
  data() {
    return {
      code: 1,
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
    },
    event() {
      this.code = 2;
    },
    profile() {
      this.code = 3;
    },
    security() {
      this.code = 4;
    },
    created() {
      this.code = 5;
    },
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
          width: 100%;
          height: 70px;
          background: #f3f8fe;
          border-left: 4px solid #39A1FF;
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
          width: 100%;
          height: 38px;
          display: flex;
          align-items: center;
          padding-left: 25px;
          padding-top: 25px;
          img{
            margin-right: 15px;
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
            .home:visited {
              border-bottom: 1.5px solid red;
              background: blue;
            }
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
          justify-self: space-between;
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
      .cardEvent{
        width: 100%;
        height: auto;
        background: white;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        padding: 10px 35px;
        .card{
          margin: 10px 0px;
          border: 1px solid #C4C4C4;
          border-radius: 6px;
          width: 310px;
          background: white;
          display: flex;
          flex-direction: column;
          .imageCard{
            width: 100%;
            height: 150px;
            img{
              border-top-left-radius: 6px;
              border-top-right-radius: 6px;
              width: 100%;
              height: 100%;
              object-fit: cover;
            }
          }
          .judulCard{
            width: 100%;
            height: auto;
            border-bottom: 1px solid #C4C4C4;
            display: flex;
            flex-direction: column;
            justify-content: center;
            padding: 40px 30px;
            h3{
              font-size: 15px;
              margin-bottom: 5px;
            }
            p{
              font-size: 14px;
              font-weight: normal;
              span{
                font-size: 14px;
                font-weight: bold;
              }
            }
          }
          .tglCard{
            width: 100%;
            height: 80px;
            padding: 0 30px;
            padding-top: 10px;
            p{
              color: #8c8c8c;
              font-size: 14px;
            }
          }
        }
      }
    }
  }
</style>
