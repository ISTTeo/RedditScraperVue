<template>
    <div style="text-align:left;margin-left: 20px; padding: 20px; border: 2px solid black; width: 90%;">
        <h4>{{post.title}}</h4> 
        <h3><router-link :to="{ name: 'post', params: { post } }">READ</router-link></h3>
        <div v-if="cleanText == null"> {{ post.title }} </div>
        <div v-if="cleanText != null && cleanText.length > 200"> {{ cleanText.substring(0,200) }} <b>. . .</b></div>
        <div v-if="cleanText != null && cleanText.length <= 200"> {{ cleanText }} </div>
    </div>
</template>

<script>
export default {
    name: "PostPreview",
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
