<template>
    <div style="text-align:left;margin-left: 20px;">
        <h4>{{post.title}}</h4>
        <div v-if="cleanText.length > 200"> {{ cleanText.substring(0,200) }} <b>. . .</b></div>
        <div v-if="cleanText.length <= 200"> {{ cleanText }} </div>
        <div v-if="cleanText == null"> {{ post.title }} </div>
        <hr>
    </div>
</template>

<script>
export default {
    name: "Post",
    props: ["post"],
    data() {
        return {
            cleanText:null
        }
    },
    methods: {
        strip(html) {
            var tmp = document.createElement("DIV");
            tmp.innerHTML = html;
            return tmp.textContent || tmp.innerText || "";
        }
    },
    created: function() {
        if(this.$props.post.content.indexOf("submitted")> 10) {
            this.cleanText = this.strip(this.$props.post.content);
        }
    }
}
</script>
