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
    <div class=" thnn">
      <label for="id">Id</label>
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
        width: 120px;
        height: 44px;
      }
    }
  }
</style>
