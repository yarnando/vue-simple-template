<template>
    <div class="modalContainer" v-if="showingContainer">
        <transition name="slideFade" mode="out-in">
            <div class="msgBox" v-if="showingModal">
                <div :class="`${modalType.type}MsgText`">
                    <span :class="`${modalType.icon} iconElement`"></span>
                    <slot></slot>
                </div>
                <button @click="clear()"> Close</button>
            </div>          
        </transition>
    </div>
</template>

<script>
export default {
    props: {
        type: String, // error/success/none
        showing: Boolean,
        msg: String
    },
    data() {
        return {
            showingContainer: false,
            showingModal: false
        };
    },
    computed: {
        modalType() {
            if(this.type == 'error') {
                return { type: 'error', icon: 'icon-cross'}
            } else if(this.type == 'success') {
                return { type: 'success', icon: 'icon-checkmark'}
            } else if(this.type == 'loading') {
                return { type: 'loading', icon: 'icon-spinner11'}
            } else {
                return { type: 'default', icon: ''}
            }
        }
    },
    methods: {
        clear() {
            (this.showingContainer = false), (this.showingModal = false);
        }
    },
    watch: {
        showing() {
            this.showingContainer = true;
            setTimeout(() => {
                this.showingModal = true;
            }, 100);
        }
    }
};
</script>

<style>
.modalContainer {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 999;
    overflow: hidden;
    background: rgba(0, 0, 0, 0.116);
    display: flex;
    justify-content: center;
    align-items: center;
}
.msgBox {
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    text-align: center;
    background: white;
    border-radius: 5px;
    padding: 20px;
    min-width: 250px;
    min-height: 150px;
    -webkit-box-shadow: 1px 1px 6px 0px rgba(204, 204, 204, 1);
    -moz-box-shadow: 1px 1px 6px 0px rgba(204, 204, 204, 1);
    box-shadow: 1px 1px 6px 0px rgba(204, 204, 204, 1);
}
.MsgText {
    font-size: 20px;
    font-weight: normal;
    display: flex;
    justify-content: space-around;
    align-items: center;    
}
.errorMsgText {
    color: red;
}
.successMsgText {
    color: rgb(77, 192, 77);
}
.iconElement {
    margin-right: 10px;
}
/* transitions */
.slideFade-enter-active,
.slideFade-leave-active {
    transition: opacity 0.5s;
    transition: all 0.7s;
}
.slideFade-enter,
.slideFade-leave-to {
    opacity: 0;
    transform: translateY(-40px);
}
.fade-enter-active,
.fade-leave-active {
    transition: opacity 2s;
}
.fade-enter,
.fade-leave-to {
    opacity: 0;
}
/* transitions */
</style>