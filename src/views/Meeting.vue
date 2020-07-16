<template>
  <div class="container">
    <div class="navbar">
      <Navbar/>
    </div>
    <div class="content">
      <div class="video">
        <div class="player">
          <h3>Using Html5 to play m3u8 media file</h3>
            <video-player ref="videoPlayer"
                          class="vjs-custom-skin"
                          :options="playerOptions"
                          @play="onPlayerPlay($event)"
                          @ready="onPlayerReady($event)">
            </video-player>
        </div>
      </div>
      <div class="chat">
        <div class="info">
          <div class="chat infopeople" @click="chat"
          v-bind:class="{active: isActive == 'chat'}">
            <p>Chat</p>
          </div>
          <div class="people infopeople" @click="people"
          v-bind:class="{active: isActive == 'people'}">
            <p>People</p>
          </div>
        </div>
        <div class="inbox" v-if="code === 1">
          <div class="profileChat" v-for="items in 6" :key="items.id">
            <div class="imageProfile">
              <img src="@/assets/image/userProfile.png" alt="">
            </div>
            <div class="infoChat">
              <div class="infoall">
                <h1 class="name">Miko</h1>
                <h1 class="posisi">Organizer</h1>
                <p>12:75</p>
              </div>
              <div class="isiChat">
                <p>Lorem ipsum dolor sit amet consecteturLorem ipsum</p>
              </div>
            </div>
          </div>
        </div>
        <div class="ppel" v-else>
          <div class="profileinfo" v-for="itm in 9" :key="itm.id">
            <div class="imageProfile">
              <img src="@/assets/image/userProfile.png" alt="">
            </div>
            <div class="nameInfo">
              <div class="h1name">
                <h1>Ericko Lim</h1>
              </div>
              <div class="pposisi">
                <p>CEO</p>
              </div>
            </div>
          </div>
        </div>
        <div class="sendMsg" v-if="code === 1">
          <label for="camera"><i class="fa fa-camera"></i></label>
          <input type="file" id="camera">
          <input type="text" placeholder="Start typing..." id="">
          <i class="fa fa-paper-plane"></i>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import VideoPlayer from '@/components/_module/VideoPlayer.vue';
import Navbar from '@/components/_module/NavbarSearch.vue';

export default {
  name: 'Meeting',
  components: {
    VideoPlayer,
    Navbar,
  },
  data() {
    return {
      code: 1,
      isActive: 'chat',
      playerOptions: {
        autoplay: true,
        controls: true,
        controlBar: {
          timeDivider: false,
          durationDisplay: false,
        },
      },
    };
  },
  computed: {
    player() {
      return this.$refs.videoPlayer.player;
    },
  },
  methods: {
    chat() {
      this.code = 1;
      console.log(this.code);
      this.isActive = 'chat';
    },
    people() {
      this.isActive = 'people';
      console.log(this.code);
      this.code = 2;
    },
    onPlayerPlay(player) {
      console.log('player play!', player);
    },
    onPlayerReady(player) {
      console.log('player ready!', player);
      this.player.play();
    },
    playVideo(source) {
      const video = {
        withCredentials: false,
        type: 'application/x-mpegurl',
        src: source,
      };
      this.player.reset();
      // in IE11 (mode IE10) direct usage of src() when <src> is already set, generated errors,
      this.player.src(video);
      // this.player.load()
      this.player.play();
    },
  },
  mounted() {
    const src = 'https://bitdash-a.akamaihd.net/content/sintel/hls/playlist.m3u8';
    this.playVideo(src);
  },
};
</script>

<style lang="scss" scoped>
  .player {
    width: 100%;
    height: 550px;
  }
  .vjs-custom-skin {
    height: 100% !important;
  }
  .vjs-custom-skin{
    width: 100%;
    height: 550px;
  }
  .video-js{
    width: 100%;
    height: 700px;
  }
  .vjs-custom-skin /deep/ .video-js {
    height: 100%;
  }
  #camera{
    display: none;
  }
  .container{
    width: 100vw;
    height: 100vh;
    background: white;
    display: flex;
    flex-direction: column;
    .navbar{
      width: 100%;
      height: 60px;
      background: #39A1FF;
    }
    .content{
      width: 100%;
      height: calc(100vh - 60px);
      display: flex;
      .video{
        width: 70%;
        height: 100%;
        background: #000;
      }
      .chat{
        width: 30%;
        height: 100%;
        background: white;
        .info{
          width: 100%;
          height: 4rem;
          display: flex;
          .infopeople{
            cursor: pointer;
            width: 50%;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
          }
          .chat{
            background: #F1F2F6;
            border: 2px solid #ECEDF1;
          }
          .people{
            background: #F1F2F6;
            border: 2px solid #ECEDF1;
          }
          .active{
            background: white;
            border: none;
            border-top: 1px solid #ECEDF1;
          }
        }
        .inbox{
          width: 100%;
          height: calc(100% - 120px);
          background: white;
          padding: 10px;
          overflow-x: auto;
          .profileChat{
            display: flex;
            width: 100%;
            height: auto;
            background: whitesmoke;
            border-radius: 6px;
            margin-bottom: 10px;
            .imageProfile{
              display: flex;
              justify-content: center;
              padding: 10px;
              img{
                width: 45px;
                height: 45px;
                border-radius: 100%;
                object-fit: cover;
              }
            }
            .infoChat{
              display: flex;
              flex-direction: column;
              justify-content: center;
              .infoall{
                display: flex;
                padding: 5px 0;
                align-items: center;
                h1{
                  font-size: 16px;
                  margin-right: 5px;
                }
                .posisi{
                  color: blue;
                  font-size: 12px;
                }
                p{
                  color: #C4C4C4;
                  font-size: 14px;
                }
              }
              .isiChat{
                display: flex;
                width: 100%;
                p{
                  align-items: center;
                  font-size: 14px;
                  margin-bottom: 15px;
                }
              }
            }
          }
        }
        .ppel{
          height: calc(100% - 60px);
          overflow-x: auto;
          .profileinfo{
            cursor: pointer;
            width: 100%;
            height: auto;
            display: flex;
            background: white;
            border-bottom: 1px solid #C4C4C4;
            padding: 0 10px;
            .imageProfile{
              padding: 10px;
              img{
                object-fit: cover;
                width: 45px;
                height: 45px;
                border-radius: 100%;
              }
            }
            .nameInfo{
              display: flex;
              flex-direction: column;
              justify-content: center;
              .h1name{
                margin-bottom: 5px;
              }
            }
          }
          .profileinfo:hover{
            background: rgb(194, 194, 194);
          }
        }
        .sendMsg{
          width: 100%;
          height: 60px;
          display: flex;
          align-items: center;
          border: 1px solid #C4C4C4;
          .fa-camera{
            padding: 0 15px;
          }
          input{
            border: 1px solid #c4c4c4;
            border-radius: 40px;
            outline: none;
            width: 300px;
            padding: 10px 15px;
          }
          .fa-paper-plane{
            margin-left: 15px;
            font-size: 22px;
          }
        }
      }
    }
  }
  @media only screen and (max-width: 600px) {
    .video{
      display: flex;
      position: absolute !important;
      width: 100% !important;
      overflow: hidden;
      height: calc(100% - 60px) !important;
    }
    .content{
      overflow: hidden;
    }
    .chat{
      width: 100% !important;
      display: none;
      z-index: 1;
    }
    .infopeople{
      width: 50% !important;
    }
    .sendMsg{
      input{
        width: 275px !important;
      }
    }
    .fa-paper-plane{
      margin-left: 6px !important;
    }
    .postAbso{
      display: block;
    }
  }
</style>
