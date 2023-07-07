<template>
    <div style="width: 60%;">
        <div class="">
        <input type="email" class="" id="floatingInput" placeholder="Question Box">
        <label for="floatingInput">Question Box</label>
        </div>
    </div>
    <div>
        <div class="" style="width: 60%;">
            <div class="">
                <input type="email" class="" id="floatingInput" placeholder="A:" value="">
                <label for="floatingInput">A:</label>
            </div>
            <div class="">
                <input type="email" class="" id="floatingInput" placeholder="B:" value="">
                <label for="floatingInput">B:</label>
            </div>
        </div>
    </div>
    <div>
        <div class="d-inline-flex" style="width: 60%;">
            <div class="">
                <input type="email" class="" id="floatingInput" placeholder="C:" value="">
                <label for="floatingInput">C:</label>
            </div>
            <div class="">
                <input type="email" class="" id="floatingInput" placeholder="D:" value="">
                <label for="floatingInput">D:</label>
            </div>
        </div>
    </div>
    <button class="" type="button">Submit</button>
</template>

<script>
export default{
    name: 'AddQuestion'
}
</script>