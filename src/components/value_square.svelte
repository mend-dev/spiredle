<script lang="ts">
    import { onMount } from "svelte";

    export let value: any;
    export let matchValue: any;

    let cardStyle: string;
    let textStyle: string;

    function GetColor() {
        if (value === matchValue) {
            cardStyle = "variant-filled-success";
            textStyle = "text-emerald-500";
        } else {
            cardStyle = "variant-filled-error";
            textStyle = "text-rose-600";
        }
    }

    onMount(GetColor);
</script>

<div class={`card rounded-lg md:p-2 p-0.5 flex justify-center items-center w-full min-h-8 max-h-20 md:aspect-video aspect-[2/1] ${cardStyle}`}>
    <span class={`md:text-lg text-sm font-bold ${textStyle}`}>{value}</span>
</div>
