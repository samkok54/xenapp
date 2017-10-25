<template>
  <div class="ui icon top left pointing dropdown button bose">
          <i class="wrench icon"></i>
          <div class="menu">
            <div class="header" @click="showAlert()">Display Density</div>
            <div class="item">Comfortable</div>
            <div class="item">Cozy</div>
            <div class="item">Compact</div>
            <div class="ui divider"></div>
            <div class="item">Settings</div>
             <div class="item">{{newMenus}}</div>
            <div class="item">
              <i class="dropdown icon"></i>
              <span class="text">Upload Settings</span>
              <div class="menu">
                <div class="item">
                  <i class="check icon"></i>
                  Convert Uploaded Files to PDF
                </div>
                <div class="item">
                  <i class="check icon"></i>
                  Digitize Text from Uploaded Files
                </div>
              </div>
            </div>
            <div class="item">Manage Apps</div>
            <div class="item">Keyboard Shortcuts</div>
            <div class="item">Help</div>
          </div>
        </div>
</template>

<script>
  export default {
    props: ['newMenu', 'newMenus'],
    methods: {
      showAlert () {
        this.$emit('showAlert', 'korkla')
      }
    },
    mounted () {
      $('.ui.dropdown').dropdown()
    }
  }
</script>