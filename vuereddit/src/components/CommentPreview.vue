<template>
    <div style="text-align:left;margin-left: 20px; padding: 20px; border: 2px solid black; width: 90%;">
        <h4 id="titleComment">{{comment.title}}</h4> 
        <h3><router-link :to="{ name: 'comment', params: { comment } }">READ</router-link></h3>
        <div id="titleComment2" v-if="cleanText == null"> {{ comment.title }} </div>
        <div id="descComment" v-if="cleanText != null && cleanText.length > 200"> {{ cleanText.substring(0,200) }} <b>. . .</b></div>
        <div id="descComment2" v-if="cleanText != null && cleanText.length <= 200"> {{ cleanText }} </div>
    </div>
</template>

<script>
export default {
    name: "CommentPreview",
    props: ["comment"],
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
        console.log(this.$props.comment.content)
            
            this.cleanText = this.strip(this.$props.comment.content);
            document.getElementById("descComment").innerHTML = cleanText.substring(0,200);
            document.getElementById("descComment2").innerHTML = cleanText;
            document.getElementById("titleComment").innerHTML = this.$props.comment.title;
            document.getElementById("titleComment2").innerHTML = this.$props.comment.title;
    },
    beforeDestroy: function () {
                this.data.cleanText = null;
                document.getElementById("descComment").innerHTML = "";
                document.getElementById("descComment2").innerHTML = "";
                document.getElementById("titleComment").innerHTML = "";
                document.getElementById("titleComment2").innerHTML = "";

    }
}
</script>
