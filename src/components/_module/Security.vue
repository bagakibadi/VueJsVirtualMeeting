<template>
  <div class="container">
    <div class="subJudul">
      <h1>Change Password</h1>
    </div>
    <div>
      <div class="inpname">
        <div class="inputName">
          <label for="password">Password</label>
          <input type="password" placeholder="Password" id="password">
        </div>
        <div class="inputName">
          <label for="confirmPassword">Confirm Password</label>
          <input type="password" placeholder="Confirm Password" id="facebook">
        </div>
      </div>
      <div class="button">
        <button class="change">Change Password</button>
        <button class="cancle">Cancle</button>
      </div>
    </div>
    <div>
      <div class="subJudul">
        <h1>Delete Account</h1>
      </div>
      <div class="inputName">
        <label for="confirmDelete" class="confirm">confirm-delete-andini-ishmash</label>
        <input type="text" id="confirmDelete">
      </div>
      <button class="btnDelete">Delete Account</button>
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
    padding: 30px 40px 0 35px;
    display: flex;
    flex-direction: column;
    .subJudul{
      width: 100%;
      padding-bottom: 20px;
    }
  }
  .inpname{
    width: 100%;
    display: flex;
    justify-content: space-between;
  }
  .inputName{
    width: 490px;
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
    label{
      font-weight: bold;
      margin-bottom: 10px;
    }
    input{
      width: 450px;
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
      width: 450px;
      outline: none;
      border: 1px solid #C4C4C4;
      padding: 11px 15px;
      border-radius: 6px;
    }
  }
  .button{
    margin-top: 40px;
    margin-bottom: 40px;
    button{
      width: 230px;
      height: 45px;
      border-radius: 6px;
      border: none;
      font-weight: bold;
      outline: none;
      cursor: pointer;
    }
    .change{
      background: #FFCD1E;
      color: white;
      margin-right: 20px;
    }
    .change:hover{
      background: #ddad00;
    }
    .cancle{
      color: #39A1FF;
      background: #EFEFEF;
    }
    .cancle:hover{
      background: #eedcdc;
    }
  }
  .confirm{
    color: #C4C4C4;
    font-size: 14px;
  }
  .btnDelete{
    width: 230px;
    height: 45px;
    border-radius: 6px;
    border: none;
    font-weight: bold;
    outline: none;
    cursor: pointer;
    background: #FF461E;
    color: white;
    margin-top: 20px;
  }
  .btnDelete:hover{
    background: #e42b01;
  }
</style>
