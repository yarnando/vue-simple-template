<template>
  <div id="app">
      
      <HeaderComponent title="Template" :navItems="navItems" />

      <div class="container">

        <div class="row">
            <div class="grid-item-2">
                <button @click="error = !error">Toggle error</button>
                <ModalComponent type="error" :showing="error">
                    <span>Error Message</span>
                </ModalComponent>
            </div>
            <div class="grid-item-2">
                <button @click="success = !success">Toggle success</button>
                <ModalComponent type="success" :showing="success">
                    <span>Success Message</span>
                </ModalComponent>
            </div>     
            <div class="grid-item-2">
                <button @click="simple = !simple">Simple message</button>
                <ModalComponent :showing="simple">
                    <span>Simple Message</span>
                </ModalComponent>
            </div>                   
        </div>

        <div class="row">
            <div class="grid-item-6">
                <LoadingComponent :loading="true" />
            </div>
        </div>

        <div class="row">
            <form action="">
                <div class="row">
                    <div class="grid-item-1">
                        <div class="input-box">
                            <label for="">labelzãaaaaaaaoooooooooooooooooooooooooooooooo</label>
                            <input type="text">
                        </div>
                    </div>
                    <div class="grid-item-1">
                        <div class="input-box">
                            <label for="">labelzãaaaaaaaooooo</label>
                            <select name="" id="">
                                <option value="">a</option>
                                <option value="">b</option>
                            </select>
                        </div>
                    </div>
                    <div class="grid-item-1">
                        <div class="input-box">
                            <label for="">labelzãaaaaaaaooooo</label>
                            <input type="text">
                        </div>
                    </div>
                    <div class="grid-item-1">
                        <div class="input-box">
                            <label for="">labelzãaaaaaaaooooo</label>
                            <input type="text">
                        </div>
                    </div>
                    <div class="grid-item-1">
                        <div class="input-box">
                            <label for="">labelzãaaaaaaaooooo</label>
                            <input type="text">
                        </div>
                    </div>
                    <div class="grid-item-1">
                        <div class="input-box">
                            <label for="">labelzãaaaaaaaooooo</label>
                            <input type="text">
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="grid-item-6">
                        <button>Normal</button>
                        <button class="primary">Primary</button>
                        <button class="success">Success</button>
                        <button class="danger">Danger</button>
                    </div>
                </div>
            </form>  
        </div>

        <div class="row">
            <div class="grid-item-6">
                <CardComponent withHeader withFooter>

                    <template v-slot:header>
                        <div class="row align-center">
                            <div class="grid-item-3">Header</div>
                            <div class="grid-item-3 content-end">
                                <button>Go back</button>
                            </div>
                        </div>                    
                    </template>

                    <div class="row">
                        <div class="grid-item-6">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores distinctio ab quaerat dolor, delectus doloribus architecto facilis, quisquam non suscipit pariatur fuga repellendus eveniet quasi harum error adipisci, hic placeat.
                        </div>
                    </div>

                    <template v-slot:footer>
                        <div class="row">
                            <div class="grid-item-6">
                                Footer
                            </div>
                        </div>
                    </template>                

                </CardComponent>
            </div>
        </div>        
      </div>
  </div>
</template>

<script>
import CardComponent from './components/shared/CardComponent' 
import ModalComponent from './components/shared/ModalComponent' 
import HeaderComponent from './components/shared/HeaderComponent' 
import LoadingComponent from './components/shared/LoadingComponent' 


export default {
  name: 'app',
  components: {
    CardComponent: CardComponent,
    ModalComponent: ModalComponent,
    HeaderComponent: HeaderComponent,
    LoadingComponent: LoadingComponent   
  },
  data() {
      return {
          error: false,
          success: false,
          simple: false,
          loading: false,
          navItems: [
                { type:"routerlink", link:"/test0", title: "title0" },
                { type:"routerlink", link:"/test1", title: "title1" },
                { type:"anchor", link:"/test2", title: "title2" },           
            ]
      }
  },
}
</script>

<style>

</style>
