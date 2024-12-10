<template>
  <header>
    <div v-if="Menu">
      <div class="fixed bg-gray-500 w-full h-full z-10 opacity-95">
        <div class="flex justify-center items-center h-full">
            <div class="text-center text-3xl flex flex-col text-white justify-center text-center space-y-10 font-semibold items-center">
              <a href="#napr" class="" @click="openMenu">Детские направления</a>
              <a href="#napr" class="" @click="openMenu">Взрослые направления</a>
              <a href="#rasp" class="" @click="openMenu">Контакты</a>
            </div>
        </div>
      </div>
    </div>
    <div class="fixed z-20 w-full bg-white">
      <div class="h-[100px] shadow-xl flex justify-center items-center ">
        <div class="flex justify-between items-center w-[90%] mx-auto">
            <div class="mobail_menu"  >
              <input type="checkbox" id="burger-checkbox"  class="burger-checkbox">
              <label class="burger" @click="openMenu" for="burger-checkbox"></label>
          </div>

          <div><img src="../assets/logo.svg" class="w-[150px]" alt="logo"></div>
          <div class="space-x-3 flex mobail_text">
            <a href="#napr" class="text-md">Детские направления</a>
            <a href="#napr" class="text-md">Взрослые направления</a>
            <a href="#rasp" class="text-md">Контакты</a>
          </div>
          <div class="flex space-x-3 mobail_text">
            <a href="https://t.me/artprostranstvozemlya">
              <img src="../assets/telegram_2111813.png" class="w-[30px]" alt="TG">
            </a>
            <a href="https://wa.me/+79165187361"> <img src="../assets/whatsapp_2111774.png" class="w-[30px] invite" alt="Whatsapp"></a>
          </div>
        </div>

      </div>
    </div>
  </header>
</template>
<style scoped>
.burger-checkbox {
  position: absolute;
  visibility: hidden;
}
.burger {
  cursor: pointer;
  display: block;
  position: relative;
  border: none;
  background: transparent;
  width: 40px;
  height: 26px;
  margin: 30px auto;
}
.burger::before,
.burger::after {
  content: '';
  left: 0;
  position: absolute;
  display: block;
  width: 100%;
  height: 4px;
  border-radius: 10px;
  background: #000;
}
.burger::before {
  top: 0;
  box-shadow: 0 11px 0 #000;
  transition: box-shadow .3s .15s, top .3s .15s, transform .3s;
}
.burger::after {
  bottom: 0;
  transition: bottom .3s .15s, transform .3s;
}
.burger-checkbox:checked + .burger::before {
  top: 11px;
  transform: rotate(45deg);
  box-shadow: 0 6px 0 rgba(0,0,0,0);
  transition: box-shadow .15s, top .3s, transform .3s .15s;
}
.burger-checkbox:checked + .burger::after {
  bottom: 11px;
  transform: rotate(-45deg);
  transition: bottom .3s, transform .3s .15s;
}
.mobail_menu {
  display: none;
}
.mobail_text{
  display: flex;
}
@media  (max-width: 768px) {
  .mobail_menu {
    display: block;
  }
  .mobail_text{
    display: none;
  }
}
</style>
<script>
export default {
  name: "",
   data() {
     return {
         Menu: false,
     }
   },
  methods: {
    openMenu() {
      if(this.Menu == false) {
        this.Menu = true
      } else{
        this.Menu = false
      }

    }
  }
}
</script>