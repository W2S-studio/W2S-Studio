<template>
    <div class="card p-5 flex flex-col justify-between gap-8 h-full md:w-[21.25rem] w-full ">
     
        <div class="flex flex-col gap-3">
            <slot></slot>
            <h3 class="text-4xl font-bold text-start h-[90px] leading-tight">
                {{ text.title }}
            </h3>
        </div>

      
        <div class="flex flex-col gap-5  sm:h-[170px] md:h-[220px] lg:h-[170px] ">
            <div class="perk flex flex-row items-center gap-2">
                <svg class="w-5 h-5 text-black flex-shrink-0" viewBox="0 0 20 20" fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M16.707 5.293a1 1 0 0 1 0 1.414l-8 8a1 1 0 0 1-1.414 0l-4-4a1 1 0 1 1 1.414-1.414L8 12.586l7.293-7.293a1 1 0 0 1 1.414 0z" />
                </svg>
                <p class="font-medium">{{ text.perk1 }}</p>
            </div>

            <div class="perk flex flex-row items-center gap-2">
                <svg class="w-5 h-5 text-black flex-shrink-0" viewBox="0 0 20 20" fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M16.707 5.293a1 1 0 0 1 0 1.414l-8 8a1 1 0 0 1-1.414 0l-4-4a1 1 0 1 1 1.414-1.414L8 12.586l7.293-7.293a1 1 0 0 1 1.414 0z" />
                </svg>
                <p class="font-medium">{{ text.perk2 }}</p>
            </div>

            <div class="perk flex flex-row items-center gap-2">
                <svg class="w-5 h-5 text-black flex-shrink-0" viewBox="0 0 20 20" fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M16.707 5.293a1 1 0 0 1 0 1.414l-8 8a1 1 0 0 1-1.414 0l-4-4a1 1 0 1 1 1.414-1.414L8 12.586l7.293-7.293a1 1 0 0 1 1.414 0z" />
                </svg>
                <p class="font-medium">{{ text.perk3 }}</p>
            </div>
        </div>
    </div>
</template>

<script setup>
defineProps({
    text: {
        title: String,
        perk1: String,
        perk2: String,
        perk3: String
    },

})
</script>

<style lang="css" scoped>
.card {
    background-color: #F2F2F2;
    min-width: 15rem;
    border-radius: 8px;
    border: 1px solid rgba(0, 0, 0, 0.1);

}

.perk {
    display: flex;
    flex-direction: row;
    gap: .9375rem;
}
</style>