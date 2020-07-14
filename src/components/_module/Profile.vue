<template>
  <div class="container">
    <div class="imageProfile">
      <img src="@/assets/image/userProfile.png" alt="">
      <h1>Andini Ishmah</h1>
    </div>
    <div class="subJudul">
      <h1>General Information</h1>
    </div>
    <div>
      <div class="inpname">
        <div class="inputName">
          <label for="firstName">First Name</label>
          <input type="text" placeholder="Enter your first name" id="firstName">
        </div>
        <div class="inputName">
          <label for="lastName">Last Name</label>
          <input type="text" placeholder="Enter your last name" id="lastName">
        </div>
      </div>
      <div class="inputName">
        <label for="email">Email</label>
        <input type="email" placeholder="Enter your email" id="email">
      </div>
    </div>
    <div class="subJudul">
      <h1>Further Information</h1>
    </div>
    <div>
      <div class="inputName">
        <label for="headline">Headline</label>
        <input type="text" placeholder="A fruit from Papua" id="headline">
        <div class="count">
          <p>0/100</p>
        </div>
      </div>
      <div class="inputName">
        <label for="city">City</label>
        <input type="text" placeholder="City" id="email">
      </div>
    </div>
    <div class="about">
      <h1>About me</h1>
    </div>
    <div>
      <div class="inputName">
        <label for="bio">Bio</label>
        <textarea id="bio" cols="2" rows="4"
         placeholder="Tell us a few words about your self"></textarea>
      </div>
      <div class="inpname">
        <div class="inputName">
          <label for="website">Website Link</label>
          <input type="text" placeholder="Website Link" id="website">
        </div>
        <div class="inputName">
          <label for="facebook">Facebook</label>
          <input type="text" placeholder="Facebook" id="facebook">
        </div>
      </div>
      <button class="save">Save</button>
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
    .imageProfile{
      width: 100%;
      height: 105px;
      display: flex;
      align-items: center;
      padding: 5px 0 20px 0;
      img{
        width: 80px;
        height: 80px;
        border-radius: 24px;
        object-fit: cover;
        margin-right: 50px;
      }
    }
    .subJudul{
      width: 100%;
      padding-top: 30px;
      padding-bottom: 20px;
    }
    .about{
      padding-top: 10px;
      padding-bottom: 20px;
    }
    .inpname{
      width: 100%;
      display: flex;
      justify-content: space-between;
    }
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
  .save{
    margin-top: 20px;
    margin-bottom: 60px;
    padding: 10px 110px;
    background: #FFCD1E;
    outline: none;
    color: white;
    font-weight: bold;
    border-radius: 6px;
    border: 1px solid #FFCD1E;
  }
</style>
