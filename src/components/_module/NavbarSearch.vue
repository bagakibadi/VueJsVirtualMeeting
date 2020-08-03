<template>
  <nav>
    <div class="searchshow"></div>
    <div class="logoNav">
      <router-link to="/">
        <img src="@/assets/image/Exhibition.png" alt />
      </router-link>
    </div>
    <div class="search">
      <input type="text" placeholder="Search" class="searchinp" id="search" />
      <label for="search" @click="search">
        <i class="fa fa-search"></i>
        <i class="fa fa-close"></i>
      </label>
    </div>
    <div class="buttonNav">
      <div class="navul">
        <ul>
          <li>
            <router-link to="#">Event</router-link>
          </li>
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
        <img src="@/assets/image/demo.png" @click="imageclick" class="profile" />
        <div class="infoaccount" v-if="dropdown === 1">
          <img src="@/assets/image/demo.png" class="profile aas" />
          <h1>Andini Ishmas</h1>
          <p>andiniishmash@gmail.com</p>
          <!-- <button class="eedite">Edit Profile</button> -->
          <button class="outlog">Keluar</button>
        </div>
      </div>
      <i class="fa fa-bars" @click="burger"></i>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
  data() {
    return {
      dropdown: '0',
    };
  },
  methods: {
    imageclick() {
      if (this.dropdown === 0) {
        this.dropdown = 1;
      } else {
        this.dropdown = 0;
      }
    },
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
.displayflex {
  display: flex !important;
}
.fa-close {
  display: none;
}
nav {
  width: 100%;
  height: 60px;
  background: #39a1ff;
  display: flex;
  align-items: center;
  position: fixed;
  z-index: 5;
  .logoNav {
    width: 274px;
    height: 100%;
    position: relative;
    z-index: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      width: 130px;
      height: 25px;
    }
  }
  .search {
    z-index: 1;
    input {
      width: 330px;
      border-radius: 40px;
      border: none;
      outline: none;
      color: #c4c4c4;
      font-size: 14px;
      padding: 5px 25px;
    }
    label {
      position: relative;
      right: 30px;
      i {
        color: #c4c4c4;
      }
    }
  }
  .buttonNav {
    position: absolute;
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
    padding-right: 70px;
    .navul {
      ul {
        margin: 0;
        padding: 0;
        display: flex;
        li {
          list-style: none;
          width: 75px;
          a {
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
        li:hover .navul1 {
          display: block;
          background: #39a1ff;
        }
        li:hover .navul1 ul {
          display: block;
        }
        li:hover .navul1 ul li {
          width: 100px;
          text-align: left;
        }
        li:hover .navul1 ul li a {
          padding-left: 20px;
          margin: 0;
        }
      }
    }
    .imgprofile {
      position: relative;
      display: flex;
      flex-direction: column;
      cursor: pointer;
      width: 45px;
      height: auto;
      border-radius: 100%;
      display: flex;
      img {
        width: 45px;
        height: 45px;
        border-radius: 100%;
        object-fit: cover;
      }
      .infoaccount {
        cursor:auto;
        width: 400px;
        border-radius: 6px;
        box-shadow:  0px 0px 7px 0px rgba(0,0,0,0.25);
        padding: 15px 20px;
        background: white;
        top: 60px;
        left: -300px;
        position: absolute;
        display: flex;
        flex-direction: column;
        align-items: center;
        .aas{
          width: 75px;
          height: 75px;
          margin: 7px 0;
        }
        h1 {
          font-size: 18px;
          color: black;
          margin: 2px 0;
        }
        p {
          color: #5c5c5c;
          // font-size: 12px;
          margin: 2px 0;
        }
        .eedite{
          border-radius: 10px;
          outline: none;
          background: white;
          padding: 10px 0px;
          width: 200px;
          border: 1px solid #d6d3d3;
          margin: 7px 0px;
          cursor: pointer;
        }
        .outlog{
          border: 1px solid #d6d3d3;
          background: white;
          border-radius: 6px;
          padding: 10px 15px;
          margin: 7px 0px;
          outline: none;
          cursor: pointer;
        }
      }
    }
    .fa-bars {
      font-size: 30px;
      color: white;
      position: relative;
      display: none;
    }
  }
}
.navul1 {
  display: none;
  position: absolute;
  background: #39a1ff;
  ul {
    li {
      width: 75px;
    }
    li:hover {
      background: #054883;
    }
  }
}
.searchshow {
  display: none;
}
@media only screen and (max-width: 600px) {
  .logoNav {
    width: 200px !important;
    display: flex !important;
  }
  .navLogin {
    display: none;
  }
  .navSignup {
    display: none;
  }
  .buttonNav {
    padding-right: 20px !important;
    .imgprofile {
      position: relative;
    }
  }
  .fa-bars {
    z-index: 2;
    display: block !important;
    margin: 0 !important;
  }
  .search {
    display: flex;
    justify-content: center;
    align-items: center;
    input {
      margin-left: 20px;
      border-radius: 10px !important;
      height: 35px !important;
      width: 260px !important;
      display: none;
    }
    label {
      z-index: 2;
      i {
        font-size: 20px;
        color: whitesmoke !important;
      }
      .fa-search {
        margin-left: 110px;
        transition: 1s all;
      }
      .fa-close {
        margin-left: 35px;
      }
    }
  }
  .imgprofile {
    display: none;
  }
  .navul {
    display: none;
  }
  .forhide {
    display: none !important;
  }
  .forshow {
    display: block !important;
  }
  .imgprofile {
    display: none !important;
  }
}
</style>
