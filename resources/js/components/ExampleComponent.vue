<template>
    <div>
        <p>Calculator</p>
        <form @submit.prevent="cariHasil">
            <input type="number" max="10" v-model="angka1">
            <input type="text" v-model="coba">
            <input type="number" max="10" v-model="angka2">
            <input type="submit" value="cari">
            <!-- apabila fungsi tombol di masukkan menjadi @click -->
        </form>
        Hasil = {{hasil}}
    </div>
</template>

<script>
export default {
    data(){
        return{
            angka1 : 0,
            angka2 : 0,
            hasil : 0,
            coba : '+'
        }
    },
    methods: {
        cariHasil : function(){
            // this.hasil = parseInt(this.angka1) + parseInt(this.angka2);
            if (this.coba == '+') {
            this.hasil = parseInt(this.angka1) + parseInt(this.angka2);
            }else if(this.coba == '-'){
            this.hasil = parseInt(this.angka1) - parseInt(this.angka2);
            }else if(this.coba == 'x'){
            this.hasil = parseInt(this.angka1) * parseInt(this.angka2);
            }else if (this.coba == ':') {
            this.hasil = parseInt(this.angka1) / parseInt(this.angka2);
            }
        }
    }
}
</script>