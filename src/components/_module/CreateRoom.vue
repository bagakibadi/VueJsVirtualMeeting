<template>
  <div class="container">
    <div class="judul">
      <h1>Create a new room</h1>
    </div>
    <div class="inputName">
      <label for="topic">Topic</label>
      <input type="text" id="topic">
    </div>
    <div class="inputName">
      <label for="description">Description</label>
      <textarea id="description" cols="2" rows="4"
        placeholder="Enter meeting description"></textarea>
    </div>
    <div class="inpname">
      <label for="time">When</label>
      <div class="infodate">
        <input type="date" id="date" value="2020-02-07">
        <input type="time" id="time" value="12:00">
      </div>
    </div>
    <div class="idmeet">
      <label for="id">Id</label>
      <div class="radiobtn">
        <div class="generate">
          <input type="radio" name="id" id="generate">
          <label for="generate">Generate Automatically</label>
        </div>
        <div class="generate">
          <input type="radio" name="id" id="personal">
          <label for="personal">Personal Meeting ID 447 529 6769</label>
        </div>
      </div>
    </div>
    <div class="passmeet">
      <label for="password">Password</label>
      <div class="checkpass">
        <div>
          <input type="checkbox" name="password" id="pass">
          <label for="pass">Require meeting password
            <img src="@/assets/image/lock.png" alt=""></label>
        </div>
        <div class="passwordmeet">
          <input type="password" name="" id="">
        </div>
      </div>
    </div>
    <div class="avatar">
      <label for="avatar">Avatar</label>
      <div class="imageBrowse">
        <input type="file" id="file">
        <label for="file" id="chsimg">Choose image</label>
        <label for="file" id="browse">Browse</label>
      </div>
    </div>
    <div class="setting">
      <label for="">Setting</label>
      <div class="checkbox">
        <input type="checkbox" id="mute">
        <label for="mute">Mute users when they join</label>
      </div>
      <div class="checkbox">
        <input type="checkbox" id="require">
        <label for="require">Require moderator approval before joining</label>
      </div>
      <div class="checkbox">
        <input type="checkbox" id="allow">
        <label for="allow">Allow any user to start this meeting</label>
      </div>
      <div class="checkbox">
        <input type="checkbox" id="moderator">
        <label for="moderator">All users join as moderators</label>
      </div>
      <div class="checkbox">
        <input type="checkbox" id="room">
        <label for="room">Automatically join me into the room</label>
      </div>
    </div>
    <div class="createRoom">
      <button>Create Room</button>
    </div>
  </div>
</template>

<script>
export default {

};
</script>

<style lang="scss" scoped>
  .container{
    width: 100%;
    padding: 30px 280px 0 280px;
    display: flex;
    flex-direction: column;
    .judul{
      width: 100%;
      display: flex;
      justify-content: center;
      margin-bottom: 50px;
      h1{
        font-size: 26px;
        font-weight: bold;
      }
    }
  }
  .inputName{
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
    label{
      font-weight: bold;
      margin-bottom: 10px;
    }
    input{
      width: 100%;
      outline: none;
      padding: 11px 15px;
      border-radius: 6px;
      border: 1px solid #C4C4C4;
    }
    .count{
      position: relative;
      width: 450px;
      p{
        position: absolute;
        right: 0px;
      }
    }
    textarea{
      width: 100%;
      height: 75px;
      outline: none;
      border: 1px solid #C4C4C4;
      padding: 11px 15px;
      border-radius: 6px;
    }
  }
  .inpname{
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
    label{
      font-weight: bold;
      margin-bottom: 10px;
    }
    .infodate{
      #date{
        padding-left: 10px;
        padding-right: 5px;
        outline: none;
        border: 1px solid #C4C4C4;
        border-radius: 6px;
        width: 150px;
        height: 44px;
        margin-right: 20px;
      }
      #time{
        padding-left: 10px;
        padding-right: 10px;
        border-radius: 6px;
        outline: none;
        border: 1px solid #C4C4C4;
        width: 130px;
        height: 44px;
      }
    }
  }
  .idmeet{
    width: 100%;
    display: flex;
    flex-direction: column;
    label{
      font-weight: bold;
    }
    .radiobtn{
      width: 100%;
      display: flex;
      padding: 20px 0px;
      .generate{
        margin-right: 10px;
        display: flex;
        input{
          margin-right: 10px;
          margin-top: 4px;
        }
        label{
          font-size: 14px;
          font-weight: normal;
        }
      }
    }
  }
  .passmeet{
    width: 100%;
    label{
      font-weight: bold;
      margin-bottom: 30px;
    }
    .checkpass{
      margin-top: 30px;
      display: flex;
      input{
        margin-right: 10px;
        margin-top: -2px;
      }
      label{
        color: #525151;
        font-size: 14px;
        margin-top: -5px;
        margin-right: 10px;
        img{
          width: 15px;
          height: 15px;
        }
      }
      .passwordmeet{
        margin-top: -16px;
        input{
          padding: 11px 15px;
          border-radius: 6px;
          border: 1px solid #C4C4C4;
          outline: none;
        }
      }
    }
  }
  .avatar{
    width: 100%;
    padding-top: 10px;
    label{
      font-weight: bold;
    }
    .imageBrowse{
      margin-top: 20px;
      margin-bottom: 20px;
      display: flex;
      input{
        display: none;
      }
      #chsimg{
        font-weight: normal;
        font-size: 14px;
        color: #C4C4C4;
        padding: 13px 115px 10px 30px;
        border-radius: 6px;
        border: 1px solid #C4C4C4;
      }
      #browse{
        margin-left: -10px;
        color: white;
        padding: 13px 20px 13px 20px;
        background: #39A1FF;
        border-top-right-radius: 6px;
        border-bottom-right-radius: 6px;
        cursor: pointer;
        font-size: 14px;
      }
    }
  }
  .setting{
    width: 100%;
    margin-bottom: 30px;
    label{
      font-weight: bold;
    }
    .checkbox{
      margin-top: 20px;
      input{
        margin-right: 10px;
      }
      label{
        font-weight: normal;
        font-size: 14px;
      }
    }
  }
  .createRoom{
    width: 100%;
    margin-bottom: 100px;
    button{
      width: 100%;
      padding: 11px 0;
      color: white;
      font-size: 14px;
      font-weight: bold;
      background: #FFCD1E;
      outline: none;
      border-radius: 6px;
      border: 1px solid #ffcd1e;
    }
  }
  @media only screen and (max-width: 600px) {
    .container{
      padding: 20px 20px 0 20px !important;
    }
  }
</style>
