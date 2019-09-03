<template>
    <div class="card">
        <div v-if="withHeader" class="card__header">
            <slot name="header"></slot>
        </div>
        <div class="card__content">
            <slot></slot>
        </div>
        <div v-if="withFooter" class="card__footer">
            <slot name="footer"></slot>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        withHeader: {
            type: Boolean,
            default: false
        },
        withFooter: {
            type: Boolean,
            default: false
        }
    }
};
</script>

<style>
.card {
    margin: 7px;
    background: white;
    flex-basis: 100%;
    -webkit-box-shadow: 1px 1px 6px 0px rgba(204, 204, 204, 1);
    -moz-box-shadow: 1px 1px 6px 0px rgba(204, 204, 204, 1);
    box-shadow: 1px 1px 6px 0px rgba(204, 204, 204, 1);
}
.card__header,
.card__content {
    padding: 10px;
}
.card__header {
    background: rgba(204, 204, 204, 0.424);
    border-bottom: 1px solid rgba(204, 204, 204, 0.568);
    font-size: 16px;
    font-weight: bold;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
}
.card__footer {
    border-top: 1px solid rgba(204, 204, 204, 0.568);
    padding: 20px 10px;
}

@media (min-width: 555px) {
    .card__header {
        flex-direction: row;
        font-size: 20px;
    }
}
</style>