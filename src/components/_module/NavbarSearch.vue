<template>
  <nav>
    <div class="searchshow">

    </div>
    <div class="logoNav">
      <router-link to="/"><img src="@/assets/image/Exhibition.png" alt=""></router-link>
    </div>
    <div class="search">
      <input type="text" placeholder="Search" class="searchinp" id="search">
      <label for="search" @click="search">
        <i class="fa fa-search"></i>
        <i class="fa fa-close"></i>
      </label>
    </div>
    <div class="buttonNav">
      <div class="navul">
        <ul>
          <li><router-link to="#">Event</router-link></li>
          <li>
            <router-link to="#">Help</router-link>
            <div class="navul1">
              <ul>
                <li>
                  <router-link to="#">Test</router-link>
                </li>
                <li>
                  <router-link to="#">Test</router-link>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
      <div class="imgprofile">
        <img src="@/assets/image/demo.png" class="profile">
        <div class="infoaccount">
          <h1>Andini Ishmas</h1>
          <p>andiniishmash@gmail.com</p>
        </div>
      </div>
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
      document.querySelector('.fa-search').classList.toggle('forhide');
      document.querySelector('.fa-close').classList.toggle('forshow');
      document.querySelector('.logoNav').classList.toggle('forhide');
      document.querySelector('.searchinp').classList.toggle('forshow');
    },
  },
};
</script>

<style lang="scss" scoped>
  .displayflex{
    display: flex !important;
  }
  .fa-close{
    display: none;
  }
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
      flex-direction: row;
      align-items: center;
      justify-content: flex-end;
      padding-right: 200px;
      .navul{
        ul{
          margin: 0;
          padding: 0;
          display: flex;
          li{
            list-style: none;
            width: 75px;
            a{
              display: block;
              margin: 10px 0;
              padding: 10px 20px;
              text-decoration: none;
              color: white;
            }
          }
          li:hover {
            background: #054883;
          }
          li:hover .navul1{
            display: block;
            background: #39A1FF;
          }
          li:hover .navul1 ul{
            display: block;
          }
          li:hover .navul1 ul li{
            width: 100px;
            text-align: left;
          }
          li:hover .navul1 ul li a{
            padding-left: 20px;
            margin: 0;
          }
        }
      }
      .imgprofile{
        width: 45px;
        height: 45px;
        border-radius: 100%;
        display: flex;
        img{
          width: 100%;
          height: 100%;
          border-radius: 100%;
          object-fit: cover;
        }
        .infoaccount{
          margin-left: 10px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          h1{
            font-size: 16px;
            color: white;
          }
          p{
            color: #e6e6e6;
            font-size: 12px;
          }
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
  .navul1{
    display: none;
    position: absolute;
    background: #39A1FF;
    ul{
      li{
        width: 75px;
      }
      li:hover{
        background: #054883;
      }
    }
  }
  .searchshow{
    display: none;
  }
  @media only screen and (max-width: 600px) {
    .logoNav{
      width: 200px !important;
      display: flex !important;
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
      z-index: 2;
      display: block !important;
      margin: 0 !important;
    }
    .search{
      display: flex;
      justify-content: center;
      align-items: center;
      input{
        margin-left: 20px;
        border-radius: 10px !important;
        height: 35px !important;
        width: 260px !important;
        display: none;
      }
      label{
        z-index: 2;
        i{
          // margin-left: 45px;
          font-size: 20px;
          color: whitesmoke !important;
        }
        .fa-search{
          margin-left: 110px;
          transition: 1s all;
        }
        .fa-close{
          margin-left: 35px;
        }
      }
    }
    .imgprofile{
      display: none;
    }
    .navul{
      display: none;
    }
    .forhide{
      display: none !important;
    }
    .forshow{
      display: block !important;
    }
  }
</style>
