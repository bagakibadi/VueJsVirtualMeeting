<template>
  <div class="scroll">
    <div class="cardInfo">
      <div class="infoCard">
        <h1>12</h1>
        <p>total connections</p>
      </div>
      <div class="infoCard">
        <h1>8</h1>
        <p>events attended</p>
      </div>
      <div class="infoCard">
        <h1>4</h1>
        <p>events attending</p>
      </div>
      <div class="infoCard">
        <h1>2</h1>
        <p>events invited to</p>
      </div>
    </div>
    <div class="subJudul">
      <h1>Registered Meeting</h1>
    </div>
    <div class="cardEvent">
      <div class="card" v-for="item in 3" :key="item.id">
        <div class="imageCard">
          <img src="@/assets/image/demo.png" alt="">
        </div>
        <div class="judulCard">
          <h3>Demo Aplikasi Virtual Meeting MICE</h3>
          <p>Hosted by <b>Primakom</b></p>
        </div>
        <div class="tglCard">
          <p>Saturday, June 30 10:00 AM</p>
        </div>
      </div>
    </div>
    <div class="subJudul">
      <h1>Past Meeting</h1>
    </div>
    <div class="attended">
      <div class="bgattended">
        <p>You haven't attended any meeting yet</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {

};
</script>

<style lang="scss" scoped>
  .scroll{
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
    .cardEvent{
      width: 100%;
      height: auto;
      background: white;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      padding: 10px 35px;
      .card{
        cursor: pointer;
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
          padding: 40px 20px;
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
  @media only screen and (max-width: 600px){
    .infoCard{
      width: 100% !important;
      padding: 35px 35px !important;
    }
  }
</style>
